import About from "./Sections/About/About";
import Navigation from "./components/Navigation/Navigation";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import Projects from "./Sections/Projects/Projects";
import "./App.scss";
import Contact from "./Sections/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

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
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
