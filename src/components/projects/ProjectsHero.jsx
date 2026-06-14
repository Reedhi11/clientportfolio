import { motion } from "framer-motion";

const ProjectsHero = () => {
  return (
    <section className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center">
      
      {/* Top Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative inline-block mb-1"
      >
        <p className="font-['Dancing_Script'] text-3xl md:text-4xl text-[#6b4efc] transform -rotate-2">
          My Creative Playground
        </p>
        {/* Orange underline for the label */}
        <svg 
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[120%] h-2" 
          viewBox="0 0 100 10" 
          preserveAspectRatio="none"
          fill="none" 
          stroke="#ff9f43" 
          strokeWidth="2" 
          strokeLinecap="round"
        >
          <path d="M5,5 Q50,0 95,5" />
        </svg>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative inline-block text-[5rem] md:text-[6.5rem] font-black text-[#1a1a2e] leading-none tracking-tight mb-2"
      >
        Projects
        
        {/* Colorful thick hand-drawn underline */}
        <svg 
          className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-4 md:h-6"
          viewBox="0 0 300 20" 
          preserveAspectRatio="none"
          fill="none" 
          stroke="url(#projects-underline-gradient)" 
          strokeWidth="6" 
          strokeLinecap="round"
        >
          <defs>
            <linearGradient id="projects-underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4d8d" />
              <stop offset="100%" stopColor="#ff9f43" />
            </linearGradient>
          </defs>
          <path d="M10,15 Q150,0 290,15" />
        </svg>
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-4 max-w-xl text-[#475569] text-sm md:text-base font-medium"
      >
        A collection of experiences, visuals and ideas brought to life through thoughtful design.
      </motion.p>
    </section>
  );
};

export default ProjectsHero;
