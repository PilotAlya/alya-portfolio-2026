#!/usr/bin/env python3
"""
Поиск студий дизайна интерьера → CSV для Google Sheets.

Использование:
  pip install -r requirements.txt
  python research_studios.py --city Москва --limit 5
  python research_studios.py --city Пермь --search --limit 10
  python research_studios.py --seed --output ../../output/studios.csv

Дальше: импорт CSV в Google Sheets или подключение n8n/Make (см. README.md).
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import sys
import time
from dataclasses import dataclass, asdict
from pathlib import Path
from urllib.parse import urlparse

try:
    from duckduckgo_search import DDGS
except ImportError:
    DDGS = None  # type: ignore

SCRIPT_DIR = Path(__file__).parent
SEED_FILE = SCRIPT_DIR / "studios_seed.json"

CSV_HEADERS = [
    "Название студии",
    "Ссылка на сайт или соцсеть",
    "Имя владельца (основателя)",
    "Почему вы решили, что это студия с командой, а не одиночка (1 предложение).",
    "Город",
    "Источник",
    "Статус проверки",
]

# Сигналы «скорее одиночка» в сниппете/заголовке
SOLO_SIGNALS = re.compile(
    r"фриланс|частный дизайнер|дизайнер на дому|индивидуальный дизайнер|"
    r"дизайнер интерьера [—–-] |портфолио дизайнера\b",
    re.I,
)

# Сигналы «скорее студия»
STUDIO_SIGNALS = re.compile(
    r"студия|команда|team|о нас|портфолио|под ключ|основатель|руководитель",
    re.I,
)

DEFAULT_QUERIES = [
    "студия дизайна интерьера {city} команда портфолио сайт",
    "студия дизайна интерьера {city} portfolio team",
    "дизайн интерьера {city} студия о нас команда",
]


@dataclass
class StudioRow:
    name: str
    url: str
    founder: str
    team_reason: str
    city: str = ""
    source: str = "manual"
    review_status: str = "проверено вручную"

    def to_csv_row(self) -> dict[str, str]:
        return {
            CSV_HEADERS[0]: self.name,
            CSV_HEADERS[1]: self.url,
            CSV_HEADERS[2]: self.founder,
            CSV_HEADERS[3]: self.team_reason,
            CSV_HEADERS[4]: self.city,
            CSV_HEADERS[5]: self.source,
            CSV_HEADERS[6]: self.review_status,
        }


def load_seed() -> list[StudioRow]:
    data = json.loads(SEED_FILE.read_text(encoding="utf-8"))
    return [
        StudioRow(
            name=item["name"],
            url=item["url"],
            founder=item["founder"],
            team_reason=item["team_reason"],
            city=item.get("city", ""),
            source="seed",
            review_status="проверено вручную",
        )
        for item in data
    ]


BLOCKED_DOMAINS = (
    "microsoft.com",
    "support.microsoft",
    "wikipedia.org",
    "youtube.com",
    "vk.com",
    "facebook.com",
    "instagram.com",  # часто блокирует DDG — лучше искать сайты
    "avito.ru",
    "hh.ru",
    "zen.yandex",
    "dzen.ru",
)


def normalize_url(url: str) -> str:
    parsed = urlparse(url if url.startswith("http") else f"https://{url}")
    base = f"{parsed.scheme}://{parsed.netloc}".rstrip("/")
    return base


def is_relevant_url(url: str) -> bool:
    host = urlparse(url).netloc.lower()
    return not any(block in host for block in BLOCKED_DOMAINS)


def guess_name_from_url(url: str, title: str) -> str:
    if title and len(title) < 80:
        cleaned = re.sub(r"\s*[|\-–—].*$", "", title).strip()
        if cleaned:
            return cleaned
    host = urlparse(url).netloc.replace("www.", "")
    return host.split(".")[0].capitalize()


def auto_team_reason(title: str, snippet: str, url: str) -> tuple[str, str]:
    text = f"{title} {snippet} {url}"
    if SOLO_SIGNALS.search(text):
        return (
            "⚠️ Требует ручной проверки: в описании есть признаки частного дизайнера.",
            "требует проверки",
        )
    if STUDIO_SIGNALS.search(text):
        return (
            "Авто-отбор: в сниппете/заголовке есть признаки студии (команда, портфolio, «о нас») — "
            "нужно подтвердить на сайте, что это не одиночка.",
            "требует проверки",
        )
    return (
        "⚠️ Требует ручной проверки: автоматически не удалось подтвердить наличие команды.",
        "требует проверки",
    )


def search_studios(city: str, limit: int, pause: float = 1.0) -> list[StudioRow]:
    if DDGS is None:
        print("Установите зависимости: pip install -r requirements.txt", file=sys.stderr)
        sys.exit(1)

    seen_urls: set[str] = set()
    rows: list[StudioRow] = []

    for template in DEFAULT_QUERIES:
        query = template.format(city=city)
        print(f"🔍 Поиск: {query}")
        try:
            results = DDGS().text(
                query,
                region="ru-ru",
                max_results=min(limit * 3, 25),
            )
        except Exception as exc:
            print(f"   ⚠️ Ошибка поиска: {exc}", file=sys.stderr)
            continue

        for item in results:
            url = normalize_url(item.get("href") or item.get("link") or "")
            if not url or url in seen_urls or not is_relevant_url(url):
                continue
            seen_urls.add(url)

            title = item.get("title") or ""
            snippet = item.get("body") or item.get("snippet") or ""
            reason, status = auto_team_reason(title, snippet, url)

            rows.append(
                StudioRow(
                    name=guess_name_from_url(url, title),
                    url=url,
                    founder="— уточнить на сайте",
                    team_reason=reason,
                    city=city,
                    source=f"duckduckgo: {query[:60]}...",
                    review_status=status,
                )
            )

            if len(rows) >= limit:
                return rows

        time.sleep(pause)

    return rows


def filter_by_city(rows: list[StudioRow], city: str | None) -> list[StudioRow]:
    if not city:
        return rows
    city_lower = city.lower()
    return [r for r in rows if r.city.lower() == city_lower]


def write_csv(rows: list[StudioRow], output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    with output.open("w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_HEADERS)
        writer.writeheader()
        for row in rows:
            writer.writerow(row.to_csv_row())
    print(f"✅ Записано {len(rows)} строк → {output}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Research студий дизайна → CSV")
    parser.add_argument("--city", default="Москва", help="Город для поиска")
    parser.add_argument("--limit", type=int, default=5, help="Сколько результатов")
    parser.add_argument("--search", action="store_true", help="Искать через DuckDuckGo")
    parser.add_argument("--seed", action="store_true", help="Взять проверенный seed-список")
    parser.add_argument(
        "--output",
        type=Path,
        default=SCRIPT_DIR / "output" / "studios.csv",
        help="Путь к CSV",
    )
    args = parser.parse_args()

    rows: list[StudioRow] = []

    if args.seed:
        all_seed = load_seed()
        if args.city:
            filtered = filter_by_city(all_seed, args.city)
            rows = (filtered if filtered else all_seed)[: args.limit]
        else:
            rows = all_seed[: args.limit]
    elif args.search:
        rows = search_studios(args.city, args.limit)
    else:
        # По умолчанию: seed по городу или все seed
        all_seed = load_seed()
        filtered = filter_by_city(all_seed, args.city)
        rows = (filtered or all_seed)[: args.limit]

    if not rows:
        print("Нет результатов. Попробуйте --search --city Москва", file=sys.stderr)
        sys.exit(1)

    write_csv(rows, args.output)
    print("\n📋 Следующий шаг: File → Import в Google Sheets, или n8n (см. README.md)")


if __name__ == "__main__":
    main()
