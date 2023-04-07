import About from "./sections/About/About";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import "./App.scss";
import Contact from "./sections/Contact/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import { useEffect, useState } from "react";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import ReactGA from "react-ga4";
import Footer from "./components/Footer/Footer";
import Partners from "./sections/Partners/Partners";

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentModalProject, setCurrentModalProject] = useState({});

  const showModal = (e: React.MouseEvent<HTMLElement>) => {
    document.body.style.overflowY = "hidden";
    setModalVisible(true);
  };

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    document.body.style.overflowY = "unset";
    setModalVisible(false);
  };

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Main Page",
    });
  }, []);

  return (
    <>
      {modalVisible && (
        <ProjectModal project={currentModalProject} closeModal={closeModal} />
      )}

      <div className="App">
        <Hero />
        <Navigation />
        <main className="main">
          <About />
          {/* <Partners /> */}
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
