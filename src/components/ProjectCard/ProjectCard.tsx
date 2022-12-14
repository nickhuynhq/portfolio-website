import { useInView } from "react-intersection-observer";
import AboutCards from "../../components/AboutCards/AboutCards";
import { BsGithub } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import "./ProjectCard.scss";
import { useEffect, useState } from "react";

const ProjectCard = ({ name, image, description, github, demo, techstack }) => {
  const { ref: projectRef, inView: isVisible } = useInView();
  const [width, setWidth] = useState<number>(window.innerWidth);
  const isMobile = width <= 1280;

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <section className="projects-card">
      <h1
        className={
          isMobile
            ? "projects-card__heading"
            : isVisible
            ? `projects-card__heading left-animation`
            : `projects-card__heading hidden`
        }
      >
        {`${name}`}
      </h1>
      <a href={demo} className="projects-card__image-container" target="_blank" rel="noopener noreferrer">
        <img
          className={
            isMobile
              ? "projects-card__image"
              : isVisible
              ? `projects-card__image left-animation`
              : `projects-card__image hidden`
          }
          src={image}
          alt={`${name} Mockup`}
        />
      </a>

      <div
        ref={projectRef}
        className={
          isMobile
            ? "projects-card__description"
            : isVisible
            ? `projects-card__description right-animation`
            : `projects-card__description hidden`
        }
      >
        <h2 className="project-card__info">INFO.</h2>
        <p className="projects-card__text">{description}</p>
        <h2 className="mobile">Tech Stack</h2>
        <div className="projects-card__tech mobile">
          {techstack.map((logo: string) => (
            <AboutCards key={logo} section={"projects"} logo={logo} />
          ))}
        </div>

        <div className="projects-card__button-container">
          <a
            className="projects-card__button"
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdWeb />
            DEMO
          </a>
          <a
            className="projects-card__button"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
            GitHub
          </a>
        </div>
      </div>
      <div
        className={
          isMobile
            ? "projects-card__tech desktop"
            : isVisible
            ? `projects-card__tech right-animation desktop`
            : `projects-card__tech hidden`
        }
      >
        {techstack.map((logo: string) => (
          <AboutCards key={logo} section={"projects"} logo={logo} />
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
