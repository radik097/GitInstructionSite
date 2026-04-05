import { useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

function formatTemplate(template, params) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(params[key] ?? ""));
}

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem("site-language");
    return translations[saved] ? saved : "ru";
  } catch {
    return "ru";
  }
}

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("site-theme");
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {
    // Ignore storage issues and fall back to system preference.
  }

  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [lang, setLang] = useState(getInitialLanguage);
  const [theme, setTheme] = useState(getInitialTheme);
  const [mode, setMode] = useState("gui");
  const [workflowVisibleSteps, setWorkflowVisibleSteps] = useState(1);
  const [resourcesExpanded, setResourcesExpanded] = useState(false);

  const [docsTopicId, setDocsTopicId] = useState("what");
  const [docsVisibleSteps, setDocsVisibleSteps] = useState(1);

  const [scenarioId, setScenarioId] = useState("start");
  const [exampleMode, setExampleMode] = useState("gui");
  const [copied, setCopied] = useState(false);

  const [openGlossaryTerm, setOpenGlossaryTerm] = useState(null);

  const t = translations[lang] || translations.en;
  const workflowMode = t.workflow.modes[mode];

  const workflowTotalSteps = workflowMode.steps.length;
  const workflowSteps = workflowMode.steps.slice(0, workflowVisibleSteps);
  const workflowReasons = workflowMode.reasons.slice(0, Math.max(1, Math.min(workflowVisibleSteps, workflowMode.reasons.length)));

  const docsTopics = t.docs.topics;
  const currentDocsTopic = docsTopics.find((item) => item.id === docsTopicId) || docsTopics[0];
  const docsTotalSteps = currentDocsTopic.steps.length;
  const docsSteps = currentDocsTopic.steps.slice(0, docsVisibleSteps);

  const scenarios = t.playground.scenarios;
  const currentScenario = scenarios.find((item) => item.id === scenarioId) || scenarios[0];
  const scenarioExample = currentScenario.examples[exampleMode];

  const visibleResources = useMemo(() => {
    return resourcesExpanded ? t.resources.items : t.resources.items.slice(0, 2);
  }, [resourcesExpanded, t.resources.items]);

  useEffect(() => {
    document.body.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    try {
      localStorage.setItem("site-theme", theme);
    } catch {
      // Ignore storage errors.
    }
  }, [theme]);

  function changeLanguage(nextLang) {
    const safeLang = translations[nextLang] ? nextLang : "en";
    setLang(safeLang);
    try {
      localStorage.setItem("site-language", safeLang);
    } catch {
      // Ignore storage errors.
    }

    if (!translations[safeLang].docs.topics.some((item) => item.id === docsTopicId)) {
      setDocsTopicId(translations[safeLang].docs.topics[0].id);
      setDocsVisibleSteps(1);
    }

    if (!translations[safeLang].playground.scenarios.some((item) => item.id === scenarioId)) {
      setScenarioId(translations[safeLang].playground.scenarios[0].id);
      setExampleMode("gui");
    }
  }

  async function onCopyExample() {
    try {
      await navigator.clipboard.writeText(scenarioExample.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <noscript>
        <div className="noscript-banner">
          Please enable JavaScript to use the language switcher and interactive GitHub lessons.
          Включите JavaScript, чтобы работали переключение языка и интерактивные уроки по GitHub.
          Povolte JavaScript, aby fungovalo prepinani jazyka a interaktivni lekce o GitHubu.
        </div>
      </noscript>

      <div className="page-shell">
        <header className="hero">
          <div className="hero__backdrop hero__backdrop--left"></div>
          <div className="hero__backdrop hero__backdrop--right"></div>

          <nav className="topbar">
            <a className="brand" href="#top">
              <span className="brand__mark">GH</span>
              <span className="brand__text">GitHub Compass</span>
            </a>

            <div className="topbar__links" aria-label="Main navigation">
              <a className="topbar__link" href="#glossary">Glossary</a>
              <a className="topbar__link" href="#workflow">Workflow</a>
              <a className="topbar__link" href="#docs">Docs</a>
              <a className="topbar__link" href="#resources">Videos</a>
            </div>

            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              title={theme === "dark" ? "Light theme" : "Dark theme"}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>

            <div className="lang-switcher" aria-label="Language switcher">
              {[
                ["ru", "RU"],
                ["cs", "CZ"],
                ["en", "EN"],
                ["mock", "SM"],
              ].map(([code, label]) => (
                <button
                  key={code}
                  className={`lang-switcher__button ${lang === code ? "is-active" : ""}`.trim()}
                  data-lang={code}
                  type="button"
                  onClick={() => changeLanguage(code)}
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>

          <section className="hero__content" id="top">
            <div className="hero__copy">
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1>{t.hero.title}</h1>
              <p className="hero__lead">{t.hero.description}</p>
              <div className="hero__actions">
                <a className="button button--primary" href="#glossary">{t.hero.primaryAction}</a>
                <a className="button button--ghost" href="#resources">{t.hero.secondaryAction}</a>
              </div>
            </div>

            <div className="hero__panel">
              <div className="panel-card panel-card--terminal">
                <div className="panel-card__header">
                  <span className="panel-card__dot"></span>
                  <span className="panel-card__dot"></span>
                  <span className="panel-card__dot"></span>
                </div>
                <pre className="hero-console"><code>{t.hero.console.join("\n")}</code></pre>
              </div>

              <div className="hero__stats">
                {t.hero.stats.map((stat) => (
                  <article className="hero-stat" key={`${stat.value}-${stat.label}`}>
                    <div className="hero-stat__value">{stat.value}</div>
                    <div className="hero-stat__label">{stat.label}</div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </header>

        <main>
          <section className="section section--surface" id="overview">
            <div className="section__heading">
              <p className="section__eyebrow">{t.overview.eyebrow}</p>
              <h2>{t.overview.title}</h2>
              <p>{t.overview.description}</p>
            </div>
            <div className="pillars">
              {t.overview.pillars.map((pillar) => (
                <article className="pillar-card" key={`${pillar.icon}-${pillar.title}`}>
                  <div className="pillar-card__icon">{pillar.icon}</div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="glossary">
            <div className="section__heading">
              <p className="section__eyebrow">{t.glossary.eyebrow}</p>
              <h2>{t.glossary.title}</h2>
              <p>{t.glossary.description}</p>
            </div>
            <div className="accordion-grid">
              {t.glossary.items.map((item) => {
                const isOpen = openGlossaryTerm === item.term;
                return (
                  <article className="glossary-item" key={item.term}>
                    <button
                      className="glossary-item__summary"
                      type="button"
                      onClick={() => setOpenGlossaryTerm(isOpen ? null : item.term)}
                    >
                      <span>
                        <span className="glossary-item__term">{item.term}</span>
                        <span className="glossary-item__hint">{item.hint}</span>
                      </span>
                      <span className={`glossary-item__toggle ${isOpen ? "is-open" : ""}`.trim()}>+</span>
                    </button>
                    {isOpen ? <div className="glossary-item__content">{item.body}</div> : null}
                  </article>
                );
              })}
            </div>
          </section>

          <section className="section section--surface" id="workflow">
            <div className="section__heading">
              <p className="section__eyebrow">{t.workflow.eyebrow}</p>
              <h2>{t.workflow.title}</h2>
              <p>{t.workflow.description}</p>
            </div>

            <div className="mode-toggle" role="tablist" aria-label="Workflow mode">
              {Object.entries(t.workflow.modes).map(([modeId, item]) => (
                <button
                  key={modeId}
                  className={`mode-toggle__button ${mode === modeId ? "is-active" : ""}`.trim()}
                  data-mode={modeId}
                  type="button"
                  onClick={() => {
                    setMode(modeId);
                    setWorkflowVisibleSteps(1);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="workflow-grid">
              <div className="workflow-steps">
                <div className="workflow-steps__title-wrap">
                  <h3>{workflowMode.title}</h3>
                  <p>{workflowMode.description}</p>
                </div>

                <div className="workflow-steps__list">
                  {workflowSteps.map((step, index) => (
                    <article className="workflow-step" key={`${step.title}-${index}`}>
                      <div className="workflow-step__number">{index + 1}</div>
                      <div className="workflow-step__text">
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="workflow-controls">
                  <p className="workflow-controls__counter">
                    {formatTemplate(t.progressive.workflow.counter, {
                      current: workflowVisibleSteps,
                      total: workflowTotalSteps,
                    })}
                  </p>
                  <div className="workflow-controls__actions">
                    <button
                      className="workflow-controls__button"
                      type="button"
                      onClick={() => {
                        setWorkflowVisibleSteps((prev) => (prev < workflowTotalSteps ? prev + 1 : 1));
                      }}
                    >
                      {workflowVisibleSteps < workflowTotalSteps
                        ? t.progressive.workflow.nextStep
                        : t.progressive.workflow.restart}
                    </button>
                    <button
                      className="workflow-controls__button workflow-controls__button--ghost"
                      type="button"
                      onClick={() => {
                        setWorkflowVisibleSteps((prev) => (prev < workflowTotalSteps ? workflowTotalSteps : 1));
                      }}
                    >
                      {workflowVisibleSteps < workflowTotalSteps
                        ? t.progressive.workflow.showAll
                        : t.progressive.workflow.showLess}
                    </button>
                  </div>
                </div>
              </div>

              <aside className="workflow-sidebar">
                <div className="insight-card">
                  <h3>{t.workflow.sidebarTitle}</h3>
                  <ul className="reason-list">
                    {workflowReasons.map((reason) => (
                      <li key={reason}>{reason}</li>
                    ))}
                  </ul>
                </div>
                <div className="insight-card">
                  <h3>{t.workflow.whenTitle}</h3>
                  <p>{workflowMode.when}</p>
                </div>
              </aside>
            </div>
          </section>

          <section className="section" id="docs">
            <div className="section__heading">
              <p className="section__eyebrow">{t.docs.eyebrow}</p>
              <h2>{t.docs.title}</h2>
              <p>{t.docs.description}</p>
            </div>

            <div className="docs-layout">
              <div className="docs-nav">
                {docsTopics.map((topic) => (
                  <button
                    key={topic.id}
                    className={`docs-nav__button ${docsTopicId === topic.id ? "is-active" : ""}`.trim()}
                    type="button"
                    onClick={() => {
                      setDocsTopicId(topic.id);
                      setDocsVisibleSteps(1);
                    }}
                  >
                    <strong>{topic.title}</strong>
                    <span>{topic.teaser}</span>
                  </button>
                ))}
              </div>

              <article className="docs-card">
                <div className="docs-card__header">
                  <p className="docs-card__label">{t.docs.currentLabel}</p>
                  <h3>{currentDocsTopic.title}</h3>
                  <p>{currentDocsTopic.summary}</p>
                </div>

                <ul className="docs-card__points">
                  {currentDocsTopic.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="docs-steps">
                  {docsSteps.map((step) => (
                    <article className="docs-step" key={step.title}>
                      <h4 className="docs-step__title">{step.title}</h4>
                      <p className="docs-step__description">{step.description}</p>
                    </article>
                  ))}
                </div>

                <div className="docs-controls">
                  <p className="docs-controls__counter">
                    {formatTemplate(t.docs.counter, { current: docsVisibleSteps, total: docsTotalSteps })}
                  </p>
                  <div className="docs-controls__actions">
                    <button
                      className="docs-controls__button"
                      type="button"
                      onClick={() => setDocsVisibleSteps((prev) => (prev < docsTotalSteps ? prev + 1 : 1))}
                    >
                      {docsVisibleSteps < docsTotalSteps ? t.docs.nextStep : t.docs.restart}
                    </button>
                    <button
                      className="docs-controls__button docs-controls__button--ghost"
                      type="button"
                      onClick={() => setDocsVisibleSteps((prev) => (prev < docsTotalSteps ? docsTotalSteps : 1))}
                    >
                      {docsVisibleSteps < docsTotalSteps ? t.docs.showAll : t.docs.showLess}
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="section" id="playground">
            <div className="section__heading">
              <p className="section__eyebrow">{t.playground.eyebrow}</p>
              <h2>{t.playground.title}</h2>
              <p>{t.playground.description}</p>
            </div>

            <div className="scenario-layout">
              <div className="scenario-selector">
                {scenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    className={`scenario-selector__button ${scenarioId === scenario.id ? "is-active" : ""}`.trim()}
                    type="button"
                    onClick={() => {
                      setScenarioId(scenario.id);
                      setExampleMode("gui");
                    }}
                  >
                    <strong>{scenario.title}</strong>
                    <span>{scenario.teaser}</span>
                  </button>
                ))}
              </div>

              <div className="scenario-card">
                <div className="scenario-card__header">
                  <div>
                    <p className="scenario-card__label">{t.playground.currentScenarioLabel}</p>
                    <h3>{currentScenario.title}</h3>
                  </div>
                  <span className="scenario-card__badge">{currentScenario.badge}</span>
                </div>

                <div className="scenario-card__body">
                  <div className="scenario-card__explanation">
                    <p>{currentScenario.summary}</p>
                    <ol className="scenario-points">
                      {currentScenario.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="scenario-card__example">
                    <div className="example-switch">
                      {Object.entries(currentScenario.examples).map(([modeId]) => (
                        <button
                          key={modeId}
                          className={`example-switch__button ${exampleMode === modeId ? "is-active" : ""}`.trim()}
                          type="button"
                          onClick={() => setExampleMode(modeId)}
                        >
                          {t.workflow.modes[modeId].label}
                        </button>
                      ))}
                    </div>

                    <div className="example-output">
                      <p className="example-output__title">{scenarioExample.title}</p>
                      <pre><code>{scenarioExample.code}</code></pre>
                      <button className="copy-button" type="button" onClick={onCopyExample}>
                        {copied ? t.playground.copied : t.playground.copy}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section--surface" id="resources">
            <div className="section__heading">
              <p className="section__eyebrow">{t.resources.eyebrow}</p>
              <h2>{t.resources.title}</h2>
              <p>{t.resources.description}</p>
            </div>

            <div className="resources-grid">
              {visibleResources.map((item) => (
                <article className="resource-card" key={`${item.title}-${item.creator}`}>
                  <div className="resource-card__meta">
                    <span className="resource-card__tag">{item.creator}</span>
                    <span className="resource-card__tag">{item.focus}</span>
                    <span className="resource-card__tag">{item.duration}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a className="resource-card__link" href={item.url} target="_blank" rel="noreferrer">
                    {item.cta}
                  </a>
                </article>
              ))}
            </div>

            {t.resources.items.length > 2 ? (
              <div className="resources-controls">
                <button
                  className="resources-controls__button"
                  type="button"
                  onClick={() => setResourcesExpanded((prev) => !prev)}
                >
                  {resourcesExpanded ? t.progressive.resources.showLess : t.progressive.resources.showMore}
                </button>
              </div>
            ) : null}
          </section>
        </main>

        <footer className="footer">
          <p>{t.footer.note}</p>
        </footer>
      </div>
    </>
  );
}
