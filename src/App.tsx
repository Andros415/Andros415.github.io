import "./App.css";
import Splash from "./components/Splash";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-t from-noir to-slate-900">
      <Splash />
      <About />
      <Footer />
    </div>
  );
}

export default App;
