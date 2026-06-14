import { motion } from "framer-motion";

const ModalBackdrop = ({ onClose }) => {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] bg-brand-dark/55 backdrop-blur-md"
    >
      {/* soft colored glows behind the modal for premium focus */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 40% at 30% 35%, rgba(127,90,240,0.35) 0%, transparent 60%), radial-gradient(35% 35% at 70% 65%, rgba(255,77,141,0.30) 0%, transparent 60%), radial-gradient(30% 30% at 50% 100%, rgba(255,159,67,0.25) 0%, transparent 60%)",
        }}
      />
    </motion.div>
  );
};

export default ModalBackdrop;
