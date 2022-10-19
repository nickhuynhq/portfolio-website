import './App.scss';
import Navigation from './components/ParticlesBackground/Navigation/Navigation';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Navigation />
      <main className='main'>
        <section id="about">About Me</section>
        <section id="projects">Projects</section>
        <section id="contact">Contact Me</section>
      </main>
      <section>Footer</section>
    </div>
  );
}

export default App;
