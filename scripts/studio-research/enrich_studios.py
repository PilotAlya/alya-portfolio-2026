#!/usr/bin/env python3
"""
Обогащение CSV через OpenRouter: имя основателя + обоснование «студия vs одиночка».

Использование:
  cp .env.example .env   # вставь OPENROUTER_API_KEY
  pip install -r requirements.txt
  python enrich_studios.py --input output/moscow_test.csv --output output/moscow_enriched.csv
"""

from __future__ import annotations

import argparse
import csv
import json
import os
import re
import sys
import time
from pathlib import Path
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv

SCRIPT_DIR = Path(__file__).parent
load_dotenv(SCRIPT_DIR / ".env")

OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
DEFAULT_MODEL = os.getenv("OPENROUTER_MODEL", "google/gemma-2-9b-it:free")

RESEARCH_HEADERS = [
    "Название студии",
    "Ссылка на сайт или соцсеть",
    "Имя владельца (основателя)",
    "Почему вы решили, что это студия с командой, а не одиночка (1 предложение).",
    "Город",
    "Источник",
    "Статус проверки",
]

SYSTEM_PROMPT = """Ты аналитик B2B research. По тексту страницы студии дизайна интерьера определи:
- это студия с командой или одиночный фрилансер
- название студии
- имя основателя/руководителя (если есть)
- одно предложение на русском: почему это студия, а не одиночка

Ответь ТОЛЬКО валидным JSON без markdown:
{
  "is_studio": true,
  "name": "название",
  "founder": "имя или — не найдено",
  "team_reason": "одно предложение",
  "confidence": "high|medium|low"
}"""


def fetch_page_text(url: str, max_chars: int = 12000) -> str:
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept-Language": "ru-RU,ru;q=0.9",
    }
    resp = requests.get(url, headers=headers, timeout=20)
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, "html.parser")
    for tag in soup(["script", "style", "noscript"]):
        tag.decompose()
    text = re.sub(r"\s+", " ", soup.get_text(separator=" ")).strip()
    return text[:max_chars]


def ask_openrouter(api_key: str, url: str, page_text: str, model: str) -> dict:
    user_content = f"""URL: {url}

Текст страницы (фрагмент):
{page_text[:8000]}
"""
    payload = {
        "model": model,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_content},
        ],
        "temperature": 0.2,
    }
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://portfolio-resume-alya-akbarova.vercel.app/",
        "X-Title": "Studio Research Pipeline",
    }
    resp = requests.post(OPENROUTER_URL, headers=headers, json=payload, timeout=60)
    resp.raise_for_status()
    content = resp.json()["choices"][0]["message"]["content"].strip()
    # Убрать ```json обёртку если модель добавила
    content = re.sub(r"^```(?:json)?\s*", "", content)
    content = re.sub(r"\s*```$", "", content)
    return json.loads(content)


def needs_enrichment(row: dict[str, str]) -> bool:
    founder = row.get(RESEARCH_HEADERS[2], "")
    status = row.get(RESEARCH_HEADERS[6], "")
    return (
        "уточнить" in founder.lower()
        or status == "требует проверки"
        or founder.strip() in ("", "—", "-")
    )


def enrich_row(row: dict[str, str], api_key: str, model: str) -> dict[str, str]:
    url = row[RESEARCH_HEADERS[1]]
    print(f"  🤖 AI: {url}")
    try:
        page_text = fetch_page_text(url)
        data = ask_openrouter(api_key, url, page_text, model)
    except Exception as exc:
        print(f"     ⚠️ {exc}")
        row[RESEARCH_HEADERS[6]] = f"ошибка AI: {exc}"
        return row

    if data.get("is_studio"):
        if data.get("name"):
            row[RESEARCH_HEADERS[0]] = data["name"]
        row[RESEARCH_HEADERS[2]] = data.get("founder") or "— не найдено на сайте"
        row[RESEARCH_HEADERS[3]] = data.get("team_reason") or row[RESEARCH_HEADERS[3]]
        conf = data.get("confidence", "medium")
        row[RESEARCH_HEADERS[6]] = f"AI ({conf}) — проверь вручную"
    else:
        row[RESEARCH_HEADERS[6]] = "AI: похоже на одиночку — пропустить"

    return row


def main() -> None:
    parser = argparse.ArgumentParser(description="OpenRouter enrichment для CSV")
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--all", action="store_true", help="Обогатить все строки, не только «требует проверки»")
    parser.add_argument("--pause", type=float, default=2.0, help="Пауза между запросами (сек)")
    args = parser.parse_args()

    api_key = os.getenv("OPENROUTER_API_KEY")
    if not api_key:
        print("❌ Добавь OPENROUTER_API_KEY в scripts/studio-research/.env", file=sys.stderr)
        print("   Ключ: https://openrouter.ai/keys", file=sys.stderr)
        sys.exit(1)

    rows: list[dict[str, str]] = []
    with args.input.open(encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames or RESEARCH_HEADERS
        for row in reader:
            rows.append(row)

    print(f"📄 Строк: {len(rows)}")
    enriched = 0
    for i, row in enumerate(rows):
        if not args.all and not needs_enrichment(row):
            continue
        print(f"[{i + 1}/{len(rows)}] {row.get(RESEARCH_HEADERS[0], '?')}")
        rows[i] = enrich_row(row, api_key, DEFAULT_MODEL)
        enriched += 1
        time.sleep(args.pause)

    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    print(f"✅ Обогащено {enriched} строк → {args.output}")


if __name__ == "__main__":
    main()
