import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "NeuroRacer : AI Driving",
    desc: "Simulation de 200 voitures autonomes apprenant à conduire par sélection naturelle (Algorithme Génétique + Neural Network from scratch).",
    tags: ["Reinforcement Learning", "React Three Fiber", "Genetic Algo"],
    color: "from-purple-500 to-indigo-500",
    demoLink: "https://hatornip.github.io/NeuroRacer/",
    repoLink: "https://github.com/hatornip/NeuroRacer"
  },
  {
    title: "CryptoGalaxy : Data Viz",
    desc: "Visualisation 3D immersive de 3000 points de données financières. Pipeline NLP (Sentiment Analysis) + t-SNE Clustering.",
    tags: ["Big Data", "NLP", "WebGL", "Python"],
    color: "from-blue-500 to-cyan-500",
    demoLink: "https://hatornip.github.io/CryptoGalaxy/",
    repoLink: "https://github.com/hatornip/CryptoGalaxy"
  },
  {
    title: "NeuralDepth : 2D to 3D",
    desc: "Transformation d'images 2D en sculptures 3D en temps réel via WebAssembly (Zero-Backend Computer Vision).",
    tags: ["Computer Vision", "ONNX", "WebAssembly"],
    color: "from-emerald-500 to-green-500",
    demoLink: "https://hatornip.github.io/NeuralDepth/",
    repoLink: "https://github.com/hatornip/NeuralDepth"
  },
  {
    title: "Industrial GraphRAG",
    desc: "Analyse d'impact technique via Graphe de Connaissances et NLP. Détection déterministe des effets de bord logiciels.",
    tags: ["GraphRAG", "NetworkX", "SpaCy", "Streamlit"],
    color: "from-orange-500 to-red-500",
    demoLink: "#",
    repoLink: "https://github.com/Hatornip/Industrial-GraphRAG"
  },
  {
    title: "AI System Architect",
    desc: "Agent autonome générant une architecture technique JSON depuis un cahier des charges texte brut.",
    tags: ["LangChain", "Agentic Workflow", "LLM Local"],
    color: "from-pink-500 to-rose-500",
    demoLink: "https://autonomous-ai-architect-ymaqphf7lcqj3d6nr2ghzc.streamlit.app/", 
    repoLink: "https://github.com/Hatornip/Autonomous-AI-Architect"
  },
  {
    title: "RAG 'Petit Prince'",
    desc: "Système RAG complet sur texte littéraire. Indexation vectorielle ChromaDB et contexte strict pour éviter les hallucinations.",
    tags: ["RAG", "ChromaDB", "Gemma 3B"],
    color: "from-yellow-500 to-amber-500",
    demoLink: "#",
    repoLink: "https://github.com/Hatornip/Petit-Prince-RAG"
  }
];

const Projects = () => {
  return (
    <div className="pt-28 pb-10 px-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <p className="text-secondary uppercase tracking-wider">Portfolio</p>
        <h2 className="text-white font-black text-[50px] mb-10">Projets & Démos.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-tertiary rounded-2xl overflow-hidden border border-white/5 group hover:border-white/20 transition-colors"
            >
              <div className={`h-40 bg-gradient-to-r ${proj.color} p-6 flex justify-center items-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                <FolderGit2 className="text-white w-16 h-16 opacity-50 group-hover:scale-110 transition duration-500 relative z-10" />
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-2xl mb-2">{proj.title}</h3>
                <p className="text-secondary text-sm mb-4 line-clamp-3">{proj.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold text-white/60 bg-white/5 px-2 py-1 rounded border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                    {proj.demoLink !== "#" && (
                        <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <button className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold py-2 rounded-lg transition border border-white/10">
                                <ExternalLink size={14} /> LIVE DEMO
                            </button>
                        </a>
                    )}
                    
                    <a href={proj.repoLink} target="_blank" rel="noopener noreferrer" className={proj.demoLink === "#" ? "flex-1" : ""}>
                        <button className="flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 text-white text-sm font-bold py-2 px-4 rounded-lg transition border border-white/10 w-full">
                            <Github size={14} /> CODE
                        </button>
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export default Projects;