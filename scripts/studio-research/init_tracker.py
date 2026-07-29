#!/usr/bin/env python3
"""
Создаёт трекер лидов для Google Sheets / Make из CSV со студиями.

Использование:
  python init_tracker.py --input output/moscow_enriched.csv --output output/tracker.csv
"""

from __future__ import annotations

import argparse
import csv
from datetime import date
from pathlib import Path

TRACKER_HEADERS = [
    "Название студии",
    "Ссылка",
    "Имя владельца",
    "Контакт (email / Instagram / Telegram)",
    "Город",
    "Отправлено",
    "Дата отправки",
    "Прочитано",
    "Ответил",
    "Zoom назначен",
    "Дата Zoom",
    "Дата следующего фоллоу-апа",
    "Заметки",
]

RESEARCH_NAME = "Название студии"
RESEARCH_URL = "Ссылка на сайт или соцсеть"
RESEARCH_FOUNDER = "Имя владельца (основателя)"
RESEARCH_CITY = "Город"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()

    tracker_rows = []
    with args.input.open(encoding="utf-8-sig") as f:
        for row in csv.DictReader(f):
            tracker_rows.append(
                {
                    TRACKER_HEADERS[0]: row.get(RESEARCH_NAME, ""),
                    TRACKER_HEADERS[1]: row.get(RESEARCH_URL, ""),
                    TRACKER_HEADERS[2]: row.get(RESEARCH_FOUNDER, ""),
                    TRACKER_HEADERS[3]: "",
                    TRACKER_HEADERS[4]: row.get(RESEARCH_CITY, ""),
                    TRACKER_HEADERS[5]: "нет",
                    TRACKER_HEADERS[6]: "",
                    TRACKER_HEADERS[7]: "нет",
                    TRACKER_HEADERS[8]: "нет",
                    TRACKER_HEADERS[9]: "нет",
                    TRACKER_HEADERS[10]: "",
                    TRACKER_HEADERS[11]: "",
                    TRACKER_HEADERS[12]: "",
                }
            )

    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=TRACKER_HEADERS)
        writer.writeheader()
        writer.writerows(tracker_rows)

    print(f"✅ Трекер: {len(tracker_rows)} строк → {args.output}")
    print("   Импортируй в Google Sheets → лист «Трекинг»")


if __name__ == "__main__":
    main()
