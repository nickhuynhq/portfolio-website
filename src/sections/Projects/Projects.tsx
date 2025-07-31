import "./Projects.scss";
import SliderCard from "../../components/SliderCard/SliderCard";
import projects from "../../data/projects.json";
import { useInView } from "react-intersection-observer";

const Projects = ({ showModal, setCurrentModalProject }) => {
  const { ref: projectRef, inView: isVisible } = useInView();
  const projectArray = projects;

  return (
    <div id="projects" className="projects">
      <h1 className="projects__heading">{`// My Projects`}</h1>
      <div className="projects__container" ref={projectRef}>
        {projectArray.map((project, i) => (
          <SliderCard
            key={i}
            index={i}
            {...project}
            showModal={showModal}
            setCurrentModalProject={setCurrentModalProject}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
