# TASKS

## Replace v1 with v2 Vite Git Static Lab

Проблема — удаленный репозиторий `radik097/GitInstructionSite` содержал v1-версию статического сайта с `script.js` и `translations.js`, а нужно заменить ее на текущую интерактивную v2-версию.

Причина — v1 не соответствовала новой версии сайта: v2 использует отдельный `app.js`, Vite-команды разработки/сборки и обновленную интерактивную Git-схему.

Решение — создана локальная ветка `replace-v1-with-v2` от актуального `main`, v1-файлы заменены v2-файлами, GitHub Pages workflow переведен на Vite build.

Что сделано — заменены `index.html`, `styles.css`, `README.md`, `.gitignore`; удалены `script.js` и `translations.js`; добавлены `app.js`, `package.json`, `package-lock.json`; обновлен `.github/workflows/jekyll-gh-pages.yml` для `npm ci`, `npm run build` и публикации `dist`; выполнены `npm ci`, `npm run build`; запущен локальный Vite server `http://127.0.0.1:5174/`; проверены рендер, отсутствие console errors, сценарий `add -> commit -> push -> pull -> merge` и квиз.

Дата и время — 2026-07-23 15:18:21 +10:00

## Fix GitHub Pages asset paths for v2

Проблема — публичный URL `https://radik097.github.io/GitInstructionSite/` показывал v2 HTML, но CSS и JS грузились с корня `https://radik097.github.io/`, из-за чего страница отображалась без нормального стиля и интерактивности.

Причина — в `index.html` были абсолютные пути `/styles.css` и `/app.js`; для project Pages сайт размещается в подпапке `/GitInstructionSite/`.

Решение — заменены пути на относительные `./styles.css` и `./app.js`, добавлен `vite.config.js` с `base: "./"` для переносимой Vite-сборки.

Что сделано — обновлен `index.html`; добавлен `vite.config.js`; выполнен `npm run build`; проверено, что `dist/index.html` использует относительные `./assets/...`; запущен static server `http://127.0.0.1:8770/`; браузером подтверждено, что CSS загружен, JS выполнился, 12 уроков отрендерены, сценарий `add -> commit -> push -> pull -> merge` дошел до `Scenario Passed`, console errors/warnings отсутствуют.

Дата и время — 2026-07-23 15:24:06 +10:00
