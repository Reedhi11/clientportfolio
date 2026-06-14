import { motion } from "framer-motion";

const BackgroundDecor = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Abstract Blobs */}
      <div className="absolute -left-32 -top-10 h-[600px] w-[600px] rounded-full bg-[#7F5AF0]/15 blur-[100px]" />
      <div className="absolute -right-32 bottom-0 h-[600px] w-[600px] rounded-full bg-[#FF9F43]/15 blur-[120px]" />
      <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-[#FF4D8D]/10 blur-[100px]" />

      {/* Doodles */}
      
      {/* Left Purple Curved Arrow */}
      <motion.svg 
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-[15%] top-40 w-16 h-16 text-[#7F5AF0] opacity-70" 
        viewBox="0 0 100 100" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M30,80 Q70,40 20,20" />
        <polyline points="20,40 20,20 40,20" />
      </motion.svg>

      {/* Top Left Yellow Star */}
      <svg className="absolute left-[28%] top-32 w-5 h-5 text-[#FF9F43] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1L19.1 4.9" />
      </svg>

      {/* Right Pink Paper Plane Trail */}
      <motion.svg 
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute right-[15%] top-32 w-48 h-20 text-[#FF4D8D] opacity-60" 
        viewBox="0 0 200 100" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeDasharray="6 6"
      >
        <path d="M10,80 Q80,20 190,30" />
      </motion.svg>
      {/* Paper Plane */}
      <motion.svg 
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-[12%] top-24 w-8 h-8 text-[#FF4D8D] opacity-80 transform rotate-12" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </motion.svg>

      {/* Right Orange Dots */}
      <div className="absolute right-[5%] top-[45%] w-20 h-20 grid grid-cols-4 gap-2 opacity-40 transform rotate-12">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#FF9F43]" />
        ))}
      </div>
      
      {/* Left Purple Dots */}
      <div className="absolute left-[5%] bottom-[30%] w-16 h-16 grid grid-cols-3 gap-3 opacity-30 transform -rotate-12">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#7F5AF0]" />
        ))}
      </div>
    </div>
  );
};

export default BackgroundDecor;
