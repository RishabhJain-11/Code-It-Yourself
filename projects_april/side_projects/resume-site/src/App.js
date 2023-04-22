import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Stats from './components/Stats';
import Form from './components/Contact';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <SocialLinks />
      <Projects />
      <Stats />
      <TechStack />
      <Timeline />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
