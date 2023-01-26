import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectModal.scss";

const ProjectModal = ({ project, closeModal }) => {
  return (
    <div className="project-modal">
        <div className="project-modal__overlay" onClick={closeModal}>
        </div>
        <div className="project-modal__container">
            <ProjectCard {...project}/>
        </div>
    </div>
  );
};

export default ProjectModal;