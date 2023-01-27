import About from "./Sections/About/About";
import Navigation from "./components/Navigation/Navigation";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import Projects from "./Sections/Projects/Projects";
import Experience from "./Sections/Experience/Experience";
import "./App.scss";
import Contact from "./Sections/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import { useState } from "react";
import ProjectModal from "./components/ProjectModal/ProjectModal";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentModalProject, setCurrentModalProject] = useState({});

  const showModal = (e: React.MouseEvent<HTMLElement>) => {
    document.body.style.overflow = 'hidden';
    setModalVisible(true);
  };

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    document.body.style.overflow = 'unset';
    setModalVisible(false);
  };

  return (
    <>
      {modalVisible && (
        <ProjectModal project={currentModalProject} closeModal={closeModal} />
      )}

      <div className="App" >
        <ParticlesBackground />
        <Navigation />
        <main className="main">
          <About />
          <Projects
            showModal={showModal}
            setCurrentModalProject={setCurrentModalProject}
          />
          <Experience />
        </main>
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default App;
