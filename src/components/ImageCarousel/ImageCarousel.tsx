import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import projects from "../../data/projects.json";
import SliderCard from "./Slider/SliderCard";
import { MdScreenLockLandscape } from "react-icons/md";

const ImageCarousel = () => {
  const projectArray = projects;
  const [width, setWidth] = useState(0);
  const dragSlider = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string) => {
    const {current} = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === "left"){
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    if (dragSlider.current) {
      setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
    }
  }, [width]);

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
            dragConstraints={{ right: 0, left: -width }}
          >
            {projectArray.map((project, i) => (
              <SliderCard key={i} {...project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageCarousel;
