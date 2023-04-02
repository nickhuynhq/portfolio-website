import AboutCards from "../AboutCards/AboutCards";
import { BsGithub } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import "./ProjectCard.scss";
import { useEffect, useState } from "react";

const ProjectCard = ({ name, image, description, github, demo, techstack }) => {
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
      <div className={isMobile ? "projects-card--top": "left-animation"}>
        <h1 className={isMobile ? "projects-card__heading" : `hidden`}>
          {`${name}`}
        </h1>

        <img
          className={"projects-card__image"}
          src={image}
          alt={`${name} Mockup`}
          loading="lazy"
        />
      </div>

      <div
        className={
          isMobile
            ? "projects-card__description"
            : `projects-card__description right-animation`
        }
      >
        <h2 className="project-card__info">{isMobile ? `INFO` : name}</h2>
        <p className="projects-card__text">{description}</p>
        <h3>Tech Stack</h3>
        <div className="projects-card__tech ">
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
    </section>
  );
};

export default ProjectCard;
