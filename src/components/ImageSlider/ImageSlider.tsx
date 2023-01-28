import { useState, useRef } from "react";

import projects from "../../data/projects.json";
import SliderCard from "../SliderCard/SliderCard";
import "./ImageSlider.scss";

const ImageSlider = ({ showModal, setCurrentModalProject }) => {
  const projectArray = projects;
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const isMobile = screenWidth <= 720;

  const dragSlider = useRef<HTMLDivElement>(null);


  const handleScroll = (direction: string) => {
    if (dragSlider.current) {
      const increment = isMobile
        ? window.innerWidth * 0.915
        : window.innerWidth / 2; // This value can be adjusted to change the amount of scrolling
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

  return (
    <div className="slider">
      <div className="slider-box">
        <div className="slider-box--items" ref={dragSlider}>
          <div
            className="slider-box--item"
          >
            {projectArray.map((project, i) => (
              <SliderCard
                key={i}
                {...project}
                showModal={showModal}
                setCurrentModalProject={setCurrentModalProject}
              />
            ))}
          </div>
        </div>
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

export default ImageSlider;
