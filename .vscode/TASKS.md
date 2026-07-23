# TASKS

## Replace v1 with v2 Vite Git Static Lab

Проблема — удаленный репозиторий `radik097/GitInstructionSite` содержал v1-версию статического сайта с `script.js` и `translations.js`, а нужно заменить ее на текущую интерактивную v2-версию.

Причина — v1 не соответствовала новой версии сайта: v2 использует отдельный `app.js`, Vite-команды разработки/сборки и обновленную интерактивную Git-схему.

Решение — создана локальная ветка `replace-v1-with-v2` от актуального `main`, v1-файлы заменены v2-файлами, GitHub Pages workflow переведен на Vite build.

Что сделано — заменены `index.html`, `styles.css`, `README.md`, `.gitignore`; удалены `script.js` и `translations.js`; добавлены `app.js`, `package.json`, `package-lock.json`; обновлен `.github/workflows/jekyll-gh-pages.yml` для `npm ci`, `npm run build` и публикации `dist`; выполнены `npm ci`, `npm run build`; запущен локальный Vite server `http://127.0.0.1:5174/`; проверены рендер, отсутствие console errors, сценарий `add -> commit -> push -> pull -> merge` и квиз.

Дата и время — 2026-07-23 15:18:21 +10:00
