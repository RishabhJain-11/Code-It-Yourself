import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Hero></Hero> */}
      <Contact />
    </div>
  );
}

export default App;
