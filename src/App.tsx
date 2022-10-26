import About from "./Sections/About/About";
import Navigation from "./components/Navigation/Navigation";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import Projects from "./Sections/Projects/Projects";
import "./App.scss";
import Contact from "./Sections/Contact/Contact";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Navigation />
      <main className="main">
        <About />
        <Projects />
      </main>
      <Contact />
      <section>Footer</section>
    </div>
  );
}

export default App;
