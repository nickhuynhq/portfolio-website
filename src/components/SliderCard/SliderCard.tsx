import "./SliderCard.scss";
import { motion } from "framer-motion";
import {EventTracker} from "../../utils/utils"

const SliderCard = ({ showModal, setCurrentModalProject, ...project }) => {
  
  const handleCurrentProject = () => {
    setCurrentModalProject({ ...project });
    EventTracker("project", "open project", `${project.name}`);
    showModal();
  };

  return (
    <>
      <motion.div className="slider-card">
        <div className="slider-card__image-box" onClick={handleCurrentProject}>
          <img
            className="slider-card__image"
            src={project.image}
            alt={project.name}
          />
          <div className="middle">
            <h1 className="text">INFO</h1>
          </div>
        </div>

        <div className="slider-card__info">
          <h2 className="slider-card__title">{project.name}</h2>
          <p className="slider-card__description">{project.slogan}</p>
        </div>
      </motion.div>
    </>
  );
};

export default SliderCard;
