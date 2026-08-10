# Новый Vercel для портфолио 2026

Старый деплой (`portfolio-resume-alya-akbarova.vercel.app`) **не трогаем** — он уже уходил в отклики.

Новый лендинг (этот репозиторий `alya-portfolio-2026`) деплоим **отдельным проектом** на Vercel.

## Шаги

1. [vercel.com](https://vercel.com) → **Add New Project** → Import `PilotAlya/alya-portfolio-2026`
2. Branch: `main` (после мержа финальной ветки)
3. Framework: Vite / Nitro — как подхватит из репо
4. Environment Variables:
   - `VITE_SITE_URL` = `https://<твой-новый-проект>.vercel.app`  
     (без слэша в конце или со слэшем — оба ок)
5. Deploy

## Имя проекта (пример)

- `albina-akbarova-ai-2026`
- или `pilot-ali-portfolio-2026`

## После деплоя

1. Открыть live URL, проверить `#nova`, `#case-studios`, `#contact`
2. Обновить ссылку в cover letters / hh: новый URL
3. PDF резюме: в HTML ещё могут быть старые абсолютные ссылки — при необходимости прогнать replace на новый домен и `npm run generate-pdf`
4. GitHub card «Live» подтянется из `SITE_URL` после rebuild с `VITE_SITE_URL`

## Что не менять

- Старый Vercel-проект и его URL
- Live-демо кейсов (NOVA Light, CRM, B2B dashboard) — отдельные проекты
