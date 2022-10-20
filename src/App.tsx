import { useInView } from "react-intersection-observer";
import About from "./Sections/About/About";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";

function App() {
  const { ref: myRef, inView: isVisible } = useInView();
  return (
    <div className="App">
      <ParticlesBackground />
      <Navigation />
      <main className="main">
        <section className="section" id="about">
         <About />
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
