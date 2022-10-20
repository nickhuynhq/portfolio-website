import Memoji from "../../assets/images/memoji.jpeg";
import { useInView } from "react-intersection-observer";
import AboutCards from "../../components/AboutCards/AboutCards";
import "./About.scss";

const About = () => {
  const { ref: myRef, inView: isVisible } = useInView();
  const logoArray: string[] = [
    "react",
    "nextjs",
    "ts",
    "js",
    "html",
    "css",
    "sass",
    "tailwind",
    "vue",
    "node",
    "express",
    "python",
    "mysql",
    "mongodb",
  ];

  return (
    <div ref={myRef} className="about">
      <h1 className={isVisible ? `about__heading left-animation` : `about__heading`}>// About Me</h1>
      <div className="about__content">
        <div className={isVisible ? `about__profile left-animation` : `about__profile`}>
          <img
            className="about__profile-image"
            src={Memoji}
            alt="Profile Nicholas Huynh"
          />
          <p className="about__profile-bio">
            Fully committed to the philosophy of life-long learning, I’m a full
            stack developer with a deep passion for JavaScript, React and all
            things web development. Being a curious person, I’ve always loved
            solving puzzles and had a knack for troubleshooting. This led me
            into the world of tech and I have been hooked ever since. As an
            enthusiast, I am constantly online trying to seek out the latest and
            greatest, and in the process have learnt to program and create
            interesting new projects in my spare time. When I'm not at my
            computer I love to spend my time cycling, listening to music, and
            playing guitar.
          </p>
        </div>
        <div className={isVisible ? `about__cards-container right-animation` : `about__cards-container`}>
          {logoArray.map((logo: string) => (
            <AboutCards key={logo} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
