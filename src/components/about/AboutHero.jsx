import { motion } from "framer-motion";
import {
  fadeUp,
  staggerParent,
  tagPop,
} from "../../animations/variants";

const TAGS = [
  { label: "Figma", dot: "#F24E1E" },
  { label: "UI Design", dot: "#7F5AF0" },
  { label: "Graphic Design", dot: "#FF4D8D" },
  { label: "Prototyping", dot: "#10B981" },
  { label: "Branding", dot: "#FF9F43" },
];

const AboutHero = () => {
  return (
    <section className="relative w-full pt-24 pb-2 lg:pt-28 lg:pb-2">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 text-center">
        <motion.div
          variants={staggerParent(0.12, 0.1)}
          initial="hidden"
          animate="show"
        >
          {/* small kicker */}
          <motion.div variants={fadeUp} className="inline-flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur-xl px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-dark/85 shadow-sm">
              <motion.span
                animate={{ rotate: [0, 14, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                ✨
              </motion.span>
              About me
            </span>
          </motion.div>

          {/* heading */}


          {/* subtitle */}


          {/* short intro */}


          {/* floating tags */}

        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
