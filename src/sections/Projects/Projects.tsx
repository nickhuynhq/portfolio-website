import "./Projects.scss";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { BsChevronDoubleDown } from "react-icons/bs";

const Projects = ({ showModal, setCurrentModalProject }) => {
  return (
    <div id="projects" className="projects">
      <h1 className="projects__heading">{`// My Projects`}</h1>

      <ImageSlider
        showModal={showModal}
        setCurrentModalProject={setCurrentModalProject}
      />
       <a className="more-arrow" href="#experience">
        <BsChevronDoubleDown />
      </a>
    </div>
  );
};

export default Projects;
