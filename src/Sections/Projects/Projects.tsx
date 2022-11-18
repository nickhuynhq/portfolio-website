import ProjectsData from "../../data/projects.json";
import "./Projects.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {

  return (
    <section id="projects" className="projects">
      <h1 className="projects__heading">{`// My Projects`}</h1>

      {ProjectsData.map((project) => (
        <ProjectCard
          key={project.name}
          name={project.name}
          description={project.description}
          image={project.image}
          github={project.github}
          demo={project.demo}
          techstack={project.techstack}
        />
      ))}
    </section>
  );
};

export default Projects;
