import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import projects from "../../data/projects.json";
import SliderCard from "./Slider/SliderCard";

const ImageCarousel = () => {
  const projectArray = projects;
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  const handleScroll = (direction) => {};

  return (
    <div className="slider">
      <div className="slider-box">
        <div className="slideer-box--button">
          <button onClick={() => handleScroll("left")}>{`<<`}</button>
          <button onClick={() => handleScroll("right")}>{`>>`}</button>
        </div>

        <motion.div className="slider-box--items" ref={dragSlider}>
          <motion.div
            ref={dragSlider}
            className="slider-box--item"
            drag="x"
            dragConstraints={{right: 0, left: -width}}
          >
            {projectArray.map((project, i) => (
              <SliderCard key={i}/>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageCarousel;
