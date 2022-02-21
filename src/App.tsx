import "./App.css";
import Splash from "./components/Splash";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import FloatingActionButton from "./components/FloatingActionButton";

function App() {
  return (
    <div className="bg-gradient-to-t from-noir to-slate-900">
      <Splash />
      <About />
      <Experience />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

export default App;
