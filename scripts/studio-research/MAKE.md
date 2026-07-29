# Запуск пайплайна в Make.com

Пошаговая инструкция: **Python на твоём ПК** (research + AI) → **Google Sheets** → **Make** (фоллоу-апы и напоминания).

---

## Общая схема

```
[Твой Windows + Cursor]
   research_studios.py  →  CSV
   enrich_studios.py    →  CSV с AI
   init_tracker.py      →  tracker.csv
        ↓ импорт
[Google Sheets]  ←——→  [Make.com]
   лист «Кандидаты»         напоминания
   лист «Трекинг»           фоллоу-апы
```

**Python** — поиск и AI (OpenRouter).  
**Make** — автоматизация по таблице (без кода).

---

## Шаг 0. Подготовка (один раз)

### 0.1 Аккаунты
- [Google](https://sheets.google.com) — таблица
- [Make](https://www.make.com) — бесплатный план (1000 ops/мес хватит на старт)
- [OpenRouter](https://openrouter.ai/keys) — ключ для AI (есть бесплатные модели)

### 0.2 Google Таблица

Создай таблицу **«Lead Research — Студии»** с двумя листами:

**Лист «Кандидаты»** (research):

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| Название студии | Ссылка | Имя владельца | Почему студия | Город | Источник | Статус |

**Лист «Трекинг»** (переписка):

| A | B | C | D | E | F | G | H | I | J | K | L | M |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Название | Ссылка | Владелец | Контакт | Город | Отправлено | Дата отправки | Прочитано | Ответил | Zoom | Дата Zoom | Фоллоу-ап | Заметки |

**Формула на листе «Трекинг»** — столбец N «Напомнить сегодня» (опционально):

```
=IF(AND(F2="да";I2="нет";G2<>"";TODAY()-G2>=3);"ДА";"")
```

Скопируй формулу вниз по строкам.

---

## Шаг 1. Python на Windows (research)

Открой терминал в Cursor (или PowerShell):

```powershell
cd путь\к\alya-portfolio-2026\scripts\studio-research
pip install -r requirements.txt
copy .env.example .env
```

Открой `.env`, вставь ключ:

```
OPENROUTER_API_KEY=sk-or-v1-твой-ключ
OPENROUTER_MODEL=google/gemma-2-9b-it:free
```

### 1.1 Выгрузить проверенные студии

```powershell
python research_studios.py --seed --city Москва --limit 3 --output output/moscow.csv
```

### 1.2 Обогатить через AI (основатель + 4-й столбец)

```powershell
python enrich_studios.py --input output/moscow.csv --output output/moscow_enriched.csv
```

AI зайдёт на сайт, прочитает текст и заполнит поля. **Всё равно пробегись глазами** — 30 сек на строку.

### 1.3 Создать трекер для переписки

```powershell
python init_tracker.py --input output/moscow_enriched.csv --output output/tracker.csv
```

### 1.4 Импорт в Google Sheets

1. **Кандидаты:** Файл → Импорт → Загрузить `moscow_enriched.csv` → лист «Кандидаты»
2. **Трекинг:** Файл → Импорт → Загрузить `tracker.csv` → лист «Трекинг»

---

## Шаг 2. Make — сценарий «Напоминание о фоллоу-апе»

Это главный сценарий для работы по вакансии (отправлено / прочитано / ответил).

### 2.1 Создай сценарий

1. Зайди на [make.com](https://www.make.com) → **Create a new scenario**
2. Название: `Lead Research — Follow-up reminder`

### 2.2 Модуль 1: Расписание

- **Schedule**
- Run scenario: **Every day**
- Time: **10:00** (подстрой под себя)
- Timezone: **Europe/Moscow**

### 2.3 Модуль 2: Google Sheets — Search Rows

- Подключи Google аккаунт (Connect)
- **Spreadsheet:** Lead Research — Студии
- **Sheet:** Трекинг
- **Filter** (Table contains):
  - Столбец **N** (Напомнить сегодня) **Equal to** `ДА`  
  *(или фильтруй вручную: Отправлено=да, Ответил=нет)*

### 2.4 Модуль 3: Iterator

- **Flow control → Iterator**
- Array: `Google Sheets` → `Rows`

### 2.5 Модуль 4: Уведомление себе

Выбери один вариант:

**Вариант A — Email (Gmail):**
- **Gmail → Send an email**
- To: твой email
- Subject: `Фоллоу-ап: {{1.`Название студии`}}`
- Content:
  ```
  Пора отправить напоминание:
  Студия: {{1.`Название студии`}}
  Ссылка: {{1.`Ссылка`}}
  Контакт: {{1.`Контакт (email / Instagram / Telegram)`}}
  Первое касание: {{1.`Дата отправки`}}
  ```

**Вариант B — Telegram (если подключишь бота):**
- **Telegram Bot → Send a message**
- Chat ID: твой
- Text: то же самое

### 2.6 Модуль 5: Обновить строку (чтобы не дублировать)

- **Google Sheets → Update a row**
- Row number: из итератора
- Столбец **L** (Дата следующего фоллоу-апа): `{{formatDate(addDays(now; 3); "YYYY-MM-DD")}}`
- Столбец **M** (Заметки): append `Напоминание Make {{now}}`

### 2.7 Сохрани и включи

- **Save** → переключатель **ON**
- **Run once** — проверь на тестовой строке (поставь «ДА» в столбце N)

---

## Шаг 3. Make — сценарий «Новая строка в Трекинг» (опционально)

Когда вручную добавляешь студию в «Трекинг» — Make шлёт себе «новый лид».

1. **Google Sheets → Watch New Rows** (лист «Трекинг»)
2. **Gmail → Send email:** «Новый лид: {{Название}}»
3. ON

---

## Шаг 4. Как работать каждый день (2–3 часа)

| Действие | Где | Авто? |
|----------|-----|-------|
| Найти 5–10 студий | Python `--seed` / ручной research | полуавто |
| AI-обогащение | `enrich_studios.py` | ✅ |
| Проверить глазами | Google Sheets «Кандидаты» | руками |
| Перенести в «Трекинг» | copy или `init_tracker.py` | полуавто |
| Первое касание по скрипту | Instagram / email вручную | руками |
| Поставить «Отправлено=да», дату | Google Sheets | руками |
| Фоллоу-ап через 3 дня | **Make** напомнит | ✅ |
| Zoom в календарь | вручную + Calendly | руками |

---

## Шаг 5. Полностью в Make без Python (альтернатива)

Если не хочешь запускать Python — один сценарий в Make:

1. **Manual trigger** (кнопка Run)
2. **HTTP → Make a request** — SerpAPI:
   - URL: `https://serpapi.com/search.json`
   - Query: `q=студия дизайна интерьера Москва команда`, `api_key=...`
3. **Iterator** — organic_results
4. **HTTP** — GET link (скачать страницу)
5. **OpenAI** (или **HTTP OpenRouter**):
   - Prompt: «Это студия с командой? JSON: name, founder, reason»
6. **Router** — if is_studio
7. **Google Sheets → Add a row**

Минус: SerpAPI платный (~$50/5000 запросов). Python + OpenRouter дешевле.

---

## Частые ошибки

| Проблема | Решение |
|----------|---------|
| `python` не найден | Используй `python3` или установи Python с python.org |
| OpenRouter 401 | Проверь ключ в `.env` |
| Make не видит строки | Столбец «Напомнить» = `ДА` (кириллица) |
| AI галлюцинирует основателя | Всегда проверяй на сайте вкладку «О нас» |
| DDG search мусор | Используй `--seed` или SerpAPI в Make |

---

## Команды одной строкой (шпаргалка)

```powershell
cd scripts\studio-research
pip install -r requirements.txt
python research_studios.py --seed --city Москва --limit 3 --output output/moscow.csv
python enrich_studios.py --input output/moscow.csv --output output/moscow_enriched.csv
python init_tracker.py --input output/moscow_enriched.csv --output output/tracker.csv
```

Потом импорт обоих CSV в Google Sheets → включи Make-сценарий.

---

## Связь с вакансией «Архитектор»

| Задача вакансии | Инструмент |
|-----------------|------------|
| Research студий | `research_studios.py` + AI |
| Google таблица | Sheets + `init_tracker.py` |
| Отправлено / прочитано / ответил | лист «Трекинг» |
| Фоллоу-ап | **Make** по расписанию |
| Zoom | вручную + Calendly (можно 2-й Make-сценарий позже) |
