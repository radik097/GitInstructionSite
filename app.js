const areas = [
  { id: "workspace", title: "Workspace", subtitle: "Files you edit", accent: "green", icon: "folder" },
  { id: "staging", title: "Staging Area", subtitle: "Selected changes", accent: "blue", icon: "tray" },
  { id: "local", title: "Local Repository", subtitle: "Commits and branches", accent: "amber", icon: "database" },
  { id: "remote", title: "Remote Repository", subtitle: "Shared origin", accent: "red", icon: "cloud" },
];

const intro = {
  title: "Git Static Lab",
  intro: "An English-first static learning site for understanding how Git moves files between your working directory, staging area, local repository, and remote repository.",
  notes: [
    "Every chapter ends with two assessments: Knowledge Check and Terminal Practice.",
    "Knowledge Check must score 100% before Terminal Practice unlocks.",
    "Terminal Practice blocks paste, tracks time and mistakes, and must score 100% to unlock the next chapter.",
    "A score of 50% or lower blocks progression and requires a retry.",
  ],
  steps: [
    "Read the visual map of Git storage areas.",
    "Study one focused chapter at a time.",
    "Pass the knowledge test first.",
    "Type terminal commands manually without paste.",
  ],
};

const chapters = [
  {
    title: "Git Foundations",
    intro: "Learn the four core places where Git keeps work and why each command moves data to a different place.",
    branch: "main",
    activeAreas: ["workspace", "staging", "local"],
    flows: ["workspace-staging", "staging-local"],
    targetSeconds: 60,
    steps: [
      "Identify the working directory and its changed files.",
      "Stage selected changes for the next snapshot.",
      "Create a local commit from staged changes.",
    ],
    commands: ["git status", "git add README.md", "git commit -m \"Initial notes\""],
    notes: [
      "Workspace is your editable project folder.",
      "Staging Area is the exact selection for the next commit.",
      "Local Repository stores history before anything reaches GitHub.",
    ],
    items: {
      workspace: ["README.md modified", "lesson.md new", "style.css clean"],
      staging: ["README.md staged"],
      local: ["c31a91 Initial notes", "9a21bc Project start"],
      remote: ["origin/main: 9a21bc"],
    },
    knowledge: [
      {
        question: "Where do changes go after git add?",
        answers: ["Staging Area", "Remote Repository", "Stash only", "Pull request page"],
        correct: 0,
      },
      {
        question: "What does git commit store?",
        answers: ["The staged snapshot", "Every file on the computer", "Only remote branches", "Only untracked files"],
        correct: 0,
      },
    ],
  },
  {
    title: "Reading Changes",
    intro: "Use status and diff commands to inspect what changed before saving anything permanently.",
    branch: "main",
    activeAreas: ["workspace", "staging"],
    flows: ["workspace-staging"],
    targetSeconds: 55,
    steps: [
      "Check the short repository status.",
      "Inspect unstaged changes.",
      "Inspect staged changes before committing.",
    ],
    commands: ["git status --short", "git diff", "git diff --staged"],
    notes: [
      "Status answers what changed.",
      "Diff answers exactly how it changed.",
      "Staged diff is the final review before commit.",
    ],
    items: {
      workspace: ["app.js modified", "notes.txt untracked"],
      staging: ["README.md staged"],
      local: ["c31a91 Initial notes"],
      remote: ["origin/main: c31a91"],
    },
    knowledge: [
      {
        question: "Which command shows unstaged line-level changes?",
        answers: ["git diff", "git push", "git branch", "git clone"],
        correct: 0,
      },
      {
        question: "What does git status --short emphasize?",
        answers: ["Compact file state", "Remote passwords", "Commit hashes only", "GitHub issues"],
        correct: 0,
      },
    ],
  },
  {
    title: "Branches",
    intro: "Create a feature branch and understand that a branch is a movable pointer, not a full folder copy.",
    branch: "feature/login",
    activeAreas: ["local"],
    flows: ["local-local"],
    targetSeconds: 60,
    steps: [
      "Create a feature branch.",
      "Confirm the active branch.",
      "Read decorated history.",
    ],
    commands: ["git switch -c feature/login", "git branch", "git log --oneline --decorate"],
    notes: [
      "A branch is a pointer to a commit.",
      "HEAD marks the current branch.",
      "A local branch is not on origin until push.",
    ],
    items: {
      workspace: ["login.js modified"],
      staging: ["Staging empty"],
      local: ["HEAD -> feature/login", "main -> c31a91", "feature/login -> a4f2e1"],
      remote: ["origin/main -> c31a91"],
    },
    knowledge: [
      {
        question: "What is a Git branch?",
        answers: ["A pointer to a commit", "A full disk copy", "A GitHub-only setting", "A required pull request"],
        correct: 0,
      },
      {
        question: "What does HEAD identify?",
        answers: ["The current checkout", "The newest remote user", "A file extension", "A package manager"],
        correct: 0,
      },
    ],
  },
  {
    title: "Remote Sync",
    intro: "Separate push, fetch, and pull so remote synchronization stops feeling like one unclear operation.",
    branch: "feature/login",
    activeAreas: ["local", "remote"],
    flows: ["local-remote", "remote-local"],
    targetSeconds: 70,
    steps: [
      "Push a local branch to origin.",
      "Fetch remote references without changing files.",
      "Pull changes into the current branch.",
    ],
    commands: ["git push -u origin feature/login", "git fetch origin", "git pull origin main"],
    notes: [
      "Push sends local commits to origin.",
      "Fetch updates remote-tracking references.",
      "Pull is fetch plus integration.",
    ],
    items: {
      workspace: ["working tree clean"],
      staging: ["Staging empty"],
      local: ["feature/login -> a4f2e1", "origin/main fetched"],
      remote: ["origin/feature/login -> a4f2e1", "origin/main -> f73b02"],
    },
    knowledge: [
      {
        question: "What does git fetch do?",
        answers: ["Downloads remote references without merging", "Deletes the current branch", "Creates a commit", "Uploads staged files"],
        correct: 0,
      },
      {
        question: "How is pull different from fetch?",
        answers: ["Pull fetches and then integrates", "Pull never uses the network", "Fetch always commits", "Fetch deletes main"],
        correct: 0,
      },
    ],
  },
  {
    title: "Merge and Conflicts",
    intro: "Merge a feature branch into main and handle the point where Git needs a human decision.",
    branch: "main",
    activeAreas: ["workspace", "local"],
    flows: ["local-local", "local-workspace"],
    targetSeconds: 65,
    steps: [
      "Switch to the target branch.",
      "Merge the feature branch.",
      "Check whether conflicts need resolution.",
    ],
    commands: ["git switch main", "git merge feature/login", "git status"],
    notes: [
      "Merge changes the target branch history.",
      "Conflicts appear in Workspace files.",
      "Resolved conflicts must be staged and committed.",
    ],
    items: {
      workspace: ["login.js conflict", "README.md clean"],
      staging: ["Resolved files after git add"],
      local: ["main merge in progress", "feature/login -> a4f2e1"],
      remote: ["origin/main unchanged"],
    },
    knowledge: [
      {
        question: "Where do conflicted files appear?",
        answers: ["Workspace", "Only origin", "User settings", "package.json"],
        correct: 0,
      },
      {
        question: "What should you do after resolving a conflict?",
        answers: ["Stage and commit the resolution", "Delete .git", "Push without committing", "Ignore status forever"],
        correct: 0,
      },
    ],
  },
  {
    title: "Final Workflow",
    intro: "Complete the whole path from edited files to a synchronized and merged branch.",
    branch: "feature/profile",
    activeAreas: ["workspace", "staging", "local", "remote"],
    flows: ["workspace-staging", "staging-local", "local-remote", "remote-local", "local-local"],
    targetSeconds: 90,
    steps: [
      "Inspect current changes.",
      "Stage and commit the work.",
      "Synchronize the feature branch with origin.",
      "Merge the feature branch back to main.",
    ],
    commands: ["git status", "git add .", "git commit -m \"Add profile page\"", "git push", "git pull", "git merge feature/profile"],
    notes: [
      "Do not confuse add, commit, and push.",
      "Pull fresh main before merging when collaboration is active.",
      "The final check should explain which storage areas changed.",
    ],
    items: {
      workspace: ["profile.js modified", "avatar.css modified"],
      staging: ["profile.js staged", "avatar.css staged"],
      local: ["b82df4 Add profile page", "feature/profile"],
      remote: ["origin/feature/profile -> b82df4", "origin/main -> f73b02"],
    },
    knowledge: [
      {
        question: "Which sequence describes a normal publish flow?",
        answers: ["Workspace -> Staging -> Local Repository -> Remote", "Remote -> Staging -> Workspace", "Staging -> Remote without commit", "Pull request -> Workspace -> add"],
        correct: 0,
      },
      {
        question: "What unlocks the next chapter in this lab?",
        answers: ["100% in both Knowledge Check and Terminal Practice", "Clicking every button once", "Any score above 10%", "Only opening Docs"],
        correct: 0,
      },
    ],
  },
];

const overviewItems = {
  workspace: ["Edit files here", "See modified/untracked state"],
  staging: ["Select changes", "Prepare the next snapshot"],
  local: ["Commit history", "Branches and HEAD"],
  remote: ["origin/main", "shared feature branches"],
};

const state = {
  view: "intro",
  chapterIndex: 0,
  mapHidden: false,
  knowledgeAnswers: chapters.map(() => Array(2).fill(null)),
  terminal: chapters.map(() => ({ correct: 0, mistakes: 0, startedAt: null, elapsed: 0, passed: false, score: 0, log: [] })),
  chapterScores: chapters.map(() => ({ knowledge: 0, terminal: 0, total: 0, passed: false })),
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function init() {
  bindEvents();
  render();
}

function bindEvents() {
  $("#courseBtn").addEventListener("click", () => openPanel("course"));
  $("#requirementsBtn").addEventListener("click", () => openPanel("assessment"));
  $("#mapToggleBtn").addEventListener("click", toggleMap);
  $("#resetBtn").addEventListener("click", resetLab);
  $("#docsBtn").addEventListener("click", () => openDrawer("docs"));
  $("#closeDrawer").addEventListener("click", closeDrawer);
  $$("[data-close-panel]").forEach((button) => {
    button.addEventListener("click", () => closePanel(button.dataset.closePanel));
  });
  $("#startBtn").addEventListener("click", startOrRetry);
  $("#submitAnswer").addEventListener("click", submitKnowledge);
  $("#terminalInput").addEventListener("keydown", handleTerminalKey);
  $("#terminalInput").addEventListener("paste", blockPaste);
  $("#terminalInput").addEventListener("drop", blockPaste);
  $("#terminalInput").addEventListener("beforeinput", (event) => {
    if (event.inputType === "insertFromPaste" || event.inputType === "insertFromDrop") blockPaste(event);
  });
}

function render() {
  renderChapters();
  if (state.view === "intro") renderIntro();
  else renderChapter();
  renderMapVisibility();
}

function renderIntro() {
  $("#chapterPath").textContent = "Overview";
  $("#chapterEyebrow").textContent = "Overview";
  $("#chapterTitle").textContent = intro.title;
  $("#chapterIntro").textContent = intro.intro;
  $("#flowTitle").textContent = "Git Workflow Preview";
  $("#activeFlowLabel").textContent = "Workspace -> Staging -> Local Repository -> Remote";
  $("#lessonSectionTitle").textContent = "How the site works";
  $("#stepStatus").textContent = "Start here";
  $("#branchName").textContent = "main";
  $("#practiceState").textContent = "Ready";
  $("#labStatus").textContent = "Ready";
  $("#chapterMeter").innerHTML = "";
  $("#stepList").innerHTML = intro.steps.map((step, index) => stepTemplate(index, step, true)).join("");
  $("#chapterNotes").innerHTML = intro.notes.map((note) => `<li>${note}</li>`).join("");
  $("#requirementList").innerHTML = requirement("Read overview", true) + requirement("Start Chapter 1", false) + requirement("Score 100% to unlock each next chapter", false);
  $("#startBtn").textContent = "Start Chapter 1";
  $("#startBtn").disabled = false;
  $("#chapterResult").textContent = "";
  $("#assessmentTitle").textContent = "Assessment Rule";
  $("#quizMeta").textContent = "Locked";
  $("#quizProgressBar").style.width = "0%";
  $("#questionText").textContent = "Assessments appear after you start a chapter.";
  $("#answers").innerHTML = "";
  $("#submitAnswer").disabled = true;
  renderFlow({ activeAreas: areas.map((area) => area.id), flows: ["workspace-staging", "staging-local", "local-remote"], items: overviewItems });
  renderScoreGrid();
  renderTerminalPanel();
  closePanel("assessment");
}

function renderChapter() {
  const chapter = currentChapter();
  const locked = isChapterLocked(state.chapterIndex);
  const knowledgeScore = getKnowledgeScore(state.chapterIndex);
  const terminalState = state.terminal[state.chapterIndex];
  const chapterScore = state.chapterScores[state.chapterIndex];
  const attempted = hasAttemptedChapter(state.chapterIndex);

  $("#chapterPath").textContent = `Chapter ${state.chapterIndex + 1} / ${chapter.title}`;
  $("#chapterEyebrow").textContent = `Chapter ${state.chapterIndex + 1}`;
  $("#chapterTitle").textContent = chapter.title;
  $("#chapterIntro").textContent = chapter.intro;
  $("#flowTitle").textContent = locked ? "Locked Repository Map" : "Repository Map";
  $("#activeFlowLabel").textContent = flowLabel(chapter.flows);
  $("#lessonSectionTitle").textContent = "Lessons";
  $("#stepStatus").textContent = locked ? "Locked" : `${chapter.steps.length} lessons`;
  $("#branchName").textContent = chapter.branch;
  $("#practiceState").textContent = locked ? "Locked" : chapterScore.passed ? "Passed" : "In progress";
  $("#labStatus").textContent = locked ? "Locked" : chapterScore.passed ? "Chapter passed" : "Ready";
  $("#chapterMeter").innerHTML = chapter.steps.map(() => `<i class="${chapterScore.passed ? "done" : ""}"></i>`).join("");
  $("#stepList").innerHTML = chapter.steps.map((step, index) => stepTemplate(index, step, !locked)).join("");
  $("#chapterNotes").innerHTML = chapter.notes.map((note) => `<li>${note}</li>`).join("");
  $("#requirementList").innerHTML = [
    requirement("Chapter unlocked", !locked),
    requirement("Knowledge Check score 100%", knowledgeScore === 100),
    requirement("Terminal Practice score 100%", terminalState.score === 100),
    requirement("Next chapter unlocks only at 100%", chapterScore.passed),
  ].join("");
  $("#startBtn").textContent = chapterScore.passed ? "Passed" : attempted ? "Retry" : "Start Chapter";
  $("#startBtn").disabled = locked;
  $("#chapterResult").textContent = locked ? "Complete the previous chapter with 100% to unlock this chapter." : resultMessage(chapterScore.total, attempted);
  $("#chapterResult").className = `result-text ${chapterScore.passed ? "success" : chapterScore.total <= 50 && chapterScore.total > 0 ? "warning" : ""}`;
  renderFlow(locked ? { ...chapter, activeAreas: [], flows: [], items: chapter.items } : chapter);
  renderKnowledge();
  renderScoreGrid();
  renderTerminalPanel();
}

function renderChapters() {
  const passed = state.chapterScores.filter((score) => score.passed).length;
  $("#courseProgressText").textContent = `${passed} / ${chapters.length}`;
  $("#courseProgressBar").style.width = `${(passed / chapters.length) * 100}%`;
  $("#chapterList").innerHTML = [
    `<button class="chapter-button ${state.view === "intro" ? "active" : ""}" data-intro="true">
      <span class="chapter-number">i</span>
      <span><strong>Overview</strong><small>What this site is</small></span>
      <i class="done">OK</i>
    </button>`,
    ...chapters.map((chapter, index) => {
      const locked = isChapterLocked(index);
      const active = state.view === "chapter" && state.chapterIndex === index;
      const score = state.chapterScores[index];
      return `<button class="chapter-button ${active ? "active" : ""} ${locked ? "locked" : ""}" data-chapter="${index}" ${locked ? "aria-disabled=\"true\"" : ""}>
        <span class="chapter-number">${index + 1}</span>
        <span><strong>${chapter.title}</strong><small>${locked ? "Locked" : `${score.total}% success`}</small></span>
        <i class="${score.passed ? "done" : ""}">${locked ? "L" : score.passed ? "OK" : ""}</i>
      </button>`;
    }),
  ].join("");
  $$("#chapterList [data-intro]").forEach((button) => button.addEventListener("click", () => {
    state.view = "intro";
    render();
  }));
  $$("#chapterList [data-chapter]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.chapter);
      if (isChapterLocked(index)) {
        $("#labStatus").textContent = "Locked";
        showToast("This chapter is locked. Pass the previous chapter with 100% first.", "warning");
        return;
      }
      state.view = "chapter";
      state.chapterIndex = index;
      render();
    });
  });
}

function renderFlow(chapter) {
  const connections = [
    { id: "workspace-staging", label: "git add" },
    { id: "staging-local", label: "git commit" },
    { id: "local-remote", label: "git push" },
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
    </div>`;
}

function renderKnowledge() {
  const chapter = currentChapter();
  const locked = isChapterLocked(state.chapterIndex);
  const knowledgeScore = getKnowledgeScore(state.chapterIndex);
  $("#assessmentTitle").textContent = "Knowledge Check";
  $("#quizMeta").textContent = `${knowledgeScore}%`;
  $("#quizProgressBar").style.width = `${knowledgeScore}%`;
  $("#questionText").textContent = locked
    ? "This chapter is locked."
    : "Answer every question correctly. Terminal Practice opens only at 100%.";
  $("#answers").innerHTML = chapter.knowledge.map((question, questionIndex) => `
    <fieldset class="knowledge-question">
      <legend>${questionIndex + 1}. ${question.question}</legend>
      ${question.answers.map((answer, answerIndex) => `
        <label>
          <input type="radio" name="knowledge-${questionIndex}" value="${answerIndex}" ${state.knowledgeAnswers[state.chapterIndex][questionIndex] === answerIndex ? "checked" : ""} ${locked ? "disabled" : ""} />
          <span>${String.fromCharCode(65 + answerIndex)}. ${answer}</span>
        </label>`).join("")}
    </fieldset>`).join("");
  $("#submitAnswer").disabled = locked;
  $("#answerResult").textContent = knowledgeScore === 100 ? "Knowledge Check passed. Terminal Practice is unlocked." : "";
}

function renderScoreGrid() {
  const score = state.view === "chapter" ? state.chapterScores[state.chapterIndex] : { knowledge: 0, terminal: 0, total: 0 };
  const terminalState = state.view === "chapter" ? state.terminal[state.chapterIndex] : { mistakes: 0, elapsed: 0 };
  $("#scoreGrid").innerHTML = `
    <div><span>Knowledge</span><strong>${score.knowledge}%</strong></div>
    <div><span>Terminal</span><strong>${score.terminal}%</strong></div>
    <div><span>Total</span><strong>${score.total}%</strong></div>
    <div><span>Time</span><strong>${formatSeconds(terminalState.elapsed)}</strong></div>
    <div><span>Mistakes</span><strong>${terminalState.mistakes}</strong></div>
    <div><span>Gate</span><strong>${score.passed ? "Open" : score.total <= 50 && score.total > 0 ? "Blocked" : "Locked"}</strong></div>`;
}

function renderTerminalPanel() {
  const input = $("#terminalInput");
  if (state.view !== "chapter") {
    $("#terminalOutput").textContent = "# Start a chapter to unlock assessments.";
    $("#terminalMeta").textContent = "Paste disabled";
    input.value = "";
    input.disabled = true;
    return;
  }
  const chapter = currentChapter();
  const terminalState = state.terminal[state.chapterIndex];
  const knowledgeScore = getKnowledgeScore(state.chapterIndex);
  const locked = isChapterLocked(state.chapterIndex) || knowledgeScore !== 100 || terminalState.passed;
  const nextCommand = chapter.commands[terminalState.correct] || "completed";
  $("#terminalMeta").textContent = `Target ${chapter.targetSeconds}s / paste disabled`;
  $("#terminalOutput").textContent = terminalState.log.length
    ? terminalState.log.join("\n")
    : `# Type commands manually. Paste is blocked.\n# Next command: ${nextCommand}`;
  input.placeholder = terminalState.passed
    ? "Terminal Practice passed"
    : knowledgeScore === 100
      ? nextCommand
      : "Complete Knowledge Check at 100% to unlock terminal practice";
  input.disabled = locked;
}

function submitKnowledge() {
  if (state.view !== "chapter" || isChapterLocked(state.chapterIndex)) return;
  const chapter = currentChapter();
  chapter.knowledge.forEach((_, index) => {
    const selected = $(`input[name="knowledge-${index}"]:checked`);
    state.knowledgeAnswers[state.chapterIndex][index] = selected ? Number(selected.value) : null;
  });
  const score = getKnowledgeScore(state.chapterIndex);
  updateChapterScore();
  $("#answerResult").textContent = score === 100
    ? "Knowledge Check passed at 100%. Terminal Practice is now available."
    : score <= 50
      ? `Knowledge score ${score}%. Progression is blocked at 50% or below. Retry required.`
      : `Knowledge score ${score}%. You need 100% to continue.`;
  $("#answerResult").className = `result-text ${score === 100 ? "success" : "warning"}`;
  if (score <= 50) showToast("Score is 50% or lower. Use Retry before moving on.", "warning");
  if (score === 100) showToast("Knowledge Check passed. Terminal Practice is now the focus.", "success");
  render();
}

function handleTerminalKey(event) {
  if (event.key !== "Enter" || state.view !== "chapter") return;
  event.preventDefault();
  const input = event.currentTarget;
  const command = input.value.trim();
  if (!command) return;
  const chapter = currentChapter();
  const terminalState = state.terminal[state.chapterIndex];
  if (!terminalState.startedAt) terminalState.startedAt = Date.now();
  const expected = chapter.commands[terminalState.correct];
  if (command === expected) {
    terminalState.correct += 1;
    terminalState.log.push(`$ ${command}`);
    terminalState.log.push(`# accepted (${terminalState.correct}/${chapter.commands.length})`);
  } else {
    terminalState.mistakes += 1;
    terminalState.log.push(`$ ${command}`);
    terminalState.log.push(`# mistake ${terminalState.mistakes}: expected "${expected}"`);
  }
  terminalState.elapsed = Math.ceil((Date.now() - terminalState.startedAt) / 1000);
  input.value = "";
  if (terminalState.correct >= chapter.commands.length) finishTerminalPractice();
  updateChapterScore();
  if (state.chapterScores[state.chapterIndex].passed) showToast("Chapter passed at 100%. The next chapter is unlocked.", "success");
  render();
  if (!$("#terminalInput").disabled) $("#terminalInput").focus();
}

function finishTerminalPractice() {
  const chapter = currentChapter();
  const terminalState = state.terminal[state.chapterIndex];
  const overtime = Math.max(0, terminalState.elapsed - chapter.targetSeconds);
  const score = Math.max(0, 100 - terminalState.mistakes * 25 - overtime * 2);
  terminalState.score = Math.min(100, Math.round(score));
  terminalState.passed = terminalState.score === 100;
  terminalState.log.push(`# terminal score: ${terminalState.score}%`);
  terminalState.log.push(terminalState.passed ? "# Terminal Practice passed at 100%." : "# Terminal Practice failed. Retry this chapter for 100%.");
  if (!terminalState.passed) showToast(`Terminal score ${terminalState.score}%. Retry is required.`, terminalState.score <= 50 ? "warning" : "info");
}

function startOrRetry() {
  if (state.view === "intro") {
    state.view = "chapter";
    state.chapterIndex = 0;
    state.mapHidden = true;
    showToast("Chapter started. The current task is centered; open Course or Assess when needed.", "info");
    render();
    return;
  }
  if (isChapterLocked(state.chapterIndex)) return;
  state.knowledgeAnswers[state.chapterIndex] = Array(currentChapter().knowledge.length).fill(null);
  state.terminal[state.chapterIndex] = { correct: 0, mistakes: 0, startedAt: null, elapsed: 0, passed: false, score: 0, log: [] };
  state.chapterScores[state.chapterIndex] = { knowledge: 0, terminal: 0, total: 0, passed: false };
  showToast("Chapter reset. Retry from Knowledge Check.", "info");
  render();
}

function blockPaste(event) {
  event.preventDefault();
  if (state.view === "chapter") {
    const terminalState = state.terminal[state.chapterIndex];
    terminalState.mistakes += 1;
    terminalState.log.push("# paste blocked and counted as a mistake");
    updateChapterScore();
    showToast("Paste is blocked and counted as a mistake.", "warning");
    render();
  }
}

function updateChapterScore() {
  const index = state.chapterIndex;
  const knowledge = getKnowledgeScore(index);
  const terminal = state.terminal[index].score;
  const total = Math.round((knowledge + terminal) / 2);
  state.chapterScores[index] = { knowledge, terminal, total, passed: knowledge === 100 && terminal === 100 };
}

function getKnowledgeScore(index) {
  const chapter = chapters[index];
  const answers = state.knowledgeAnswers[index];
  const correct = chapter.knowledge.filter((question, questionIndex) => answers[questionIndex] === question.correct).length;
  return Math.round((correct / chapter.knowledge.length) * 100);
}

function isChapterLocked(index) {
  if (index === 0) return false;
  return !state.chapterScores[index - 1].passed;
}

function resetLab() {
  state.view = "intro";
  state.chapterIndex = 0;
  state.mapHidden = false;
  state.knowledgeAnswers = chapters.map((chapter) => Array(chapter.knowledge.length).fill(null));
  state.terminal = chapters.map(() => ({ correct: 0, mistakes: 0, startedAt: null, elapsed: 0, passed: false, score: 0, log: [] }));
  state.chapterScores = chapters.map(() => ({ knowledge: 0, terminal: 0, total: 0, passed: false }));
  render();
}

function toggleMap() {
  state.mapHidden = !state.mapHidden;
  renderMapVisibility();
  showToast(state.mapHidden ? "Repository Map hidden." : "Repository Map shown.", "info");
}

function renderMapVisibility() {
  const flow = $("#overview");
  const button = $("#mapToggleBtn");
  flow.classList.toggle("map-hidden", state.mapHidden);
  button.querySelector("span").textContent = state.mapHidden ? "Show Map" : "Hide Map";
  button.setAttribute("title", state.mapHidden ? "Show repository map" : "Hide repository map");
  button.setAttribute("aria-label", state.mapHidden ? "Show repository map" : "Hide repository map");
}

function openPanel(panel) {
  const target = panel === "course" ? $(".chapter-sidebar") : $(".practice-panel");
  target.classList.add("open");
  target.setAttribute("aria-hidden", "false");
}

function closePanel(panel) {
  const target = panel === "course" ? $(".chapter-sidebar") : $(".practice-panel");
  target.classList.remove("open");
  target.setAttribute("aria-hidden", "true");
}

let toastTimer;
function showToast(message, tone = "info") {
  const toast = $("#toast");
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.className = `toast open ${tone}`;
  toastTimer = window.setTimeout(() => {
    toast.className = "toast";
  }, 3200);
}

function openDrawer(type) {
  const body = type === "docs"
    ? `<p>Git Static Lab is fully static and GitHub Pages friendly. The default language is English. Each chapter uses a strict gate: Knowledge Check 100%, then Terminal Practice 100%, then the next chapter unlocks.</p><p>Terminal Practice blocks paste, tracks mistakes, tracks elapsed time, and calculates success percentage from those values.</p>`
    : "";
  $("#drawerTitle").textContent = "Guide";
  $("#drawerBody").innerHTML = body;
  $("#drawer").classList.add("open");
  $("#drawer").setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  $("#drawer").classList.remove("open");
  $("#drawer").setAttribute("aria-hidden", "true");
}

function arrowTemplate(connection, chapter) {
  const active = chapter.flows.includes(connection.id);
  return `<button class="flow-arrow ${active ? "active" : ""}" type="button" tabindex="-1"><span>${connection.label}</span></button>`;
}

function returnChip(id, label, chapter) {
  return `<button class="return-chip ${chapter.flows.includes(id) ? "active" : ""}" type="button" tabindex="-1">${label}</button>`;
}

function requirement(label, done) {
  return `<div class="requirement ${done ? "done" : ""}"><span>${label}</span><strong>${done ? "OK" : "Pending"}</strong></div>`;
}

function stepTemplate(index, step, enabled) {
  return `<div class="step-row ${enabled ? "done" : ""}"><span>${index + 1}</span><strong>${step}</strong></div>`;
}

function currentChapter() {
  return chapters[state.chapterIndex];
}

function resultMessage(score, attempted = false) {
  if (score === 100) return "Chapter passed. The next chapter is unlocked.";
  if (score <= 50 && attempted) return `Current success is ${score}%. Scores at 50% or below block progression. Use Retry.`;
  if (score > 50) return `Current success is ${score}%. You still need 100% to unlock the next chapter.`;
  return "";
}

function hasAttemptedChapter(index) {
  const hasKnowledge = state.knowledgeAnswers[index].some((answer) => answer !== null);
  const terminalState = state.terminal[index];
  return hasKnowledge || terminalState.correct > 0 || terminalState.mistakes > 0 || terminalState.log.length > 0;
}

function flowLabel(flows) {
  const labels = {
    "workspace-staging": "Workspace -> Staging",
    "staging-local": "Staging -> Local Repository",
    "local-remote": "Local Repository -> Remote",
    "remote-local": "Remote -> Local Repository",
    "local-workspace": "Local Repository -> Workspace",
    "local-local": "Branch / Merge inside Local Repository",
  };
  return flows.map((flow) => labels[flow]).join(" + ");
}

function formatSeconds(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

init();
