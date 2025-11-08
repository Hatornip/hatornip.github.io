import { Link, useLocation } from "react-router-dom";
import { Cpu, Github, Linkedin } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "text-[#915eff]" : "text-secondary";

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary/80 backdrop-blur-md px-6 border-b border-white/5">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <Cpu className="text-violet-500 w-8 h-8" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex flex-col sm:flex-row">
            DANYL &nbsp;<span className="sm:block hidden text-violet-400">| ÉTUDIANT IA</span>
          </p>
        </Link>
        
        <div className="flex gap-8 items-center">
            <ul className="list-none hidden sm:flex flex-row gap-10">
            {["/", "/about", "/projects"].map((path) => {
                const label = path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2);
                let textNav = label === "Home" ? "Accueil" : label === "About" ? "A propos" : label === "Projects" ? "Projets" : "";

                return (
                <li key={path} className={`${isActive(path)} hover:text-white text-[18px] font-medium transition-colors`}>
                    <Link to={path}>{textNav}</Link>
                </li>
                );
            })}
            </ul>
            
            <div className="flex gap-4">
            <a href="https://github.com/hatornip" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 cursor-pointer hover:text-[#915eff] transition" />
                </a>
                
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;