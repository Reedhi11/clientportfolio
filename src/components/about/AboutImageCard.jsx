import { motion } from "framer-motion";
import { easeOutExpo } from "../../animations/variants";
import portraitImg from "../../assets/prakriti.jpeg";


const AboutImageCard = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-2">
      {/* anchor */}
      <div className="relative w-[16rem] sm:w-[18rem] lg:w-[20rem]">
        {/* organic blob backdrop */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute -inset-10 sm:-inset-12 -z-10 pointer-events-none"
        >
          <motion.svg
            viewBox="0 0 400 500"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            animate={{ rotate: [0, 4, -3, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            <defs>
              <linearGradient id="aboutBlobGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FF4D8D" />
                <stop offset="50%" stopColor="#FF9F43" />
                <stop offset="100%" stopColor="#7F5AF0" />
              </linearGradient>
            </defs>
            {/* <path
              fill="url(#aboutBlobGrad)"
              d="M200 30 C 310 20, 385 110, 380 230 C 376 330, 355 420, 270 470 C 185 510, 90 485, 45 405 C 0 320, 12 195, 55 115 C 95 45, 150 35, 200 30 Z"
              opacity="0.95"
            /> */}
          </motion.svg>

          {/* secondary purple blob */}
          <motion.svg
            viewBox="0 0 200 200"
            className="absolute -top-3 -left-6 w-28 h-28 sm:w-36 sm:h-36"
            animate={{ rotate: [0, -10, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* <path
              fill="#7F5AF0"
              d="M150 95c0 35-23 68-55 80-32 12-72 3-90-25-18-28-13-72 13-95s72-26 99-7c20 14 33 30 33 47z"
              opacity="0.85"
            /> */}
          </motion.svg>

          {/* pink blob bottom right */}
          <motion.svg
            viewBox="0 0 200 200"
            className="absolute -bottom-4 -right-2 w-28 h-28 sm:w-32 sm:h-32"
            animate={{ rotate: [0, 10, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            {/* <path
              fill="#FF4D8D"
              d="M170 100c0 40-25 80-65 95-40 15-85 0-100-40-15-40 5-90 50-105 45-15 95-5 110 30 5 10 5 15 5 20z"
              opacity="0.78"
            /> */}
          </motion.svg>
        </motion.div>

        {/* photo frame */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: easeOutExpo, delay: 0.3 }}
          whileHover={{ y: -4 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* gradient border */}
            <div className="relative rounded-[2rem] p-[3px] bg-gradient-funky shadow-glow">
              <div className="relative rounded-[1.85rem] overflow-hidden bg-brand-cream flex justify-center items-center">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={portraitImg}
                    alt="Portrait of Prakriti Panda"
                    loading="eager"
                    className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out hover:scale-105 block"
                  />
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 35%, rgba(30,30,30,0.05) 100%)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>


      </div>
    </div>
  );
};

export default AboutImageCard;
