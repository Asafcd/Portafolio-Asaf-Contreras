import "./App.css";
import Aboutme from "./components/AboutMe/Aboutme.tsx";
import Contactme from "./components/Contact/Contact.tsx";
import Navbar from "./components/Navigation/Navbar.tsx";
import ShowProyects from "./components/Proyects/Proyects.tsx";
import Skills from "./components/Skills/Skills.tsx";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Contactme/>
      <Aboutme/>
      <hr />
      <Skills/>
      <hr />
      <ShowProyects/>
    </div>
  );
}

export default App;
