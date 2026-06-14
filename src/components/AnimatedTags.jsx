import { motion } from "framer-motion";
import { staggerParent, tagPop } from "../animations/variants";

// Tiny inline icon squares for each skill — colored boxes with letter glyphs
const Glyph = ({ children, bg, color = "#fff" }) => (
  <span
    className="inline-flex h-4 w-4 items-center justify-center rounded-[5px] text-[9px] font-bold leading-none"
    style={{ background: bg, color }}
  >
    {children}
  </span>
);

const TAGS = [
  { label: "Figma", glyph: <Glyph bg="#F24E1E">F</Glyph> },
  { label: "UI Design", glyph: <Glyph bg="#7F5AF0">Ui</Glyph> },
  { label: "Wireframing", glyph: <Glyph bg="#FF9F43">W</Glyph> },
  { label: "Prototyping", glyph: <Glyph bg="#10B981">▶</Glyph> },
  { label: "Graphic Design", glyph: <Glyph bg="#FF4D8D">G</Glyph> },
  {
    label: "Photoshop",
    glyph: <Glyph bg="#31A8FF" color="#0B2E47">Ps</Glyph>,
  },
  {
    label: "Illustrator",
    glyph: <Glyph bg="#FF9A00" color="#3D1A00">Ai</Glyph>,
  },
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
          className="group relative inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur-md px-3 py-1.5 text-xs sm:text-sm font-medium text-brand-dark/85 shadow-sm cursor-default"
        >
          {tag.glyph}
          {tag.label}
          <span className="absolute -inset-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-funky blur-md -z-10" />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default AnimatedTags;
