import React, { useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImage from "./assets/images/Profile_photo.jpg";

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
        <div className="home-content home-layout">
          <div className="home-copy">
            <h1>
              Hi, I'm <span>Sumanth</span>
            </h1>
            <h2>AI/ML Developer & Data Science Enthusiast</h2>
            <p>I build intelligent AI models and data-driven applications to solve real-world problems.</p>
            <div className="hero-stats" aria-label="Portfolio highlights">
              <div className="hero-stat">
                <strong>2+</strong>
                <span>featured AI apps</span>
              </div>
              <div className="hero-stat">
                <strong>4</strong>
                <span>core education milestones</span>
              </div>
              <div className="hero-stat">
                <strong>10+</strong>
                <span>technical skill areas</span>
              </div>
            </div>
            <div className="home-actions">
              <a
                href={`${process.env.PUBLIC_URL}/resume/SumanthsResume.pdf`}
                className="btn"
                download="SumanthsResume.pdf"
              >
                Download Resume
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="profile-photo-wrapper">
            <img src={profileImage} alt="Sumanth profile" className="profile-photo" />
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="about" data-aos="fade-up">
        <h2>About Me</h2>
        <div className="about-container">
          <div className="about-text">
            <h1>My Journey</h1>
            <p>
              👋 Hey there! I’m <b>Sumanth</b>, a passionate <b>AI/ML Developer</b> &{" "}
              <b>Data Science Enthusiast</b> who loves working with data to build smart
              applications. I specialize in <b>Machine Learning</b>, <b>Deep Learning</b>,
              and <b>Computer Vision</b> using <b>Python</b>, <b>TensorFlow</b>,{" "}
              <b>Pandas</b>, and other modern data tools.
            </p>

            <p>
              💡 My journey in tech began with curiosity — how machines can "learn" from
              data instead of just following rules. Since then, I’ve shifted my focus
              completely to <b>Data Science</b> because I enjoy finding patterns,
              solving complex problems, and building logic that makes a real difference.
            </p>
            <br />

            <div className="about-highlight">
              <p>
                🚀 Beyond just coding, I’m fascinated by how{" "}
                <b>Artificial Intelligence</b> can solve real-world challenges. I love
                exploring how data can automate tasks, predict outcomes, and build
                intelligent systems that help people.
              </p>
            </div>

            <p>
              🧠 Whether it’s designing a medical AI tool like my{" "}
              <b>Retina Disease Classifier</b> (which detects 6 diseases with 98%
              accuracy) or analyzing complex datasets, I always strive to create
              projects that are <b>smart</b>, <b>accurate</b>, and <b>impactful</b>.
            </p>

            <p>
              🌱 I’m constantly learning new algorithms, reading about AI trends, and
              experimenting with new models — because I believe <b>Data</b> has the
              power to change the future.
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
      {/* ===== SKILLS ===== */}
      <section id="skills" className="skills" data-aos="fade-up">
        <h2>Skills</h2>

        {/* Category 1: Full Stack Development */}
        <h3 className="skill-category-title">Full Stack Development</h3>
        <div className="skill-grid">
          {[
            "HTML / CSS / JavaScript",
            "React.js",
            "Flutter",
            "Firebase",
            "Java",
            "C",
            "SQL / MongoDB",
            "Python",
          ].map((skill, index) => (
            <div className="skill-box" key={index}>
              {skill}
            </div>
          ))}
        </div>

        {/* Category 2: Data Science & Machine Learning (NEW) */}
        <br />
        <h3 className="skill-category-title">Data Science & Machine Learning</h3>
        <div className="skill-grid">
          {[
            "Data Preprocessing",
            "Data Visualization",
            "NumPy",
            "pandas",
            "scikit-learn",
            "Model Training & Evaluation",
            "Deep Learning (CNN)",
            "TensorFlow (basic)",
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
    <div className="project-card">
      <img
        src={require("./AIDocument.png")}
        alt="AI Document Project Screenshot"
        className="project-image"
      />
      <h3>AI Document – Intelligent Document Q&A and Summarization</h3>
      <ul>
        <li>
          Developed an AI-based application that allows users to upload PDF or TXT documents and automatically generate summaries and answers to user queries.
        </li>
        <li>
          Implemented a Retrieval-Augmented Generation (RAG) pipeline using <b>LangChain</b>, <b>HuggingFace embeddings</b>, vector database, and <b>Ollama LLM</b>, along with a responsive <b>Streamlit</b> interface for interactive document chat.
        </li>
      </ul>
      <br></br>
      <h5>Technique used</h5>
      <div className="tech-tags">
        <span>LangChain,</span>
        <span>HuggingFace,</span>
        <span>Vector DB,</span>
        <span>Ollama,</span>
        <span>Streamlit</span>
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

        <p>
          🔗 <b>LinkedIn:</b>{" "}
          <a
            href="https://www.linkedin.com/in/sumanth-546783303"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/sumanth-546783303
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
