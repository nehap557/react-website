import './App.css'
import { useEffect } from 'react';

function App() {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.timeline-item').forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener('scroll', handleScroll);
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
              <a className="nav-link" href={`#${section.id}`}>
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
        <section id="about" className="about-section">
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
        <section id="experience" className="experience-section">
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
        <section id="projects" className="projects-section">
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
        <section className="skills-section">
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
        <section id="contact" className="contact-section">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-intro">
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out!
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Email</h3>
                <a href="mailto:npudota@purdue.edu" className="contact-link">
                  npudota@purdue.edu
                </a>
              </div>
              <div className="contact-method">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/neha-pudota/" className="contact-link" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/neha-pudota/
                </a>
              </div>
              <div className="contact-method">
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
