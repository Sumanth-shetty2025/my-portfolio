import skills from "../../data/skills";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <h2>Skills</h2>

      {skills.map((skillCategory, categoryIndex) => (
        <div key={skillCategory.category}>
          {categoryIndex > 0 && <br />}
          <h3 className="skill-category-title">{skillCategory.category}</h3>
          <div className="skill-grid">
            {skillCategory.items.map((skill, index) => (
              <div className="skill-box" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
