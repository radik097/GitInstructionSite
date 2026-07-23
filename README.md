# Git Static Lab

Интерактивный статический учебник по Git: workspace, staging, local repository, remote repository, ветки, push, pull, fetch, merge и проверочные тесты.

## Запуск

Установите зависимости:

```powershell
npm install
```

Запустите Vite:

```powershell
npm run dev
```

Откройте адрес, который покажет Vite. Обычно это:

```text
http://127.0.0.1:5173/
```

## Статический запуск

Сайт по-прежнему можно открыть как обычный static HTML, но основной режим разработки теперь Vite.

Для локальной проверки через простой сервер:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Затем откройте:

```text
http://127.0.0.1:8765/
```

## Публикация

Сборка для публикации:

```powershell
npm run build
```

Готовые файлы появятся в `dist/`.

Для GitHub Pages можно публиковать содержимое `dist/`.

