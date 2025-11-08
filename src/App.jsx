import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StarBackground from "./components/StarBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";


const App = () => {
  return (
    <HashRouter>
      <div className="relative z-0 bg-primary font-sans text-secondary min-h-screen selection:bg-pink-500 selection:text-white overflow-x-hidden">
        
        <StarBackground />
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      
      </div>
    </HashRouter>
  );
};

export default App;