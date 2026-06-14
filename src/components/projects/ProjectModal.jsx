import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1e1e1e]/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#fcfcff] rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 shadow-md hover:bg-white hover:scale-105 transition-all"
            >
              <X size={20} />
            </button>

            {/* Left Image Side */}
            <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Details Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col justify-center">
              <span className="inline-flex items-center justify-center px-3 py-1 bg-gradient-to-r from-[#7f5af0] to-[#ff4d8d] text-white text-[11px] font-bold uppercase tracking-wider rounded-full w-max mb-6">
                {project.category}
              </span>
              
              <h2 className="text-3xl font-extrabold text-[#1a1a2e] mb-4 leading-tight">
                {project.title}
              </h2>
              
              <p className="text-[#64748b] leading-relaxed mb-8">
                {project.description}
                <br /><br />
                This is a placeholder for a more detailed case study description. 
                In a real scenario, you could expand on the problem, solution, process, 
                and outcomes for this specific creative project.
              </p>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <a 
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#1a1a2e] text-white font-semibold rounded-2xl hover:bg-black transition-colors"
                >
                  Visit Live Project
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
