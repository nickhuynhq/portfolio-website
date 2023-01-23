import "./ImageCarousel.scss";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <h1>{direction === "next" ? ">>" : "<<"}</h1>
    </button>
  );
}