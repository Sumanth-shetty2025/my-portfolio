import { useState } from "react";
import projects from "../../data/projects";
import "./Projects.css";
import Retina1 from "../../assets/images/Retina1.png";
import Retina2 from "../../assets/images/Retina2.png";
import Retina3 from "../../assets/images/Retina3.png";
import Retina4 from "../../assets/images/Retina4.png";
import Retina5 from "../../assets/images/Retina5.png";
import Retina6 from "../../assets/images/Retina6.png";
import Retina7 from "../../assets/images/Retina7.png";

function Projects() {
  const [currentRetinaIndex, setCurrentRetinaIndex] = useState(0);
  const [currentDocumentIndex, setCurrentDocumentIndex] = useState(0);

  const retinaImages = [
    { src: Retina1, alt: "RetinaVision screenshot 1" },
    { src: Retina2, alt: "RetinaVision screenshot 2" },
    { src: Retina3, alt: "RetinaVision screenshot 3" },
    { src: Retina4, alt: "RetinaVision screenshot 4" },
    { src: Retina5, alt: "RetinaVision screenshot 5" },
    { src: Retina6, alt: "RetinaVision screenshot 6" },
    { src: Retina7, alt: "RetinaVision screenshot 7" },
  ];

  const documentImages = projects[1]?.galleryImages ?? [];

  const showNextRetinaImage = () => {
    setCurrentRetinaIndex((currentIndex) => (currentIndex + 1) % retinaImages.length);
  };

  const setRetinaImage = (index) => {
    setCurrentRetinaIndex(index);
  };

  const showNextDocumentImage = () => {
    if (documentImages.length === 0) {
      return;
    }

    setCurrentDocumentIndex((currentIndex) => (currentIndex + 1) % documentImages.length);
  };

  const setDocumentImage = (index) => {
    setCurrentDocumentIndex(index);
  };

  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2 className="section-title">Projects</h2>

      <div className="project-container">
        {projects.map((project, projectIndex) => {
          if (projectIndex === 0) {
            return (
              <div className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <ul>
                  {project.descriptions.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
                <br></br>
                <h5>Technique used</h5>
                <div className="tech-tags">
                  {project.techTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="retina-gallery" aria-label="RetinaVision image gallery">
                  <div className="retina-gallery-preview">
                    <button
                      type="button"
                      className="retina-gallery-arrow retina-gallery-arrow-left"
                      onClick={() =>
                        setCurrentRetinaIndex(
                          (currentIndex) =>
                            (currentIndex - 1 + retinaImages.length) % retinaImages.length
                        )
                      }
                      aria-label="Show previous RetinaVision image"
                    >
                      <span aria-hidden="true">‹</span>
                    </button>
                    <button
                      type="button"
                      className="retina-gallery-arrow"
                      onClick={showNextRetinaImage}
                      aria-label="Show next RetinaVision image"
                    >
                      <span aria-hidden="true">›</span>
                    </button>
                    <img
                      src={retinaImages[currentRetinaIndex].src}
                      alt={retinaImages[currentRetinaIndex].alt}
                      className="retina-gallery-image retina-gallery-image-main"
                      loading="eager"
                    />
                  </div>

                  <div className="retina-gallery-dots" aria-label="RetinaVision image navigation">
                    {retinaImages.map((image, index) => (
                      <button
                        type="button"
                        className={`retina-gallery-dot${index === currentRetinaIndex ? " is-active" : ""}`}
                        key={image.alt}
                        onClick={() => setRetinaImage(index)}
                        aria-label={`Show ${image.alt}`}
                        aria-pressed={index === currentRetinaIndex}
                      >
                        <span className="sr-only">{image.alt}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          if (projectIndex === 1) {
            return (
              <div className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <ul>
                  {project.descriptions.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
                <br></br>
                <h5>Technique used</h5>
                <div className="tech-tags">
                  {project.techTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="retina-gallery" aria-label="AI Document image gallery">
                  <div className="retina-gallery-preview">
                    <button
                      type="button"
                      className="retina-gallery-arrow retina-gallery-arrow-left"
                      onClick={() =>
                        setCurrentDocumentIndex(
                          (currentIndex) =>
                            (currentIndex - 1 + documentImages.length) % documentImages.length
                        )
                      }
                      aria-label="Show previous AI Document image"
                    >
                      <span aria-hidden="true">‹</span>
                    </button>
                    <button
                      type="button"
                      className="retina-gallery-arrow"
                      onClick={showNextDocumentImage}
                      aria-label="Show next AI Document image"
                    >
                      <span aria-hidden="true">›</span>
                    </button>
                    <img
                      src={documentImages[currentDocumentIndex]?.src}
                      alt={documentImages[currentDocumentIndex]?.alt}
                      className="retina-gallery-image retina-gallery-image-main"
                      loading="eager"
                    />
                  </div>

                  <div className="retina-gallery-dots" aria-label="AI Document image navigation">
                    {documentImages.map((image, index) => (
                      <button
                        type="button"
                        className={`retina-gallery-dot${index === currentDocumentIndex ? " is-active" : ""}`}
                        key={image.alt}
                        onClick={() => setDocumentImage(index)}
                        aria-label={`Show ${image.alt}`}
                        aria-pressed={index === currentDocumentIndex}
                      >
                        <span className="sr-only">{image.alt}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div className="project-card" key={project.title}>
              <img src={project.image} alt={project.alt} className="project-image" />
              <h3>{project.title}</h3>
              <ul>
                {project.descriptions.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
              <br></br>
              <h5>Technique used</h5>
              <div className="tech-tags">
                {project.techTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
