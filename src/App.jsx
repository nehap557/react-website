import './App.css'
import { useEffect, useRef, useState } from 'react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const roles = [
  'Software Engineer',
  'AI Systems Builder',
  'Machine Learning Enthusiast',
  'Puzzle Addict',
]

const experience = [
  {
    company: 'IBM',
    role: 'Software Development Engineer Co-op Intern',
    date: 'Aug 2026 – Dec 2026',
    place: 'Austin, TX',
    current: true,
    tech: ['C/C++', 'Java/Kotlin', 'FIDO2', 'IPC', 'Cryptography'],
    bullets: [
      'Developing and refactoring enterprise passkey provider prototypes for Windows and Android platform applications',
      'Redesigning Windows credential provider UI and implementing TPM-based credential activation service workflows',
      'Designing inter-process communication between Windows credential providers and TPM activation services for activation',
      'Implementing FIDO credential registration and device attestation using Android Keystore and Play Store integration',
    ],
  },
  {
    company: 'Bank of New York',
    role: 'Engineering Intern',
    date: 'May 2026 – Aug 2026',
    place: 'Pittsburgh, PA',
    tech: ['JavaScript', 'Node.js', 'ServiceNow API'],
    bullets: [
      'Developed a JavaScript-based AI agent to generate ServiceNow change plans from historical RFCs',
      'Automated ServiceNow change request creation via ServiceNow APIs, reducing manual effort by **30–50%**',
      'Optimized LLM prompts and retrieval pipelines to improve change plan accuracy and consistency',
    ],
  },
  {
    company: 'Halliburton – Landmark',
    role: 'AI Systems Engineering Intern',
    date: 'May 2025 – Aug 2025',
    place: 'Houston, TX',
    tech: ['Python', 'SQL', 'FastAPI', 'Docker', 'LangChain'],
    bullets: [
      'Built an Agentic AI Chatbot to query Halliburton’s DSIS database, reducing average query latency by **40%**',
      'Implemented agentic workflows for tracing and debugging; added chatbot memory enabling context-aware responses',
      'Containerized and deployed the server using Docker, enabling horizontal scaling to support **2k+ concurrent queries**',
      'Integrated WebViz 3D viewer/chatbot into an Angular UI, cutting analysis workflow time by **30%** with visualization',
    ],
  },
  {
    company: 'The Liberry',
    role: 'Software Engineering Intern',
    date: 'Jul 2025 – Sep 2025',
    place: 'Remote',
    tech: ['Python', 'Scrapy', 'Selenium', 'Amazon API', 'Pandas'],
    bullets: [
      'Scraped **5k+ baby product listings** (e.g., strollers) from e-commerce platforms, expanding the database by **30%**',
      'Cleaned and standardized **10k+ records** across multiple data sources using Pandas, ensuring uniform formats',
      'Improved dataset consistency by refining schema alignment, enabling more accurate and reliable downstream analytics',
    ],
  },
  {
    company: 'The Data Mine – Purdue University',
    role: 'Software Developer, Corporate Partners',
    date: 'Aug 2024 – May 2025',
    place: 'West Lafayette, IN',
    tech: ['Python', 'YOLOv8'],
    bullets: [
      'Developed weed-detection models for AgRPA using Python and YOLOv8, improving herbicide-application precision',
      'Built semantic-segmentation/localization pipelines for multi-spectral drone imagery, boosting detection efficiency by **50%**',
      'Worked with a cross-functional team to optimize model performance and deployment workflows for drone operations',
    ],
  },
  {
    company: 'Klein Coding Academy',
    role: 'Python Course Instructor',
    date: 'Jun 2023 – Jul 2023',
    place: 'Klein, TX',
    tech: ['Python', 'CMU CS Academy'],
    bullets: [
      'Taught **150+ middle schoolers** from 16 schools in a free Python summer camp using CMU CS Academy curriculum',
      'Recognized by Klein ISD Newsroom and Superintendent for impactful community engagement and course development',
    ],
  },
]

const extracurriculars = [
  {
    org: 'Google Developer Group',
    role: 'Backend Developer',
    tech: ['Firebase', 'Firestore', 'Auth', 'Storage'],
    bullets: [
      'Designed an initial backend schema to support normalized course data, prerequisites, and user profiles',
      'Planned integration with Firebase, enabling secure data management, workflows, and AI-driven recommendation caching',
    ],
  },
  {
    org: 'Hack the Future',
    role: 'Developer',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    bullets: [
      'Developed a mobile-friendly educational web app with categorized lessons, videos, and user progress tracking',
      'Collaborated with stakeholders to design content workflows and assessment features that support staff-driven updates',
    ],
  },
]

const projects = [
  {
    title: 'Crypto Simulator',
    sub: 'Browser-based trading simulator',
    href: 'https://github.com/Arshiapat/Her-kathon',
    img: './image.png',
    tech: ['React 18', 'CoinGecko API', 'localStorage'],
    bullets: [
      'A financial education tool for women to learn and practice crypto trading with simulated USD and live market prices. No wallet or blockchain connection required.',
      'Virtual balance, buy/sell for BTC/ETH/SOL/DOGE, portfolio value chart, safety checklist with flash cards, crypto chatbot, and transaction history, all persisted in localStorage.',
    ],
  },
  {
    title: 'Java Messaging App',
    sub: 'Nov 2024 · User management',
    img: './java_project.png',
    tech: ['Java', 'Swing', 'Database'],
    bullets: [
      'Developed a thread-safe messaging app using Java Swing and a database to manage users, messages, and interactions (send, delete, block, friend).',
      'Designed an intuitive interface for real-time messaging and user account management.',
    ],
  },
]

const skillGroups = [
  { title: 'Languages', items: ['Python', 'Java', 'JavaScript/TypeScript', 'C/C++', 'R', 'HTML/CSS'] },
  { title: 'Frameworks', items: ['FastAPI', 'React', 'Angular', 'Node.js', 'LangChain', 'LangGraph'] },
  { title: 'AI / ML', items: ['PyTorch', 'YOLOv8', 'Pandas', 'NumPy', 'Matplotlib'] },
  { title: 'Tools', items: ['Docker', 'Kubernetes', 'Selenium', 'Scrapy', 'REST APIs', 'Protobuf'] },
  { title: 'Dev Environment', items: ['Git', 'VS Code', 'IntelliJ', 'Jupyter Notebook', 'Unix/Windows CLI'] },
]

const courses = [
  'OOP – Java (CS 180)',
  'Programming in C (CS 240)',
  'Discrete Mathematics (CS 182)',
  'Computer Architecture (CS 250)',
  'Data Structures & Algorithms (CS 251)',
  'Systems Programming (CS 252)',
]

// Renders **bold** segments inside a string
function RichText({ text }) {
  return text.split('**').map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
  )
}

function Typewriter({ words }) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    const delay = deleting ? 35 : text === word ? 1600 : 70
    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex(i => i + 1)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, index, words])

  return (
    <span className="typewriter">
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  )
}

function Chips({ items }) {
  return (
    <div className="chips">
      {items.map(t => (
        <span className="chip" key={t}>{t}</span>
      ))}
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const glowRef = useRef(null)

  // Scroll progress + active nav link
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0)

      let current = 'home'
      sections.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 160) current = id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Cursor spotlight
  useEffect(() => {
    const move = e => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`
      }
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div className="app">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="aurora" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
        <span className="grid-overlay" />
      </div>
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />

      {/* Navigation */}
      <nav className="navbar">
        <a className="nav-brand" href="#home">
          <span className="brand-mark">N</span>
          <span className="brand-text">Neha Pudota</span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {sections.map(s => (
            <li key={s.id}>
              <a
                className={`nav-link ${activeSection === s.id ? 'active' : ''}`}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="nav-link nav-resume"
              href="./Neha_Pudota_resume_Jan2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <main className="main-content">
        {/* Hero */}
        <section id="home" className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <span className="eyebrow">
                <span className="pulse-dot" /> Open to opportunities
              </span>
              <h1 className="hero-title">
                Hi, I’m <span className="gradient-text">Neha</span>
              </h1>
              <p className="hero-subtitle">
                <Typewriter words={roles} />
              </p>
              <p className="hero-description">
                CS student at Purdue building agentic AI systems, computer-vision
                pipelines, and secure credential tooling. Currently a software
                co-op at IBM.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#experience">See my work</a>
                <a
                  className="btn btn-ghost"
                  href="./Neha_Pudota_resume_Jan2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume ↗
                </a>
              </div>
            </div>
            <div className="hero-image-container">
              <div className="ring ring-1" />
              <div className="ring ring-2" />
              <img src="./Neha_Pudota.JPG" alt="Neha Pudota" className="hero-image" />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section reveal">
          <h2 className="section-title"><span>01</span> About me</h2>
          <div className="about-grid">
            <div className="glass about-text">
              <p>
                I’m a computer science student at Purdue University
                (B.S. expected Dec 2027) with a specialization in Machine Learning
                and a minor in Supply Chain Engineering Technology. I’m also a
                Semester Honors recipient.
              </p>
              <p>
                I like building things that sit between AI and real systems: agentic
                chatbots over enterprise databases, drone-imagery vision models, and
                FIDO2/TPM-backed passkey flows.
              </p>
              <p>
                Outside of code I love to bake and binge TV shows. I’ve also
                recently picked up puzzles and reading again, and I’m currently
                building a 1500-piece puzzle of the Taj Mahal.
              </p>
            </div>
            <div className="glass edu-card">
              <span className="card-label">Education</span>
              <h3>Purdue University</h3>
              <p className="muted">B.S. Computer Science · Minor in Supply Chain Engineering Technology</p>
              <p className="muted">West Lafayette, IN · Dec 2027</p>
              <span className="card-label small">Relevant coursework</span>
              <Chips items={courses} />
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <h2 className="section-title reveal"><span>02</span> Experience</h2>
          <div className="timeline">
            {experience.map(job => (
              <article className="timeline-item reveal" key={job.company + job.date}>
                <span className={`timeline-dot ${job.current ? 'current' : ''}`} />
                <div className="glass timeline-content">
                  <div className="job-head">
                    <div>
                      <h3>{job.company}</h3>
                      <p className="job-role">{job.role}</p>
                    </div>
                    <div className="job-meta">
                      <span className="job-date">
                        {job.current && <span className="badge">Current</span>}
                        {job.date}
                      </span>
                      <span className="job-place">{job.place}</span>
                    </div>
                  </div>
                  <ul className="bullets">
                    {job.bullets.map(b => (
                      <li key={b}><RichText text={b} /></li>
                    ))}
                  </ul>
                  <Chips items={job.tech} />
                </div>
              </article>
            ))}
          </div>

          <h3 className="subsection-title reveal">Extracurriculars</h3>
          <div className="extra-grid">
            {extracurriculars.map(x => (
              <article className="glass extra-card reveal" key={x.org}>
                <h3>{x.org}</h3>
                <p className="job-role">{x.role}</p>
                <ul className="bullets">
                  {x.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <Chips items={x.tech} />
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <h2 className="section-title reveal"><span>03</span> Projects</h2>
          <div className="projects-grid">
            {projects.map(p => {
              const Wrapper = p.href ? 'a' : 'div'
              const props = p.href
                ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
                : {}
              return (
                <Wrapper className="glass project-card reveal" key={p.title} {...props}>
                  <div className="project-image">
                    <img src={p.img} alt={p.title} />
                    {p.href && <span className="project-arrow">↗</span>}
                  </div>
                  <div className="project-content">
                    <h3>{p.title}</h3>
                    <span className="muted">{p.sub}</span>
                    <ul className="bullets">
                      {p.bullets.map(b => <li key={b}>{b}</li>)}
                    </ul>
                    <Chips items={p.tech} />
                  </div>
                </Wrapper>
              )
            })}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <h2 className="section-title reveal"><span>04</span> Technical skills</h2>
          <div className="skills-grid">
            {skillGroups.map(g => (
              <div className="glass skill-group reveal" key={g.title}>
                <span className="card-label">{g.title}</span>
                <div className="chips">
                  {g.items.map(i => (
                    <span className="chip chip-hover" key={i}>{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section reveal">
          <h2 className="section-title"><span>05</span> Get in touch</h2>
          <div className="glass contact-card">
            <p className="contact-intro">
              I’m always interested in new opportunities and exciting projects.
              Feel free to reach out!
            </p>
            <div className="contact-methods">
              <a className="contact-method" href="mailto:npudota@purdue.edu">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <span className="contact-name">Email</span>
                <span className="contact-value">npudota@purdue.edu</span>
              </a>
              <a className="contact-method" href="https://www.linkedin.com/in/neha-pudota/" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </span>
                <span className="contact-name">LinkedIn</span>
                <span className="contact-value">linkedin.com/in/neha-pudota</span>
              </a>
              <a className="contact-method" href="https://github.com/nehap557" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </span>
                <span className="contact-name">GitHub</span>
                <span className="contact-value">github.com/nehap557</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Neha Pudota · Built with React + Vite</span>
      </footer>
    </div>
  )
}

export default App
