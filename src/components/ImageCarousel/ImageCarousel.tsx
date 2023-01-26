import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import projects from "../../data/projects.json";
import SliderCard from "../SliderCard/SliderCard";
import "./ImageCarousel.scss";

const ImageCarousel = ({ showModal, setCurrentModalProject }) => {
  const projectArray = projects;
  const [width, setWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const isMobile = screenWidth <= 720;
  const dragSlider = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string) => {
    if (dragSlider.current) {
      const increment = isMobile ? window.innerWidth - 30 : window.innerWidth/2; // This value can be adjusted to change the amount of scrolling
      if (direction === "left") {
        dragSlider.current.scrollTo({
          left: dragSlider.current.scrollLeft - increment,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        dragSlider.current.scrollTo({
          left: dragSlider.current.scrollLeft + increment,
          behavior: "smooth",
        });
      }
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
        <motion.div className="slider-box--items" ref={dragSlider}>
          <motion.div
            className="slider-box--item"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {projectArray.map((project, i) => (
              <SliderCard
                key={i}
                {...project}
                showModal={showModal}
                setCurrentModalProject={setCurrentModalProject}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="slider-box--button">
        <button
          className="slider-button"
          onClick={() => handleScroll("left")}
        >{`<<`}</button>
        <button
          className="slider-button"
          onClick={() => handleScroll("right")}
        >{`>>`}</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
