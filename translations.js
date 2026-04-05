(() => {
const translations = (window.translations = {});

translations.en = {
  languageLabel: "English",
  hero: {
    eyebrow: "Interactive guide",
    title: "GitHub without panic",
    description:
      "Learn core Git and GitHub terms, compare GUI and CLI workflows, and practice with short scenarios.",
    primaryAction: "Open glossary",
    secondaryAction: "Watch resources",
    console: [
      "$ git clone https://github.com/username/project.git",
      "$ git switch -c feature/login-page",
      "$ git add .",
      '$ git commit -m "Add login page"',
      "$ git push -u origin feature/login-page",
      "",
      "> Then open a Pull Request on GitHub for review.",
    ],
    stats: [
      { value: "4", label: "interface languages" },
      { value: "2", label: "workflow modes: GUI and CLI" },
      { value: "1", label: "learning route from terms to PR" },
    ],
  },
  overview: {
    eyebrow: "What you get",
    title: "From terms to real workflow",
    description:
      "Start with core concepts, then walk through practical flows for everyday GitHub work.",
    pillars: [
      {
        icon: "01",
        title: "Simple glossary",
        description: "Clear definitions for commit, branch, merge, pull request, and more.",
      },
      {
        icon: "02",
        title: "GUI and CLI",
        description: "Compare button-based and terminal-based workflows side by side.",
      },
      {
        icon: "03",
        title: "Practice scenarios",
        description: "Repeat common tasks: start project, update code, and create PR.",
      },
    ],
  },
  glossary: {
    eyebrow: "Glossary",
    title: "Core Git and GitHub terms",
    description:
      "Open cards one by one and use them as a quick reference while you work.",
    items: [
      {
        term: "Repository",
        hint: "Project storage",
        body: "A repository stores files, commits, branches, and project history.",
      },
      {
        term: "Clone",
        hint: "Create local copy",
        body: "Clone downloads a remote repository to your local machine.",
      },
      {
        term: "Commit",
        hint: "Saved snapshot",
        body: "A commit saves selected changes with a message that explains the update.",
      },
      {
        term: "Push",
        hint: "Send changes",
        body: "Push uploads local commits to the remote repository.",
      },
      {
        term: "Pull",
        hint: "Sync changes",
        body: "Pull fetches and merges changes from remote into your local branch.",
      },
      {
        term: "Branch",
        hint: "Separate line of work",
        body: "A branch lets you work on features without breaking main.",
      },
      {
        term: "Merge",
        hint: "Combine branches",
        body: "Merge combines changes from one branch into another.",
      },
      {
        term: "Pull Request",
        hint: "Review and merge",
        body: "A PR is where teammates review changes before they are merged.",
      },
    ],
  },
  workflow: {
    eyebrow: "Workflow",
    title: "When to use GUI or CLI",
    description: "Both modes use Git. Choose the style that fits your task.",
    sidebarTitle: "Why this sequence works",
    whenTitle: "When this mode is useful",
    modes: {
      gui: {
        label: "GUI",
        title: "GitHub Desktop and web UI",
        description: "Best for visual diff review and beginner-friendly flow.",
        when: "Use GUI when you want visual feedback and low command overhead.",
        reasons: [
          "Easy file-by-file diff review.",
          "Lower risk of command syntax mistakes.",
          "Natural handoff to PR review in browser.",
        ],
        steps: [
          {
            title: "Create or clone repository",
            description: "Open project with Create New Repository or Clone Repository.",
          },
          {
            title: "Edit files",
            description: "Make changes in your editor and review detected diffs.",
          },
          {
            title: "Commit changes",
            description: "Write a clear commit message and save the snapshot.",
          },
          {
            title: "Push to GitHub",
            description: "Publish local commits to remote repository.",
          },
          {
            title: "Open Pull Request",
            description: "Create PR for discussion and merge.",
          },
        ],
      },
      cli: {
        label: "CLI",
        title: "Terminal workflow",
        description: "Best for speed, automation, and full control.",
        when: "Use CLI when you need scripting, fast repetition, or deep Git control.",
        reasons: [
          "Works in local, remote, and CI environments.",
          "Easy to automate with scripts.",
          "Clear stage separation: add, commit, push, pull.",
        ],
        steps: [
          {
            title: "Get project",
            description: "Run git clone, or git init for a new local repository.",
          },
          {
            title: "Create feature branch",
            description: "Use git switch -c feature/name before coding.",
          },
          {
            title: "Stage files",
            description: "Use git add to include required changes only.",
          },
          {
            title: "Commit",
            description: "Save logical changes with git commit -m.",
          },
          {
            title: "Push and open PR",
            description: "Push branch and create Pull Request on GitHub.",
          },
        ],
      },
    },
  },
  docs: {
    eyebrow: "Docs",
    title: "Interactive GitHub basics",
    description: "Pick a topic and reveal steps progressively.",
    currentLabel: "Current topic",
    nextStep: "Show next step",
    restart: "Restart topic",
    showAll: "Show all steps",
    showLess: "Collapse to 1 step",
    counter: "Opened steps: {current} of {total}",
    topics: [
      {
        id: "what",
        title: "What GitHub is",
        teaser: "Code hosting and collaboration platform",
        summary: "GitHub combines code, history, reviews, and automation in one place.",
        points: [
          "Repositories store files and history.",
          "Issues and PRs keep collaboration structured.",
          "Actions automate checks and deployment.",
        ],
        steps: [
          {
            title: "1. Create account",
            description: "Set up your profile and project basics.",
          },
          {
            title: "2. Learn repository tabs",
            description: "Code, Issues, Pull Requests, Actions, and Settings.",
          },
          {
            title: "3. Work with commits",
            description: "Use small, meaningful commits.",
          },
          {
            title: "4. Use Pull Requests",
            description: "Review changes before merge.",
          },
        ],
      },
      {
        id: "flow",
        title: "Core workflow",
        teaser: "From edit to merge",
        summary: "A repeatable sequence makes teamwork safer and faster.",
        points: [
          "Sync first.",
          "Work in feature branch.",
          "Review before merge.",
        ],
        steps: [
          {
            title: "1. Pull latest",
            description: "Start from current project state.",
          },
          {
            title: "2. Make changes",
            description: "Edit files in your branch.",
          },
          {
            title: "3. Commit clearly",
            description: "One logical update per commit.",
          },
          {
            title: "4. Push and PR",
            description: "Publish and request review.",
          },
        ],
      },
      {
        id: "practice",
        title: "Daily habits",
        teaser: "Small rules, big payoff",
        summary: "Consistency in naming, review size, and checks improves quality.",
        points: [
          "Keep PRs small.",
          "Use clear branch names.",
          "Run self-check before PR.",
        ],
        steps: [
          {
            title: "1. Define scope",
            description: "Write a short task objective.",
          },
          {
            title: "2. Commit often",
            description: "Capture progress in clear chunks.",
          },
          {
            title: "3. Self-review",
            description: "Check diff and tests before PR.",
          },
          {
            title: "4. Learn after merge",
            description: "Record one improvement for next task.",
          },
        ],
      },
    ],
  },
  playground: {
    eyebrow: "Playground",
    title: "Choose scenario and repeat flow",
    description: "Pick a practical case and compare GUI and CLI examples.",
    currentScenarioLabel: "Current scenario",
    copy: "Copy example",
    copied: "Copied",
    scenarios: [
      {
        id: "start",
        title: "Start new project",
        badge: "Getting started",
        teaser: "Create project, first commit, and publish.",
        summary: "Use this when creating a repository from scratch.",
        points: [
          "Initialize repository.",
          "Create initial files.",
          "Push to GitHub.",
        ],
        examples: {
          gui: {
            title: "GUI example",
            code: [
              "1. File -> New repository",
              "2. Add initial project files",
              "3. Commit to main",
              "4. Publish repository",
            ].join("\n"),
          },
          cli: {
            title: "CLI example",
            code: [
              "mkdir my-project",
              "cd my-project",
              "git init",
              "git add .",
              "git commit -m \"Initial commit\"",
              "git branch -M main",
              "git remote add origin https://github.com/username/my-project.git",
              "git push -u origin main",
            ].join("\n"),
          },
        },
      },
      {
        id: "update",
        title: "Update repository",
        badge: "Daily work",
        teaser: "Sync, edit, commit, and push.",
        summary: "Standard daily update flow for existing projects.",
        points: [
          "Pull latest changes.",
          "Commit only intended edits.",
          "Push after local check.",
        ],
        examples: {
          gui: {
            title: "GUI example",
            code: [
              "1. Fetch or Pull origin",
              "2. Edit files",
              "3. Review Changes",
              "4. Commit and Push",
            ].join("\n"),
          },
          cli: {
            title: "CLI example",
            code: [
              "git pull origin main",
              "git add README.md styles.css",
              "git commit -m \"Update docs and styles\"",
              "git push origin main",
            ].join("\n"),
          },
        },
      },
      {
        id: "pr",
        title: "Create Pull Request",
        badge: "Team mode",
        teaser: "Work in branch and request review.",
        summary: "Team-friendly flow with review before merge.",
        points: [
          "Create feature branch.",
          "Push branch to remote.",
          "Open PR and request review.",
        ],
        examples: {
          gui: {
            title: "GUI example",
            code: [
              "1. Current Branch -> New Branch",
              "2. Commit changes to feature branch",
              "3. Push origin",
              "4. Compare & pull request",
            ].join("\n"),
          },
          cli: {
            title: "CLI example",
            code: [
              "git switch -c feature/profile-page",
              "git add .",
              "git commit -m \"Build profile page layout\"",
              "git push -u origin feature/profile-page",
            ].join("\n"),
          },
        },
      },
    ],
  },
  resources: {
    eyebrow: "Resources",
    title: "Recommended videos",
    description: "Continue learning with practical beginner-friendly videos.",
    items: [
      {
        title: "Git and GitHub for Beginners - Crash Course",
        creator: "freeCodeCamp.org",
        focus: "CLI basics",
        duration: "Long course",
        description: "Beginner course on Git fundamentals and GitHub workflow.",
        url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
        cta: "Open on YouTube",
      },
      {
        title: "Git and GitHub Tutorial for Beginners",
        creator: "Kevin Stratvert",
        focus: "CLI + GitHub UI",
        duration: "Detailed lesson",
        description: "Step-by-step explanation of common Git and GitHub tasks.",
        url: "https://www.youtube.com/watch?v=tRZGeaHPoaw",
        cta: "Open on YouTube",
      },
      {
        title: "Git, GitHub, and GitHub Desktop for beginners",
        creator: "Coder Coder",
        focus: "GUI",
        duration: "Short lesson",
        description: "Quick intro using GitHub Desktop for visual learners.",
        url: "https://www.youtube.com/watch?v=8Dd7KRpKeaE",
        cta: "Open on YouTube",
      },
      {
        title: "Creating a Simple GitHub Pull Request",
        creator: "Jake Vanderplas",
        focus: "Pull Request",
        duration: "Mini guide",
        description: "Short focused walkthrough for creating a PR.",
        url: "https://www.youtube.com/watch?v=rgbCcBNZcdQ",
        cta: "Open on YouTube",
      },
    ],
  },
  progressive: {
    workflow: {
      nextStep: "Show next step",
      showAll: "Show all steps",
      showLess: "Show fewer steps",
      restart: "Restart from step 1",
      counter: "Visible steps: {current} of {total}",
    },
    resources: {
      showMore: "Show more videos",
      showLess: "Show fewer videos",
    },
  },
  footer: {
    note: "Start with commit, push, pull, and branch, then move to advanced workflows.",
  },
};

function cloneLocale(source) {
  return JSON.parse(JSON.stringify(source));
}

translations.ru = cloneLocale(translations.en);
translations.ru.languageLabel = "Русский";
translations.ru.hero.eyebrow = "Интерактивный гид";
translations.ru.hero.title = "GitHub без паники";
translations.ru.hero.description = "Понятный гид по Git и GitHub: термины, GUI и CLI, а также короткие сценарии для практики.";
translations.ru.hero.primaryAction = "Открыть словарь";
translations.ru.hero.secondaryAction = "Посмотреть материалы";
translations.ru.hero.stats = [
  { value: "4", label: "языка интерфейса" },
  { value: "2", label: "режима работы: GUI и CLI" },
  { value: "1", label: "маршрут от терминов до PR" },
];
translations.ru.overview.eyebrow = "Что внутри";
translations.ru.overview.title = "От терминов к практике";
translations.ru.overview.description = "Сначала разберись с базой, потом повтори рабочие сценарии GitHub шаг за шагом.";
translations.ru.overview.pillars = [
  { icon: "01", title: "Простой словарь", description: "Commit, branch, merge, pull request и другие термины без лишней воды." },
  { icon: "02", title: "GUI и CLI", description: "Сравниваем кнопки и терминал в одном месте." },
  { icon: "03", title: "Практика", description: "Новые репозитории, обновления и Pull Request в виде коротких сценариев." },
];
translations.ru.glossary.eyebrow = "Словарь";
translations.ru.glossary.title = "Основные термины Git и GitHub";
translations.ru.glossary.description = "Открывай карточки по одной и используй их как быстрый справочник.";
translations.ru.glossary.items = [
  { term: "Репозиторий", hint: "Хранилище проекта", body: "Репозиторий хранит файлы, commits, ветки и историю проекта." },
  { term: "Клон", hint: "Локальная копия", body: "Clone скачивает удаленный репозиторий на твой компьютер." },
  { term: "Коммит", hint: "Сохраненный снимок", body: "Commit сохраняет выбранные изменения с поясняющим сообщением." },
  { term: "Push", hint: "Отправить изменения", body: "Push отправляет локальные коммиты в удаленный репозиторий." },
  { term: "Pull", hint: "Синхронизировать изменения", body: "Pull забирает изменения с удаленного репозитория в локальную ветку." },
  { term: "Ветка", hint: "Отдельная линия работы", body: "Ветка позволяет работать над задачей отдельно от main." },
  { term: "Merge", hint: "Объединить ветки", body: "Merge объединяет изменения из одной ветки в другую." },
  { term: "Pull Request", hint: "Проверка и слияние", body: "Pull Request — это место, где команда смотрит изменения перед merge." },
];
translations.ru.workflow.eyebrow = "Порядок действий";
translations.ru.workflow.title = "Когда использовать GUI, а когда CLI";
translations.ru.workflow.description = "Оба режима работают с одним Git, меняется только способ управления.";
translations.ru.workflow.sidebarTitle = "Почему это удобно";
translations.ru.workflow.whenTitle = "Когда этот режим полезен";
translations.ru.workflow.modes.gui.label = "GUI";
translations.ru.workflow.modes.gui.title = "GitHub Desktop и веб-интерфейс";
translations.ru.workflow.modes.gui.description = "Хорошо подходит для старта и визуального контроля изменений.";
translations.ru.workflow.modes.gui.when = "Используй GUI, если хочешь видеть изменения глазами и меньше помнить команд.";
translations.ru.workflow.modes.gui.reasons = ["Видно diff по файлам.", "Меньше риск ошибиться в синтаксисе.", "PR удобно заканчивать в браузере."];
translations.ru.workflow.modes.gui.steps = [
  { title: "Создать или клонировать репозиторий", description: "Открой проект через Create New Repository или Clone Repository." },
  { title: "Изменить файлы", description: "Сделай правки в редакторе и посмотри на diff." },
  { title: "Сделать commit", description: "Запиши понятное сообщение и сохрани шаг работы." },
  { title: "Отправить на GitHub", description: "Опубликуй локальные commits в удалённый репозиторий." },
  { title: "Открыть Pull Request", description: "Создай PR для обсуждения и слияния." },
];
translations.ru.workflow.modes.cli.label = "CLI";
translations.ru.workflow.modes.cli.title = "Терминал и git-команды";
translations.ru.workflow.modes.cli.description = "Лучше всего для скорости, автоматизации и полного контроля.";
translations.ru.workflow.modes.cli.when = "CLI полезен, если часто работаешь с ветками, CI или скриптами.";
translations.ru.workflow.modes.cli.reasons = ["Команды работают почти везде.", "Легко автоматизировать.", "Четко видно add, commit, push, pull."];
translations.ru.workflow.modes.cli.steps = [
  { title: "Получить проект", description: "Сделай git clone или git init для новой локальной копии." },
  { title: "Создать ветку", description: "Перед работой запусти git switch -c feature/name." },
  { title: "Добавить файлы", description: "Используй git add только для нужных изменений." },
  { title: "Сделать commit", description: "Сохрани логичный шаг через git commit -m." },
  { title: "Отправить ветку и открыть PR", description: "Запушь ветку и создай Pull Request на GitHub." },
];
translations.ru.docs.eyebrow = "Документация";
translations.ru.docs.title = "Интерактивная документация по GitHub";
translations.ru.docs.description = "Выбирай тему и раскрывай шаги постепенно.";
translations.ru.docs.currentLabel = "Текущая тема";
translations.ru.docs.nextStep = "Показать следующий шаг";
translations.ru.docs.restart = "Начать тему заново";
translations.ru.docs.showAll = "Показать все шаги";
translations.ru.docs.showLess = "Свернуть до 1 шага";
translations.ru.docs.counter = "Открыто шагов: {current} из {total}";
translations.ru.docs.topics = [
  {
    id: "what",
    title: "Что такое GitHub",
    teaser: "Платформа для кода и совместной работы",
    summary: "GitHub объединяет код, историю изменений, ревью и автоматизацию.",
    points: ["Репозиторий хранит файлы и историю.", "Issues и PR помогают работать структурно.", "Actions автоматизируют проверки и деплой."],
    steps: [
      { title: "1. Создай аккаунт", description: "Настрой профиль и базовую информацию о проектах." },
      { title: "2. Изучи вкладки репозитория", description: "Code, Issues, Pull Requests, Actions и Settings." },
      { title: "3. Работай через commits", description: "Делай короткие и понятные commits." },
      { title: "4. Используй Pull Request", description: "Проверяй изменения до merge." },
    ],
  },
  {
    id: "flow",
    title: "Базовый рабочий цикл",
    teaser: "От правки до merge",
    summary: "Повторяемый порядок делает командную работу безопаснее и быстрее.",
    points: ["Сначала синхронизируйся.", "Работай в feature-ветке.", "Проверяй изменения перед merge."],
    steps: [
      { title: "1. Забрать свежие изменения", description: "Начни с актуального состояния проекта." },
      { title: "2. Сделать правки", description: "Редактируй файлы в своей ветке." },
      { title: "3. Понятно закоммитить", description: "Один логический шаг на один commit." },
      { title: "4. Push и PR", description: "Опубликуй ветку и запроси review." },
    ],
  },
  {
    id: "practice",
    title: "Ежедневные привычки",
    teaser: "Маленькие правила, большой эффект",
    summary: "Порядок в именовании, размере PR и проверках заметно улучшает качество.",
    points: ["Делай PR маленькими.", "Пиши понятные названия веток.", "Проверяй себя перед PR."],
    steps: [
      { title: "1. Определи объем", description: "Сформулируй короткую цель задачи." },
      { title: "2. Коммить часто", description: "Фиксируй прогресс небольшими порциями." },
      { title: "3. Проверь себя", description: "Посмотри diff и прогони тесты перед PR." },
      { title: "4. Сделай вывод после merge", description: "Запиши одно улучшение для следующей задачи." },
    ],
  },
];
translations.ru.playground.eyebrow = "Практика";
translations.ru.playground.title = "Сценарии работы";
translations.ru.playground.description = "Выбери сценарий и сравни GUI и CLI примеры.";
translations.ru.playground.currentScenarioLabel = "Текущий сценарий";
translations.ru.playground.copy = "Скопировать пример";
translations.ru.playground.copied = "Скопировано";
translations.ru.playground.scenarios = [
  {
    id: "start",
    title: "Начать новый проект",
    badge: "Старт",
    teaser: "Создать проект, первый commit и публикация.",
    summary: "Подходит, когда репозиторий создается с нуля.",
    points: ["Инициализируй репозиторий.", "Создай первые файлы.", "Отправь проект на GitHub."],
    examples: {
      gui: {
        title: "Пример GUI",
        code: ["1. File -> New repository", "2. Добавь первые файлы", "3. Commit to main", "4. Publish repository"].join("\n"),
      },
      cli: {
        title: "Пример CLI",
        code: [
          "mkdir my-project",
          "cd my-project",
          "git init",
          "git add .",
          'git commit -m "Initial commit"',
          "git branch -M main",
          "git remote add origin https://github.com/username/my-project.git",
          "git push -u origin main",
        ].join("\n"),
      },
    },
  },
  {
    id: "update",
    title: "Обновить репозиторий",
    badge: "Повседневная работа",
    teaser: "Синхронизируйся, правь, коммить и пушь.",
    summary: "Стандартный ежедневный поток для существующих проектов.",
    points: ["Сначала pull.", "Коммить только нужные правки.", "Push после локальной проверки."],
    examples: {
      gui: {
        title: "Пример GUI",
        code: ["1. Fetch или Pull origin", "2. Измени файлы", "3. Проверь Changes", "4. Commit и Push"].join("\n"),
      },
      cli: {
        title: "Пример CLI",
        code: ["git pull origin main", "git add README.md styles.css", "git commit -m \"Update docs and styles\"", "git push origin main"].join("\n"),
      },
    },
  },
  {
    id: "pr",
    title: "Создать Pull Request",
    badge: "Командный режим",
    teaser: "Работа в ветке и запрос review.",
    summary: "Командный поток с проверкой до merge.",
    points: ["Создай feature-ветку.", "Запушь ее в remote.", "Открой PR и запроси review."],
    examples: {
      gui: {
        title: "Пример GUI",
        code: ["1. Current Branch -> New Branch", "2. Commit changes to feature branch", "3. Push origin", "4. Compare & pull request"].join("\n"),
      },
      cli: {
        title: "Пример CLI",
        code: ["git switch -c feature/profile-page", "git add .", "git commit -m \"Build profile page layout\"", "git push -u origin feature/profile-page"].join("\n"),
      },
    },
  },
];
translations.ru.resources.eyebrow = "Видео";
translations.ru.resources.title = "Рекомендуемые материалы";
translations.ru.resources.description = "Продолжай обучение на коротких и понятных роликах.";
translations.ru.resources.items = [
  {
    title: "Git и GitHub для новичков - большой курс",
    creator: "freeCodeCamp.org",
    focus: "CLI и основы",
    duration: "Длинный курс",
    description: "Подробный стартовый курс по Git и GitHub для новичков.",
    url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
    cta: "Открыть на YouTube",
  },
  {
    title: "Git и GitHub: урок для начинающих",
    creator: "Kevin Stratvert",
    focus: "CLI + интерфейс GitHub",
    duration: "Подробный урок",
    description: "Пошаговое объяснение частых задач Git и GitHub.",
    url: "https://www.youtube.com/watch?v=tRZGeaHPoaw",
    cta: "Открыть на YouTube",
  },
  {
    title: "Git, GitHub и GitHub Desktop для начинающих",
    creator: "Coder Coder",
    focus: "GUI",
    duration: "Короткий урок",
    description: "Короткое визуальное знакомство с GitHub Desktop.",
    url: "https://www.youtube.com/watch?v=8Dd7KRpKeaE",
    cta: "Открыть на YouTube",
  },
  {
    title: "Как создать простой Pull Request",
    creator: "Jake Vanderplas",
    focus: "Pull Request",
    duration: "Мини-гайд",
    description: "Короткий разбор создания PR.",
    url: "https://www.youtube.com/watch?v=rgbCcBNZcdQ",
    cta: "Открыть на YouTube",
  },
];
translations.ru.footer.note = "Сначала commit, push, pull и branch, потом сложные сценарии.";

translations.cs = cloneLocale(translations.en);
translations.cs.languageLabel = "Čeština";
translations.cs.hero.eyebrow = "Interaktivni pruvodce";
translations.cs.hero.title = "GitHub bez zmatku";
translations.cs.hero.description = "Prehledny pruvodce zakladnimi pojmy Git a GitHub, GUI i CLI workflowem a kratkou praxi.";
translations.cs.hero.primaryAction = "Otevrit slovnik";
translations.cs.hero.secondaryAction = "Zobrazit materialy";
translations.cs.hero.stats = [
  { value: "4", label: "jazyky rozhrani" },
  { value: "2", label: "rezimy prace: GUI a CLI" },
  { value: "1", label: "cesta od pojmu k PR" },
];
translations.cs.overview.eyebrow = "Co je uvnitr";
translations.cs.overview.title = "Od pojmu k praxi";
translations.cs.overview.description = "Nejprve zakladni pojmy, potom prakticke scenare GitHubu krok za krokem.";
translations.cs.overview.pillars = [
  { icon: "01", title: "Jednoduchy slovnik", description: "Commit, branch, merge, pull request a dalsi terminy bez zahlceni." },
  { icon: "02", title: "GUI a CLI", description: "Porovnani tlacitek a terminalu na jednom miste." },
  { icon: "03", title: "Praxe", description: "Novy repozitar, aktualizace a Pull Request jako kratke scenare." },
];
translations.cs.glossary.eyebrow = "Slovnik";
translations.cs.glossary.title = "Zakladni pojmy Git a GitHub";
translations.cs.glossary.description = "Otevirajte karty postupne a pouzivejte je jako rychlou referenci.";
translations.cs.workflow.eyebrow = "Postup";
translations.cs.workflow.title = "Kdy pouzit GUI a kdy CLI";
translations.cs.workflow.description = "Oba rezimy pouzivaji stejny Git, meni se jen ovladani.";
translations.cs.workflow.sidebarTitle = "Proc je to uzitecne";
translations.cs.workflow.whenTitle = "Kdy je rezim vhodny";
translations.cs.workflow.modes.gui.label = "GUI";
translations.cs.workflow.modes.gui.title = "GitHub Desktop a web";
translations.cs.workflow.modes.gui.description = "Hodi se pro zacatek a vizualni kontrolu zmen.";
translations.cs.workflow.modes.gui.when = "Pouzij GUI, pokud chces videt zmeny vizualne a pamatovat si mene prikazu.";
translations.cs.workflow.modes.gui.reasons = ["Vidis diff po souborech.", "Mensi riziko chyby v syntaxi.", "PR je pohodlne dokoncit v prohlizeci."];
translations.cs.workflow.modes.cli.label = "CLI";
translations.cs.workflow.modes.cli.title = "Terminal a git prikazy";
translations.cs.workflow.modes.cli.description = "Nejlepsi pro rychlost, automatizaci a plnou kontrolu.";
translations.cs.workflow.modes.cli.when = "CLI je vhodne, kdyz casto pracujes s vetvemi, CI nebo skripty.";
translations.cs.workflow.modes.cli.reasons = ["Prikazy funguji skoro vsude.", "Lze je snadno automatizovat.", "Add, commit, push a pull jsou jasne oddelene."];
translations.cs.docs.eyebrow = "Dokumentace";
translations.cs.docs.title = "Interaktivni dokumentace GitHubu";
translations.cs.docs.description = "Vyber tema a odhal kroky postupne.";
translations.cs.docs.currentLabel = "Aktualni tema";
translations.cs.playground.eyebrow = "Praxe";
translations.cs.playground.title = "Pracovni scenare";
translations.cs.playground.description = "Vyber scenar a porovnej GUI a CLI priklady.";
translations.cs.playground.currentScenarioLabel = "Aktualni scenar";
translations.cs.resources.eyebrow = "Videa";
translations.cs.resources.title = "Doporucene materialy";
translations.cs.resources.description = "Pokracuj s kratkymi a srozumitelnymi videi.";
translations.cs.footer.note = "Nejdriv commit, push, pull a branch, pak slozitejsi scenare.";

translations.mock = cloneLocale(translations.en);
translations.mock.languageLabel = "Sarcastic";
translations.mock.hero.eyebrow = "Sarcastic mode";
translations.mock.hero.title = "GitHub, but with extra drama";
translations.mock.hero.description = "A slightly snarky take on Git and GitHub, for when the usual explanations feel too polite.";
translations.mock.hero.primaryAction = "Open the chaos";
translations.mock.hero.secondaryAction = "Read the survival guide";
translations.mock.workflow.title = "When GUI is enough, and when CLI wins";
translations.mock.docs.title = "GitHub, explained with a wink";
translations.mock.playground.title = "Survival scenarios";
translations.mock.resources.title = "Videos that hurt less than merge conflicts";
translations.mock.footer.note = "Master commit, push, pull, and branch before fighting advanced workflows.";
})();
