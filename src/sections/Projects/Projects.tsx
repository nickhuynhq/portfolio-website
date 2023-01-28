import "./Projects.scss";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

const Projects = ({ showModal, setCurrentModalProject }) => {
  return (
    <div id="projects" className="projects">
      <h1 className="projects__heading">{`// My Projects`}</h1>

      <ImageSlider
        showModal={showModal}
        setCurrentModalProject={setCurrentModalProject}
      />
    </div>
  );
};

export default Projects;
