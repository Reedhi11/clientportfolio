import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Gem } from "lucide-react";

// Nysa cropped section images
import nysaBrandIdea from "../../../assets/logo/nysa/brand_idea.png";
import nysaConceptSketch from "../../../assets/logo/nysa/concept_sketch.png";
import nysaTypographyColor from "../../../assets/logo/nysa/typography_color.png";
import nysaBrandApplication from "../../../assets/logo/nysa/brand_application.png";
import nysaBrandValues from "../../../assets/logo/nysa/brand_values.png";

// Balaji cropped section images
import balajiBrandIdentity from "../../../assets/logo/balaji/brand_identity.png";
import balajiBrandIdea from "../../../assets/logo/balaji/brand_idea.png";
import balajiConceptSketch from "../../../assets/logo/balaji/concept_sketch.png";
import balajiTypographyColor from "../../../assets/logo/balaji/typography_color.png";
import balajiLogoVariations from "../../../assets/logo/balaji/logo_variations.png";
import balajiBrandApplication from "../../../assets/logo/balaji/brand_application.png";

/* ───────────────────────────────────────────────
   Brand Data
   ─────────────────────────────────────────────── */
const BRANDS = [
  {
    id: "nysa",
    name: "Nyasa Real Estate",
    tagline: "Building Spaces. Elevating Lives.",
    icon: Crown,
    accentColor: "#D4AF37",
    accentGlow: "rgba(212,175,55,0.15)",
    cardBg: "#FFFFFF",
    borderColor: "rgba(0,0,0,0.08)",
    sections: [
      { title: "Brand Idea", image: nysaBrandIdea },
      { title: "Concept Sketch & Logo Construction", image: nysaConceptSketch },
      { title: "Typography · Color Palette · Logo Variations", image: nysaTypographyColor },
      { title: "Brand Applications", image: nysaBrandApplication },
      { title: "Brand Values", image: nysaBrandValues },
    ],
  },
  {
    id: "balaji",
    name: "Balaji Audio",
    tagline: "Engineered for Powerful Sound Experiences",
    icon: Gem,
    accentColor: "#CB973C",
    accentGlow: "rgba(203,151,60,0.15)",
    cardBg: "#FFFFFF",
    borderColor: "rgba(0,0,0,0.08)",
    sections: [
      { title: "Brand Identity", image: balajiBrandIdentity },
      { title: "Brand Idea", image: balajiBrandIdea },
      { title: "Concept Sketch Exploration", image: balajiConceptSketch },
      { title: "Typography · Color Palette", image: balajiTypographyColor },
      { title: "Logo Variations · Clear Space", image: balajiLogoVariations },
      { title: "Brand Applications", image: balajiBrandApplication },
    ],
  },
];

/* ───────────────────────────────────────────────
   Staggered card animation variants
   ─────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ───────────────────────────────────────────────
   Section Card — Compact Title + Image
   ─────────────────────────────────────────────── */
const SectionCard = ({ section, index, brand }) => (
  <motion.div variants={cardVariants}>
    <div
      className="relative rounded-xl overflow-hidden border group transition-shadow duration-500 hover:shadow-lg"
      style={{
        borderColor: brand.borderColor,
        backgroundColor: brand.cardBg,
        boxShadow: `0 2px 12px rgba(0,0,0,0.2)`,
      }}
    >
      {/* Compact Title Bar */}
      <div className="flex items-center gap-3 px-5 py-3">
        <span
          className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60"
          style={{ color: brand.accentColor }}
        >
          0{index + 1}
        </span>
        <div
          className="w-4 h-px"
          style={{ backgroundColor: brand.accentColor + "30" }}
        />
        <h3
          className="text-sm md:text-base font-bold tracking-wide uppercase"
          style={{ color: brand.accentColor }}
        >
          {section.title}
        </h3>
      </div>

      {/* Section Image */}
      <div className="overflow-hidden">
        <motion.img
          src={section.image}
          alt={section.title}
          className="w-full h-auto block"
          loading="lazy"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  </motion.div>
);

/* ───────────────────────────────────────────────
   Brand Case Study Component
   ─────────────────────────────────────────────── */
const BrandCaseStudy = ({ brand }) => {
  if (brand.sections.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-24 h-24 rounded-full border-2 flex items-center justify-center mb-6"
          style={{ borderColor: brand.accentColor + "40" }}
        >
          <brand.icon size={36} style={{ color: brand.accentColor }} />
        </motion.div>
        <h3 className="text-xl font-bold text-[#0A1628]/60 mb-1">{brand.name}</h3>
        <p className="text-[#0A1628]/40 text-sm">Images coming soon — stay tuned!</p>
      </div>
    );
  }

  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {brand.sections.map((section, i) => (
        <SectionCard
          key={section.title}
          section={section}
          index={i}
          brand={brand}
        />
      ))}
    </motion.div>
  );
};

/* ───────────────────────────────────────────────
   Main LogoShowcase Component
   ─────────────────────────────────────────────── */
const LogoShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeBrand = BRANDS[activeTab];

  return (
    <section className="relative px-4 md:px-8 max-w-5xl mx-auto pb-10">
      {/* ── Tab Navigation ── */}
      <div className="flex justify-center gap-3 mb-8">
        {BRANDS.map((brand, index) => {
          const Icon = brand.icon;
          const isActive = index === activeTab;
          return (
            <motion.button
              key={brand.id}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`relative flex items-center gap-2 px-5 md:px-7 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 border ${
                isActive
                  ? "text-[#0A1628] bg-white shadow-sm"
                  : "text-[#0A1628]/60 hover:text-[#0A1628] hover:bg-white/60 border-black/5 bg-black/[0.03]"
              }`}
              style={
                isActive
                  ? {
                      borderColor: brand.accentColor,
                      boxShadow: `0 4px 15px ${brand.accentGlow}`,
                    }
                  : {}
              }
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    border: `1.5px solid ${brand.accentColor}`,
                    background: `linear-gradient(135deg, ${brand.accentColor}08, transparent)`,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon
                size={16}
                className="relative z-10"
                style={isActive ? { color: brand.accentColor } : {}}
              />
              <span className="relative z-10">{brand.name}</span>
            </motion.button>
          );
        })}
      </div>

      {/* ── Content Area ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBrand.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <BrandCaseStudy brand={activeBrand} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default LogoShowcase;
