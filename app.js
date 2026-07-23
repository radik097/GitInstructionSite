const areas = [
  {
    id: "workspace",
    title: "Workspace",
    subtitle: "Файлы на диске",
    accent: "green",
    icon: "folder",
  },
  {
    id: "staging",
    title: "Staging",
    subtitle: "Index area",
    accent: "blue",
    icon: "tray",
  },
  {
    id: "local",
    title: "Local Repository",
    subtitle: ".git, коммиты и ветки",
    accent: "amber",
    icon: "database",
  },
  {
    id: "remote",
    title: "Remote Repository",
    subtitle: "origin на GitHub",
    accent: "red",
    icon: "cloud",
  },
];

const chapters = [
  {
    title: "Основы Git",
    intro: "Разбираем четыре зоны Git и то, где реально находятся изменения до и после команды.",
    branch: "main",
    activeAreas: ["workspace", "staging", "local"],
    flows: ["workspace-staging", "staging-local"],
    commands: ["git status", "git add README.md", "git commit -m \"Initial notes\""],
    steps: [
      "Проверить состояние файлов в Workspace.",
      "Выбрать изменения и перенести их в Staging.",
      "Сохранить staged-изменения коммитом в Local Repository.",
    ],
    notes: [
      "Workspace хранит текущие файлы проекта.",
      "Staging собирает только то, что войдет в следующий коммит.",
      "Local Repository хранит историю, но еще не отправляет ее на GitHub.",
    ],
    items: {
      workspace: ["README.md modified", "lesson.md new", "style.css clean"],
      staging: ["README.md staged"],
      local: ["c31a91 Initial notes", "9a21bc Project start"],
      remote: ["origin/main: 9a21bc"],
    },
    quiz: {
      question: "Где оказываются изменения после git add?",
      answers: ["В Staging", "Сразу в GitHub", "В stash", "Только в pull request"],
      correct: 0,
    },
  },
  {
    title: "Коммиты",
    intro: "Фиксируем маленькие законченные изменения и читаем историю без путаницы.",
    branch: "main",
    activeAreas: ["staging", "local"],
    flows: ["staging-local"],
    commands: ["git diff --staged", "git commit -m \"Add login copy\"", "git log --oneline"],
    steps: [
      "Посмотреть staged diff перед сохранением.",
      "Создать коммит с понятным сообщением.",
      "Проверить историю локальной ветки.",
    ],
    notes: [
      "Коммит создается только из Staging.",
      "Незакоммиченные файлы остаются в Workspace.",
      "История читается сверху вниз: новые коммиты выше.",
    ],
    items: {
      workspace: ["login.js modified", "notes.txt untracked"],
      staging: ["copy.md staged", "login.css staged"],
      local: ["a4f2e1 Add login copy", "c31a91 Initial notes"],
      remote: ["origin/main: c31a91"],
    },
    quiz: {
      question: "Что сохраняет git commit?",
      answers: ["Только staged-изменения", "Все файлы на компьютере", "Только remote-ветку", "Только конфликтные файлы"],
      correct: 0,
    },
  },
  {
    title: "Ветки",
    intro: "Показываем, как feature-ветка отделяется от main и почему работа остается локальной до push.",
    branch: "feature/login",
    activeAreas: ["local"],
    flows: ["local-local"],
    commands: ["git switch -c feature/login", "git branch", "git log --oneline --decorate"],
    steps: [
      "Создать feature-ветку от main.",
      "Убедиться, что HEAD стоит на новой ветке.",
      "Посмотреть, как расходятся указатели веток.",
    ],
    notes: [
      "Ветка это указатель на коммит, а не копия папки.",
      "HEAD показывает текущую активную ветку.",
      "Remote не узнает о локальной ветке без push.",
    ],
    items: {
      workspace: ["login.js modified"],
      staging: ["Staging empty"],
      local: ["HEAD -> feature/login", "main -> c31a91", "feature/login -> a4f2e1"],
      remote: ["origin/main -> c31a91"],
    },
    quiz: {
      question: "Что такое ветка в Git?",
      answers: ["Указатель на коммит", "Отдельная копия всего диска", "Обязательный pull request", "Файл настроек GitHub"],
      correct: 0,
    },
  },
  {
    title: "Remote: push, fetch, pull",
    intro: "Отделяем отправку, загрузку сведений и загрузку с немедленной интеграцией.",
    branch: "feature/login",
    activeAreas: ["local", "remote"],
    flows: ["local-remote", "remote-local"],
    commands: ["git push -u origin feature/login", "git fetch origin", "git pull origin main"],
    steps: [
      "Отправить локальную ветку на origin.",
      "Скачать сведения о remote без изменения файлов.",
      "Подтянуть remote-изменения в текущую ветку.",
    ],
    notes: [
      "push двигает локальные коммиты на remote.",
      "fetch обновляет remote-tracking ссылки.",
      "pull это fetch плюс интеграция в текущую ветку.",
    ],
    items: {
      workspace: ["working tree clean"],
      staging: ["Staging empty"],
      local: ["feature/login -> a4f2e1", "origin/main fetched"],
      remote: ["origin/feature/login -> a4f2e1", "origin/main -> f73b02"],
    },
    quiz: {
      question: "Чем git fetch отличается от git pull?",
      answers: ["fetch не вливает изменения в текущую ветку", "fetch всегда создает коммит", "pull не использует сеть", "pull удаляет локальные файлы"],
      correct: 0,
    },
  },
  {
    title: "Merge и конфликты",
    intro: "Вливаем feature-ветку в main и показываем, где возникает ручное разрешение конфликтов.",
    branch: "main",
    activeAreas: ["workspace", "local"],
    flows: ["local-local", "local-workspace"],
    commands: ["git switch main", "git merge feature/login", "git status"],
    steps: [
      "Переключиться на ветку, куда нужно влить изменения.",
      "Запустить merge feature-ветки.",
      "Проверить результат или список конфликтов.",
    ],
    notes: [
      "Merge изменяет историю целевой ветки.",
      "Конфликт появляется в Workspace и требует ручного выбора строк.",
      "После исправления конфликта нужен add и commit.",
    ],
    items: {
      workspace: ["login.js conflict", "README.md clean"],
      staging: ["Resolved files after git add"],
      local: ["main merge in progress", "feature/login -> a4f2e1"],
      remote: ["origin/main unchanged"],
    },
    quiz: {
      question: "Где Git показывает конфликтные файлы?",
      answers: ["В Workspace", "Только в origin", "В списке пользователей", "В package.json"],
      correct: 0,
    },
  },
  {
    title: "Контрольная практика",
    intro: "Полный путь: изменить файл, подготовить, закоммитить, отправить, подтянуть и влить.",
    branch: "feature/profile",
    activeAreas: ["workspace", "staging", "local", "remote"],
    flows: ["workspace-staging", "staging-local", "local-remote", "remote-local", "local-local"],
    commands: ["git status", "git add .", "git commit -m \"Add profile page\"", "git push", "git pull", "git merge feature/profile"],
    steps: [
      "Понять, где лежат изменения прямо сейчас.",
      "Провести изменения через Workspace, Staging и Local Repository.",
      "Синхронизировать ветку с origin.",
      "Интегрировать готовую ветку обратно в main.",
    ],
    notes: [
      "Не смешивайте add, commit и push: это разные зоны.",
      "Перед merge полезно подтянуть свежий main.",
      "Проверка в конце должна объяснить, какие зоны изменились.",
    ],
    items: {
      workspace: ["profile.js modified", "avatar.css modified"],
      staging: ["profile.js staged", "avatar.css staged"],
      local: ["b82df4 Add profile page", "feature/profile"],
      remote: ["origin/feature/profile -> b82df4", "origin/main -> f73b02"],
    },
    quiz: {
      question: "Какая цепочка верно описывает обычную отправку изменений?",
      answers: ["Workspace -> Staging -> Local Repository -> Remote", "Remote -> Staging -> Workspace", "Staging -> Remote без commit", "Pull request -> Workspace -> add"],
      correct: 0,
    },
  },
];

const state = {
  chapterIndex: 0,
  completedChapters: new Set(),
  completedSteps: new Map(),
  commandLog: [],
  quizAnswered: new Set(),
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function init() {
  chapters.forEach((_, index) => state.completedSteps.set(index, new Set()));
  bindEvents();
  render();
}

function bindEvents() {
  $("#resetBtn").addEventListener("click", resetLab);
  $("#hintBtn").addEventListener("click", () => openDrawer("hint"));
  $("#docsBtn").addEventListener("click", () => openDrawer("docs"));
  $("#closeDrawer").addEventListener("click", closeDrawer);
  $("#clearLogBtn").addEventListener("click", () => {
    state.commandLog = [];
    renderTerminal();
  });
  $("#checkChapterBtn").addEventListener("click", checkChapter);
  $("#submitAnswer").addEventListener("click", submitAnswer);
  document.addEventListener("click", (event) => {
    const flowButton = event.target.closest("[data-command]");
    if (flowButton) runDiagramCommand(flowButton.dataset.command);
  });
}

function render() {
  const chapter = chapters[state.chapterIndex];
  $("#chapterPath").textContent = `Глава ${state.chapterIndex + 1} / ${chapter.title}`;
  $("#chapterEyebrow").textContent = `Chapter ${state.chapterIndex + 1}`;
  $("#chapterTitle").textContent = chapter.title;
  $("#chapterIntro").textContent = chapter.intro;
  $("#branchName").textContent = chapter.branch;
  $("#activeFlowLabel").textContent = flowLabel(chapter.flows);
  $("#practiceText").textContent = chapter.intro;
  renderChapters();
  renderFlow(chapter);
  renderSteps(chapter);
  renderPractice(chapter);
  renderQuiz(chapter);
  renderNotes(chapter);
  renderTerminal();
}

function renderChapters() {
  const done = state.completedChapters.size;
  $("#courseProgressText").textContent = `${done} / ${chapters.length}`;
  $("#courseProgressBar").style.width = `${(done / chapters.length) * 100}%`;
  $("#chapterList").innerHTML = chapters.map((chapter, index) => {
    const stepSet = state.completedSteps.get(index);
    const completed = state.completedChapters.has(index);
    const active = index === state.chapterIndex;
    return `<button class="chapter-button ${active ? "active" : ""}" data-chapter="${index}">
      <span class="chapter-number">${index + 1}</span>
      <span><strong>${chapter.title}</strong><small>${stepSet.size} / ${chapter.steps.length} шагов</small></span>
      <i class="${completed ? "done" : ""}">${completed ? "OK" : ""}</i>
    </button>`;
  }).join("");
  $$("#chapterList [data-chapter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.chapterIndex = Number(button.dataset.chapter);
      $("#chapterResult").textContent = "";
      $("#answerResult").textContent = "";
      $("#labStatus").textContent = "Ready";
      render();
    });
  });
}

function renderFlow(chapter) {
  const connections = [
    { id: "workspace-staging", label: "git add", from: "workspace", to: "staging" },
    { id: "staging-local", label: "git commit", from: "staging", to: "local" },
    { id: "local-remote", label: "git push", from: "local", to: "remote" },
  ];

  const cards = areas.map((area) => {
    const focused = chapter.activeAreas.includes(area.id);
    return `<article class="area-card ${area.accent} ${focused ? "focused" : ""}" data-area="${area.id}">
      <div class="area-icon ${area.icon}" aria-hidden="true"></div>
      <h3>${area.title}</h3>
      <p>${area.subtitle}</p>
      <ul>${chapter.items[area.id].map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>`;
  });

  $("#flowGrid").innerHTML = `
    ${cards[0]}
    ${arrowTemplate(connections[0], chapter)}
    ${cards[1]}
    ${arrowTemplate(connections[1], chapter)}
    ${cards[2]}
    ${arrowTemplate(connections[2], chapter)}
    ${cards[3]}
    <div class="return-row">
      ${returnChip("remote-local", "git fetch / git pull", chapter)}
      ${returnChip("local-workspace", "conflict files", chapter)}
      ${returnChip("local-local", "branch / merge", chapter)}
    </div>
  `;
}

function arrowTemplate(connection, chapter) {
  const active = chapter.flows.includes(connection.id);
  return `<button class="flow-arrow ${active ? "active" : ""}" data-command="${connection.label}">
    <span>${connection.label}</span>
  </button>`;
}

function returnChip(id, label, chapter) {
  return `<button class="return-chip ${chapter.flows.includes(id) ? "active" : ""}" data-command="${label}">${label}</button>`;
}

function renderSteps(chapter) {
  const stepSet = state.completedSteps.get(state.chapterIndex);
  $("#stepStatus").textContent = `${stepSet.size} выполнено`;
  $("#chapterMeter").innerHTML = chapter.steps
    .map((_, index) => `<i class="${stepSet.has(index) ? "done" : ""}"></i>`)
    .join("");
  $("#stepList").innerHTML = chapter.steps.map((step, index) => `
    <button class="step-row ${stepSet.has(index) ? "done" : ""}" data-step="${index}">
      <span>${index + 1}</span>
      <strong>${step}</strong>
    </button>
  `).join("");
  $$("#stepList [data-step]").forEach((button) => {
    button.addEventListener("click", () => completeStep(Number(button.dataset.step)));
  });
}

function renderPractice(chapter) {
  $("#practiceCommands").innerHTML = chapter.commands.map((command, index) => `
    <button data-run-command="${index}"><code>${command}</code></button>
  `).join("");
  $$("#practiceCommands [data-run-command]").forEach((button) => {
    button.addEventListener("click", () => runCommand(Number(button.dataset.runCommand)));
  });
}

function renderQuiz(chapter) {
  $("#quizMeta").textContent = `${state.chapterIndex + 1} / ${chapters.length}`;
  $("#quizProgressBar").style.width = `${(state.quizAnswered.size / chapters.length) * 100}%`;
  $("#questionText").textContent = chapter.quiz.question;
  $("#answers").innerHTML = chapter.quiz.answers.map((answer, index) => `
    <label>
      <input type="radio" name="answer" value="${index}" />
      <span>${String.fromCharCode(65 + index)}. ${answer}</span>
    </label>
  `).join("");
}

function renderNotes(chapter) {
  $("#chapterNotes").innerHTML = chapter.notes.map((note) => `<li>${note}</li>`).join("");
}

function renderTerminal() {
  $("#terminalOutput").textContent = state.commandLog.length
    ? state.commandLog.map((line) => `$ ${line.command}\n# ${line.note}`).join("\n\n")
    : "# Выполненные команды появятся здесь.";
}

function completeStep(index) {
  state.completedSteps.get(state.chapterIndex).add(index);
  $("#practiceState").textContent = "In progress";
  renderSteps(chapters[state.chapterIndex]);
}

function runCommand(index) {
  const chapter = chapters[state.chapterIndex];
  const command = chapter.commands[index];
  completeStep(Math.min(index, chapter.steps.length - 1));
  state.commandLog.push({ command, note: chapter.steps[Math.min(index, chapter.steps.length - 1)] });
  $("#labStatus").textContent = "Command applied";
  $("#practiceState").textContent = "Command applied";
  $("#chapterResult").textContent = "";
  renderTerminal();
}

function runDiagramCommand(label) {
  const chapter = chapters[state.chapterIndex];
  const commandIndex = chapter.commands.findIndex((command) => command.includes(label.replace("git ", "")) || command === label);
  if (commandIndex >= 0) {
    runCommand(commandIndex);
    return;
  }
  state.commandLog.push({
    command: label,
    note: `Показано направление "${label}" на карте репозитория.`,
  });
  $("#labStatus").textContent = "Diagram action";
  $("#practiceState").textContent = "Diagram action";
  renderTerminal();
}

function checkChapter() {
  const chapter = chapters[state.chapterIndex];
  const stepSet = state.completedSteps.get(state.chapterIndex);
  if (stepSet.size >= chapter.steps.length) {
    state.completedChapters.add(state.chapterIndex);
    $("#chapterResult").textContent = "Глава пройдена: все ключевые действия выполнены.";
    $("#chapterResult").className = "result-text success";
    $("#labStatus").textContent = "Chapter passed";
  } else {
    $("#chapterResult").textContent = `Осталось выполнить шагов: ${chapter.steps.length - stepSet.size}.`;
    $("#chapterResult").className = "result-text warning";
    $("#labStatus").textContent = "Needs work";
  }
  renderChapters();
}

function submitAnswer() {
  const selected = $("input[name='answer']:checked");
  if (!selected) {
    $("#answerResult").textContent = "Выберите вариант ответа.";
    $("#answerResult").className = "result-text warning";
    return;
  }
  const chapter = chapters[state.chapterIndex];
  const correct = Number(selected.value) === chapter.quiz.correct;
  if (correct) state.quizAnswered.add(state.chapterIndex);
  $("#answerResult").textContent = correct ? "Верно." : "Неверно. Сверьтесь с картой репозитория.";
  $("#answerResult").className = `result-text ${correct ? "success" : "warning"}`;
  renderQuiz(chapter);
}

function resetLab() {
  state.completedChapters.clear();
  state.completedSteps.forEach((set) => set.clear());
  state.commandLog = [];
  state.quizAnswered.clear();
  $("#chapterResult").textContent = "";
  $("#answerResult").textContent = "";
  $("#labStatus").textContent = "Ready";
  $("#practiceState").textContent = "Ready";
  render();
}

function openDrawer(type) {
  const chapter = chapters[state.chapterIndex];
  const panels = {
    hint: [
      "Подсказка",
      `<p>Для текущей главы пройдите шаги сверху вниз и нажимайте команды в блоке практики. Активные направления подсвечены на карте.</p>`,
    ],
    docs: [
      "Шпаргалка",
      `<h3>${chapter.title}</h3><p>${chapter.intro}</p><p><code>git add</code> переносит изменения в Staging, <code>git commit</code> сохраняет их локально, <code>git push</code> отправляет коммиты на origin, <code>git pull</code> скачивает и интегрирует изменения.</p>`,
    ],
  };
  const [title, body] = panels[type] || panels.docs;
  $("#drawerTitle").textContent = title;
  $("#drawerBody").innerHTML = body;
  $("#drawer").classList.add("open");
  $("#drawer").setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  $("#drawer").classList.remove("open");
  $("#drawer").setAttribute("aria-hidden", "true");
}

function flowLabel(flows) {
  const labels = {
    "workspace-staging": "Workspace -> Staging",
    "staging-local": "Staging -> Local Repository",
    "local-remote": "Local Repository -> Remote",
    "remote-local": "Remote -> Local Repository",
    "local-workspace": "Local Repository -> Workspace",
    "local-local": "Branch / Merge внутри Local Repository",
  };
  return flows.map((flow) => labels[flow]).join(" + ");
}

init();
