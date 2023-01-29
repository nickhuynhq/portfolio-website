import Memoji from "../../assets/images/headshot.jpeg";
import { useInView } from "react-intersection-observer";
import AboutCards from "../../components/AboutCards/AboutCards";
import { BsChevronDoubleDown } from "react-icons/bs";
import Skills from "../../data/skills.json";
import "./About.scss";

const About = () => {
  const { ref: myRef, inView: isVisible } = useInView();
  const logoArray: string[] = Skills;

  return (
    <section id="about" className="about">
      <h1
        className={
          isVisible ? `about__heading left-animation` : `about__heading hidden`
        }
      >
        {`//About Me`}
      </h1>
      <div ref={myRef} className="about__content">
        <div
          className={
            isVisible
              ? `about__profile left-animation`
              : `about__profile hidden`
          }
        >
          <img
            className="about__profile-image"
            src={Memoji}
            alt="Headshot Nicholas Huynh"
          />
          <p className="about__profile-bio">
            Fully committed to the philosophy of life-long learning, I’m a full
            stack developer with a deep passion for JavaScript, React and all
            things web development.
          </p>
          <p>
            My skills don't stop there, during the pandemic, I've helped
            numerous small businesses navigate the digital landscape by building
            their online presence. When I'm not at my computer I love to spend
            my time cycling, taking photos, listening to music, and playing
            guitar.
          </p>
        </div>
        <div
          className={
            isVisible
              ? `about__cards-container right-animation`
              : `about__cards-container hidden`
          }
        >
          <h2 style={{ fontWeight: 400 }}>My Skills</h2>
          <div className="about__cards">
            {logoArray.map((logo: string) => (
              <AboutCards key={logo} section={"about"} logo={logo} />
            ))}
          </div>
        </div>
      </div>
      <a className="more-arrow" href="#projects">
        <BsChevronDoubleDown />
      </a>
    </section>
  );
};

export default About;
