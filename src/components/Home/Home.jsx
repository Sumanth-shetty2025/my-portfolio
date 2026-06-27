import profileImage from "../../assets/images/Profile_photo.webp";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home" data-aos="fade-up">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Sumanth</span>
        </h1>
        <h2>AI/ML Developer & Data Science Enthusiast</h2>
        <div className="profile-photo-wrapper">
          <img
            src={profileImage}
            alt="Sumanth profile"
            className="profile-photo"
          />
        </div>
        <p>I build intelligent AI models and data-driven applications to solve real-world problems.</p>
        <div className="home-actions">
          <a href="/resume/SumanthsResume.pdf" className="btn" download>
            <svg
              aria-hidden="true"
              className="button-icon"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            Download Resume
          </a>
          <a href="#contact" className="btn btn-secondary">
            <svg
              aria-hidden="true"
              className="button-icon"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16v12H4V6Zm0 0 8 7 8-7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            Get In Touch
          </a>
        </div>
        <div className="social-icons" aria-label="Social links">
          <a
            href="https://github.com/Sumanth-shetty2025"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.09.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 5.98c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92v2.85c0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/sumanth-546783303"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path
                d="M6.94 8.75H3.75V20h3.19V8.75ZM5.35 4A1.84 1.84 0 1 0 5.3 7.68 1.84 1.84 0 0 0 5.35 4Zm14.9 9.55c0-3.02-1.61-4.43-3.76-4.43a3.24 3.24 0 0 0-2.93 1.61h-.04V8.75h-3.06V20h3.19v-5.56c0-1.47.28-2.89 2.1-2.89 1.79 0 1.81 1.68 1.81 2.98V20h3.19v-6.45Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="mailto:sumanths42424@gmail.com" aria-label="Email">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path
                d="M4 6h16v12H4V6Zm0 0 8 7 8-7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
