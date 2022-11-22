import ExperienceData from "../../data/experience.json";
import "./Experience.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

const Experience = () => {

  

  return (
    <section id="Experience" className="Experience">
      <h1 className="Experience__heading">{`// My Experience`}</h1>

      {ExperienceData.map((role) => (
        <ExperienceCard role={role}/>
     
      ))}
    </section>
  );
};

export default Experience;
