import { motion } from "framer-motion";
import { easeOutExpo, staggerParent, tagPop } from "../../animations/variants";

// Each skill has a size weight (sm | md | lg) and a color theme picker.
// No progress bars — just a playful, varied chip cloud.
const SKILLS = [
  { label: "Figma", size: "lg", theme: "purple" },
  { label: "User Research", size: "md", theme: "pink" },
  { label: "Wireframing", size: "md", theme: "orange" },
  { label: "Prototyping", size: "lg", theme: "purple" },
  { label: "UI Design", size: "lg", theme: "pink" },
  { label: "Graphic Design", size: "md", theme: "orange" },
  { label: "Adobe Photoshop", size: "md", theme: "purple" },
  { label: "Adobe Illustrator", size: "md", theme: "pink" },
  { label: "Canva", size: "sm", theme: "orange" },
  { label: "Information Architecture", size: "md", theme: "purple" },
  { label: "Usability Testing", size: "md", theme: "pink" },
  { label: "HTML/CSS Basics", size: "sm", theme: "orange" },
  { label: "Klaviyo", size: "sm", theme: "purple" },
  { label: "Collaboration", size: "md", theme: "pink" },
];

const SIZE_STYLES = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
};

const THEME_STYLES = {
  purple:
    "bg-gradient-to-br from-[#EFE7FF] to-[#DCCBFF] text-brand-dark border-brand-purple/30",
  pink: "bg-gradient-to-br from-[#FFE0EC] to-[#FFC3D9] text-brand-dark border-brand-pink/30",
  orange:
    "bg-gradient-to-br from-[#FFEFD9] to-[#FFD9A8] text-brand-dark border-brand-orange/30",
};

const THEME_DOT = {
  purple: "#7F5AF0",
  pink: "#FF4D8D",
  orange: "#FF9F43",
};

const SkillsCloud = () => {
  return (
    <section className="relative w-full">
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur-md px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-brand-dark/70">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          Skills
        </span>
        <h2 className="heading-display mt-3 text-3xl sm:text-4xl lg:text-5xl text-brand-dark">
          A playful{" "}
          <span className="text-gradient-funky">toolkit</span>
        </h2>
        <p className="mt-2 max-w-xl mx-auto text-sm sm:text-base text-brand-dark/65">
          Things I reach for to bring an idea to life.
        </p>
      </motion.div>

      {/* cloud */}
      <motion.div
        variants={staggerParent(0.04, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mt-6 sm:mt-8 mx-auto max-w-4xl"
      >
        <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {SKILLS.map((s, i) => (
            <motion.li
              key={s.label}
              variants={tagPop}
              animate={{
                y: [0, -4 - (i % 3) * 2, 0],
              }}
              transition={{
                y: {
                  duration: 4 + (i % 5),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                },
              }}
              whileHover={{
                y: -6,
                scale: 1.08,
                rotate: i % 2 === 0 ? -2 : 2,
                transition: { duration: 0.3, ease: easeOutExpo },
              }}
              className={`group relative inline-flex items-center gap-2 rounded-full border backdrop-blur-md font-medium shadow-sm cursor-default ${SIZE_STYLES[s.size]} ${THEME_STYLES[s.theme]}`}
            >
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{ background: THEME_DOT[s.theme] }}
              />
              {s.label}
              <span className="absolute -inset-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-funky blur-md -z-10" />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default SkillsCloud;
