import ProjectsData from "../../data/projects.json";
import "./Projects.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

const Projects = () => {

  return (
    <div id="projects" className="projects">
      <h1 className="projects__heading">{`// My Projects`}</h1>

      <ImageCarousel />

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
