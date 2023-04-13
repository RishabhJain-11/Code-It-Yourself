import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <SocialLinks />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
