import education from "../../data/education";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="education-section" data-aos="fade-up">
      <h2>
        <i className="fa-solid fa-graduation-cap"></i> Education
      </h2>

      {education.map((item) => (
        <div className="edu-card" key={item.title}>
          <h3>{item.title}</h3>
          <div className="edu-details">
            {item.details.map((detail) => (
              <p key={`${item.title}-${detail.text}`}>
                {detail.iconClass && <i className={detail.iconClass}></i>}
                {detail.text}
              </p>
            ))}
          </div>
          <p className="edu-desc">{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
