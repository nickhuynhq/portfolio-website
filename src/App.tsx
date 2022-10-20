import { useInView } from "react-intersection-observer";
import "./App.scss";
import Memoji from "./assets/images/memoji.jpeg"
import Navigation from "./components/Navigation/Navigation";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";

function App() {
  const { ref: myRef, inView: isVisible } = useInView();
  console.log(isVisible)
  return (
    <div className="App">
      <ParticlesBackground />
      <Navigation />
      <main className="main">
        <section className="section" id="about">
         <h1>About Me</h1>
          <div>
            <img src={Memoji} alt="Profile Pic"/>
            <p>
              Fully committed to the philosophy of life-long learning, I’m a
              full stack developer with a deep passion for JavaScript, React and
              all things web development. Being a curious person, I’ve always
              loved solving puzzles and had a knack for troubleshooting. This
              led me into the world of tech and I have been hooked ever since.
              As an enthusiast, I am constantly online trying to seek out the
              latest and greatest, and in the process have learnt to program and
              create interesting new projects in my spare time. When I'm not at
              my computer I love to spend my time cycling, listening to music,
              and playing guitar.
            </p>
          </div>
          <div>{/* tech stack goes here */}</div>
        </section>
        <section ref={myRef} className="section" id="projects">
          Projects
          {isVisible ? "Yes" : "No"}
        </section>
        <section className="section" id="contact">
          Contact Me
        </section>
      </main>
      <section>Footer</section>
    </div>
  );
}

export default App;
