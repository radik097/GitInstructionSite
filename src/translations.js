export const translations = {};

translations.ru = {
  languageLabel: "Русский",
  hero: {
    eyebrow: "Интерактивный гид",
    title: "GitHub без паники и путаницы",
    description:
      "Сайт объясняет базовые термины Git и GitHub, показывает рабочий порядок действий через GUI и CLI и даёт проверенные видео, чтобы быстро войти в тему.",
    primaryAction: "Открыть термины",
    secondaryAction: "Смотреть видео",
    console: [
      "$ git clone https://github.com/username/project.git",
      "$ git switch -c feature/login-page",
      "$ git add .",
      '$ git commit -m "Add login page"',
      "$ git push -u origin feature/login-page",
      "",
      "> Далее на GitHub: открой Pull Request и отправь изменения на проверку.",
    ],
    stats: [
      { value: "3", label: "языка интерфейса" },
      { value: "2", label: "режима работы: GUI и CLI" },
      { value: "1", label: "маршрут обучения от терминов до PR" },
    ],
  },
  overview: {
    eyebrow: "Что внутри",
    title: "Короткий маршрут от слов к практике",
    description:
      "Сначала разбираемся, что означают ключевые термины. Затем смотрим порядок действий в GitHub Desktop и терминале. В финале выбираем сценарий и повторяем его шаг за шагом.",
    pillars: [
      {
        icon: "01",
        title: "Термины без перегруза",
        description:
          "Push, pull, commit, branch, merge, clone и pull request собраны в раскрывающемся словаре с простыми объяснениями.",
      },
      {
        icon: "02",
        title: "GUI и CLI рядом",
        description:
          "Можно быстро сравнить графический интерфейс и командную строку: что делать, в каком порядке и почему именно так.",
      },
      {
        icon: "03",
        title: "Практические сценарии",
        description:
          "От первого репозитория до отправки pull request: интерактивные карточки помогают повторить реальный рабочий процесс.",
      },
    ],
  },
  glossary: {
    eyebrow: "Аннотации",
    title: "Основные термины Git и GitHub",
    description:
      "Открывайте карточки по одной и используйте их как быстрый словарь, когда встречаете незнакомое слово в интерфейсе GitHub или в терминале.",
    items: [
      {
        term: "Repository",
        hint: "Хранилище проекта",
        body:
          "Репозиторий, или repo, это папка проекта со всеми файлами и историей изменений. На GitHub он живёт в облаке, а у вас на компьютере может быть локальная копия.",
      },
      {
        term: "Clone",
        hint: "Скачать копию к себе",
        body:
          "Команда clone создаёт локальную копию удалённого репозитория. Обычно это первый шаг, если вы начинаете работать с уже существующим проектом.",
      },
      {
        term: "Commit",
        hint: "Сохранённый снимок изменений",
        body:
          "Commit фиксирует текущее состояние выбранных файлов. Хороший commit обычно содержит одну понятную мысль: например, добавлен экран входа или исправлена ошибка в форме.",
      },
      {
        term: "Push",
        hint: "Отправить изменения на GitHub",
        body:
          "Push публикует ваши локальные commits в удалённый репозиторий. Пока вы не сделали push, другие участники команды не увидят ваши новые commits на GitHub.",
      },
      {
        term: "Pull",
        hint: "Забрать изменения к себе",
        body:
          "Pull скачивает последние изменения из удалённого репозитория и пытается сразу объединить их с вашей локальной веткой. Это помогает не отставать от команды.",
      },
      {
        term: "Branch",
        hint: "Отдельная линия работы",
        body:
          "Branch позволяет работать над новой задачей отдельно от main. Это безопаснее: можно экспериментировать и не ломать основную версию проекта.",
      },
      {
        term: "Merge",
        hint: "Объединить ветки",
        body:
          "Merge переносит изменения из одной ветки в другую. Чаще всего feature-ветку объединяют с main после проверки и одобрения.",
      },
      {
        term: "Pull Request",
        hint: "Запрос на просмотр и слияние",
        body:
          "Pull request, или PR, это страница на GitHub, где показывают ваши изменения, обсуждают их и решают, можно ли сливать ветку. Это основной механизм командной работы.",
      },
    ],
  },
  workflow: {
    eyebrow: "Порядок действий",
    title: "Когда использовать GUI, а когда CLI",
    description:
      "Оба способа работают с одним и тем же Git. Разница только в форме управления: кнопки и окна против команд в терминале.",
    sidebarTitle: "Почему этот порядок полезен",
    whenTitle: "Когда этот режим особенно удобен",
    modes: {
      gui: {
        label: "GUI",
        title: "GitHub Desktop и веб-интерфейс",
        description:
          "Подходит для первого знакомства: меньше команд на память и наглядно видно, какие файлы изменились.",
        when:
          "Используйте GUI, если вы только входите в GitHub, хотите видеть диффы визуально и не хотите ошибиться в синтаксисе команд.",
        reasons: [
          "Сначала видно изменения файлов, а уже потом проще сделать осмысленный commit.",
          "Публикация через кнопки уменьшает страх ошибиться при первом push.",
          "Pull request всё равно удобно завершать через сайт GitHub, потому что там обсуждение и ревью.",
        ],
        steps: [
          {
            title: "Создать или клонировать репозиторий",
            description:
              "Откройте проект в GitHub Desktop через `Create a New Repository` или `Clone Repository`, чтобы связать локальную папку с GitHub.",
          },
          {
            title: "Изменить файлы в редакторе",
            description:
              "Работайте в VS Code, WebStorm или другом редакторе. GitHub Desktop автоматически покажет, что именно изменилось.",
          },
          {
            title: "Проверить diff и сделать commit",
            description:
              "Смотрите изменения, пишите короткое понятное сообщение и нажимайте `Commit to main` или в рабочую ветку.",
          },
          {
            title: "Опубликовать изменения",
            description:
              "Нажмите `Publish repository` или `Push origin`, чтобы отправить локальные commits в GitHub.",
          },
          {
            title: "Открыть pull request",
            description:
              "Если работа идёт в отдельной ветке, переходите на GitHub и создавайте pull request для обсуждения и слияния.",
          },
        ],
      },
      cli: {
        label: "CLI",
        title: "Терминал и чистые git-команды",
        description:
          "Подходит, когда нужен полный контроль, быстрые действия и понимание, что именно делает Git под капотом.",
        when:
          "CLI полезен, если вы часто работаете с ветками, автоматизацией, серверами или хотите глубже понимать Git и не зависеть от конкретного приложения.",
        reasons: [
          "Команды работают почти в любой среде: локально, на сервере и в CI.",
          "Легче повторять типовой поток и автоматизировать его скриптами.",
          "Хорошо видно, что происходит отдельно на этапе add, commit, push и pull.",
        ],
        steps: [
          {
            title: "Забрать проект или инициализировать Git",
            description:
              "Если проект уже на GitHub, используйте `git clone`. Если проекта ещё нет, создайте папку и выполните `git init`.",
          },
          {
            title: "Создать рабочую ветку",
            description:
              "Перед новой задачей выполните `git switch -c feature/name`, чтобы отделить работу от основной ветки.",
          },
          {
            title: "Добавить файлы в staging",
            description:
              "Команда `git add` говорит Git, какие изменения войдут в следующий commit. Это удобно для точного контроля.",
          },
          {
            title: "Сделать commit",
            description:
              "Команда `git commit -m \"...\"` сохраняет логический шаг работы в историю проекта.",
          },
          {
            title: "Отправить ветку и открыть PR",
            description:
              "После `git push -u origin feature/name` откройте pull request на GitHub, чтобы команда могла проверить изменения.",
          },
        ],
      },
    },
  },
  docs: {
    eyebrow: "Что такое GitHub",
    title: "Интерактивная документация по GitHub",
    description:
      "Выберите тему и открывайте материал по шагам: что такое GitHub, как выглядит рабочий цикл и как не теряться в ежедневной работе.",
    currentLabel: "Текущая тема",
    nextStep: "Показать следующий шаг",
    restart: "Начать тему заново",
    showAll: "Показать все шаги",
    showLess: "Свернуть до 1 шага",
    counter: "Открыто шагов: {current} из {total}",
    topics: [
      {
        id: "what",
        title: "Что такое GitHub",
        teaser: "Платформа для хранения кода и командной работы",
        summary:
          "GitHub это онлайн-платформа, где хранятся репозитории, история изменений и обсуждения по задачам. Он помогает работать над кодом в одиночку и в команде.",
        points: [
          "Репозиторий хранит файлы, commits, ветки и релизы проекта.",
          "Issues и Pull Requests помогают обсуждать задачи и код в одном месте.",
          "GitHub Actions позволяет автоматизировать проверку и публикацию проекта.",
        ],
        steps: [
          {
            title: "1. Создайте аккаунт и профиль",
            description: "Заполните профиль, добавьте аватар и короткое описание. Это упростит совместную работу и коммуникацию.",
          },
          {
            title: "2. Поймите структуру репозитория",
            description: "В репозитории важны вкладки Code, Issues, Pull Requests, Actions и Settings. Именно в них проходит основной процесс разработки.",
          },
          {
            title: "3. Работайте через commits",
            description: "Каждый commit это отдельный логический шаг. Чем понятнее сообщения commit, тем проще поддерживать проект.",
          },
          {
            title: "4. Обсуждайте изменения через PR",
            description: "Pull Request показывает изменения, запускает проверки и собирает комментарии команды перед слиянием.",
          },
        ],
      },
      {
        id: "flow",
        title: "Базовый рабочий цикл",
        teaser: "От изменения файла до публикации в GitHub",
        summary:
          "Стандартный цикл помогает работать аккуратно и без потери изменений. Его можно повторять для любой задачи.",
        points: [
          "Начинайте с актуальной версии проекта.",
          "Фиксируйте изменения небольшими commit-блоками.",
          "Публикуйте и обсуждайте изменения через Pull Request.",
        ],
        steps: [
          {
            title: "1. Получите свежие изменения",
            description: "Перед началом выполните pull, чтобы не писать код поверх устаревшей версии.",
          },
          {
            title: "2. Сделайте правки в отдельной ветке",
            description: "Новая ветка изолирует задачу и защищает main от случайных поломок.",
          },
          {
            title: "3. Проверьте diff и сделайте commit",
            description: "Убедитесь, что коммит содержит только нужные правки и ясное сообщение.",
          },
          {
            title: "4. Push и Pull Request",
            description: "После push откройте PR, добавьте описание и запросите ревью.",
          },
        ],
      },
      {
        id: "practice",
        title: "Как пользоваться GitHub каждый день",
        teaser: "Практики, которые экономят время и нервы",
        summary:
          "Если соблюдать несколько простых правил, работа становится стабильнее: меньше конфликтов, меньше потерь кода и быстрее ревью.",
        points: [
          "Пишите короткие и понятные названия веток и commit-сообщения.",
          "Делайте PR небольшими, чтобы их проще было проверять.",
          "Используйте README и шаблоны PR для единых правил в команде.",
        ],
        steps: [
          {
            title: "1. Планируйте задачу до кода",
            description: "Коротко сформулируйте цель в Issue или заметке. Это помогает не расползаться по объему.",
          },
          {
            title: "2. Коммитьте часто, но осмысленно",
            description: "Каждый commit должен отвечать на вопрос что изменено и зачем.",
          },
          {
            title: "3. Проверяйте себя перед PR",
            description: "Перед отправкой PR запустите тесты, просмотрите diff и удалите случайные файлы.",
          },
          {
            title: "4. Завершайте цикл ретроспективой",
            description: "После merge зафиксируйте, что можно улучшить в процессе на следующую задачу.",
          },
        ],
      },
    ],
  },
  playground: {
    eyebrow: "Интерактивная оболочка",
    title: "Выберите сценарий и повторите поток работы",
    description:
      "Слева выберите практическую ситуацию. Справа появится краткая логика действий и пример в GUI или CLI. Код можно скопировать одной кнопкой.",
    currentScenarioLabel: "Текущий сценарий",
    copy: "Скопировать пример",
    copied: "Скопировано",
    scenarios: [
      {
        id: "start",
        title: "Начать новый личный проект",
        badge: "Базовый старт",
        teaser: "Когда у вас ещё нет репозитория и нужно запустить проект правильно с самого начала.",
        summary:
          "Этот сценарий нужен, когда вы создаёте новый проект с нуля и хотите сразу получить чистую историю изменений.",
        points: [
          "Создайте пустой репозиторий локально или через GitHub Desktop.",
          "Добавьте первые файлы проекта и сделайте initial commit.",
          "Опубликуйте репозиторий на GitHub, чтобы появилась облачная копия.",
        ],
        examples: {
          gui: {
            title: "GUI-порядок",
            code: [
              "1. GitHub Desktop -> File -> New repository",
              "2. Выберите имя проекта и локальную папку",
              "3. Создайте файлы проекта в редакторе",
              '4. Вкладка Changes -> Summary: "Initial commit"',
              "5. Нажмите Commit to main",
              "6. Нажмите Publish repository",
            ].join("\n"),
          },
          cli: {
            title: "CLI-порядок",
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
        title: "Обновить существующий репозиторий",
        badge: "Ежедневная работа",
        teaser: "Когда проект уже существует, и вам нужно безопасно внести изменения и отправить их в main или в рабочую ветку.",
        summary:
          "Это самый частый сценарий: вы забираете свежие изменения, редактируете файлы, делаете commit и отправляете новую версию на GitHub.",
        points: [
          "Перед началом обновите локальную копию, чтобы не работать на устаревшем состоянии.",
          "После правок проверьте diff и сформируйте понятный commit.",
          "Публикуйте изменения только после локальной проверки файлов.",
        ],
        examples: {
          gui: {
            title: "GUI-порядок",
            code: [
              "1. Откройте репозиторий в GitHub Desktop",
              "2. Нажмите Fetch origin / Pull origin",
              "3. Измените файлы в редакторе",
              "4. Проверьте список Changes",
              '5. Commit message: "Update README and styles"',
              "6. Нажмите Commit to main",
              "7. Нажмите Push origin",
            ].join("\n"),
          },
          cli: {
            title: "CLI-порядок",
            code: [
              "git pull origin main",
              "git status",
              "git add README.md styles.css",
              'git commit -m "Update README and styles"',
              "git push origin main",
            ].join("\n"),
          },
        },
      },
      {
        id: "pr",
        title: "Отправить изменения через Pull Request",
        badge: "Командный режим",
        teaser: "Когда нужно работать в отдельной ветке, пройти ревью и только потом слить код в main.",
        summary:
          "Такой поток нужен для командной работы: задача живёт в отдельной ветке, изменения обсуждаются в pull request, а merge происходит после проверки.",
        points: [
          "Создайте feature-ветку до начала задачи.",
          "Делайте commits по логическим шагам, чтобы ревью было понятным.",
          "После push откройте pull request на GitHub и опишите, что именно изменилось.",
        ],
        examples: {
          gui: {
            title: "GUI-порядок",
            code: [
              "1. Current Branch -> New Branch",
              "2. Назовите ветку, например feature/profile-page",
              "3. Измените файлы и сделайте Commit to feature/profile-page",
              "4. Нажмите Push origin",
              "5. На GitHub нажмите Compare & pull request",
              "6. Заполните описание и отправьте PR",
            ].join("\n"),
          },
          cli: {
            title: "CLI-порядок",
            code: [
              "git switch -c feature/profile-page",
              "git add .",
              'git commit -m "Build profile page layout"',
              "git push -u origin feature/profile-page",
              "# Далее откройте GitHub и создайте Pull Request",
            ].join("\n"),
          },
        },
      },
    ],
  },
  resources: {
    eyebrow: "YouTube-источники",
    title: "Видео, с которых удобно продолжить обучение",
    description:
      "Ниже собраны ролики для разных стилей обучения: длинный вводный курс, отдельный акцент на GitHub Desktop и короткий пример pull request.",
    items: [
      {
        title: "Git and GitHub for Beginners - Crash Course",
        creator: "freeCodeCamp.org",
        focus: "CLI + общая база",
        duration: "Длинный курс",
        description:
          "Большой стартовый курс: термины, базовые git-команды, ветки, push/pull, SSH и общий рабочий поток с GitHub.",
        url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
        cta: "Открыть на YouTube",
      },
      {
        title: "Git and GitHub Tutorial for Beginners",
        creator: "Kevin Stratvert",
        focus: "CLI + GitHub UI",
        duration: "Подробный урок",
        description:
          "Пошагово объясняет работу с Git, затем показывает GitHub: создание репозитория, push, pull requests и основные разделы сайта.",
        url: "https://www.youtube.com/watch?v=tRZGeaHPoaw",
        cta: "Открыть на YouTube",
      },
      {
        title: "Git, GitHub, & GitHub Desktop for beginners",
        creator: "Coder Coder",
        focus: "GUI / GitHub Desktop",
        duration: "Короткий урок",
        description:
          "Хороший короткий вход через GitHub Desktop: удобно, если хочется сначала понять логику через интерфейс, а не через команды.",
        url: "https://www.youtube.com/watch?v=8Dd7KRpKeaE",
        cta: "Открыть на YouTube",
      },
      {
        title: "Creating a Simple Github Pull Request",
        creator: "Jake Vanderplas",
        focus: "Pull Request",
        duration: "Мини-разбор",
        description:
          "Небольшой ролик, сфокусированный именно на создании pull request. Подходит как точечное дополнение после базового знакомства.",
        url: "https://www.youtube.com/watch?v=rgbCcBNZcdQ",
        cta: "Открыть на YouTube",
      },
    ],
  },
  progressive: {
    workflow: {
      nextStep: "Показать следующий шаг",
      showAll: "Показать все шаги",
      showLess: "Свернуть до 1 шага",
      restart: "Начать с шага 1",
      counter: "Шагов показано: {current} из {total}",
    },
    resources: {
      showMore: "Показать больше видео",
      showLess: "Показать меньше видео",
    },
  },
  footer: {
    note:
      "Совет: сначала освойте commit, push, pull и branch, а уже потом углубляйтесь в merge conflicts, rebase и более сложные сценарии.",
  },
};

function cloneLocale(source) {
  return JSON.parse(JSON.stringify(source));
}

translations.mock = cloneLocale(translations.ru);
translations.mock.languageLabel = "Саркастичный русский";

translations.mock.hero = {
  ...translations.mock.hero,
  eyebrow: "Саркастичный режим",
  title: "GitHub как game-dev: красиво только на постере",
  description:
    "GitHub это игра на выживание: у тебя нет сейвов, босс-файты называются merge conflict, а катсцена после push обычно начинается со слов " +
    '"Кто это сломал?"',
  primaryAction: "Открыть механики",
  secondaryAction: "Смотреть гайды по выживанию",
};

translations.mock.overview = {
  ...translations.mock.overview,
  eyebrow: "Лор",
  title: "GitHub, где главный антагонист это ты вчерашний",
  description:
    "Тут ты хранишь код, теряешь рассудок и периодически спрашиваешь, кто писал этот модуль. Ответ неприятный: это был ты, в 3:47.",
};

translations.mock.glossary = {
  ...translations.mock.glossary,
  eyebrow: "Основные механики",
  title: "Геймплей GitHub без спойлеров",
  description:
    "Открывай термины как карточки навыков. Каждая карточка звучит невинно, пока не применишь её в проде.",
  items: [
    {
      term: "Repository",
      hint: "Стартовая локация",
      body:
        "Твоя база и сюжетная отправная точка. Вроде безопасно, но ты уже чувствуешь, что позже здесь появится босс по имени 'сломанный релиз'.",
    },
    {
      term: "Commit",
      hint: "Сейвпоинт с риском",
      body:
        "Это сохранение прогресса. Сообщение 'fix' не спасает: через неделю ты не поймешь, что именно фиксилось и почему у героя 1 HP.",
    },
    {
      term: "Branch",
      hint: "Параллельная реальность",
      body:
        "Создаешь ветку с мыслью 'сделаю аккуратно'. Через два часа main живет своей жизнью, ветка своей, а канон исчезает в тумане.",
    },
    {
      term: "Merge",
      hint: "Финальный босс",
      body:
        "Ты жмешь merge, ожидая спокойствия. Git отвечает CONFLICT и выдает квест на 27 файлов. Лут сомнительный, стресс легендарный.",
    },
    {
      term: "Push",
      hint: "Отправка в прод с молитвой",
      body:
        "Ты отправляешь код на сервер и надеешься, что CI промолчит. Если не повезет, начинается режим быстрого ремастера всего проекта.",
    },
    {
      term: "Pull",
      hint: "Патч чужой реальности",
      body:
        "Забираешь изменения команды и узнаешь, что твой локальный сюжет уже не канон. Придется адаптироваться по ходу катки.",
    },
    {
      term: "Pull Request",
      hint: "Бой с ревью",
      body:
        "Отправляешь работу на ревью с фразой 'все готово'. В ответ получаешь список правок, и начинается вторая часть игры.",
    },
    {
      term: "GitHub Actions",
      hint: "Автоматизация страданий",
      body:
        "Ты настраиваешь CI/CD, чтобы все делалось само. Билд падает, лог на 300 строк, причина в YAML-отступе на один пробел.",
    },
  ],
};

translations.mock.docs = {
  ...translations.mock.docs,
  eyebrow: "Сюжетная кампания",
  title: "Саркастичный туториал по GitHub",
  description:
    "Как будто это гайд от разработчика, который видел 100 merge conflict и начал философски относиться к реальности.",
  topics: [
    {
      id: "what",
      title: "Что за игра GitHub",
      teaser: "RPG, roguelike и психологический триллер",
      summary:
        "GitHub это не просто хранилище кода. Это система управления хаосом, где каждый commit новый уровень, а каждый merge шанс все уничтожить.",
      points: [
        "Ты хранишь код и одновременно историю своих решений.",
        "Ты видишь, как проект развивается, ломается и чинится.",
        "Ты принимаешь факт: баги это не исключение, а механика игры.",
      ],
      steps: [
        {
          title: "1. Вход в лор",
          description: "Прими, что старший босс это не Git, а ты из прошлого, который оставил загадочный commit message.",
        },
        {
          title: "2. Изучи карту",
          description: "Разберись с Code, Issues, Pull Requests, Actions. Это не меню, это твоя карта выживания.",
        },
        {
          title: "3. Играй через коммиты",
          description: "Делай маленькие осмысленные коммиты, чтобы не превращать историю в хоррор-роман.",
        },
        {
          title: "4. Проходи босса ревью",
          description: "PR это арена. Заходи с описанием изменений и выходи с улучшенным кодом.",
        },
      ],
    },
    {
      id: "flow",
      title: "Реальный игровой цикл",
      teaser: "Написал -> запушил -> сломал -> починил",
      summary:
        "Типичный цикл разработчика стабилен, как сюжет в dark fantasy: сначала надежда, потом баг, потом новый уровень понимания.",
      points: [
        "Синхронизируйся с main до начала работы.",
        "Работай в ветке, а не на живом main.",
        "Пушь только после проверки, даже если очень хочется поскорее закрыть задачу.",
      ],
      steps: [
        {
          title: "1. Pull и разведка",
          description: "Забери свежие изменения и оцени обстановку, прежде чем трогать боевые файлы.",
        },
        {
          title: "2. Ветка как безопасная зона",
          description: "Создай feature-branch и работай там. Это твой личный инстанс без урона по main.",
        },
        {
          title: "3. Commit как контрольная точка",
          description: "Фиксируй изменения порциями. Коммит должен объяснять решение, а не скрывать его.",
        },
        {
          title: "4. Push, PR и суд ревьюеров",
          description: "Публикуй ветку, открывай PR и будь готов к правкам. Это не поражение, это прокачка билда.",
        },
      ],
    },
    {
      id: "practice",
      title: "Психологический уровень",
      teaser: "Как не потерять сюжет и самообладание",
      summary:
        "Через время ты начинаешь бояться команды git push и писать коммиты в стиле final_final_really_final. Это нормально, но лечится практикой.",
      points: [
        "Делай PR маленькими: меньше шума, быстрее ревью.",
        "Пиши нормальные названия веток и коммитов.",
        "После merge фиксируй уроки, чтобы следующий бой был легче.",
      ],
      steps: [
        {
          title: "1. План перед кодом",
          description: "Коротко опиши задачу в Issue. Иначе побочные квесты съедят весь спринт.",
        },
        {
          title: "2. Самопроверка перед PR",
          description: "Прогони тесты, просмотри diff и убери случайные файлы. Это самый дешевый буст качества.",
        },
        {
          title: "3. Принимай ревью как апгрейд",
          description: "Комментарии это не атака персонажа, а подсказки для следующего уровня.",
        },
        {
          title: "4. Держи иронию включенной",
          description: "Сарказм спасает нервы, но процессы спасают релиз. Нужны оба режима.",
        },
      ],
    },
  ],
};

translations.mock.playground = {
  ...translations.mock.playground,
  title: "Сценарии выживания: сделай вид, что это легко",
  description:
    "Практические квесты: от первого репозитория до pull request. Да, звучит просто. Нет, не всегда просто.",
};

translations.mock.resources = {
  ...translations.mock.resources,
  title: "Видео, после которых merge пугает чуть меньше",
  description:
    "Подборка видео для тех, кто хочет меньше сюрпризов в ветках и больше контроля в реальных задачах.",
};

translations.mock.progressive.workflow = {
  ...translations.mock.progressive.workflow,
  nextStep: "Ладно, покажи следующий шаг",
  showAll: "Показать все, раз уж начали",
  showLess: "Свернуть, пока не поздно",
  restart: "Перезапустить катку с шага 1",
};

translations.mock.progressive.resources = {
  ...translations.mock.progressive.resources,
  showMore: "Показать еще гайды",
  showLess: "Свернуть список",
};

translations.cs = {
  languageLabel: "Čeština",
  hero: {
    eyebrow: "Interaktivni pruvodce",
    title: "GitHub bez stresu a zmatku",
    description:
      "Web vysvetluje zakladni pojmy Git a GitHub, ukazuje poradi kroku v GUI i CLI a pridava overena videa, abyste se rychle zorientovali.",
    primaryAction: "Otevrit pojmy",
    secondaryAction: "Zobrazit videa",
    console: [
      "$ git clone https://github.com/username/project.git",
      "$ git switch -c feature/login-page",
      "$ git add .",
      '$ git commit -m "Add login page"',
      "$ git push -u origin feature/login-page",
      "",
      "> Potom na GitHubu otevri Pull Request a posli zmeny ke kontrole.",
    ],
    stats: [
      { value: "3", label: "jazyky rozhrani" },
      { value: "2", label: "rezimy: GUI a CLI" },
      { value: "1", label: "studijni cesta od pojmu k PR" },
    ],
  },
  overview: {
    eyebrow: "Co tu najdete",
    title: "Kratka cesta od pojmu k praxi",
    description:
      "Nejdriv si vysvetlime zakladni terminy. Potom uvidite spravne poradi kroku v GitHub Desktopu a v terminalu. Nakonec si vyberete scenar a projdete ho krok za krokem.",
    pillars: [
      {
        icon: "01",
        title: "Pojmy bez zahlceni",
        description:
          "Push, pull, commit, branch, merge, clone a pull request jsou v rozbalovacim slovnicku s jednoduchym vysvetlenim.",
      },
      {
        icon: "02",
        title: "GUI a CLI vedle sebe",
        description:
          "Muzete rychle porovnat graficke rozhrani a prikazovou radku: co delat, v jakem poradi a proc prave tak.",
      },
      {
        icon: "03",
        title: "Prakticke scenare",
        description:
          "Od prvniho repozitare po odeslani pull requestu: interaktivni karty pomahaji zopakovat realny workflow.",
      },
    ],
  },
  glossary: {
    eyebrow: "Anotace",
    title: "Zakladni pojmy Git a GitHub",
    description:
      "Otevrete si karty podle potreby a pouzivejte je jako rychly slovnik, kdyz narazite na nezname slovo v GitHubu nebo v terminalu.",
    items: [
      {
        term: "Repository",
        hint: "Uloziste projektu",
        body:
          "Repozitar neboli repo je slozka projektu se vsemi soubory a historii zmen. Na GitHubu zije v cloudu a na vasem pocitaci muze byt jeho lokalni kopie.",
      },
      {
        term: "Clone",
        hint: "Stahnout kopii k sobe",
        body:
          "Prikaz clone vytvori lokalni kopii vzdaleneho repozitare. Je to obvykle prvni krok, kdyz zacinate pracovat s uz existujicim projektem.",
      },
      {
        term: "Commit",
        hint: "Ulozeny snimek zmen",
        body:
          "Commit ulozi aktualni stav vybranych souboru. Dobry commit obvykle obsahuje jednu jasnou myslenku: napr. pridana prihlasovaci stranka nebo opravena chyba ve formulari.",
      },
      {
        term: "Push",
        hint: "Odeslat zmeny na GitHub",
        body:
          "Push publikuje vase lokalni commity do vzdaleneho repozitare. Dokud neudelate push, ostatni clenove tymu vase nove commity na GitHubu neuvidi.",
      },
      {
        term: "Pull",
        hint: "Stahnout zmeny k sobe",
        body:
          "Pull stahne posledni zmeny ze vzdaleneho repozitare a pokusi se je hned spojit s vasi lokalni vetvi. Pomaha to drzet krok s tymem.",
      },
      {
        term: "Branch",
        hint: "Samostatna vetev prace",
        body:
          "Branch vam dovoli pracovat na novem ukolu oddelene od main. Je to bezpecnejsi: muzete experimentovat, aniz byste rozbili hlavni verzi projektu.",
      },
      {
        term: "Merge",
        hint: "Spojeni vetvi",
        body:
          "Merge prenasi zmeny z jedne vetve do druhe. Nejbezneji se feature branch spojuje do main po kontrole a schvaleni.",
      },
      {
        term: "Pull Request",
        hint: "Zadost o kontrolu a slouceni",
        body:
          "Pull request neboli PR je stranka na GitHubu, kde jsou videt vase zmeny, probiha diskuze a rozhoduje se, jestli se muze vetev sloucit. Je to zaklad tymove spoluprace.",
      },
    ],
  },
  workflow: {
    eyebrow: "Poradi kroku",
    title: "Kdy pouzit GUI a kdy CLI",
    description:
      "Oba pristupy pracuji se stejnym Gitem. Rozdil je jen ve forme ovladani: tlacitka a okna versus prikazy v terminalu.",
    sidebarTitle: "Proc je tohle poradi uzitecne",
    whenTitle: "Kdy je tento rezim nejpraktictejsi",
    modes: {
      gui: {
        label: "GUI",
        title: "GitHub Desktop a webove rozhrani",
        description:
          "Hodi se pro prvni seznameni: je mene prikazu k zapamatovani a hned vidite, ktere soubory se zmenily.",
        when:
          "Pouzijte GUI, pokud s GitHubem zacinate, chcete vizualne videt diffy a nechcete chybovat v syntaxi prikazu.",
        reasons: [
          "Nejdriv vidite zmeny v souborech a az potom se snaz dela smysluplny commit.",
          "Publikovani pres tlacitka snizuje obavu z chyby pri prvnim push.",
          "Pull request je stejne pohodlne dodelat na webu GitHubu, protoze tam probiha diskuze a review.",
        ],
        steps: [
          {
            title: "Vytvorit nebo naklonovat repozitar",
            description:
              "Otevrete projekt v GitHub Desktopu pres `Create a New Repository` nebo `Clone Repository`, aby se lokalni slozka propojila s GitHubem.",
          },
          {
            title: "Upravit soubory v editoru",
            description:
              "Pracujte ve VS Code, WebStormu nebo jinem editoru. GitHub Desktop automaticky ukaze, co se zmenilo.",
          },
          {
            title: "Zkontrolovat diff a vytvorit commit",
            description:
              "Prohlednete zmeny, napiste kratkou a jasnou zpravu a kliknete na `Commit to main` nebo do pracovni vetve.",
          },
          {
            title: "Publikovat zmeny",
            description:
              "Kliknete na `Publish repository` nebo `Push origin`, aby se lokalni commity odeslaly na GitHub.",
          },
          {
            title: "Otevrit pull request",
            description:
              "Pokud pracujete v samostatne vetvi, prejdete na GitHub a vytvorte pull request pro kontrolu a slouceni.",
          },
        ],
      },
      cli: {
        label: "CLI",
        title: "Terminal a ciste git prikazy",
        description:
          "Vhodne, kdyz chcete plnou kontrolu, rychle kroky a presne chapat, co Git dela na pozadi.",
        when:
          "CLI je uzitecne, pokud casto pracujete s vetvemi, automatizaci, servery nebo chcete Git pochopit hloubeji a nespolihat na jednu aplikaci.",
        reasons: [
          "Prikazy funguji skoro vsude: lokalne, na serveru i v CI.",
          "Typicky workflow se snadneji opakuje a automatizuje skripty.",
          "Je dobre videt, co se deje oddelene ve fazich add, commit, push a pull.",
        ],
        steps: [
          {
            title: "Stahnout projekt nebo inicializovat Git",
            description:
              "Pokud je projekt uz na GitHubu, pouzijte `git clone`. Pokud jeste neexistuje, vytvorte slozku a spustte `git init`.",
          },
          {
            title: "Vytvorit pracovni vetev",
            description:
              "Pred novym ukolem spustte `git switch -c feature/name`, aby byla prace oddelena od hlavni vetve.",
          },
          {
            title: "Pridat soubory do staging",
            description:
              "Prikaz `git add` rika Gitu, ktere zmeny patri do dalsiho commitu. Je to pohodlne pro presnou kontrolu.",
          },
          {
            title: "Vytvorit commit",
            description:
              "Prikaz `git commit -m \"...\"` ulozi logicky krok prace do historie projektu.",
          },
          {
            title: "Odeslat vetev a otevrit PR",
            description:
              "Po `git push -u origin feature/name` otevrete na GitHubu pull request, aby tym mohl zmeny zkontrolovat.",
          },
        ],
      },
    },
  },
  docs: {
    eyebrow: "Co je GitHub",
    title: "Interaktivni dokumentace o GitHubu",
    description:
      "Vyberte si tema a otevrete obsah po krocich: co je GitHub, jak vypada bezny workflow a jak pracovat bez zmatku.",
    currentLabel: "Aktualni tema",
    nextStep: "Zobrazit dalsi krok",
    restart: "Zacit tema znovu",
    showAll: "Zobrazit vsechny kroky",
    showLess: "Sbalit na 1 krok",
    counter: "Otevreno kroku: {current} z {total}",
    topics: [
      {
        id: "what",
        title: "Co je GitHub",
        teaser: "Platforma pro kod, historii zmen a spolupraci",
        summary:
          "GitHub je online platforma pro repozitare, historii zmen a diskusi nad ukoly. Umozni efektivni praci samostatne i v tymu.",
        points: [
          "Repozitar obsahuje soubory, commity, vetve a release.",
          "Issues a Pull Requests drzi ukoly i revizi kodu na jednom miste.",
          "GitHub Actions automatizuje testy a nasazeni.",
        ],
        steps: [
          {
            title: "1. Vytvorte ucet a profil",
            description: "Doplnte profil a zakladni informace, at tym snadno vidi, kdo na cem pracuje.",
          },
          {
            title: "2. Poznejte strukturu repozitare",
            description: "Zakladni orientace ve zalozkach Code, Issues, Pull Requests, Actions a Settings urychli kazdou praci.",
          },
          {
            title: "3. Pracujte pres commity",
            description: "Commit je logicky krok. Jasne zpravy v commitech zlepsuji orientaci v historii.",
          },
          {
            title: "4. Pouzivejte Pull Request",
            description: "PR zobrazi zmeny, spusti kontroly a umozni tymu dat feedback pred sloucenim.",
          },
        ],
      },
      {
        id: "flow",
        title: "Zakladni workflow",
        teaser: "Od upravy souboru po publikaci na GitHubu",
        summary:
          "Standardni workflow je opakovatelny a bezpecny. Pomaha drzet poradi kroku bez chaosu.",
        points: [
          "Zacinejte od aktualni verze projektu.",
          "Delte praci do mensich, srozumitelnych commitu.",
          "Publikujte a diskutujte zmeny pres Pull Request.",
        ],
        steps: [
          {
            title: "1. Stahnete aktualni zmeny",
            description: "Pred upravami provedte pull, aby nevznikaly zbytecne konflikty.",
          },
          {
            title: "2. Pracujte v samostatne vetvi",
            description: "Oddelena vetev chrani main a usnadni review.",
          },
          {
            title: "3. Zkontrolujte diff a vytvorte commit",
            description: "Do commitu dejte jen relevantni upravy a jasny popis.",
          },
          {
            title: "4. Push a Pull Request",
            description: "Po push otevrete PR, doplnte kontext a pozadejte o review.",
          },
        ],
      },
      {
        id: "practice",
        title: "Kazdodenni praxe na GitHubu",
        teaser: "Navyky, ktere setri cas i chyby",
        summary:
          "Par jednoduchych navyku zlepsi spolupraci: mene konfliktu, rychlejsi review a cistsi historie.",
        points: [
          "Pouzivejte konzistentni nazvy vetvi a commitu.",
          "Posilejte mensi PR, ktere se snadneji kontroluji.",
          "Udrzujte README a sablony PR aktualni.",
        ],
        steps: [
          {
            title: "1. Nejdriv si vyjasnete cil",
            description: "Kratky popis ukolu v Issue drzi praci v rozsahu.",
          },
          {
            title: "2. Commitujte prubezne",
            description: "Kazdy commit by mel mit jasny smysl a kontext.",
          },
          {
            title: "3. Pred PR udelejte self-check",
            description: "Spustte testy, projdete diff a odstrante nahodne zmeny.",
          },
          {
            title: "4. Ucte se po merge",
            description: "Po dokonceni si poznamenejte, co priste zlepsit v procesu.",
          },
        ],
      },
    ],
  },
  playground: {
    eyebrow: "Interaktivni vrstva",
    title: "Vyberte scenar a zopakujte workflow",
    description:
      "Vlevo si vyberete praktickou situaci. Vpravo se zobrazi kratka logika kroku a priklad v GUI nebo CLI. Ukazku lze jednim kliknutim zkopirovat.",
    currentScenarioLabel: "Aktualni scenar",
    copy: "Kopirovat ukazku",
    copied: "Zkopirovano",
    scenarios: [
      {
        id: "start",
        title: "Zacit novy osobni projekt",
        badge: "Zakladni start",
        teaser: "Kdyz jeste nemate repozitar a chcete projekt od zacatku zalozit spravne.",
        summary:
          "Tento scenar se hodi, kdyz vytvarite projekt od nuly a chcete hned od zacatku cistou historii zmen.",
        points: [
          "Vytvorte prazdny repozitar lokalne nebo pres GitHub Desktop.",
          "Pridejte prvni soubory projektu a vytvorte initial commit.",
          "Publikujte repozitar na GitHub, aby vznikla cloudova kopie.",
        ],
        examples: {
          gui: {
            title: "Poradi v GUI",
            code: [
              "1. GitHub Desktop -> File -> New repository",
              "2. Vyberte nazev projektu a lokalni slozku",
              "3. V editoru vytvorte soubory projektu",
              '4. Zalozka Changes -> Summary: "Initial commit"',
              "5. Kliknete na Commit to main",
              "6. Kliknete na Publish repository",
            ].join("\n"),
          },
          cli: {
            title: "Poradi v CLI",
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
        title: "Aktualizovat existujici repozitar",
        badge: "Kazdodenni prace",
        teaser: "Kdyz projekt uz existuje a vy potrebujete bezpecne udelat zmeny a odeslat je do main nebo pracovni vetve.",
        summary:
          "Tohle je nejcastejsi scenar: stahnete si cerstve zmeny, upravite soubory, vytvorite commit a odeslete novou verzi na GitHub.",
        points: [
          "Pred zacatkem aktualizujte lokalni kopii, abyste nepracovali nad zastaralym stavem.",
          "Po upravach zkontrolujte diff a vytvorte srozumitelny commit.",
          "Publikujte zmeny az po lokalni kontrole souboru.",
        ],
        examples: {
          gui: {
            title: "Poradi v GUI",
            code: [
              "1. Otevrete repozitar v GitHub Desktopu",
              "2. Kliknete na Fetch origin / Pull origin",
              "3. Upravte soubory v editoru",
              "4. Zkontrolujte seznam Changes",
              '5. Commit message: "Update README and styles"',
              "6. Kliknete na Commit to main",
              "7. Kliknete na Push origin",
            ].join("\n"),
          },
          cli: {
            title: "Poradi v CLI",
            code: [
              "git pull origin main",
              "git status",
              "git add README.md styles.css",
              'git commit -m "Update README and styles"',
              "git push origin main",
            ].join("\n"),
          },
        },
      },
      {
        id: "pr",
        title: "Poslat zmeny pres Pull Request",
        badge: "Tymovy rezim",
        teaser: "Kdyz je potreba pracovat v samostatne vetvi, projit review a az potom sloucit kod do main.",
        summary:
          "Tento postup je urceny pro tymovou praci: ukol zije v samostatne vetvi, zmeny se resi v pull requestu a merge prijde az po kontrole.",
        points: [
          "Pred zacatkem ukolu vytvorte feature branch.",
          "Delte commity po logickych krocich, aby bylo review srozumitelne.",
          "Po push otevrete na GitHubu pull request a popiste, co presne se zmenilo.",
        ],
        examples: {
          gui: {
            title: "Poradi v GUI",
            code: [
              "1. Current Branch -> New Branch",
              "2. Pojmenujte vetev, napr. feature/profile-page",
              "3. Upravte soubory a dejte Commit to feature/profile-page",
              "4. Kliknete na Push origin",
              "5. Na GitHubu kliknete na Compare & pull request",
              "6. Vyplnte popis a odeslete PR",
            ].join("\n"),
          },
          cli: {
            title: "Poradi v CLI",
            code: [
              "git switch -c feature/profile-page",
              "git add .",
              'git commit -m "Build profile page layout"',
              "git push -u origin feature/profile-page",
              "# Potom na GitHubu vytvorte Pull Request",
            ].join("\n"),
          },
        },
      },
    ],
  },
  resources: {
    eyebrow: "YouTube zdroje",
    title: "Videa, se kterymi je pohodlne pokracovat",
    description:
      "Nize jsou videa pro ruzne styly uceni: delsi uvodni kurz, samostatny fokus na GitHub Desktop a kratky priklad pull requestu.",
    items: [
      {
        title: "Git and GitHub for Beginners - Crash Course",
        creator: "freeCodeCamp.org",
        focus: "CLI + celkovy zaklad",
        duration: "Delsi kurz",
        description:
          "Velky uvodni kurz: pojmy, zakladni git prikazy, vetve, push/pull, SSH a obecny workflow s GitHubem.",
        url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
        cta: "Otevrit na YouTube",
      },
      {
        title: "Git and GitHub Tutorial for Beginners",
        creator: "Kevin Stratvert",
        focus: "CLI + GitHub UI",
        duration: "Podrobny navod",
        description:
          "Krok za krokem vysvetluje Git a pak ukazuje GitHub: vytvoreni repozitare, push, pull requests a hlavni casti webu.",
        url: "https://www.youtube.com/watch?v=tRZGeaHPoaw",
        cta: "Otevrit na YouTube",
      },
      {
        title: "Git, GitHub, & GitHub Desktop for beginners",
        creator: "Coder Coder",
        focus: "GUI / GitHub Desktop",
        duration: "Kratsi lekce",
        description:
          "Dobry kratky vstup pres GitHub Desktop: vhodne, pokud chcete nejdriv pochopit logiku pres rozhrani a ne pres prikazy.",
        url: "https://www.youtube.com/watch?v=8Dd7KRpKeaE",
        cta: "Otevrit na YouTube",
      },
      {
        title: "Creating a Simple Github Pull Request",
        creator: "Jake Vanderplas",
        focus: "Pull Request",
        duration: "Mini rozbor",
        description:
          "Kratke video zamerene jen na vytvoreni pull requestu. Hodi se jako cilene doplneni po zakladnim uvodu.",
        url: "https://www.youtube.com/watch?v=rgbCcBNZcdQ",
        cta: "Otevrit na YouTube",
      },
    ],
  },
  progressive: {
    workflow: {
      nextStep: "Zobrazit dalsi krok",
      showAll: "Zobrazit vsechny kroky",
      showLess: "Sbalit na 1 krok",
      restart: "Zacit znovu od kroku 1",
      counter: "Zobrazeno kroku: {current} z {total}",
    },
    resources: {
      showMore: "Zobrazit vice videi",
      showLess: "Zobrazit mene videi",
    },
  },
  footer: {
    note:
      "Doporuceni: nejdriv si osvojte commit, push, pull a branch, a teprve potom jdete hloubeji do merge conflicts, rebase a slozitejsich scenaru.",
  },
};

translations.en = {
  languageLabel: "English",
  hero: {
    eyebrow: "Interactive guide",
    title: "GitHub without panic or guesswork",
    description:
      "This site explains core Git and GitHub terms, shows the right order for GUI and CLI workflows, and adds curated videos so you can learn the basics fast.",
    primaryAction: "Open the glossary",
    secondaryAction: "View videos",
    console: [
      "$ git clone https://github.com/username/project.git",
      "$ git switch -c feature/login-page",
      "$ git add .",
      '$ git commit -m "Add login page"',
      "$ git push -u origin feature/login-page",
      "",
      "> Then open a Pull Request on GitHub and send the changes for review.",
    ],
    stats: [
      { value: "3", label: "interface languages" },
      { value: "2", label: "work modes: GUI and CLI" },
      { value: "1", label: "learning path from terms to PR" },
    ],
  },
  overview: {
    eyebrow: "What is inside",
    title: "A short path from words to practice",
    description:
      "First, learn the key terms. Then compare the right sequence of actions in GitHub Desktop and in the terminal. Finally, choose a scenario and walk through it step by step.",
    pillars: [
      {
        icon: "01",
        title: "Terms without overload",
        description:
          "Push, pull, commit, branch, merge, clone, and pull request are grouped into expandable cards with simple explanations.",
      },
      {
        icon: "02",
        title: "GUI and CLI side by side",
        description:
          "You can quickly compare the graphical interface and the command line: what to do, in what order, and why.",
      },
      {
        icon: "03",
        title: "Practical scenarios",
        description:
          "From your first repository to opening a pull request: interactive cards help you rehearse a real workflow.",
      },
    ],
  },
  glossary: {
    eyebrow: "Annotations",
    title: "Core Git and GitHub terms",
    description:
      "Open the cards one by one and use them as a quick glossary whenever you see an unfamiliar word in GitHub or in the terminal.",
    items: [
      {
        term: "Repository",
        hint: "Project storage",
        body:
          "A repository, or repo, is the project folder plus its full change history. On GitHub it lives online, and on your computer you can keep a local copy.",
      },
      {
        term: "Clone",
        hint: "Download a local copy",
        body:
          "The clone command creates a local copy of a remote repository. It is usually the first step when you start working with an existing project.",
      },
      {
        term: "Commit",
        hint: "Saved snapshot of changes",
        body:
          "A commit records the current state of selected files. A good commit usually captures one clear idea, such as adding a login page or fixing a form bug.",
      },
      {
        term: "Push",
        hint: "Send changes to GitHub",
        body:
          "Push publishes your local commits to the remote repository. Until you push, other teammates cannot see those new commits on GitHub.",
      },
      {
        term: "Pull",
        hint: "Bring changes to your machine",
        body:
          "Pull downloads the latest changes from the remote repository and tries to merge them into your current local branch right away. It helps you stay in sync.",
      },
      {
        term: "Branch",
        hint: "Separate line of work",
        body:
          "A branch lets you work on a new task away from main. That is safer because you can experiment without breaking the main version of the project.",
      },
      {
        term: "Merge",
        hint: "Combine branches",
        body:
          "Merge brings changes from one branch into another. Most often, a feature branch is merged into main after review and approval.",
      },
      {
        term: "Pull Request",
        hint: "Request review and merge",
        body:
          "A pull request, or PR, is the GitHub page where your changes are shown, discussed, and approved for merging. It is the core collaboration workflow on GitHub.",
      },
    ],
  },
  workflow: {
    eyebrow: "Order of actions",
    title: "When to use GUI and when to use CLI",
    description:
      "Both approaches use the same Git underneath. The difference is only the control style: buttons and windows versus terminal commands.",
    sidebarTitle: "Why this order helps",
    whenTitle: "When this mode is especially useful",
    modes: {
      gui: {
        label: "GUI",
        title: "GitHub Desktop and the web interface",
        description:
          "Great for getting started: fewer commands to remember, and you can clearly see which files changed.",
        when:
          "Use GUI if you are new to GitHub, want visual diffs, and prefer not to worry about command syntax yet.",
        reasons: [
          "You can inspect file changes first and then create a meaningful commit.",
          "Publishing through buttons makes the first push feel less risky.",
          "Pull requests are still easiest to finish on the GitHub website, where discussion and review happen.",
        ],
        steps: [
          {
            title: "Create or clone a repository",
            description:
              "Open the project in GitHub Desktop with `Create a New Repository` or `Clone Repository` so your local folder is connected to GitHub.",
          },
          {
            title: "Edit files in your code editor",
            description:
              "Work in VS Code, WebStorm, or another editor. GitHub Desktop will automatically show what changed.",
          },
          {
            title: "Review the diff and commit",
            description:
              "Check the changes, write a short clear message, and click `Commit to main` or commit to your working branch.",
          },
          {
            title: "Publish the changes",
            description:
              "Click `Publish repository` or `Push origin` to send your local commits to GitHub.",
          },
          {
            title: "Open a pull request",
            description:
              "If you are working in a separate branch, go to GitHub and create a pull request for review and merge.",
          },
        ],
      },
      cli: {
        label: "CLI",
        title: "Terminal and direct git commands",
        description:
          "Best when you want full control, faster actions, and a clearer understanding of what Git is doing under the hood.",
        when:
          "CLI is especially useful if you often work with branches, automation, servers, or simply want deeper Git knowledge without relying on one app.",
        reasons: [
          "Commands work almost everywhere: locally, on servers, and inside CI.",
          "It is easier to repeat and automate a standard workflow with scripts.",
          "You can clearly see add, commit, push, and pull as separate stages.",
        ],
        steps: [
          {
            title: "Get the project or initialize Git",
            description:
              "If the project already exists on GitHub, use `git clone`. If it does not exist yet, create a folder and run `git init`.",
          },
          {
            title: "Create a working branch",
            description:
              "Before starting a new task, run `git switch -c feature/name` so your work is isolated from the main branch.",
          },
          {
            title: "Add files to staging",
            description:
              "The `git add` command tells Git which changes should go into the next commit. That gives you precise control.",
          },
          {
            title: "Create a commit",
            description:
              "The command `git commit -m \"...\"` saves a logical unit of work into the project history.",
          },
          {
            title: "Push the branch and open a PR",
            description:
              "After `git push -u origin feature/name`, open a pull request on GitHub so the team can review your work.",
          },
        ],
      },
    },
  },
  docs: {
    eyebrow: "What GitHub Is",
    title: "Interactive GitHub Documentation",
    description:
      "Pick a topic and open it step by step: what GitHub is, how the workflow works, and how to use it confidently in daily work.",
    currentLabel: "Current topic",
    nextStep: "Show next step",
    restart: "Restart topic",
    showAll: "Show all steps",
    showLess: "Collapse to 1 step",
    counter: "Opened steps: {current} of {total}",
    topics: [
      {
        id: "what",
        title: "What GitHub Is",
        teaser: "A platform for code hosting and collaboration",
        summary:
          "GitHub is an online platform where repositories, change history, and team discussions live together. It supports both solo development and team workflows.",
        points: [
          "A repository stores files, commits, branches, and releases.",
          "Issues and Pull Requests keep tasks and code review in one place.",
          "GitHub Actions can automate tests, checks, and deployment.",
        ],
        steps: [
          {
            title: "1. Create your account and profile",
            description: "Set up your profile so teammates can identify ownership and collaboration context quickly.",
          },
          {
            title: "2. Learn repository structure",
            description: "Understand core tabs such as Code, Issues, Pull Requests, Actions, and Settings.",
          },
          {
            title: "3. Work through commits",
            description: "Treat each commit as a small logical change with a clear message.",
          },
          {
            title: "4. Use Pull Requests for review",
            description: "PRs centralize diffs, checks, and comments before merge.",
          },
        ],
      },
      {
        id: "flow",
        title: "Core Workflow",
        teaser: "From local edits to published changes",
        summary:
          "A repeatable workflow keeps work clean and predictable. You can use this cycle for almost any task.",
        points: [
          "Start from an up-to-date codebase.",
          "Commit changes in small meaningful chunks.",
          "Publish and discuss changes through Pull Requests.",
        ],
        steps: [
          {
            title: "1. Sync latest changes",
            description: "Pull first to avoid building on stale code and reduce conflicts.",
          },
          {
            title: "2. Work in a dedicated branch",
            description: "A feature branch isolates your task and protects main.",
          },
          {
            title: "3. Review diff and commit",
            description: "Ensure your commit contains only intentional changes and a clear message.",
          },
          {
            title: "4. Push and open a PR",
            description: "After push, create a PR with context and request review.",
          },
        ],
      },
      {
        id: "practice",
        title: "Daily GitHub Habits",
        teaser: "Practical habits that keep projects healthy",
        summary:
          "A few habits dramatically improve quality: fewer conflicts, faster reviews, and cleaner history.",
        points: [
          "Use consistent branch naming and commit style.",
          "Keep PRs small so they are easy to review.",
          "Maintain README and PR templates for team alignment.",
        ],
        steps: [
          {
            title: "1. Define the goal before coding",
            description: "Capture task scope in an Issue or short note to avoid drift.",
          },
          {
            title: "2. Commit often with intent",
            description: "Each commit should answer what changed and why.",
          },
          {
            title: "3. Run a self-review before PR",
            description: "Run tests, inspect diffs, and remove accidental files.",
          },
          {
            title: "4. Close the loop after merge",
            description: "Capture one process improvement for the next task.",
          },
        ],
      },
    ],
  },
  playground: {
    eyebrow: "Interactive shell",
    title: "Pick a scenario and replay the workflow",
    description:
      "Choose a practical situation on the left. On the right you will see the reasoning behind the steps and an example in GUI or CLI. You can copy the example with one click.",
    currentScenarioLabel: "Current scenario",
    copy: "Copy example",
    copied: "Copied",
    scenarios: [
      {
        id: "start",
        title: "Start a new personal project",
        badge: "Basic setup",
        teaser: "When you do not have a repository yet and want to set up the project correctly from day one.",
        summary:
          "Use this flow when you are starting from scratch and want a clean history from the very beginning.",
        points: [
          "Create an empty repository locally or through GitHub Desktop.",
          "Add the first project files and make the initial commit.",
          "Publish the repository to GitHub so an online copy exists.",
        ],
        examples: {
          gui: {
            title: "GUI flow",
            code: [
              "1. GitHub Desktop -> File -> New repository",
              "2. Choose the project name and local folder",
              "3. Create the project files in your editor",
              '4. Changes tab -> Summary: "Initial commit"',
              "5. Click Commit to main",
              "6. Click Publish repository",
            ].join("\n"),
          },
          cli: {
            title: "CLI flow",
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
        title: "Update an existing repository",
        badge: "Daily workflow",
        teaser: "When the project already exists and you need to make safe changes and send them to main or to a working branch.",
        summary:
          "This is the most common workflow: pull the latest changes, edit files, create a commit, and push the new version to GitHub.",
        points: [
          "Update your local copy before editing so you do not work from an outdated state.",
          "After editing, review the diff and write a meaningful commit message.",
          "Publish changes only after checking your files locally.",
        ],
        examples: {
          gui: {
            title: "GUI flow",
            code: [
              "1. Open the repository in GitHub Desktop",
              "2. Click Fetch origin / Pull origin",
              "3. Edit files in your editor",
              "4. Review the Changes list",
              '5. Commit message: "Update README and styles"',
              "6. Click Commit to main",
              "7. Click Push origin",
            ].join("\n"),
          },
          cli: {
            title: "CLI flow",
            code: [
              "git pull origin main",
              "git status",
              "git add README.md styles.css",
              'git commit -m "Update README and styles"',
              "git push origin main",
            ].join("\n"),
          },
        },
      },
      {
        id: "pr",
        title: "Send changes through a Pull Request",
        badge: "Team mode",
        teaser: "When you need a separate branch, code review, and a merge only after approval.",
        summary:
          "This workflow is built for collaboration: the task lives in its own branch, changes are discussed in a pull request, and merge happens after review.",
        points: [
          "Create a feature branch before you start the task.",
          "Keep commits logical so review stays easy to follow.",
          "After push, open a pull request on GitHub and explain what changed.",
        ],
        examples: {
          gui: {
            title: "GUI flow",
            code: [
              "1. Current Branch -> New Branch",
              "2. Name the branch, for example feature/profile-page",
              "3. Edit files and Commit to feature/profile-page",
              "4. Click Push origin",
              "5. On GitHub click Compare & pull request",
              "6. Fill in the description and submit the PR",
            ].join("\n"),
          },
          cli: {
            title: "CLI flow",
            code: [
              "git switch -c feature/profile-page",
              "git add .",
              'git commit -m "Build profile page layout"',
              "git push -u origin feature/profile-page",
              "# Then open GitHub and create the Pull Request",
            ].join("\n"),
          },
        },
      },
    ],
  },
  resources: {
    eyebrow: "YouTube sources",
    title: "Videos that are easy to continue with",
    description:
      "These videos cover different learning styles: a long beginner course, a focused GitHub Desktop walkthrough, and a short pull request example.",
    items: [
      {
        title: "Git and GitHub for Beginners - Crash Course",
        creator: "freeCodeCamp.org",
        focus: "CLI + broad foundation",
        duration: "Long course",
        description:
          "A full beginner course covering terms, core git commands, branching, push/pull, SSH, and the overall GitHub workflow.",
        url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
        cta: "Open on YouTube",
      },
      {
        title: "Git and GitHub Tutorial for Beginners",
        creator: "Kevin Stratvert",
        focus: "CLI + GitHub UI",
        duration: "Detailed walkthrough",
        description:
          "Step by step explanation of Git first, then GitHub: creating a repository, pushing code, pull requests, and the main website sections.",
        url: "https://www.youtube.com/watch?v=tRZGeaHPoaw",
        cta: "Open on YouTube",
      },
      {
        title: "Git, GitHub, & GitHub Desktop for beginners",
        creator: "Coder Coder",
        focus: "GUI / GitHub Desktop",
        duration: "Short lesson",
        description:
          "A strong short introduction through GitHub Desktop, especially useful if you want to understand the workflow visually before memorizing commands.",
        url: "https://www.youtube.com/watch?v=8Dd7KRpKeaE",
        cta: "Open on YouTube",
      },
      {
        title: "Creating a Simple Github Pull Request",
        creator: "Jake Vanderplas",
        focus: "Pull Request",
        duration: "Mini walkthrough",
        description:
          "A focused video that shows only the pull request step. Good as a targeted follow-up after the basics.",
        url: "https://www.youtube.com/watch?v=rgbCcBNZcdQ",
        cta: "Open on YouTube",
      },
    ],
  },
  progressive: {
    workflow: {
      nextStep: "Show next step",
      showAll: "Show all steps",
      showLess: "Collapse to 1 step",
      restart: "Restart from step 1",
      counter: "Visible steps: {current} of {total}",
    },
    resources: {
      showMore: "Show more videos",
      showLess: "Show fewer videos",
    },
  },
  footer: {
    note:
      "Tip: master commit, push, pull, and branch first, then go deeper into merge conflicts, rebase, and more advanced workflows.",
  },
};

