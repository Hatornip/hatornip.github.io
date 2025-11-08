import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        
        <div className="z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2"
          >
            Salut, je suis <span className="text-[#915eff]">Danyl</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-balance"
          >
            Développeur de solutions IA <br className="sm:block hidden" />
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-10 flex gap-4"
          >
            <Link to="/projects">
                <button className="bg-[#915eff] text-white py-3 px-8 rounded-xl font-bold hover:bg-violet-600 transition shadow-lg shadow-violet-500/50">
                Explorer mes Projets
                </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Home;