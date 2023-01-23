import "./ImageCarousel.scss";
import data from "../../data/projects.json";
import { useEffect, useState } from "react";

const ImageCarousel = () => {
  const [onDragX, setOnDragX] = useState(0);
  const [onClickX, setOnClickX] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleOnMouseDown = (e: any) => {
    if(onDragX === 0 ) return
    console.log("Click", e.clientX)
    setOnClickX(e.clientX);
  };

  const handleMouseDrag = (e: any) => {
    setOnDragX(e.clientX);
  };

  const handleScroll = (e: any) => {
    console.log("SCROLL", e)
  }

  useEffect(() => {
    const mouseDelta = onClickX - onDragX,
      maxDelta = window.innerWidth;

    setPercentage((mouseDelta / maxDelta) * -100) 
    console.log("PERCENTAGE",percentage)
  }, [onDragX, onClickX, percentage]);

  return (
    <div
      className="carousel-container"
      onMouseDown={handleOnMouseDown}
      onDrag={handleMouseDrag}
      onScroll={handleScroll}
      style={{transform:`translate(${percentage}%, -50%)` }}
    >
      {data.map((project, i) => (
        <img
          key={i}
          className="carousel-container--image"
          src={project.image}
          alt={project.name}
          draggable="true"
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
