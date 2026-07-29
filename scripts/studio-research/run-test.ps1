# Быстрый тест пайплайна на Windows (PowerShell)
# Запуск: правый клик → Run with PowerShell, или из Cursor терминала:
#   cd scripts\studio-research
#   .\run-test.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

function Find-Python {
    foreach ($cmd in @("py", "python", "python3")) {
        if (Get-Command $cmd -ErrorAction SilentlyContinue) {
            if ($cmd -eq "py") { return @("py", "-3") }
            return @($cmd)
        }
    }
    Write-Host "❌ Python не найден. Установи с https://www.python.org/downloads/" -ForegroundColor Red
    Write-Host "   При установке отметь галочку 'Add Python to PATH'" -ForegroundColor Yellow
    exit 1
}

$py = Find-Python
Write-Host "Python: $($py -join ' ')" -ForegroundColor Cyan

Write-Host "`n→ pip install..." -ForegroundColor Cyan
& $py[0] @($py[1..($py.Length-1)] | Where-Object { $_ }) -m pip install -r requirements.txt -q

Write-Host "→ check_setup..." -ForegroundColor Cyan
& $py[0] @($py[1..($py.Length-1)] | Where-Object { $_ }) check_setup.py
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "`n→ research_studios (seed, Москва, 3)..." -ForegroundColor Cyan
& $py[0] @($py[1..($py.Length-1)] | Where-Object { $_ }) research_studios.py --seed --city "Москва" --limit 3 --output output/moscow.csv

Write-Host "`n→ init_tracker..." -ForegroundColor Cyan
& $py[0] @($py[1..($py.Length-1)] | Where-Object { $_ }) init_tracker.py --input output/moscow.csv --output output/tracker.csv

$envPath = Join-Path $PSScriptRoot ".env"
if (Test-Path $envPath) {
    $envContent = Get-Content $envPath -Raw
    if ($envContent -match "OPENROUTER_API_KEY=sk-") {
        Write-Host "`n→ enrich_studios (OpenRouter)..." -ForegroundColor Cyan
        & $py[0] @($py[1..($py.Length-1)] | Where-Object { $_ }) enrich_studios.py --input output/moscow.csv --output output/moscow_enriched.csv
    } else {
        Write-Host "`n⚠️  enrich пропущен: нет ключа в .env (для seed это нормально — данные уже заполнены)" -ForegroundColor Yellow
        Copy-Item output/moscow.csv output/moscow_enriched.csv -Force
    }
} else {
    Write-Host "`n⚠️  enrich пропущен: нет .env (для seed это нормально)" -ForegroundColor Yellow
    Copy-Item output/moscow.csv output/moscow_enriched.csv -Force
}

Write-Host "`n✅ Готово! Файлы:" -ForegroundColor Green
Write-Host "   output\moscow.csv          → лист «Кандидаты» в Google Sheets"
Write-Host "   output\tracker.csv         → лист «Трекинг»"
Write-Host "   output\moscow_enriched.csv → то же что кандидаты (с AI если был ключ)"
