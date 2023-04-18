import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Form from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <SocialLinks />
      <Projects />
      <Timeline />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
