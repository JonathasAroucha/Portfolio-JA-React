import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from './components/Portfolio';
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />

    </div>
  );
}

export default App;
