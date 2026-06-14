import { motion } from "framer-motion";
import { easeOutExpo } from "../animations/variants";

import portraitImg from "../assets/prakriti.jpeg";

const PortraitCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: easeOutExpo, delay: 0.35 }}
      whileHover={{ y: -4, scale: 1.015 }}
      className="relative z-20 w-fit mx-auto"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-fit"
      >
        {/* outer rounded frame with subtle gradient border */}
        <div className="relative rounded-[2rem] p-[2px] bg-gradient-to-br from-white/80 via-white/50 to-white/20 shadow-glow w-fit mx-auto">
          {/* inner photo container */}
          <div className="relative rounded-[1.9rem] overflow-hidden bg-transparent flex justify-center items-center w-fit">
            <img
              src={portraitImg}
              alt="Portrait of Prakriti Panda"
              loading="eager"
              className="h-[18rem] sm:h-[22rem] w-auto object-contain transition-transform duration-[1200ms] ease-out hover:scale-105 block"
            />

            {/* soft top sheen */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[1.9rem]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 35%, rgba(30,30,30,0.05) 100%)",
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortraitCard;
