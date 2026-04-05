const translations = window.translations || {};

let storedLanguage = "ru";

try {
  storedLanguage = localStorage.getItem("site-language") || "ru";
} catch (error) {
  storedLanguage = "ru";
}

const state = {
  lang: storedLanguage,
  mode: "gui",
  docsTopicId: "what",
  docsVisibleSteps: 1,
  scenarioId: "start",
  exampleMode: "gui",
  workflowVisibleSteps: 1,
  resourcesExpanded: false,
};

const elements = {
  heroConsoleCode: document.getElementById("hero-console-code"),
  heroStats: document.getElementById("hero-stats"),
  pillars: document.getElementById("pillars"),
  glossaryAccordion: document.getElementById("glossary-accordion"),
  workflowModeTitle: document.getElementById("workflow-mode-title"),
  workflowModeDescription: document.getElementById("workflow-mode-description"),
  workflowStepsList: document.getElementById("workflow-steps-list"),
  workflowStepCounter: document.getElementById("workflow-step-counter"),
  workflowNextStep: document.getElementById("workflow-next-step"),
  workflowToggleAll: document.getElementById("workflow-toggle-all"),
  workflowReasons: document.getElementById("workflow-reasons"),
  workflowWhenText: document.getElementById("workflow-when-text"),
  docsTopicNav: document.getElementById("docs-topic-nav"),
  docsTopicTitle: document.getElementById("docs-topic-title"),
  docsTopicSummary: document.getElementById("docs-topic-summary"),
  docsTopicPoints: document.getElementById("docs-topic-points"),
  docsTopicSteps: document.getElementById("docs-topic-steps"),
  docsStepCounter: document.getElementById("docs-step-counter"),
  docsNextStep: document.getElementById("docs-next-step"),
  docsToggleAll: document.getElementById("docs-toggle-all"),
  scenarioSelector: document.getElementById("scenario-selector"),
  scenarioTitle: document.getElementById("scenario-title"),
  scenarioBadge: document.getElementById("scenario-badge"),
  scenarioSummary: document.getElementById("scenario-summary"),
  scenarioPoints: document.getElementById("scenario-points"),
  scenarioExampleTitle: document.getElementById("scenario-example-title"),
  scenarioExampleCode: document.getElementById("scenario-example-code"),
  copyExample: document.getElementById("copy-example"),
  resourcesGrid: document.getElementById("resources-grid"),
  resourcesToggle: document.getElementById("resources-toggle"),
  langButtons: [...document.querySelectorAll(".lang-switcher__button")],
  modeButtons: [...document.querySelectorAll(".mode-toggle__button")],
  exampleButtons: [...document.querySelectorAll(".example-switch__button")],
};

function formatTemplate(template, params) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(params[key] ?? ""));
}

function setSimpleText(key, value) {
  document.querySelectorAll(`[data-i18n="${key}"]`).forEach((node) => {
    node.textContent = value;
  });
}

function renderTextContent(locale) {
  const t = translations[locale];

  setSimpleText("hero.eyebrow", t.hero.eyebrow);
  setSimpleText("hero.title", t.hero.title);
  setSimpleText("hero.description", t.hero.description);
  setSimpleText("hero.primaryAction", t.hero.primaryAction);
  setSimpleText("hero.secondaryAction", t.hero.secondaryAction);

  setSimpleText("overview.eyebrow", t.overview.eyebrow);
  setSimpleText("overview.title", t.overview.title);
  setSimpleText("overview.description", t.overview.description);

  setSimpleText("glossary.eyebrow", t.glossary.eyebrow);
  setSimpleText("glossary.title", t.glossary.title);
  setSimpleText("glossary.description", t.glossary.description);

  setSimpleText("workflow.eyebrow", t.workflow.eyebrow);
  setSimpleText("workflow.title", t.workflow.title);
  setSimpleText("workflow.description", t.workflow.description);
  setSimpleText("workflow.sidebarTitle", t.workflow.sidebarTitle);
  setSimpleText("workflow.whenTitle", t.workflow.whenTitle);

  setSimpleText("docs.eyebrow", t.docs.eyebrow);
  setSimpleText("docs.title", t.docs.title);
  setSimpleText("docs.description", t.docs.description);
  setSimpleText("docs.currentLabel", t.docs.currentLabel);

  setSimpleText("playground.eyebrow", t.playground.eyebrow);
  setSimpleText("playground.title", t.playground.title);
  setSimpleText("playground.description", t.playground.description);
  setSimpleText("playground.currentScenarioLabel", t.playground.currentScenarioLabel);

  setSimpleText("resources.eyebrow", t.resources.eyebrow);
  setSimpleText("resources.title", t.resources.title);
  setSimpleText("resources.description", t.resources.description);

  setSimpleText("footer.note", t.footer.note);
}

function renderHero(locale) {
  const t = translations[locale];
  elements.heroConsoleCode.textContent = t.hero.console.join("\n");
  elements.heroStats.innerHTML = t.hero.stats
    .map(
      (stat) => `
        <article class="hero-stat">
          <div class="hero-stat__value">${stat.value}</div>
          <div class="hero-stat__label">${stat.label}</div>
        </article>
      `
    )
    .join("");
}

function renderPillars(locale) {
  const t = translations[locale];
  elements.pillars.innerHTML = t.overview.pillars
    .map(
      (pillar) => `
        <article class="pillar-card">
          <div class="pillar-card__icon">${pillar.icon}</div>
          <h3>${pillar.title}</h3>
          <p>${pillar.description}</p>
        </article>
      `
    )
    .join("");
}

function renderGlossary(locale) {
  const t = translations[locale];
  elements.glossaryAccordion.innerHTML = t.glossary.items
    .map(
      (item) => `
        <details class="glossary-item">
          <summary>
            <div>
              <div class="glossary-item__term">${item.term}</div>
              <div class="glossary-item__hint">${item.hint}</div>
            </div>
            <span class="glossary-item__toggle">+</span>
          </summary>
          <div class="glossary-item__content">${item.body}</div>
        </details>
      `
    )
    .join("");

  const details = [...elements.glossaryAccordion.querySelectorAll(".glossary-item")];
  details.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (!detail.open) {
        return;
      }

      details.forEach((other) => {
        if (other !== detail) {
          other.open = false;
        }
      });
    });
  });
}

function renderModeButtons(locale) {
  const t = translations[locale];
  elements.modeButtons.forEach((button) => {
    const mode = button.dataset.mode;
    button.textContent = t.workflow.modes[mode].label;
    button.classList.toggle("is-active", state.mode === mode);
  });
}

function renderWorkflow(locale) {
  const t = translations[locale];
  const current = t.workflow.modes[state.mode];
  const totalSteps = current.steps.length;
  const visibleSteps = Math.max(1, Math.min(state.workflowVisibleSteps, totalSteps));
  const visibleReasons = Math.max(1, Math.min(visibleSteps, current.reasons.length));

  elements.workflowModeTitle.textContent = current.title;
  elements.workflowModeDescription.textContent = current.description;
  elements.workflowWhenText.textContent = current.when;

  elements.workflowStepsList.innerHTML = current.steps
    .slice(0, visibleSteps)
    .map(
      (step, index) => `
        <article class="workflow-step">
          <div class="workflow-step__number">${index + 1}</div>
          <div class="workflow-step__text">
            <h4>${step.title}</h4>
            <p>${step.description}</p>
          </div>
        </article>
      `
    )
    .join("");

  elements.workflowReasons.innerHTML = current.reasons
    .slice(0, visibleReasons)
    .map((reason) => `<li>${reason}</li>`)
    .join("");

  elements.workflowStepCounter.textContent = formatTemplate(t.progressive.workflow.counter, {
    current: visibleSteps,
    total: totalSteps,
  });

  elements.workflowNextStep.textContent =
    visibleSteps < totalSteps ? t.progressive.workflow.nextStep : t.progressive.workflow.restart;
  elements.workflowToggleAll.textContent =
    visibleSteps < totalSteps ? t.progressive.workflow.showAll : t.progressive.workflow.showLess;
}

function renderDocsNav(locale) {
  const t = translations[locale];
  const topics = t.docs.topics;

  elements.docsTopicNav.innerHTML = topics
    .map(
      (topic) => `
        <button
          class="docs-nav__button${state.docsTopicId === topic.id ? " is-active" : ""}"
          data-doc-topic="${topic.id}"
          type="button"
        >
          <strong>${topic.title}</strong>
          <span>${topic.teaser}</span>
        </button>
      `
    )
    .join("");

  [...elements.docsTopicNav.querySelectorAll("[data-doc-topic]")].forEach((button) => {
    button.addEventListener("click", () => {
      state.docsTopicId = button.dataset.docTopic;
      state.docsVisibleSteps = 1;
      renderDocs(locale);
      renderDocsNav(locale);
    });
  });
}

function renderDocs(locale) {
  const t = translations[locale];
  const topics = t.docs.topics;
  const topic = topics.find((item) => item.id === state.docsTopicId) || topics[0];
  const totalSteps = topic.steps.length;
  const visibleSteps = Math.max(1, Math.min(state.docsVisibleSteps, totalSteps));

  elements.docsTopicTitle.textContent = topic.title;
  elements.docsTopicSummary.textContent = topic.summary;
  elements.docsTopicPoints.innerHTML = topic.points.map((point) => `<li>${point}</li>`).join("");

  elements.docsTopicSteps.innerHTML = topic.steps
    .slice(0, visibleSteps)
    .map(
      (step) => `
        <article class="docs-step">
          <h4 class="docs-step__title">${step.title}</h4>
          <p class="docs-step__description">${step.description}</p>
        </article>
      `
    )
    .join("");

  elements.docsStepCounter.textContent = formatTemplate(t.docs.counter, {
    current: visibleSteps,
    total: totalSteps,
  });

  elements.docsNextStep.textContent = visibleSteps < totalSteps ? t.docs.nextStep : t.docs.restart;
  elements.docsToggleAll.textContent = visibleSteps < totalSteps ? t.docs.showAll : t.docs.showLess;
}

function renderScenarioButtons(locale) {
  const t = translations[locale];
  elements.scenarioSelector.innerHTML = t.playground.scenarios
    .map(
      (scenario) => `
        <button
          class="scenario-selector__button${state.scenarioId === scenario.id ? " is-active" : ""}"
          data-scenario="${scenario.id}"
          type="button"
        >
          <strong>${scenario.title}</strong>
          <span>${scenario.teaser}</span>
        </button>
      `
    )
    .join("");

  [...elements.scenarioSelector.querySelectorAll("[data-scenario]")].forEach((button) => {
    button.addEventListener("click", () => {
      state.scenarioId = button.dataset.scenario;
      renderScenario(locale);
      renderScenarioButtons(locale);
    });
  });
}

function renderExampleButtons(locale) {
  const t = translations[locale];
  elements.exampleButtons.forEach((button) => {
    const mode = button.dataset.mode;
    button.textContent = t.workflow.modes[mode].label;
    button.classList.toggle("is-active", state.exampleMode === mode);
  });
}

function renderScenario(locale) {
  const t = translations[locale];
  const scenario = t.playground.scenarios.find((item) => item.id === state.scenarioId) || t.playground.scenarios[0];
  const example = scenario.examples[state.exampleMode];

  elements.scenarioTitle.textContent = scenario.title;
  elements.scenarioBadge.textContent = scenario.badge;
  elements.scenarioSummary.textContent = scenario.summary;
  elements.scenarioPoints.innerHTML = scenario.points.map((point) => `<li>${point}</li>`).join("");
  elements.scenarioExampleTitle.textContent = example.title;
  elements.scenarioExampleCode.textContent = example.code;
  elements.copyExample.textContent = t.playground.copy;
  renderExampleButtons(locale);
}

function renderResources(locale) {
  const t = translations[locale];
  const previewCount = 2;
  const resourceItems = state.resourcesExpanded ? t.resources.items : t.resources.items.slice(0, previewCount);

  elements.resourcesGrid.innerHTML = resourceItems
    .map(
      (item) => `
        <article class="resource-card">
          <div class="resource-card__meta">
            <span class="resource-card__tag">${item.creator}</span>
            <span class="resource-card__tag">${item.focus}</span>
            <span class="resource-card__tag">${item.duration}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a class="resource-card__link" href="${item.url}" target="_blank" rel="noreferrer">
            ${item.cta}
          </a>
        </article>
      `
    )
    .join("");

  if (t.resources.items.length <= previewCount) {
    elements.resourcesToggle.style.display = "none";
    return;
  }

  elements.resourcesToggle.style.display = "inline-flex";
  elements.resourcesToggle.textContent = state.resourcesExpanded
    ? t.progressive.resources.showLess
    : t.progressive.resources.showMore;
}

function applyLanguage(locale) {
  const safeLocale = translations[locale] ? locale : "en";
  state.lang = safeLocale;

  try {
    localStorage.setItem("site-language", safeLocale);
  } catch (error) {
    // Ignore storage issues and keep the site usable.
  }

  renderTextContent(safeLocale);
  renderHero(safeLocale);
  renderPillars(safeLocale);
  renderGlossary(safeLocale);
  renderModeButtons(safeLocale);
  renderWorkflow(safeLocale);
  renderDocsNav(safeLocale);
  renderDocs(safeLocale);
  renderScenarioButtons(safeLocale);
  renderScenario(safeLocale);
  renderResources(safeLocale);

  elements.langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === safeLocale);
  });

  document.documentElement.lang = safeLocale;
}

elements.langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

elements.modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    state.workflowVisibleSteps = 1;
    renderModeButtons(state.lang);
    renderWorkflow(state.lang);
  });
});

elements.workflowNextStep.addEventListener("click", () => {
  const totalSteps = translations[state.lang].workflow.modes[state.mode].steps.length;
  if (state.workflowVisibleSteps < totalSteps) {
    state.workflowVisibleSteps += 1;
  } else {
    state.workflowVisibleSteps = 1;
  }

  renderWorkflow(state.lang);
});

elements.workflowToggleAll.addEventListener("click", () => {
  const totalSteps = translations[state.lang].workflow.modes[state.mode].steps.length;
  state.workflowVisibleSteps = state.workflowVisibleSteps < totalSteps ? totalSteps : 1;
  renderWorkflow(state.lang);
});

elements.docsNextStep.addEventListener("click", () => {
  const topics = translations[state.lang].docs.topics;
  const topic = topics.find((item) => item.id === state.docsTopicId) || topics[0];
  const totalSteps = topic.steps.length;

  if (state.docsVisibleSteps < totalSteps) {
    state.docsVisibleSteps += 1;
  } else {
    state.docsVisibleSteps = 1;
  }

  renderDocs(state.lang);
});

elements.docsToggleAll.addEventListener("click", () => {
  const topics = translations[state.lang].docs.topics;
  const topic = topics.find((item) => item.id === state.docsTopicId) || topics[0];
  const totalSteps = topic.steps.length;
  state.docsVisibleSteps = state.docsVisibleSteps < totalSteps ? totalSteps : 1;
  renderDocs(state.lang);
});

elements.resourcesToggle.addEventListener("click", () => {
  state.resourcesExpanded = !state.resourcesExpanded;
  renderResources(state.lang);
});

elements.exampleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.exampleMode = button.dataset.mode;
    renderScenario(state.lang);
  });
});

elements.copyExample.addEventListener("click", async () => {
  const originalText = translations[state.lang].playground.copy;
  const copiedText = translations[state.lang].playground.copied;

  try {
    await navigator.clipboard.writeText(elements.scenarioExampleCode.textContent);
    elements.copyExample.textContent = copiedText;
    window.setTimeout(() => {
      elements.copyExample.textContent = originalText;
    }, 1400);
  } catch (error) {
    elements.copyExample.textContent = originalText;
  }
});

applyLanguage(state.lang);

