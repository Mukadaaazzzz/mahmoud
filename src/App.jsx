import React, { useEffect, useState } from 'react';

const services = [
  {
    number: '01',
    title: 'Paid media',
    description:
      'Performance campaigns across Meta, Google, and TikTok—built around clear goals and improved through thoughtful testing.',
    detail: 'Meta · Google · TikTok',
  },
  {
    number: '02',
    title: 'Social & community',
    description:
      'A consistent social presence with thoughtful content, a real point of view, and a community that wants to stick around.',
    detail: 'Strategy · Content · Growth',
  },
  {
    number: '03',
    title: 'SEO & content',
    description:
      'Search-led content that answers the right questions and builds a reliable source of organic traffic over time.',
    detail: 'Research · SEO · Analytics',
  },
  {
    number: '04',
    title: 'Email & outreach',
    description:
      'Personal, well-timed communication that turns early interest into stronger relationships and new opportunities.',
    detail: 'Email · CRM · Partnerships',
  },
];

const experience = [
  {
    date: 'JUN 2026 — SEP 2026',
    role: 'Social Media & Outreach Executive',
    company: 'MobileDoc International',
    details: [
      'Managed and scheduled social content using Meta Business Suite.',
      'Created branded campaign visuals in Canva to grow awareness of healthcare services.',
      'Connected with medical teams and healthcare professionals to build partnerships.',
      'Linked field outreach with online content and followed up on new leads.',
    ],
  },
  {
    date: 'MAY 2025 — MAR 2026',
    role: 'Digital Marketing Executive',
    company: 'Holive Payment Application',
    details: [
      'Managed Meta and Google Ads campaigns, improving cost per lead with audience refinement and A/B testing.',
      'Grew Instagram and TikTok audiences with consistent, trend-aware content.',
      'Partnered with design and sales teams on landing pages and email campaigns.',
    ],
  },
  {
    date: 'JUN 2023 — AUG 2024',
    role: 'Digital Marketing Intern',
    company: 'Mukadaz Labs · Lagos',
    details: [
      'Prepared daily ad performance reports and presented findings to management.',
      'Created social media content for Facebook and Instagram.',
    ],
  },
];

const skills = [
  ['Paid media', ['Meta Ads', 'Google Ads', 'TikTok Ads', 'A/B testing']],
  ['Organic growth', ['SEO', 'Content marketing', 'Social media', 'Community']],
  ['Email & CRM', ['Mailchimp', 'Klaviyo', 'Email sequences', 'Lead nurturing']],
  ['Measurement', ['Google Analytics 4', 'Looker Studio', 'UTM tracking']],
  ['Platforms', ['Canva', 'WordPress', 'Shopify', 'SEMrush', 'Buffer']],
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={diagonal ? 'icon icon-diagonal' : 'icon'}
    >
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  );
}

function ThemeIcon({ theme }) {
  return theme === 'dark' ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="icon">
      <circle cx="10" cy="10" r="3.5" />
      <path d="M10 1.75v1.5m0 13.5v1.5m8.25-8.25h-1.5m-13.5 0h-1.5m14.083-5.833-1.06 1.06M5.227 14.773l-1.06 1.06m11.666 0-1.06-1.06M5.227 5.227l-1.06-1.06" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="icon">
      <path d="M16.85 12.17A7.15 7.15 0 0 1 7.83 3.15a7.15 7.15 0 1 0 9.02 9.02Z" />
    </svg>
  );
}

function PortraitMark({ className = '' }) {
  return (
    <span className={`brand-mark${className ? ` ${className}` : ''}`}>
      <svg viewBox="0 0 48 48" role="img" aria-label="Hand-drawn portrait of Mahmoud">
        <path className="portrait-sketch portrait-shirt" d="M8 48c1-7 6-10 14-11l2-1 3 1c8 1 13 4 14 11" />
        <path className="portrait-sketch portrait-neck" d="m19 34 .2 5.5c2.6 2.5 6.1 2.8 9 .1l-.4-6" />
        <path className="portrait-face" d="M13 17c.4-7.8 5-12 11.2-12 6.9 0 10.7 4.5 10.6 12l-.7 9.1c-.7 7.5-5.2 12-10.3 12-5.3 0-9.6-5-10.2-12L13 17Z" />
        <path className="portrait-sketch portrait-hair" d="M12.8 19c-1.3-7.8 1.3-13 6.6-15 5.5-2.1 12.1-.1 14.3 4.5 1.2 2.3 1.3 5.5.7 9.2-1.2-1.4-2.2-3.6-2.5-5.8-3.6 2.5-8.7 3.7-14 3.1-1.1 2.1-2.8 3.5-5.1 4Z" />
        <path className="portrait-sketch portrait-line" d="M17.2 22.2c1.3-.9 2.8-.9 4.1-.1m6.6-.1c1.4-.8 2.8-.7 4 .2m-12.1 2.2.3.2m9.4-.1.3.2m-5.3 1.1c-.5 1.5-.8 2.7-1.2 3.9.7.7 1.5.9 2.4.6m-5 4.4c2 1 4.2 1 6.1-.1" />
        <path className="portrait-sketch portrait-ear" d="M13.2 21c-2.5-.8-3.5 1-2.7 4 .5 1.8 1.5 2.8 2.9 2.9m21-7c2.4-.7 3.4 1.1 2.5 4.1-.5 1.7-1.4 2.7-2.8 2.8" />
        <path className="portrait-sketch portrait-accent" d="m23 44 1 1.2 1-1.2" />
      </svg>
    </span>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <div className="eyebrow"><span />{eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Mahmoud Jibril home">
            <PortraitMark />
            <span className="brand-name">Mahmoud Jibril</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
          <nav className={`nav-links${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
            <a href="#services" onClick={closeMenu}>What I do</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#work" onClick={closeMenu}>Selected work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Let&apos;s talk <ArrowIcon diagonal />
            </a>
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <ThemeIcon theme={theme} />
            </button>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero wrap" id="top">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> Open to opportunities <span className="availability-divider">·</span> Lagos, Nigeria</div>
            <p className="hero-kicker">DIGITAL MARKETING <span>×</span> REAL GROWTH</p>
            <h1>Good marketing makes people <em>feel</em> something.</h1>
            <p className="hero-intro">
              I&apos;m Mahmoud—a digital marketer helping ambitious brands get noticed, earn trust, and turn attention into action.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="/Mahmoud_Jibril_CV.pdf" download="Mahmoud_Jibril_CV.pdf">
                Download my CV <ArrowIcon />
              </a>
              <a className="text-link" href="#work">Explore my work <ArrowIcon /></a>
            </div>
            <div className="hero-footnote"><span className="footnote-line" /> Thoughtful strategy. Measurable impact.</div>
          </div>

          <div className="hero-visual reveal" aria-label="Marketing performance highlights">
            <div className="visual-topline"><span>THE GROWTH PLAYBOOK</span><span className="visual-year">LAGOS · NG</span></div>
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-core"><PortraitMark className="portrait-mark-hero" /><small>GROWTH<br />PARTNER</small></div>
            <div className="orbit-label orbit-label-top"><span>01</span> MAKE IT MATTER</div>
            <div className="orbit-label orbit-label-right"><span>02</span> FIND YOUR PEOPLE</div>
            <div className="orbit-label orbit-label-bottom"><span>03</span> GROW WITH INTENT</div>
            <div className="visual-caption"><span className="caption-dot" /> Strategy in motion</div>
          </div>
          <div className="hero-stats reveal">
            <div className="stat"><span className="stat-value">3<span>+</span></span><span className="stat-label">years building<br />digital momentum</span></div>
            <div className="stat"><span className="stat-value">3.2<span>×</span></span><span className="stat-label">return on ad spend<br />for a fashion brand</span></div>
            <div className="stat"><span className="stat-value">4k</span><span className="stat-label">monthly readers<br />grown from zero</span></div>
            <div className="stat stat-note"><span>ONE THING I BELIEVE</span><p>Great work starts with getting to know the people you&apos;re trying to reach.</p></div>
          </div>
        </section>

        <section className="section section-services" id="services">
          <div className="wrap">
            <SectionHeading
              eyebrow="How I can help"
              title={<>The right message.<br /><span>In the right places.</span></>}
              description="An adaptable mix of creative thinking and practical marketing, shaped around what your business actually needs."
            />
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card reveal" key={service.number}>
                  <div className="service-card-top"><span>{service.number}</span><ArrowIcon diagonal /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-detail">{service.detail}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-work" id="work">
          <div className="wrap">
            <SectionHeading
              eyebrow="A few good outcomes"
              title={<>Less guesswork.<br /><span>More momentum.</span></>}
              description="A snapshot of the kind of thoughtful, measurable growth I love helping brands create."
            />
            <div className="case-grid">
              <article className="case-card case-fashion reveal">
                <div className="case-top"><span className="case-type">01 / PAID MEDIA</span><span className="case-arrow"><ArrowIcon diagonal /></span></div>
                <div className="case-art fashion-art" aria-hidden="true">
                  <div className="fashion-sun" />
                  <div className="fashion-ring" />
                  <div className="fashion-shape fashion-shape-one" />
                  <div className="fashion-shape fashion-shape-two" />
                  <span>Y / D</span>
                </div>
                <div className="case-result"><strong>3.2<span>×</span></strong><span>return on ad spend<br />in 60 days</span></div>
                <div className="case-copy"><span className="case-tag">E-commerce · Fashion</span><h3>Turning browsers into buyers.</h3><p>Meta retargeting and Google Search campaigns that helped fashion brand Yamidyn make every visit count.</p></div>
              </article>
              <article className="case-card case-health reveal">
                <div className="case-top"><span className="case-type">02 / ORGANIC GROWTH</span><span className="case-arrow"><ArrowIcon diagonal /></span></div>
                <div className="case-art health-art" aria-hidden="true">
                  <div className="health-grid" />
                  <div className="health-chart"><span /><span /><span /><span /><span /><span /><span /><span /></div>
                  <div className="health-note">steady<br />growth <b>↗</b></div>
                </div>
                <div className="case-result"><strong>4,000</strong><span>monthly visitors<br />in four months</span></div>
                <div className="case-copy"><span className="case-tag">SEO · Healthcare</span><h3>Building an audience from zero.</h3><p>A search-led content strategy that made useful healthcare information easier to find—and kept new readers coming.</p></div>
              </article>
            </div>
            <p className="case-note">*Selected campaign outcomes. Results depend on audience, offer, and investment.</p>
          </div>
        </section>

        <section className="section section-experience" id="experience">
          <div className="wrap experience-layout">
            <div className="experience-intro">
              <SectionHeading
                eyebrow="The journey so far"
                title={<>Curious by nature.<br /><span>Built by doing.</span></>}
                description="From campaign dashboards to conversations out in the field, I like understanding the whole picture."
              />
              <a className="text-link experience-link" href="/Mahmoud_Jibril_CV.pdf" download="Mahmoud_Jibril_CV.pdf">
                Download my CV <ArrowIcon />
              </a>
            </div>
            <div className="timeline">
              {experience.map((job) => (
                <article className="job reveal" key={job.company}>
                  <div className="job-marker" />
                  <div className="job-date">{job.date}</div>
                  <h3>{job.role}</h3>
                  <div className="job-company">{job.company}</div>
                  <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-toolkit" id="about">
          <div className="wrap">
            <SectionHeading
              eyebrow="The toolkit"
              title={<>A good mix of<br /><span>ideas & instruments.</span></>}
              description="The platforms are useful. Knowing what to do with them is the important part."
            />
            <div className="about-grid">
              <div className="skills-list">
                {skills.map(([label, items]) => (
                  <div className="skill-row reveal" key={label}>
                    <h3>{label}</h3><div className="skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                ))}
              </div>
              <aside className="about-card reveal">
                <span className="about-sparkle">✳</span>
                <span className="about-label">A LITTLE MORE ABOUT ME</span>
                <h3>People first.<br /><em>Always.</em></h3>
                <p>I bring curiosity, clear communication, and a genuine respect for the people behind every click.</p>
                <div className="about-facts">
                  <div><span>BA</span><p>Islamic Studies<br />Al-Hikmah University</p></div>
                  <div><span>EN · HA · YO</span><p>English, Hausa &amp; Yoruba<br />All fluent</p></div>
                </div>
                <div className="certifications"><span>ALSO LEARNING</span><p>Google Digital Marketing · Meta Associate · HubSpot Content Marketing</p></div>
              </aside>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="wrap">
            <div className="contact-card reveal">
              <div className="contact-overline"><span className="availability-dot" /> AVAILABLE FOR THE RIGHT OPPORTUNITY</div>
              <h2>Have a good feeling<br />about <em>what&apos;s next?</em></h2>
              <p>Tell me what you&apos;re building. Let&apos;s see what good marketing can do for it.</p>
              <div className="contact-actions">
                <a className="button button-light" href="mailto:ibnummiee@gmail.com?subject=Let's%20grow%20together">ibnummiee@gmail.com <ArrowIcon diagonal /></a>
                <a className="contact-secondary" href="https://wa.me/2349026697446" target="_blank" rel="noreferrer">WhatsApp <ArrowIcon diagonal /></a>
                <a className="contact-secondary" href="tel:+2347074107944">Call me <ArrowIcon diagonal /></a>
              </div>
              <span className="contact-decoration" aria-hidden="true">MJ</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <a className="brand footer-brand" href="#top"><PortraitMark /><span className="brand-name">Mahmoud Jibril</span></a>
          <span>Independent thinking. Measurable growth.</span>
          <span>© {new Date().getFullYear()} · Lagos, Nigeria</span>
        </div>
      </footer>
    </>
  );
}

export default App;
