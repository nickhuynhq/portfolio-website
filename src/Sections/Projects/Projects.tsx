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

      {/* {ProjectsData.map((project) => (
        <ProjectCard
          key={project.name}
          name={project.name}
          description={project.description}
          image={project.image}
          github={project.github}
          demo={project.demo}
          techstack={project.techstack}
        />
      ))} */}
    </div>
  );
};

export default Projects;
