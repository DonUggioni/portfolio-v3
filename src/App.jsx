import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Work from './components/Work/Work';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
