import { motion } from "framer-motion";
import { ArrowRight, PenTool, LayoutTemplate } from "lucide-react";

// Dummy tool icons mapping
const ToolIcon = ({ tool }) => {
  if (tool === "Figma") return <div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center text-white font-bold text-[10px] shadow-sm">Fg</div>;
  if (tool === "Photoshop" || tool === "Illustrator") return <div className="w-8 h-8 rounded bg-blue-900 flex items-center justify-center text-[#31A8FF] font-bold text-[10px] shadow-sm">Ps</div>;
  if (tool === "Procreate") return <div className="w-8 h-8 rounded bg-gray-100 border flex items-center justify-center text-pink-500 font-bold text-[10px] shadow-sm">Pr</div>;
  return <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center text-gray-500 shadow-sm"><LayoutTemplate size={16} /></div>;
};

const CarouselCard = ({ project, isActive, onViewDetails }) => {
  if (isActive) {
    return (
      <div className="w-[95vw] sm:w-[720px] h-[430px] bg-gradient-to-br from-[#c0a3ff] via-[#ffb6d3] to-[#ffd1a3] p-[6px] rounded-[32px] shadow-[0_20px_50px_rgba(127,90,240,0.3)]">
        <div className="bg-white w-full h-full rounded-[26px] flex flex-col sm:flex-row overflow-hidden relative">
          
          {/* Left Content */}
          <div className="w-full sm:w-[45%] p-6 sm:p-8 flex flex-col justify-center relative z-10">
            <span className="inline-flex items-center justify-center px-3 py-1 bg-[#7f5af0] text-white text-[10px] font-bold uppercase tracking-wider rounded-full w-max mb-4 shadow-sm">
              {project.category}
            </span>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a2e] leading-tight mb-3">
              {project.title}
            </h3>
            
            <p className="text-[#64748b] text-xs leading-relaxed mb-6">
              {project.description}
            </p>
            
            <div className="w-10 h-px bg-gray-200 mb-5" />
            
            <div className="mb-6">
              <span className="text-[10px] font-bold text-[#1a1a2e] mb-2 block uppercase tracking-wide">Tools Used</span>
              <div className="flex gap-1.5">
                {project.tools.map((tool, idx) => (
                  <ToolIcon key={idx} tool={tool} />
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => onViewDetails(project)}
              className="mt-auto group flex items-center gap-2 bg-gradient-to-r from-[#7f5af0] to-[#ff4d8d] text-white px-5 py-2.5 rounded-full font-bold text-xs w-max transition-transform hover:scale-105 shadow-[0_8px_20px_rgba(127,90,240,0.3)]"
            >
              View Details 
              <span className="bg-white/20 rounded-full p-1 ml-1 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={12} />
              </span>
            </button>
          </div>

          {/* Right Image */}
          <div className="hidden sm:block w-[55%] h-full p-3 relative">
            <div className="w-full h-full rounded-[18px] overflow-hidden relative shadow-inner">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Inactive Side Cards
  return (
    <div className="w-[260px] h-[340px] bg-white p-3 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex flex-col relative border border-gray-100">
      <div className="w-full h-[65%] rounded-[16px] overflow-hidden relative mb-3">
        <span className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-gradient-to-r from-[#ff4d8d] to-[#ff9f43] text-white text-[9px] font-bold uppercase tracking-wider rounded-full shadow-sm">
          {project.category}
        </span>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-2">
        <h4 className="text-sm font-bold text-[#1a1a2e] mb-1 truncate">{project.title}</h4>
        <div className="flex gap-1 mt-2">
          {project.tools.slice(0,3).map((tool, idx) => (
            <div key={idx} className="scale-75 origin-left">
              <ToolIcon tool={tool} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
