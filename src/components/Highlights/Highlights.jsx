import highlights from "../../data/highlights";
import "./Highlights.css";

function Highlights() {
  return (
    <section id="highlights" className="highlights" data-aos="fade-up">
      <h2>Portfolio Highlights</h2>
      <p className="section-intro">
        A quick view of what this portfolio currently features across projects, skills, and presentation.
      </p>

      <div className="highlight-grid">
        {highlights.map((highlight) => (
          <div className="highlight-card" key={highlight.title}>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
