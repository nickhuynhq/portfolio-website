import About from "./Sections/About/About";
import Navigation from "./components/Navigation/Navigation";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import Projects from "./Sections/Projects/Projects";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Navigation />
      <main className="main">
        <About />

        <Projects />

        <section className="section" id="contact">
          Contact Me
        </section>
      </main>
      <section>Footer</section>
    </div>
  );
}

export default App;
