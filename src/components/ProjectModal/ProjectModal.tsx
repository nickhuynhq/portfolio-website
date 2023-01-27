import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectModal.scss";

const ProjectModal = ({ project, closeModal }) => {
  return (
    <div className="project-modal">
      <div className="project-modal__overlay" onClick={closeModal}></div>
      <div className="project-modal__container">
        <div
          className="project-modal__close-button"
          onClick={closeModal}
          title="Close Button"
        >
          X
        </div>
        <ProjectCard {...project} />
      </div>
    </div>
  );
};

export default ProjectModal;
