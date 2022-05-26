import "./App.css";
import { ThemeProvider } from "./components/ThemeProvider";
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
    <div className="bg-lightBase bg-lightScheme dark:bg-gradient-to-t dark:from-noir dark:to-slate-900">
      <ThemeProvider>
        <Navbar />
        <Splash />
        <About />
        <SkillsAndInterests />
        <Projects />
        <Experience />
        <Footer />
        <FloatingActionButton />
      </ThemeProvider>
    </div>
  );
}

export default App;
