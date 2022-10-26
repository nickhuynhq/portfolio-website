import { useInView } from "react-intersection-observer";
import AboutCards from "../../components/AboutCards/AboutCards";
import { BsGithub } from 'react-icons/bs';
import {MdWeb} from "react-icons/md";
import "./ProjectCard.scss";

const ProjectCard = ({ name, image, description, github, demo, techstack }) => {

  const { ref: projectRef, inView: isVisible } = useInView();

  return (
    <div className="projects-card">
        <h1 className="projects-card__heading">{name}</h1>
        <a
          className="projects-card__image-container"
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="projects-card__image"
            src={image}
            alt={`${name} Mockup`}
          />
        </a>
        <div className="projects-card__description">
          <h1 className="projects-card__heading--desktop">{name}</h1>
          <p className="projects-card__text">
            {description}
          </p>

          <h2>Tech Stack</h2>
          <div className="projects-card__tech">
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
           <MdWeb />DEMO
            </a>
            <a
              className="projects-card__button"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
            <BsGithub />GitHub
            </a>
          </div>
        </div>
      </div>
  )
}

export default ProjectCard