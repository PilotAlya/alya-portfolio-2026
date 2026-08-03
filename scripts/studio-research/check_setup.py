#!/usr/bin/env python3
"""Проверка окружения перед запуском пайплайна (Windows / macOS / Linux)."""

from __future__ import annotations

import shutil
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent
ENV_FILE = SCRIPT_DIR / ".env"
ENV_EXAMPLE = SCRIPT_DIR / ".env.example"


def ok(msg: str) -> None:
    print(f"  ✅ {msg}")


def fail(msg: str) -> None:
    print(f"  ❌ {msg}")


def warn(msg: str) -> None:
    print(f"  ⚠️  {msg}")


def main() -> int:
    print("Проверка studio-research\n")
    errors = 0

    print(f"1. Python: {sys.version.split()[0]}")
    if sys.version_info < (3, 10):
        fail("Нужен Python 3.10+. Скачай: https://www.python.org/downloads/")
        errors += 1
    else:
        ok("Версия подходит")

    print("\n2. Зависимости:")
    for pkg, import_name in [
        ("requests", "requests"),
        ("beautifulsoup4", "bs4"),
        ("python-dotenv", "dotenv"),
    ]:
        try:
            __import__(import_name)
            ok(pkg)
        except ImportError:
            fail(f"{pkg} не установлен → pip install -r requirements.txt")
            errors += 1

    print("\n3. Файлы:")
    for name in ("studios_seed.json", "research_studios.py", "enrich_studios.py", "init_tracker.py"):
        path = SCRIPT_DIR / name
        if path.exists():
            ok(name)
        else:
            fail(f"нет файла {name}")
            errors += 1

    print("\n4. Ключ OpenRouter (.env):")
    if ENV_FILE.exists():
        text = ENV_FILE.read_text(encoding="utf-8")
        if "OPENROUTER_API_KEY=sk-" in text or "OPENROUTER_API_KEY=sk_or" in text:
            ok(".env найден, ключ похож на настоящий")
        elif "xxxxxxxx" in text or "OPENROUTER_API_KEY=" not in text:
            warn(".env есть, но ключ не заполнен → enrich_studios.py не запустится")
            warn("Для теста на seed можно пропустить enrich (данные уже заполнены)")
        else:
            ok(".env найден")
    else:
        warn(".env не найден")
        if ENV_EXAMPLE.exists():
            warn(f"Создай: copy .env.example .env  (Windows) или cp .env.example .env")
        warn("Без ключа работает только research_studios.py и init_tracker.py")

    print("\n5. Папка output:")
    out = SCRIPT_DIR / "output"
    out.mkdir(exist_ok=True)
    ok(str(out))

    print("\n" + "—" * 40)
    if errors:
        print(f"Исправь {errors} проблем(ы) выше и запусти снова.")
        return 1

    print("Можно запускать. Команды для теста (3 студии Москва):")
    py = "python" if shutil.which("python") else "python3"
    print(f"""
  cd scripts/studio-research
  {py} research_studios.py --seed --city Москва --limit 3 --output output/moscow.csv
  {py} init_tracker.py --input output/moscow.csv --output output/tracker.csv
""")
    print("enrich_studios.py — только если нужен AI для новых URL (нужен ключ в .env)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
