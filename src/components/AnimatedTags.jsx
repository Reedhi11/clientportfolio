import { motion } from "framer-motion";
import { staggerParent, tagPop } from "../animations/variants";

import figmaIcon from "../assets/tools/figma.png";
import aiIcon from "../assets/tools/AI.png";
import psIcon from "../assets/tools/ps.png";
import canvaIcon from "../assets/tools/canva.png";
import klaviyoIcon from "../assets/tools/klaviyo.png";
import miroIcon from "../assets/tools/miro.png";

const TAGS = [
  { label: "Figma", icon: figmaIcon },
  { label: "Illustrator", icon: aiIcon },
  { label: "Photoshop", icon: psIcon },
  { label: "Canva", icon: canvaIcon },
  { label: "Miro", icon: miroIcon },
  { label: "Klaviyo", icon: klaviyoIcon },
];

const AnimatedTags = () => {
  return (
    <motion.ul
      variants={staggerParent(0.07, 0.5)}
      initial="hidden"
      animate="show"
      className="flex flex-wrap items-center gap-2 sm:gap-2.5"
      aria-label="Skills"
    >
      {TAGS.map((tag) => (
        <motion.li
          key={tag.label}
          variants={tagPop}
          whileHover={{ y: -3, rotate: -1.5 }}
          title={tag.label}
          className="group relative inline-flex items-center justify-center rounded-full border border-white/70 bg-white/70 backdrop-blur-md p-2.5 sm:p-3 shadow-sm cursor-default"
        >
          <img src={tag.icon} alt={tag.label} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
          <span className="absolute -inset-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-funky blur-md -z-10" />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default AnimatedTags;
