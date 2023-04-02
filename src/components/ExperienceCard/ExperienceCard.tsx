
import "./ExperienceCard.scss";

const ExperienceCard = ({ role }) => {
  return (
    <section className="experience-card">
      <div className="experience-card__info">
        <h2 className="experience-card__title">{role.title}</h2>
        <h3 className="experience-card__company">{role.company}</h3>
        <p>
          {role.start_date} - {role.end_date}
        </p>
        <ul className="experience-card__list">
          {role.description.map((point: String, index: number) => (
            <li key={index} className="experience-card__list-item">
              <p>
                <strong style={{marginRight:"1rem"}}>{">"}</strong>
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <img
        className="experience-card__image"
        src={role.image}
        alt={role.company}
        loading="lazy"
      />
    </section>
  );
};

export default ExperienceCard;
