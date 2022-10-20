import Memoji from "../../assets/images/memoji.jpeg";
import AboutCards from "../../components/AboutCards/AboutCards";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__heading">// About Me</h1>
      <div className="about__profile">
        <img className="about__profile-image" src={Memoji} alt="Profile Pic" />
        <p className="about__profile-bio">
          Fully committed to the philosophy of life-long learning, I’m a full
          stack developer with a deep passion for JavaScript, React and all
          things web development. Being a curious person, I’ve always loved
          solving puzzles and had a knack for troubleshooting. This led me into
          the world of tech and I have been hooked ever since. As an enthusiast,
          I am constantly online trying to seek out the latest and greatest, and
          in the process have learnt to program and create interesting new
          projects in my spare time. When I'm not at my computer I love to spend
          my time cycling, listening to music, and playing guitar.
        </p>
      </div>
      <div className="about__cards-container">
        <AboutCards />
      </div>
    </div>
  );
};

export default About;
