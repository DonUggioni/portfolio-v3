import './App.css';
import About from './components/About/About';
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
    </div>
  );
}

export default App;
