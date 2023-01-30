import "./SliderCard.scss";
import { handleEventTracking } from "../../utils/utils";

const SliderCard = ({
  showModal,
  setCurrentModalProject,
  index,
  isVisible,
  ...project
}) => {
  const handleCurrentProject = () => {
    setCurrentModalProject({ ...project });
    handleEventTracking("Project", "click", project.name);
    showModal();
  };

  return (
    <>
      <div
        className={
          isVisible ? "slider-card slider-animation" : "slider-card hidden"
        }
        style={{ animationDelay: `${(index+1) * 200}ms` }}
      >
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
      </div>
    </>
  );
};

export default SliderCard;
