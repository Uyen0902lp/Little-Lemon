import './App.css';
import NavBar from './components/NavBar/NavBar'
import Reserve from './components/Reserve/Reserve'
import HeroSection from './components/HeroSection/HeroSection'
import Menu from './components/Menu/Menu'
import Testiminials from './components/Testiminials/Testimonials'
import About from './components/About/About';


function App() {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <Menu/>
    <Reserve/>
    <Testiminials/>
    <About/>
    </>
  );
}

export default App;
