import ExperienceData from "../../data/experience.json";
import "./Experience.scss";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

const Experience = () => {

  return (
    <div id="experience" className="experience">
      <h1 className="experience__heading">{`// My Experience`}</h1>

      {ExperienceData.map((role) => 
        <ExperienceCard key={role.company} role={role}/>
      )}
    </div>
  );
};

export default Experience;
