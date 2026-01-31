import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.timeline-item').forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.classList.add('visible');
        }
      });
      document.querySelectorAll('.section-reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.classList.add('visible');
        }
      });
      const navHeight = 80;
      const threshold = 120;
      let current = 'home';
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navHeight + threshold) current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && ['home','about','experience','projects','contact'].includes(hash)) setActiveSection(hash);
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="brand-text">Neha Pudota</span>
        </div>
        <ul className="nav-links">
          {sections.map(section => (
            <li key={section.id}>
              <a className={`nav-link ${activeSection === section.id ? 'active' : ''}`} href={`#${section.id}`}>
                {section.label}
              </a>
            </li>
          ))}
          <li>
            <a className="nav-link" href="./Neha_Pudota_resume_Jan2026.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content - All sections on one page */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content-wrapper">
            <div className="hero-container">
              <div className="hero-content">
                <h1 className="hero-title">
                  Hello, I'm <span className="highlight">Neha</span>
                </h1>
                <p className="hero-subtitle">
                  Welcome to my personal website!!
                </p>
                <a className="cta-button" href="#about">
                  Learn More About Me
                </a>
              </div>
              <div className="hero-image-container">
                <img src="./Neha_Pudota.JPG" alt="Neha Pudota" className="hero-image" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section section-reveal">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
              I am a computer science student at Purdue University. 
              Currently, I am pursuing a specialization in Machine Learning and a minor in Supply Chain Engineering Technology.
              </p>
              <p>
              I love to bake and binge watch TV shows! I have also recently discovered puzzles and picked up reading again. I am currently building a 1500 piece puzzle of the Taj Mahal!
              </p>
            </div>
          </div>
          <div className="hero-decoration">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section section-reveal">
          <h2 className="section-title">Experience</h2>
          <div className="timeline-section">
            <div className="timeline">
              {/* Halliburton */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>AI Systems Engineer Intern <span>@ Halliburton - Landmark Team</span></h4>
                  <span className="timeline-date">May 2025 - Aug. 2025, Houston, TX</span>
                  <ul>
                    <li>- Built an Agentic AI Chatbot to query Halliburton’s DSIS database, reducing average query latency by 40%</li>
                    <li>- Implemented agentic workflows for tracing and debugging; added chatbot memory enabling context-aware responses</li>
                    <li>- Containerized and deployed the server using Docker, enabling horizontal scaling to support 2k+ concurrent queries</li>
                    <li>- Integrated WebViz 3D viewer/chatbot into an Angular UI, cutting analysis workflow time by 30% with visualization</li>
                  </ul>
                </div>
              </div>
              {/* The Liberry */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Software Engineer Intern <span>@The Liberry - Startup</span></h4>
                  <span className="timeline-date">May 2025 - Aug. 2025, Houston, TX</span>
                  <ul>
                    <li>- Scraped 5k+ baby product listings (e.g., strollers) from e-commerce platforms, expanding the database by 30%</li>
                    <li>- Cleaned and standardized 10k+ records across multiple data sources using Pandas, ensuring uniform formats</li>
                    <li>- Improved dataset consistency by refining schema alignment, enabling more accurate and reliable downstream analytics</li>
                  </ul>
                </div>
              </div>
              {/* Purdue University - The Data Mine */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Software Developer <span>@ The Data Mine, Corporate Partners - Purdue University</span></h4>
                  <span className="timeline-date">Aug. 2024 - May 2025, West Lafayette, IN</span>
                  <ul>
                    <li>- Developed weed-detection models for AgRPA using Python and YOLOv8, improving herbicide-application precision</li>
                    <li>- Built semantic-segmentation/localization pipelines for multi-spectral drone imagery, boosting detection efficiency by 50%</li>
                    <li>- Worked with a cross-functional team to optimize model performance and deployment workflows for drone operations</li>
                  </ul>
                </div>
              </div>
              {/* Klein Coding Academy */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Python Course Instructor <span>@ Klein Coding Academy</span></h4>
                  <span className="timeline-date">Jun. 2023 - Jul. 2023, Klein, TX</span>
                  <ul>
                    <li>- Taught 150+ middle schoolers from 16 schools in a free Python summer camp using CMU CS Academy curriculum</li>
                    <li>- Recognized by Klein ISD Newsroom and Superintendent for impactful community engagement and course development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section section-reveal">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Java Messaging App</div>
              </div>
              <div className="project-content">
                <h3>Java Messaging App with User Management</h3>
                <span className="timeline-date">Nov. 2024</span>
                <ul>
                  <li>- Developed a thread-safe messaging app using Java Swing and a database to manage users, messages, and interactions (send, delete, block, friend).</li>
                  <li>- Designed an intuitive interface for real-time messaging and user account management.</li>
                </ul>
              </div>
            </div>
            {/* Add more projects here if you want */}
          </div>
        </section>
        {/* Skills Section */}
        <section className="skills-section section-reveal">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <span className="skill-tag dynamic-skill">React</span>
            <span className="skill-tag dynamic-skill">JavaScript</span>
            <span className="skill-tag dynamic-skill">HTML/CSS</span>
            <span className="skill-tag dynamic-skill">Node.js</span>
            <span className="skill-tag dynamic-skill">Git</span>
            <span className="skill-tag dynamic-skill">Responsive Design</span>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section section-reveal">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-intro">
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out!
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <h3>Email</h3>
                <a href="mailto:npudota@purdue.edu" className="contact-link">
                  npudota@purdue.edu
                </a>
              </div>
              <div className="contact-method">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </span>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/neha-pudota/" className="contact-link" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/neha-pudota/
                </a>
              </div>
              <div className="contact-method">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </span>
                <h3>GitHub</h3>
                <a href="https://github.com/nehap557" className="contact-link" target="_blank" rel="noopener noreferrer">
                  github.com/nehap557
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  )
}

export default App
