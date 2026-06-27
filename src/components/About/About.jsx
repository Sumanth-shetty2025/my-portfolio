import "./About.css";

function About() {
  return (
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
  );
}

export default About;
