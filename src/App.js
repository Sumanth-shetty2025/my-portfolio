import React, { useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      {/* ===== NAVBAR ===== */}
      <header className="navbar">
        <div className="logo">Sumanth</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ===== HOME ===== */}
      <section id="home" className="home" data-aos="fade-up">
        <div className="home-content">
          <h1>
            Hi, I'm <span>Sumanth</span>
          </h1>
          <h2>Full Stack Developer | AI & ML Enthusiast</h2>
          <p>I create modern web and mobile experiences with creativity and logic.</p>
          <a href="#contact" className="btn">
            Get In Touch
          </a>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="about" data-aos="fade-up">
        <h2>About Me</h2>
        <div className="about-container">
          <div className="about-text">
            <h1>My Journey</h1>
            <p>
              👋 Hey there! I’m <b>Sumanth</b>, a passionate <b>Full Stack Developer</b> who loves
              turning creative ideas into impactful digital experiences. I specialize in building
              clean, scalable, and user-friendly <b>web</b> and <b>mobile applications</b> using{" "}
              <b>React.js</b>, <b>Flutter</b>, <b>Firebase</b>, and other modern technologies.
            </p>

            <p>
              💡 My journey in tech began with curiosity — how a few lines of code could bring ideas
              to life. Since then, I’ve focused on creating solutions that blend <b>creativity</b>,{" "}
              <b>logic</b>, and <b>innovation</b> to make technology both powerful and beautiful.
            </p>
            <br />

            <div className="about-highlight">
              <p>
                🚀 Beyond full stack development, I’m fascinated by{" "}
                <b>Artificial Intelligence</b> and <b>Machine Learning</b>. I love exploring how AI
                can enhance user experiences, automate workflows, and build intelligent systems that
                make a real impact.
              </p>
            </div>

            <p>
              🧠 Whether it’s developing a real-time multiplayer quiz app like{" "}
              <b>MindMatch</b> or designing an AI-powered retina disease classifier like{" "}
              <b>RetinaVision</b>, I always strive to create products that are{" "}
              <b>smart</b>, <b>efficient</b>, and <b>visually engaging</b>.
            </p>

            <p>
              🌱 I’m constantly learning, experimenting with new tools, and pushing creative
              boundaries — because I believe every project is an opportunity to build something
              meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section id="education" className="education-section" data-aos="fade-up">
        <h2>
          <i className="fa-solid fa-graduation-cap"></i> Education
        </h2>

        {/* Master of Computer Applications */}
        <div className="edu-card">
          <h3>Master of Computer Applications</h3>
          <div className="edu-details">
            <p>
              <i className="fa-solid fa-building-columns"></i> NMAM Institute of Technology, Nitte
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Nitte, Karnataka
            </p>
            <p>
              <i className="fa-regular fa-calendar"></i> 2024–2026
            </p>
            <p>
              CGPA:8.37
            </p>
          </div>
          <p className="edu-desc">
            Currently pursuing advanced studies in computer applications and software development.
          </p>
        </div>

        {/* Bachelor of Computer Applications */}
        <div className="edu-card">
          <h3>Bachelor of Science</h3>
          <div className="edu-details">
            <p>
              <i className="fa-solid fa-building-columns"></i>SDM College,ujire
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> ujire, Karnataka
            </p>
            <p>
              <i className="fa-regular fa-calendar"></i> 2024
            </p>
          </div>
          <p className="edu-desc">
            Graduated with CGPA: 7.87 — Affiliated to Mangalore University.
          </p>
        </div>

        {/* Pre-University Course */}
        <div className="edu-card">
          <h3>Pre-University Course (PUC) – Science Stream(PCMB)</h3>
          <div className="edu-details">
            <p>
              <i className="fa-solid fa-building-columns"></i> Govt PU College Venur
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Venur, Karnataka
            </p>
            <p>
              <i className="fa-regular fa-calendar"></i> 2021
            </p>
          </div>
          <p className="edu-desc">Secured 90.33% in PUC Board.</p>
        </div>

        {/* Class X */}
        <div className="edu-card">
          <h3>Class X – SSLC Board</h3>
          <div className="edu-details">
            <p>
              <i className="fa-solid fa-building-columns"></i> Govt.High School venur
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> venur, Karnataka
            </p>
            <p>
              <i className="fa-regular fa-calendar"></i> April 2019
            </p>
          </div>
          <p className="edu-desc">Secured 89.92% in SSLC Board.</p>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="skills" data-aos="fade-up">
        <h2>Skills</h2>
        <div className="skill-grid">
          {[
            "HTML / CSS / JavaScript",
            "React.js",
            "Flutter",
            "Firebase",
            "Python",
            "Java",
            "C",
            "AI / ML",
            "SQL / MongoDB",
          ].map((skill, index) => (
            <div className="skill-box" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="projects" data-aos="fade-up">
  <h2 className="section-title">Projects</h2>

  <div className="project-container">
    {/* MindMatch Project */}
    <div className="project-card">
      <img
        src={require("./MindMatch.png")}
        alt="MindMatch Project Screenshot"
        className="project-image"
      />
      <h3>MindMatch – Real-Time Quiz App</h3>
      <ul>
        <li>
          Built a multiplayer quiz battle app using <b>Flutter</b> and <b>Firebase</b> with
          authentication, real-time gameplay, and animated result tracking.
        </li>
        <li>
          Implemented Firestore-based match system with question sets, timers, and responsive UI
          for web and mobile.
        </li>
      </ul>
      <br></br>
      <h5>Technique used</h5>
      <div className="tech-tags">
        <span>Flutter,</span>
        <span>Firebase,</span>
        <span>Firestore,</span>
        <span>Real-time DB</span>
      </div>
    </div>

    {/* RetinaVision Project */}
    <div className="project-card">
      <img
        src={require("./RetinaProject.png")}
        alt="RetinaVision Project Screenshot"
        className="project-image"
      />
      <h3>RetinaVision – Multiple Disease Classification App</h3>
      <ul>
        <li>
          Developed an AI-based web app for automated classification of multiple retinal
          diseases using <b>EfficientNetB0</b>.
        </li>
        <li>
          Built with <b>Flask</b> and <b>TensorFlow</b>, featuring retina image validation,
          intuitive UI, and detailed prediction with confidence score.
        </li>
      </ul>
      <br></br>
      <h5>Technique used</h5>
      <div className="tech-tags">
        <span>Flask,</span>
        <span>TensorFlow,</span>
        <span>Python,</span>
        <span>AI/ML</span>
      </div>
    </div>
  </div>
</section>


      {/* ===== CONTACT ===== */}
      <section id="contact" className="contact" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Let’s connect and build something great!</p>
        <p>
          📧 <b>Email:</b>{" "}
          <a href="mailto:sumanths42424@gmail.com">sumanths42424@gmail.com</a>
        </p>
        
        <p>
          💻 <b>GitHub:</b>{" "}
          <a
            href="https://github.com/Sumanth-shetty2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Sumanth-shetty2025
          </a>
        </p>
      </section>

      {/* ===== FOOTER ===== */}
      <footer>
        <p>© 2025 Sumanth | Designed with ❤️ using React.js</p>
      </footer>
    </div>
  );
}

export default App;
