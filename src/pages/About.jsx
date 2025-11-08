import { motion } from "framer-motion";
import { Brain, Server, Terminal, Cpu } from "lucide-react";

const skills = [
  { 
    name: "AI & Data Science", 
    icon: <Brain />, 
    tools: "PyTorch, TensorFlow, YOLO, Scikit-learn, Pandas" 
  },
  { 
    name: "LLM & RAG", 
    icon: <Terminal />, 
    tools: "LangChain, ChromaDB, HuggingFace, GraphRAG, Local LLMs" 
  },
  { 
    name: "Backend & DevOps", 
    icon: <Server />, 
    tools: "FastAPI, Docker, Python, PostgreSQL, CI/CD" 
  },
  { 
    name: "Modern Frontend", 
    icon: <Cpu />, 
    tools: "React, Three.js, Tailwind v4" 
  },
];

const About = () => {
  return (
    <div className="pt-28 pb-10 px-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-secondary uppercase tracking-wider">Mon Profil</p>
        <h2 className="text-white font-black text-[50px] mb-10">Compétences Techniques.</h2>
        
        <p className="text-secondary text-[18px] leading-[30px] max-w-3xl mb-16">
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-tertiary p-6 rounded-2xl border border-white/5 hover:border-[#915eff] transition duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-black-200 rounded-lg text-[#915eff] group-hover:scale-110 transition">{skill.icon}</div>
                <h3 className="text-white text-xl font-bold">{skill.name}</h3>
              </div>
              <p className="text-gray-400 font-mono text-sm">{skill.tools}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export default About;