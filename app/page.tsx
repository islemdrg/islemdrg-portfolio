'use client'

// Les textes sont dans lib/content.ts. Ce fichier ne contient que la mise en page.
// Texts live in lib/content.ts. This file only contains the layout.

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Award, Check, Download, ExternalLink, Mail, Menu, Send, X } from 'lucide-react'
import { content, cvFiles, links, sectionIds, type Lang } from '@/lib/content'

function Section({ number, id, children }: { number: string; id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="portfolio-section">
      <div className="section-number">{number}</div>
      {children}
    </section>
  )
}

export default function Page() {
  const [lang, setLang] = useState<Lang>('en')
  const [light, setLight] = useState(false)
  const [menu, setMenu] = useState(false)
  const [sent, setSent] = useState(false)
  const [selected, setSelected] = useState(0)
  const reduce = useReducedMotion()
  const t = content[lang]
  const project = t.projectData[selected]

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Numérotation automatique : si une section n'est pas dans sectionIds, on n'affiche rien (pas de "00 / undefined").
  const index = (id: string) => sectionIds.indexOf(id)
  const num = (id: string) => (index(id) < 0 ? '' : String(index(id) + 1).padStart(2, '0'))
  const eyebrow = (id: string) => (index(id) < 0 ? '' : `${num(id)} / ${t.nav[index(id)] ?? ''}`)

  const reveal = {
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.65 },
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`)
    const subject = encodeURIComponent(String(data.get('subject')))
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className={light ? 'site light' : 'site'}>
      <header className="nav">
        <a className="wordmark" href="#top">
          ISLEM<span>·</span>DRG
        </a>
        <button
          className="menu-button"
          aria-label={t.menu}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
        <nav className={menu ? 'nav-links open' : 'nav-links'} aria-label="Main">
          {t.nav.map((item, i) => (
            <a key={sectionIds[i]} href={`#${sectionIds[i]}`} onClick={() => setMenu(false)}>
              {String(i + 1).padStart(2, '0')} {item}
            </a>
          ))}
          <button className="theme-toggle" onClick={() => setLight(!light)} aria-label={light ? t.themeToDark : t.themeToLight}>
            {light ? 'DARK' : 'LIGHT'}
          </button>
          <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} aria-label={t.switchLang} lang={lang === 'en' ? 'fr' : 'en'}>
            {lang === 'en' ? 'FR' : 'EN'}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="network" aria-hidden="true">
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            {Array.from({ length: 15 }).map((_, i) => (
              <i key={i} style={{ '--i': i } as React.CSSProperties} />
            ))}
          </div>
          <motion.div {...reveal} className="hero-copy">
            <div className="hero-portrait">
              <img src="/profile-islem.jpg" alt="Portrait of Islem Darghouth" />
            </div>
            <p className="eyebrow">{t.heroKicker}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-sub">{t.heroSub}</p>
            <div className="availability">
              <span />
              {t.availability}
            </div>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                {t.projects} <ArrowUpRight data-icon="inline-end" />
              </a>
              <a className="button secondary" href={cvFiles[lang]} download>
                {t.cv} <Download data-icon="inline-end" />
              </a>
            </div>
            <div className="socials">
              <a href={links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </section>

        <Section number={num('about')} id="about">
          <motion.div {...reveal} className="section-grid">
            <div>
              <p className="eyebrow">{eyebrow('about')}</p>
              <h2>{t.aboutTitle}</h2>
            </div>
            <div>
              <p className="body-large">{t.about}</p>
              <div className="stats">
                {t.stats.map(([n, label]) => (
                  <div className="stat" key={label}>
                    <strong>{n}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div {...reveal} className="about-bring">
            <p className="eyebrow">{t.bring}</p>
            <div className="three-columns">
              {t.columns.map(([title, text], i) => (
                <article key={title}>
                  <span className="mini-index">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <p className="recommendation">
              <Check aria-hidden="true" /> {t.recommendation}
            </p>
          </motion.div>
        </Section>

        <Section number={num('skills')} id="skills">
          <motion.div {...reveal}>
            <div className="section-heading">
              <div>
                <p className="eyebrow">{eyebrow('skills')}</p>
                <h2>{t.skillsTitle}</h2>
              </div>
              <p className="skills-intro">{t.skillsIntro}</p>
            </div>
            <div className="skill-marquee" aria-label="Technical skills">
              <div className="skill-track">
                {Object.entries(t.skills).flatMap(([group, values]) =>
                  values.map((value) => (
                    <span className="skill-pill" key={`${group}-${value}`}>
                      <i />
                      {value}
                    </span>
                  )),
                )}
              </div>
              <div className="skill-track reverse" aria-hidden="true">
                {Object.entries(t.skills).flatMap(([group, values]) =>
                  values.map((value) => (
                    <span className="skill-pill" key={`reverse-${group}-${value}`}>
                      <i />
                      {value}
                    </span>
                  )),
                )}
              </div>
            </div>
            <div className="skill-orbit" aria-hidden="true">
              <div className="orbit-core">
                <span>AI</span>
                <small>TOOLKIT</small>
              </div>
              <div className="orbit-label label-one">LANGUAGE</div>
              <div className="orbit-label label-two">VISION</div>
              <div className="orbit-label label-three">PRODUCT</div>
            </div>
          </motion.div>
        </Section>

        <Section number={num('experience')} id="experience">
          <motion.div {...reveal}>
            <p className="eyebrow">{eyebrow('experience')}</p>
            <h2>{t.experienceTitle}</h2>
            <div className="timeline">
              {t.experience.map((item) => (
                <article className="timeline-item" key={item.role}>
                  <div className="timeline-date">{item.date}</div>
                  <div>
                    <h3>{item.role}</h3>
                    <p className="org">{item.org}</p>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </Section>

        <Section number={num('projects')} id="projects">
          <motion.div {...reveal}>
            <p className="eyebrow">{eyebrow('projects')}</p>
            <h2>{t.projectsTitle}</h2>
            <div className="project-grid">
              {t.projectData.map((p, i) => (
                <button
                  className={`project-card ${i === 0 ? 'featured' : ''}`}
                  key={p.title}
                  onClick={() => setSelected(i)}
                  aria-pressed={selected === i}
                >
                  <span className="card-top">
                    <span>{p.period}</span>
                    <ArrowUpRight aria-hidden="true" />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="card-bottom">
                    <span>{p.result}</span>
                    <span className="card-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <div className="case-study" aria-live="polite">
              <span>
                {t.projectLabel} {String(selected + 1).padStart(2, '0')}
              </span>
              <div>
                <strong>{project.title}</strong>
                <p>{project.desc}</p>
              </div>
              <div>
                {project.role && (
                  <p>
                    <strong>{t.roleLabel}:</strong> {project.role}
                  </p>
                )}
                <div className="chips">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.github && (
                  <a className="linkedin-link project-link" href={project.github} target="_blank" rel="noreferrer">
                    {t.githubLabel} <ArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </Section>

        <Section number={num('credentials')} id="credentials">
          <motion.div {...reveal}>
            <p className="eyebrow">{eyebrow('credentials')}</p>
            <h2>{t.credentialsTitle}</h2>
            <div className="credentials-grid">
              <article className="medal">
                <span className="credential-mark" aria-hidden="true">
                  <Award />
                </span>
                <h3>{t.medal}</h3>
                <p>{t.medalText}</p>
              </article>
              <article className="certs">
                <div className="certs-head">
                  <p className="eyebrow">{t.member}</p>
                  <a className="linkedin-link" href={links.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
                {t.certs.map((c, i) => (
                  <div className="cert" key={c.title} style={{ '--cert-index': i } as React.CSSProperties}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <strong>
                      {c.title} · {c.issuer}
                    </strong>
                    {c.url ? (
                      <a href={c.url} target="_blank" rel="noreferrer" aria-label={`${t.view}: ${c.title}`}>
                        {t.view} <ExternalLink aria-hidden="true" />
                      </a>
                    ) : (
                      <span aria-hidden="true" />
                    )}
                  </div>
                ))}
              </article>
            </div>
          </motion.div>
        </Section>

        <Section number={num('contact')} id="contact">
          <motion.div {...reveal} className="contact-grid">
            <div>
              <p className="eyebrow">{eyebrow('contact')}</p>
              <h2>{t.contactTitle}</h2>
              <p className="body-large">{t.contactText}</p>
              <a className="email-link" href={`mailto:${links.email}`}>
                <Mail aria-hidden="true" /> {links.email}
              </a>
            </div>
            <form onSubmit={submit}>
              <label>
                {t.name}
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                {t.email}
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label>
                {t.subject}
                <select name="subject">
                  {t.options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
              <label>
                {t.message}
                <textarea name="message" rows={4} required />
              </label>
              <button className="button primary" type="submit">
                {sent ? t.sent : t.send} <Send data-icon="inline-end" />
              </button>
              <p className="form-note">{t.formNote}</p>
            </form>
          </motion.div>
        </Section>
      </main>

      <footer>
        <span>© 2026 Islem Darghouth</span>
        <span>{t.footer}</span>
        <a href="#top">{t.back} ↑</a>
      </footer>
    </div>
  )
}
