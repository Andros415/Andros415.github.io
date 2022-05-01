import "./App.css";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import About from "./components/About";
import SkillsAndInterests from "./components/SkillsAndInterests";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import FloatingActionButton from "./components/FloatingActionButton";

function App() {
  return (
    <div className="bg-gradient-to-t from-noir to-slate-900">
      <Navbar />
      <Splash />
      <About />
      <SkillsAndInterests />
      <Projects />
      <Experience />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

export default App;
