import { useEffect, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isAboutPage = window.location.pathname.replace(/\/+$/, "") === "/about";
  const homeHref = isAboutPage ? "/#home" : "#home";

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (isAboutPage) document.title = "About Her Legacy Agric";
  }, [isAboutPage]);

  const pageNavigation = [
    { label: "Home", href: homeHref },
    { label: "About", href: "/about" },
    {
      label: "Our work",
      href: isAboutPage ? "/#our-work" : "#our-work",
    },
    {
      label: "Impact",
      href: isAboutPage ? "/#impact" : "#impact",
    },
  ];

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href={homeHref} aria-label="Her Legacy Agric home">
          <span className="brand-mark">
            <img src="/her-legacy-logo.png" alt="" />
          </span>
          <span className="brand-name">
            <span>Her Legacy</span>
            <span className="brand-subtitle">Agric</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {pageNavigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={
                (item.label === "About" && isAboutPage) ||
                (item.label === "Home" && !isAboutPage)
                  ? "page"
                  : undefined
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="nav-cta"
            href={isAboutPage ? "/#contact" : "#contact"}
            onClick={() => setMenuOpen(false)}
          >
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      {isAboutPage ? (
        <main id="main-content">
          <section className="about-story" aria-labelledby="about-story-title">
            <div className="about-story-inner">
              <div className="about-story-copy">
                <p className="about-story-eyebrow">
                  <span aria-hidden="true" />
                  About Her Legacy Agric
                </p>
                <h1 id="about-story-title">
                  From crops
                  <br />
                  to <em>finished</em>
                  <br />
                  products.
                </h1>
                <div className="about-story-narrative">
                  <p>
                    Her Legacy Agric is a start-up Zambian agribusiness that
                    grows crops and processes them into finished products.
                  </p>
                  <p>
                    Its first farming plans are for maize and soya beans on
                    leased, irrigated land near Lusaka, with farming set to
                    begin in the first half of 2027.
                  </p>
                </div>
              </div>

              <aside className="about-story-details" aria-label="First farming plans">
                <div className="about-story-mark" aria-hidden="true">
                  <span>01</span>
                  <span className="about-story-sun" />
                  <span className="about-story-furrows" />
                </div>
                <p className="about-story-details-label">The first farming step</p>
                <dl>
                  <div>
                    <dt>Location</dt>
                    <dd>Near Lusaka, Zambia</dd>
                  </div>
                  <div>
                    <dt>Land</dt>
                    <dd>Leased and irrigated</dd>
                  </div>
                  <div>
                    <dt>Crops</dt>
                    <dd>Maize and soya beans</dd>
                  </div>
                  <div>
                    <dt>Starting</dt>
                    <dd>First half of 2027</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </section>
          <section
            className="about-purpose"
            aria-labelledby="about-purpose-title"
          >
            <div className="about-purpose-inner">
              <header className="about-purpose-heading">
                <p className="about-purpose-eyebrow">Our direction</p>
                <h2 id="about-purpose-title">Vision &amp; mission</h2>
              </header>

              <div className="about-purpose-content">
                <article className="about-purpose-vision">
                  <h3>Vision</h3>
                  <blockquote>
                    <p>
                      Food security for Zambians, and recognition as a leading
                      pioneer of quality, nutritious, affordable products.
                    </p>
                  </blockquote>
                </article>

                <article className="about-purpose-mission">
                  <h3>Mission</h3>
                  <p>
                    To grow crops and process them into finished products,
                    beginning with plans to farm maize and soya beans in Lusaka the first half of 2027.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </main>
      ) : (
      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-rule" aria-hidden="true" />
              Rooted in purpose. Growing for generations.
            </p>
            <h1 id="hero-title">
              We grow more
              <br />
              than crops.
              <br />
              <span>We grow possibility.</span>
            </h1>
            <p className="hero-description">
              Her Legacy Agric is cultivating a future where women, land, and
              local communities can thrive together.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#our-work">
                Discover our work <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="/about">
                Our story <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-icon" aria-hidden="true">✳</span>
              <span>For the earth. For her. For what comes next.</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Her Legacy Agric brand mark" role="img">
            <div className="art-sun" aria-hidden="true" />
            <div className="art-orbit orbit-one" aria-hidden="true" />
            <div className="art-orbit orbit-two" aria-hidden="true" />
            <div className="art-stamp">
              <span>LAND • LEGACY • LIFE</span>
            </div>
            <div className="logo-plaque">
              <img src="/her-legacy-logo.png" alt="" />
            </div>
            <div className="field field-back" aria-hidden="true" />
            <div className="field field-mid" aria-hidden="true" />
            <div className="field field-front" aria-hidden="true" />
            <p className="art-caption">
              <span>01 /</span> A future worth cultivating
            </p>
          </div>
          <div className="hero-index" aria-hidden="true">
            <span>01</span>
            <span className="index-line" />
            <span>03</span>
          </div>
        </section>

        <section className="what-we-do" id="our-work" aria-labelledby="what-we-do-title">
          <div className="what-we-do-inner">
            <div className="what-we-do-copy">
              <p className="what-we-do-eyebrow">What we do</p>
              <h2 id="what-we-do-title">From crops to finished products.</h2>
              <p className="what-we-do-description">
                We grow crops and process them into finished products.
              </p>
            </div>

            <ol className="work-flow" aria-label="Our work">
              <li>
                <span className="work-step-number" aria-hidden="true">01</span>
                <span className="work-step-copy">
                  <span className="work-step-title">Grow</span>
                  <span className="work-step-detail">Maize and soya beans</span>
                </span>
              </li>
              <li>
                <span className="work-step-number" aria-hidden="true">02</span>
                <span className="work-step-copy">
                  <span className="work-step-title">Process</span>
                  <span className="work-step-detail">Into finished products</span>
                </span>
              </li>
            </ol>

            <p className="what-we-do-note">
              Preparing to farm on leased, irrigated land near Lusaka, starting
              in the first half of 2027.
            </p>
          </div>
        </section>

        <section className="roadmap" aria-labelledby="roadmap-title">
          <div className="roadmap-inner">
            <header className="roadmap-heading">
              <p className="roadmap-eyebrow">The road ahead</p>
              <h2 id="roadmap-title">
                A growing legacy,
                <br />
                <span>step by step.</span>
              </h2>
              <p>
                Four phases for growing our work, from farming to reaching
                customers.
              </p>
            </header>

            <ol className="roadmap-timeline" aria-label="Our four-phase roadmap">
              <li className="roadmap-phase">
                <span className="roadmap-marker" aria-hidden="true">01</span>
                <article className="roadmap-content">
                  <p className="roadmap-phase-label">Phase one</p>
                  <h3>Farming</h3>
                  <p>
                    Begin growing maize and soya beans on leased, irrigated land
                    near Lusaka, with crops sold to the Food Reserve Agency,
                    manufacturers and supermarkets.
                  </p>
                  <p className="roadmap-status roadmap-status-planned">
                    Starting in the first half of 2027
                  </p>
                </article>
              </li>
              <li className="roadmap-phase">
                <span className="roadmap-marker" aria-hidden="true">02</span>
                <article className="roadmap-content">
                  <p className="roadmap-phase-label">Phase two</p>
                  <h3>Processing</h3>
                  <p>
                    Build our own plant to process crops into finished products.
                  </p>
                  <p className="roadmap-status">Coming soon</p>
                </article>
              </li>
              <li className="roadmap-phase">
                <span className="roadmap-marker" aria-hidden="true">03</span>
                <article className="roadmap-content">
                  <p className="roadmap-phase-label">Phase three</p>
                  <h3>Diversification</h3>
                  <p>
                    Add wheat, groundnuts, onions, tomatoes and other
                    vegetables, alongside products such as cereal and peanut
                    butter.
                  </p>
                  <p className="roadmap-status">Coming soon</p>
                </article>
              </li>
              <li className="roadmap-phase">
                <span className="roadmap-marker" aria-hidden="true">04</span>
                <article className="roadmap-content">
                  <p className="roadmap-phase-label">Phase four</p>
                  <h3>Expansion</h3>
                  <p>
                    Bring our products closer to customers through branded
                    stores in under-served areas of the country.
                  </p>
                  <p className="roadmap-status">Coming soon</p>
                </article>
              </li>
            </ol>
          </div>
        </section>

        <section className="impact" id="impact" aria-labelledby="impact-title">
          <div className="impact-inner">
            <header className="impact-heading">
              <p className="impact-eyebrow">Our intended impact</p>
              <h2 id="impact-title">
                What we’re
                <br />
                working toward.
              </h2>
              <p>
                These are the goals guiding our plans, not outcomes already
                achieved.
              </p>
            </header>

            <ol className="impact-list">
              <li>
                <span className="impact-number" aria-hidden="true">01</span>
                <div>
                  <h3>Food security</h3>
                  <p>
                    Aim to contribute to food security by growing staple crops
                    locally.
                  </p>
                </div>
              </li>
              <li>
                <span className="impact-number" aria-hidden="true">02</span>
                <div>
                  <h3>Jobs</h3>
                  <p>Create jobs as Her Legacy Agric grows.</p>
                </div>
              </li>
              <li>
                <span className="impact-number" aria-hidden="true">03</span>
                <div>
                  <h3>Less dependence on imports</h3>
                  <p>
                    Support less dependence on imports through local growing
                    and processing.
                  </p>
                </div>
              </li>
              <li>
                <span className="impact-number" aria-hidden="true">04</span>
                <div>
                  <h3>A stronger Zambian brand</h3>
                  <p>
                    Build a stronger Zambian brand for locally grown and
                    processed products.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="home-cta" id="contact" aria-labelledby="home-cta-title">
          <div className="home-cta-inner">
            <div className="home-cta-copy">
              <p className="home-cta-eyebrow">Invest &amp; partner</p>
              <h2 id="home-cta-title">Your dreams will always live on.</h2>
            </div>
            <a className="home-cta-link" href="/invest-and-partner">
              Explore investing &amp; partnering
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      )}
    </>
  );
}

export default App;
