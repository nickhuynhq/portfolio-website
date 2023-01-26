import "./Projects.scss";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

const Projects = ({ showModal, setCurrentModalProject }) => {
  return (
    <div id="projects" className="projects">
      <h1 className="projects__heading">{`// My Projects`}</h1>

      <ImageCarousel
        showModal={showModal}
        setCurrentModalProject={setCurrentModalProject}
      />
    </div>
  );
};

export default Projects;
