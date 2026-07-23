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

## Redesign diagram UX into chapter-based Git course

Проблема — диаграмма Git выглядела криво: стрелки и элементы могли визуально накладываться друг на друга, remote-зона обрезалась, а уроки были плоским списком без настоящего разделения на главы.

Причина — предыдущий экран использовал плотную схему с абсолютными/полуабсолютными направлениями и большим количеством элементов в одной зоне, из-за чего layout плохо масштабировался на разных ширинах.

Решение — интерфейс перестроен как учебная рабочая область с отдельными главами, фиксированной сеткой зон Git и отдельными элементами движения между Workspace, Staging, Local Repository и Remote Repository.

Что сделано — заменены `index.html`, `app.js`, `styles.css`; добавлены 6 учебных глав с шагами, практическими командами, тестами и заметками; диаграмма переведена на CSS Grid без наложения карточек и стрелок; добавлена интерактивность кликов по стрелкам; выполнен `npm run build`; production `dist` проверен браузером на desktop 1440x900 и mobile 390x844: 6 глав, 4 зоны, 3 стрелки, cardOverlap=0, arrowCardOverlap=0, shellOverlap=0, bodyOverflowX=0, ошибок консоли нет, все 6 глав проходят.

Дата и время — 2026-07-23 15:48:30 +10:00

## Make English the default language and add gated assessments

Проблема — сайт оставался частично русскоязычным, первая страница сразу выглядела как учебная глава без вводного описания, а следующие главы не были жестко заблокированы результатами тестов.

Причина — предыдущая версия курса показывала главы как навигацию без строгого assessment gate и использовала один общий quiz/practice блок без проверки терминальных команд, времени и ошибок.

Решение — сайт переведен на English-first интерфейс, добавлена вводная Overview-страница, каждая глава получила двухэтапный assessment: Knowledge Check и Terminal Practice. Следующая глава открывается только при 100% за Knowledge Check и 100% за Terminal Practice; paste в терминальном вводе заблокирован и считается ошибкой.

Что сделано — обновлены `index.html`, `app.js`, `styles.css`; добавлены locked states для глав, requirements, success score, terminal command input, paste/drop/beforeinput блокировка, учет времени, ошибок и процента успешности; выполнен `npm run build`; production `dist` проверен браузером: `html lang=en`, Overview содержит английское описание сайта, 5 последующих глав заблокированы на старте, Knowledge Check 100% открывает Terminal Practice, paste дает ошибку и Total 50%/Gate Blocked, ручной ввод команд без ошибок дает Knowledge 100%/Terminal 100%/Total 100% и открывает Chapter 2, console errors/warnings отсутствуют, bodyOverflowX=0.

Дата и время — 2026-07-23 17:22:46 +10:00

## Add focus mode, hidden repository map, and retry gate state

Проблема — экран все еще держал Course Map и Assessment как постоянные боковые колонки, из-за чего текущая задача не была в центре внимания; Repository Map нельзя было скрыть, а при недостаточном score Retry-состояние было недостаточно явным.

Причина — layout оставался трехколоночным, а вспомогательные блоки были частью постоянного экрана вместо пользовательских/системных панелей.

Решение — интерфейс переведен в focus-mode: центральная рабочая область стала основной, Course Map и Assessment открываются как выезжающие панели по кнопкам, Repository Map скрывается/показывается отдельной кнопкой, системные состояния показываются toast-уведомлениями, при score <=50 появляется явный центральный Retry-state.

Что сделано — обновлены `index.html`, `app.js`, `styles.css`; добавлены кнопки `Course`, `Assess`, `Hide/Show Map`; Course Map и Assessment переведены в overlay panels; Knowledge Check и Terminal Practice оставлены в центре; добавлен toast; Repository Map получает класс `map-hidden` и скрывает содержимое; Retry показывается при недостаточном результате; выполнен `npm run build`; production `dist` проверен браузером: панели открываются/закрываются, map hide меняет кнопку на `Show Map`, после неверного Knowledge Check отображается `Retry` и сообщение `Current success is 0%. Scores at 50% or below block progression. Use Retry.`, при 100% Chapter 2 открывается, console errors/warnings отсутствуют, bodyOverflowX=0.

Дата и время — 2026-07-23 17:39:25 +10:00
