import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Paperclip, Heart } from "lucide-react";
import img1 from "../../../assets/illustration/1.jpg";
import imgCorset from "../../../assets/illustration/corset.jpg";
import imgFashionBoard from "../../../assets/illustration/fashion board brand style.jpg";
import imgCouple from "../../../assets/illustration/priyanka nick couple work (1).jpg";

const projects = [
  {
    tabName: "Editorial Muse",
    title: <>FASHION ISN'T ABOUT BRAND. IT'S ABOUT <span className="text-[#d65b75]">STYLE</span>.</>,
    desc: "An editorial illustration inspired by confidence, glamour and individuality.",
    inspiredBy: ["Power silhouettes", "Runway energy", "Bold femininity", "Editorial attitude"],
    image: img1,
    notes: ["Confident", "Glamorous", "Timeless", "Feminine"],
    swatchColor: "bg-purple-900",
    tapeColor: "bg-[#bda1c7]"
  },
  {
    tabName: "Modern Muse",
    title: <>STRUCTURE MEETS <span className="text-[#d65b75]">ELEGANCE</span>.</>,
    desc: "A detailed anatomical and structural exploration of modern corset design.",
    inspiredBy: ["Vintage anatomy", "Fabric tension", "Lace detailing", "Modern twist"],
    image: imgCorset,
    notes: ["Structured", "Delicate", "Historical", "Chic"],
    swatchColor: "bg-[#8c5e45]",
    tapeColor: "bg-[#d6ba98]"
  },
  {
    tabName: "Celebrity Portrait",
    title: <>CAPTURING <span className="text-[#d65b75]">CHEMISTRY</span> & STYLE.</>,
    desc: "A stylized portrait illustration of Priyanka Chopra and Nick Jonas, capturing their aura.",
    inspiredBy: ["Red carpet looks", "Celebrity aura", "Couple dynamics", "Pop culture"],
    image: imgCouple,
    notes: ["Iconic", "Stylish", "Romantic", "Bold"],
    swatchColor: "bg-[#d65b75]",
    tapeColor: "bg-[#ffb6c1]"
  },
  {
    tabName: "Style Board",
    title: <>DEFINING THE <span className="text-[#d65b75]">VISUAL</span> IDENTITY.</>,
    desc: "Comprehensive visual identity board establishing the aesthetic and mood for a boutique brand.",
    inspiredBy: ["Color harmony", "Typography focus", "Texture mixing", "Brand storytelling"],
    image: imgFashionBoard,
    notes: ["Cohesive", "Aesthetic", "Modern", "Curated"],
    swatchColor: "bg-[#4a5568]",
    tapeColor: "bg-[#a0aec0]"
  }
];

const IllustrationGallery = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full bg-[#fdfaf6] flex flex-col items-center font-sans overflow-hidden">

      {/* The Scrapbook */}
      <div className="max-w-[1400px] w-full h-auto lg:h-[650px] xl:h-[750px] flex flex-col lg:flex-row shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative rounded-sm bg-[#f4ecd8] border border-[#e2d5c3]">

        {/* Navigation Sidebar */}
        <div className="w-full lg:w-[220px] xl:w-[260px] h-auto lg:h-full flex flex-row lg:flex-col items-center lg:items-stretch py-4 md:py-6 lg:py-16 xl:py-20 px-4 md:px-8 lg:px-8 xl:px-12 border-b lg:border-b-0 lg:border-r border-[#e3d7c5] relative z-30 bg-[#f6efe2] shrink-0 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Decorative Tape */}
          <div className="hidden lg:block absolute top-[-10px] left-8 w-24 h-6 bg-[#bda1c7] opacity-80 rotate-[-5deg] shadow-sm" />

          {/* Menu Items */}
          <div className="flex flex-row lg:flex-col gap-8 lg:gap-10 mt-0 lg:mt-4 min-w-max pr-6 lg:pr-0">
            {projects.map((p, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className="cursor-pointer group relative"
              >
                <div className={`text-2xl md:text-3xl font-serif mb-1 transition-colors ${active === i ? 'text-[#d65b75]' : 'text-[#7a7a7a] group-hover:text-[#4a4a4a]'}`}>
                  0{i + 1}
                </div>
                <div className={`text-[10px] lg:text-xs tracking-[0.2em] uppercase transition-colors ${active === i ? 'text-[#d65b75] font-bold' : 'text-[#8a8a8a] group-hover:text-[#5a5a5a]'}`}>
                  {p.tabName}
                </div>
                {active === i && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-3 left-0 h-px w-8 bg-[#d65b75]"
                  />
                )}
              </div>
            ))}
          </div>


        </div>

        {/* Center Spine Shadow (Desktop only) */}
        <div className="hidden lg:block absolute left-[240px] top-0 bottom-0 w-8 bg-gradient-to-r from-black/5 to-transparent z-40 pointer-events-none" />
        <div className="hidden lg:block absolute right-1/2 top-0 bottom-0 w-16 bg-gradient-to-l from-black/10 to-transparent z-40 pointer-events-none" />
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-16 bg-gradient-to-r from-black/10 to-transparent z-40 pointer-events-none" />

        <div className="flex flex-col lg:flex-row w-full lg:flex-1 relative h-auto lg:h-full">
          {/* Left Page (Text Content) */}
          <div className="w-full lg:flex-1 lg:w-auto h-auto lg:h-full bg-[#f6efe2] relative shadow-[inset_-2px_0_10px_rgba(0,0,0,0.05)] z-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col justify-start pt-8 md:pt-16 lg:pt-12 xl:pt-16 px-6 md:px-20 lg:px-12 xl:px-20 pb-6 w-full h-full relative"
              >

                <div className="text-xs tracking-[0.2em] text-[#7a7a7a] uppercase mb-4">
                  0{active + 1} / {projects[active].tabName}
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-[40px] xl:text-[56px] font-serif text-[#2c2c2c] leading-[1.1] mb-5 max-w-lg">
                  {projects[active].title}
                </h1>

                <p className="text-[#5a5a5a] text-sm md:text-lg lg:text-sm xl:text-base leading-relaxed max-w-sm mb-8 font-light">
                  {projects[active].desc}
                </p>

                <div className="mb-6">
                  <div className="text-[#d65b75] text-xs font-bold tracking-[0.15em] uppercase mb-5">Inspired By</div>
                  <div className="flex flex-col gap-3">
                    {projects[active].inspiredBy.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-[#5a5a5a] font-light">
                        <Heart size={14} className="text-[#f09caf] fill-transparent" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes Scrap */}
                <div className="absolute bottom-6 right-4 md:bottom-12 md:right-12 lg:bottom-10 lg:right-6 xl:bottom-16 xl:right-12 z-30 w-[140px] md:w-[180px] lg:w-[150px] xl:w-[200px] opacity-90 lg:opacity-100">
                  <div className="bg-[#fcfaf7] p-5 shadow-[0_10px_20px_rgba(0,0,0,0.08)] rotate-[6deg] relative border border-[#e2d5c3] transform hover:rotate-[3deg] transition-transform">
                    <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-14 h-5 bg-[#dcc9a8] opacity-80 rotate-[-4deg] shadow-sm" />

                    <ul className="font-['Dancing_Script',_cursive] text-2xl text-[#5a5a5a] flex flex-col gap-1.5 leading-tight items-center text-center">
                      {projects[active].notes.map((note, idx) => (
                        <li key={idx}>{note}</li>
                      ))}
                    </ul>

                    <div className="absolute bottom-3 right-3 text-[#f09caf] flex gap-1 rotate-12">
                      <Heart size={16} fill="#f09caf" />
                      <Heart size={10} fill="#f09caf" className="mt-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Page (Image & Scrapbook Elements) */}
          <div className="w-full lg:flex-1 lg:w-auto h-[450px] md:h-[600px] lg:h-full bg-[#eadecd] relative overflow-hidden flex flex-col items-center justify-center z-10 border-t lg:border-t-0 lg:border-l border-[#dccab6] shrink-0">
            {/* Textured background simulation - keep outside so it doesn't fade! */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8b7355 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-2 md:inset-6 lg:inset-4 xl:inset-8 flex items-center justify-center overflow-hidden"
              >
                {projects[active].tabName !== "Style Board" && (
                  <>
                    {/* Marbled Background Area for Portrait Illustrations */}
                    <div className="absolute inset-0 bg-[#dfc5cf] rounded shadow-inner" />
                    <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-[#c8a2c8] via-[#e6e6fa] to-[#d8bfd8] mix-blend-overlay rounded" />
                  </>
                )}

                <img
                  src={projects[active].image}
                  alt={projects[active].tabName}
                  className={`relative z-10 ${projects[active].tabName === "Style Board"
                      ? "w-full h-full object-contain p-2 drop-shadow-2xl"
                      : "h-[100%] w-auto object-cover scale-[1.02]"
                    }`}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Footer Quote */}
      <div className="mt-4 mb-4 text-center flex items-center justify-center gap-4 text-[#f09caf] px-4">
        <span className="text-4xl lg:text-5xl font-serif">“</span>
        <span className="font-['Dancing_Script',_cursive] text-3xl lg:text-4xl text-[#5a5a5a] leading-tight">
          Every illustration is a story. Every line, a feeling.
        </span>
        <span className="text-4xl lg:text-5xl font-serif pt-4">”</span>
      </div>

    </div>
  );
};

export default IllustrationGallery;
