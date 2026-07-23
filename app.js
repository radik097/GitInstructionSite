const lessons = [
  "Hello Git",
  "Local Basics",
  "Commits",
  "Branching",
  "Remote Repos",
  "Merge & Rebase",
  "Conflicts",
  "Stash",
  "Tags",
  "Pull Requests",
  "Workflows",
  "Review",
];

const commands = {
  add: {
    title: "git add",
    command: "git add app.js login.js",
    summary: "Переносит выбранные изменения из Workspace в Staging. Коммит еще не создан.",
    status: "Staged",
  },
  commit: {
    title: "git commit",
    command: 'git commit -m "Add login form UI"',
    summary: "Создает локальный снимок staged-изменений в текущей ветке feature/login.",
    status: "Committed",
  },
  push: {
    title: "git push",
    command: "git push -u origin feature/login",
    summary: "Отправляет локальные коммиты ветки feature/login в удаленный репозиторий origin.",
    status: "Pushed",
  },
  fetch: {
    title: "git fetch",
    command: "git fetch origin",
    summary: "Скачивает сведения о remote-ветках, но не меняет вашу рабочую ветку.",
    status: "Fetched",
  },
  pull: {
    title: "git pull",
    command: "git pull origin main",
    summary: "Скачивает изменения из remote и сразу интегрирует их в текущую ветку.",
    status: "Pulled",
  },
  merge: {
    title: "git merge",
    command: "git checkout main && git merge feature/login",
    summary: "Вливает историю feature/login в main. Если одни и те же строки изменены по-разному, появится conflict.",
    status: "Merged",
  },
};

const files = [
  { name: "app.js", state: "M" },
  { name: "login.js", state: "M" },
  { name: "style.css", state: "-" },
  { name: "README.md", state: "-" },
  { name: "notes.txt", state: "U" },
];

const quiz = [
  {
    q: "Что делает git fetch?",
    a: [
      "Скачивает изменения с remote без слияния в текущую ветку",
      "Удаляет локальную ветку",
      "Создает новый коммит",
      "Загружает staged-файлы на remote",
    ],
    correct: 0,
  },
  {
    q: "Где находятся файлы после git add?",
    a: ["В Staging Area", "Только в origin/main", "В корзине Git", "Только в pull request"],
    correct: 0,
  },
  {
    q: "Что отправляет git push?",
    a: ["Локальные коммиты в remote", "Remote-коммиты в workspace", "Только незакоммиченные файлы", "Конфликты в stash"],
    correct: 0,
  },
  {
    q: "Что делает merge?",
    a: ["Интегрирует историю одной ветки в другую", "Ставит файлы в index", "Показывает список remote", "Отменяет все коммиты"],
    correct: 0,
  },
  {
    q: "Где живет origin/main?",
    a: ["Это локальная ссылка на состояние remote-ветки", "Это всегда ваша рабочая директория", "Это staged-файл", "Это имя пользователя GitHub"],
    correct: 0,
  },
  {
    q: "Чем pull отличается от fetch?",
    a: ["Pull делает fetch и затем интеграцию", "Pull никогда не ходит в сеть", "Fetch всегда создает коммит", "Fetch удаляет main"],
    correct: 0,
  },
  {
    q: "Что означает конфликт при merge?",
    a: ["Git не смог автоматически совместить изменения", "Remote недоступен", "Ветка уже удалена", "Коммит был пустой"],
    correct: 0,
  },
  {
    q: "Что хранит Local Repository?",
    a: ["Историю коммитов и веток внутри .git", "Только текущий незакоммиченный файл", "Пароль от remote", "Список открытых вкладок редактора"],
    correct: 0,
  },
];

const scenarioSteps = ["add", "commit", "push", "pull", "merge"];
let state = {
  currentLesson: 4,
  completedCommands: [],
  activeCommand: null,
  quizIndex: 0,
  score: 0,
  answered: Array(quiz.length).fill(false),
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function init() {
  renderLessons();
  renderFiles();
  renderBranches();
  renderTasks();
  renderCommands();
  renderQuiz();
  renderTerminal();
  bindEvents();
}

function bindEvents() {
  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => switchView(tab.dataset.view));
  });

  document.addEventListener("click", (event) => {
    const commandButton = event.target.closest("[data-command]");
    if (commandButton) runCommand(commandButton.dataset.command);
  });

  $$(".segmented button").forEach((button) => {
    button.addEventListener("click", () => switchPracticeTab(button.dataset.practiceTab));
  });

  $("#submitAnswer").addEventListener("click", submitAnswer);
  $("#checkScenario").addEventListener("click", checkScenario);
  $("#resetBtn").addEventListener("click", resetLab);
  $("#hintBtn").addEventListener("click", () => openDrawer("hint"));
  $("#docsBtn").addEventListener("click", () => openDrawer("docs"));
  $("#closeDrawer").addEventListener("click", closeDrawer);
  $$(".sidebar-links button").forEach((button) => {
    button.addEventListener("click", () => openDrawer(button.dataset.panel));
  });
}

function renderLessons() {
  $("#lessonList").innerHTML = lessons
    .map((lesson, index) => {
      const done = index < state.currentLesson;
      const active = index === state.currentLesson;
      const marker = done ? "done" : active ? "current" : "";
      const text = done ? "✓" : "";
      return `<li><button class="${active ? "active" : ""}" data-lesson="${index}">
        <span>${index + 1}</span><span>${lesson}</span><i class="state ${marker}">${text}</i>
      </button></li>`;
    })
    .join("");

  $$("#lessonList button").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentLesson = Number(button.dataset.lesson);
      $("#lessonTitle").textContent = `Урок ${state.currentLesson + 1}: ${lessons[state.currentLesson]}`;
      $("#lessonCounter").textContent = `${state.currentLesson + 1} / ${lessons.length}`;
      renderLessons();
    });
  });
}

function renderFiles() {
  const staged = state.completedCommands.includes("add");
  const committed = state.completedCommands.includes("commit");
  const pushed = state.completedCommands.includes("push");
  $("#workspaceFiles").innerHTML = files
    .map((file) => fileTemplate(file.name, committed && file.state !== "U" ? "-" : file.state, file.state === "U" ? "untracked" : "modified"))
    .join("");
  $("#stagingFiles").innerHTML = staged && !committed
    ? files.filter((file) => file.state === "M").map((file) => fileTemplate(file.name, "S", "staged")).join("")
    : `<div class="empty-drop">Staging пуст. Нажмите git add, чтобы подготовить изменения.</div>`;
  renderChangesTable(staged, committed, pushed);
}

function fileTemplate(name, stateLabel, tone) {
  return `<div class="file-item"><i class="file-icon"></i><span>${name}</span><strong class="badge ${tone}">${stateLabel}</strong></div>`;
}

function renderBranches() {
  const hasCommit = state.completedCommands.includes("commit");
  const hasPush = state.completedCommands.includes("push");
  const merged = state.completedCommands.includes("merge");
  $("#localBranch").innerHTML = `
    <span class="head-label">HEAD</span>
    <span class="branch-name">${merged ? "main" : "feature/login"}</span>
    ${hasCommit ? commit("a1b2c3d", "Add login form UI") : ""}
    <div class="commit"><strong>d4e5f6g</strong><span>Validate login input</span></div>
    <div class="commit dim"><strong>7h8i9j0</strong><span>Initial commit</span></div>
  `;
  $("#remoteMain").innerHTML = `
    <span class="branch-name">origin/main</span>
    ${merged ? commit("a1b2c3d", "Add login form UI") : ""}
    ${commit("9z8y7x6", "Update README")}
    ${commit("7h8i9j0", "Initial commit")}
  `;
  $("#remoteFeature").innerHTML = `
    <span class="branch-name">feature/login</span>
    ${hasPush ? commit("a1b2c3d", "Add login form UI") : "<div class=\"empty-drop\">Remote-ветка появится после push</div>"}
    ${commit("d4e5f6g", "Validate login input")}
  `;
  $("#currentBranch").textContent = merged ? "main" : "feature/login";
}

function commit(hash, text) {
  return `<div class="commit"><strong>${hash}</strong><span>${text}</span></div>`;
}

function renderTasks() {
  $("#taskList").innerHTML = scenarioSteps
    .map((step) => `<li class="${state.completedCommands.includes(step) ? "done" : ""}">${commands[step].summary}</li>`)
    .join("");
}

function renderCommands() {
  const html = Object.entries(commands)
    .map(([key, item]) => `<article class="command-card">
      <h3>${item.title}</h3>
      <code>${item.command}</code>
      <p>${item.summary}</p>
      <button class="primary-button" data-command="${key}">Run</button>
    </article>`)
    .join("");
  $("#commandGrid").innerHTML = html;
  $("#practiceCommands").innerHTML = Object.entries(commands)
    .map(([key, item]) => `<button data-command="${key}">${item.command}</button>`)
    .join("");
}

function renderTerminal() {
  const lines = [
    '<span class="comment"># Git Static Lab terminal</span>',
    ...state.completedCommands.map((key) => `<span class="prompt">$</span> ${commands[key].command}<br><span class="comment"># ${commands[key].summary}</span>`),
  ];
  if (!state.completedCommands.length) {
    lines.push('<span class="comment"># Выполненные команды появятся здесь.</span>');
  }
  $("#terminalOutput").innerHTML = lines.join("<br>");
}

function renderChangesTable(staged, committed, pushed) {
  $("#changesTable").innerHTML = files.map((file) => {
    const changed = file.state === "M";
    const workspace = committed && changed ? "clean" : file.state === "U" ? "untracked" : changed ? "modified" : "clean";
    const stage = staged && !committed && changed ? "staged" : "-";
    const local = committed && changed ? "committed" : file.name === "README.md" ? "tracked" : "-";
    const remote = pushed && changed ? "synced" : "-";
    return `<tr><td>${file.name}</td><td>${workspace}</td><td>${stage}</td><td>${local}</td><td>${remote}</td></tr>`;
  }).join("");
}

function switchView(viewId) {
  $$(".tab").forEach((tab) => {
    const active = tab.dataset.view === viewId;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
}

function switchPracticeTab(tabId) {
  $$(".segmented button").forEach((button) => button.classList.toggle("active", button.dataset.practiceTab === tabId));
  $("#scenarioPanel").classList.toggle("active", tabId === "scenario");
  $("#controlsPanel").classList.toggle("active", tabId === "controls");
}

function runCommand(key) {
  if (!state.completedCommands.includes(key)) state.completedCommands.push(key);
  state.activeCommand = key;
  $("#explanation").textContent = commands[key].summary;
  $("#labStatus").textContent = commands[key].status;
  $$(".active[data-command]").forEach((button) => button.classList.remove("active"));
  $$(`[data-command="${key}"]`).forEach((button) => {
    button.classList.add("active");
    window.setTimeout(() => button.classList.remove("active"), 1700);
  });
  renderFiles();
  renderBranches();
  renderTasks();
  renderTerminal();
}

function renderQuiz() {
  const item = quiz[state.quizIndex];
  $("#quizMeta").textContent = `Question ${state.quizIndex + 1} of ${quiz.length}`;
  $("#quizProgress").style.width = `${(state.quizIndex / quiz.length) * 100}%`;
  $("#questionText").textContent = item.q;
  $("#answerResult").textContent = "";
  $("#answerResult").className = "answer-result";
  $("#answers").innerHTML = item.a
    .map((answer, index) => `<label><input type="radio" name="answer" value="${index}"><span>${String.fromCharCode(65 + index)}. ${answer}</span></label>`)
    .join("");
  $("#scoreText").textContent = `${state.score} / ${quiz.length}`;
  $("#quizDots").innerHTML = quiz
    .map((_, index) => `<span class="dot ${state.answered[index] ? "done" : ""} ${index === state.quizIndex ? "current" : ""}">${index + 1}</span>`)
    .join("");
}

function submitAnswer() {
  const selected = $("input[name='answer']:checked");
  if (!selected) {
    $("#answerResult").textContent = "Выберите вариант ответа.";
    $("#answerResult").className = "answer-result wrong";
    return;
  }
  const correct = Number(selected.value) === quiz[state.quizIndex].correct;
  if (correct && !state.answered[state.quizIndex]) state.score += 1;
  state.answered[state.quizIndex] = true;
  $("#answerResult").textContent = correct ? "Верно. Переходим дальше." : "Неверно. Проверьте схему и попробуйте следующий вопрос.";
  $("#answerResult").className = `answer-result ${correct ? "correct" : "wrong"}`;
  window.setTimeout(() => {
    state.quizIndex = (state.quizIndex + 1) % quiz.length;
    renderQuiz();
  }, 900);
}

function checkScenario() {
  const complete = scenarioSteps.every((step) => state.completedCommands.includes(step));
  $("#explanation").textContent = complete
    ? "Сценарий закрыт: изменения подготовлены, закоммичены, отправлены на origin, подтянуты и влиты в main."
    : `Не хватает шага: ${commands[scenarioSteps.find((step) => !state.completedCommands.includes(step))].title}.`;
  $("#labStatus").textContent = complete ? "Scenario Passed" : "Needs Work";
}

function resetLab() {
  state = {
    currentLesson: state.currentLesson,
    completedCommands: [],
    activeCommand: null,
    quizIndex: 0,
    score: 0,
    answered: Array(quiz.length).fill(false),
  };
  $("#explanation").textContent = "Лаборатория сброшена. Начните с git add и наблюдайте, как меняется распределение файлов.";
  $("#labStatus").textContent = "Ready";
  renderFiles();
  renderBranches();
  renderTasks();
  renderTerminal();
  renderQuiz();
}

function openDrawer(type) {
  const content = {
    cheatsheet: ["Cheat Sheet", `
      <h3>Базовый цикл</h3><p><code>git add</code> переносит изменения в Staging, <code>git commit</code> сохраняет их в Local Repo, <code>git push</code> отправляет коммиты в Remote.</p>
      <h3>Синхронизация</h3><p><code>git fetch</code> обновляет сведения о remote. <code>git pull</code> делает fetch и затем интеграцию в текущую ветку.</p>
      <h3>Ветки</h3><p>Рабочая ветка хранит свою линию коммитов. Merge соединяет две линии истории.</p>`],
    glossary: ["Glossary", `
      <h3>Workspace</h3><p>Файлы на диске, которые вы редактируете.</p>
      <h3>Staging Area</h3><p>Промежуточный набор изменений для следующего коммита.</p>
      <h3>Remote</h3><p>Удаленная копия репозитория, например GitHub или GitLab.</p>`],
    playground: ["Playground", `<p>Нажимайте команды на схеме в любом порядке. Состояние таблицы и веток покажет, что произошло.</p>`],
    hint: ["Hint", `<p>Для сценария Feature Login правильная последовательность: <code>git add</code>, <code>git commit</code>, <code>git push</code>, <code>git pull</code>, <code>git merge</code>.</p>`],
    docs: ["Docs", `<p>Этот сайт полностью статический. Его можно открыть как файл или разместить на GitHub Pages: достаточно загрузить папку с <code>index.html</code>, <code>styles.css</code> и <code>app.js</code>.</p>`],
  };
  const [title, body] = content[type] || content.cheatsheet;
  $("#drawerTitle").textContent = title;
  $("#drawerBody").innerHTML = body;
  $("#drawer").classList.add("open");
  $("#drawer").setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  $("#drawer").classList.remove("open");
  $("#drawer").setAttribute("aria-hidden", "true");
}

init();
