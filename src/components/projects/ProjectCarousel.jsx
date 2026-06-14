import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const ProjectCarousel = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Fallback if no projects exist
  if (!projects || projects.length === 0) return null;

  const safeActiveIndex = activeIndex >= projects.length ? 0 : activeIndex;

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-play logic
  useEffect(() => {
    if (isHovered || projects.length <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2500); // 2.5 seconds delay
    return () => clearInterval(interval);
  }, [isHovered, projects.length]);

  const prevIndex = (safeActiveIndex - 1 + projects.length) % projects.length;
  const nextIndex = (safeActiveIndex + 1) % projects.length;

  const activeProject = projects[safeActiveIndex];
  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  return (
    <section
      className="relative z-10 mx-auto mt-6 flex min-h-[430px] max-w-6xl items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {projects.length > 1 && (
        <button
          onClick={prevSlide}
          className="absolute left-0 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#fcfaf7] shadow-md border border-[#e2d5c3] md:flex transition-transform hover:scale-110"
        >
          <ArrowLeft className="text-[#d65b75]" />
        </button>
      )}

      <div className="relative flex w-full items-center justify-center">
        {/* Left Card */}
        {projects.length >= 3 && (
          <motion.div
            key={`prev-${prevProject.id}`}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            onClick={prevSlide}
            className="absolute left-8 hidden w-64 -rotate-3 overflow-hidden rounded-sm bg-[#fcfaf7] shadow-md border border-[#e2d5c3] p-2 md:block cursor-pointer z-0 hover:scale-105 transition-transform"
          >
            <div className="overflow-hidden rounded-sm h-56 w-full flex items-center justify-center bg-[#fcfaf7]">
              <img src={prevProject.image} alt={prevProject.title} className={`h-full w-full ${prevProject.category === 'Social Media' ? 'object-contain' : 'object-cover'}`} />
            </div>
            <div className="p-3 text-center">
              <span className="text-[9px] font-bold text-[#d65b75] tracking-widest uppercase">
                {prevProject.category}
              </span>
              <h3 className="mt-1 font-serif text-lg text-[#2c2c2c] truncate">{prevProject.title}</h3>
            </div>
          </motion.div>
        )}

        {/* Center Card */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`active-${activeProject.id}`}
            custom={direction}
            initial={{ opacity: 0, scale: 0.95, x: direction > 0 ? 50 : -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: direction > 0 ? -50 : 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-20 grid w-full max-w-3xl grid-cols-1 gap-8 rounded-sm border border-[#e2d5c3] bg-[#fcfaf7] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] md:grid-cols-2"
          >
            {/* Scrapbook Tape Decoration */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#bda1c7] opacity-60 rotate-2 shadow-sm z-30" />

            <div className="flex flex-col justify-center relative z-20">
              <span className="mb-4 w-fit border border-[#e2d5c3] bg-[#f4ecd8] px-3 py-1 text-[10px] font-bold tracking-widest text-[#d65b75] uppercase shadow-sm">
                {activeProject.category}
              </span>

              <h2 className="text-3xl font-serif text-[#2c2c2c] md:text-4xl leading-tight">
                {activeProject.title}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#5a5a5a] font-light line-clamp-3">
                {activeProject.description}
              </p>

              <div className="my-6 h-px bg-[#e2d5c3]/50" />

              <p className="mb-3 text-xs font-bold tracking-widest uppercase text-[#a0a0a0]">Tools</p>

              <div className="flex gap-2 flex-wrap">
                {activeProject.tools && activeProject.tools.map((tool) => (
                  <span
                    key={tool}
                    className="border border-[#e2d5c3] bg-[#f6efe2] px-3 py-1 text-[10px] font-medium text-[#7a7a7a]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  if (activeProject.category === "Freelance") {
                    navigate("/projects/freelance");
                  } else if (activeProject.category === "Illustration") {
                    navigate("/projects/illustration");
                  } else if (activeProject.category === "Social Media") {
                    navigate("/projects/social-media");
                  } else if (activeProject.category === "Logo Design") {
                    navigate("/projects/logo-design");
                  } else {
                    console.log("View details for", activeProject.title);
                  }
                }}
                className="mt-8 flex w-fit items-center gap-3 border border-[#d65b75] bg-transparent hover:bg-[#d65b75] hover:text-white px-6 py-2.5 text-xs tracking-widest uppercase font-bold text-[#d65b75] transition-colors"
              >
                View Project
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="overflow-hidden bg-[#eadecd] p-2 shadow-inner border border-[#dccab6] h-full max-h-[360px] flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8b7355 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className={`h-full w-full shadow-md relative z-10 ${activeProject.category === 'Social Media' ? 'object-contain' : 'object-cover'}`}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Card */}
        {projects.length >= 2 && (
          <motion.div
            key={`next-${nextProject.id}`}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            onClick={nextSlide}
            className="absolute right-8 hidden w-64 rotate-3 overflow-hidden rounded-sm bg-[#fcfaf7] shadow-md border border-[#e2d5c3] p-2 md:block cursor-pointer z-0 hover:scale-105 transition-transform"
          >
            <div className="overflow-hidden rounded-sm h-56 w-full flex items-center justify-center bg-[#fcfaf7]">
              <img src={nextProject.image} alt={nextProject.title} className={`h-full w-full ${nextProject.category === 'Social Media' ? 'object-contain' : 'object-cover'}`} />
            </div>
            <div className="p-3 text-center">
              <span className="text-[9px] font-bold text-[#d65b75] tracking-widest uppercase">
                {nextProject.category}
              </span>
              <h3 className="mt-1 font-serif text-lg text-[#2c2c2c] truncate">{nextProject.title}</h3>
            </div>
          </motion.div>
        )}
      </div>

      {projects.length > 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-0 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#fcfaf7] shadow-md border border-[#e2d5c3] md:flex transition-transform hover:scale-110"
        >
          <ArrowRight className="text-[#d65b75]" />
        </button>
      )}

      {projects.length > 1 && (
        <div className="absolute -bottom-6 flex gap-3 z-30">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > safeActiveIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`h-1.5 transition-all duration-300 ${index === safeActiveIndex ? "w-8 bg-[#d65b75]" : "w-3 bg-[#e2d5c3] hover:bg-[#c8a2c8]"
                }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectCarousel;
