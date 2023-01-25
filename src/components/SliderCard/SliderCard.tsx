import React from "react";
import "./SliderCard.scss";
import { motion } from "framer-motion";

const SliderCard = ({ ...project }) => {
  return (
    <motion.div className="slider-card">
      <img
        className="slider-card__image"
        src={project.image}
        alt={project.name}
      />
      <div className="slider-card__info">
        <h2 className="slider-card__title">{project.name}</h2>
      </div>
    </motion.div>
  );
};

export default SliderCard;
