import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeOutExpo } from "../../animations/variants";
import ModalBackdrop from "./ModalBackdrop";
import SocialLinks from "./SocialLinks";

const ChatIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h16a2 2 0 012 2v10a2 2 0 01-2 2H8l-4 4V6a2 2 0 012-2zm3 6h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 6l12 12M18 6l-6 12" transform="none" />
    <path d="M6 6l12 12M6 18L18 6" />
  </svg>
);

const SparkleIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0l1.8 8.2L22 10l-8.2 1.8L12 20l-1.8-8.2L2 10l8.2-1.8z" />
  </svg>
);

const ContactModal = ({ open, onClose }) => {
  // ESC to close + body scroll lock while open
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <ModalBackdrop onClose={onClose} />

          {/* Modal container — centers content, click-outside closes via backdrop */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="fixed inset-0 z-[90] flex items-center justify-center px-4 py-6 pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.45, ease: easeOutExpo }}
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto relative w-full max-w-md"
            >
              {/* outer gradient border glow */}
              <div className="absolute -inset-[2px] rounded-[30px] bg-gradient-funky opacity-90 blur-[2px]" />
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-funky opacity-30 blur-2xl" />

              {/* glass card */}
              <div className="relative rounded-[30px] overflow-hidden border border-white/60 bg-white/75 backdrop-blur-2xl shadow-soft">
                {/* floating decorative blobs inside */}
                <motion.div
                  aria-hidden
                  animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -left-10 h-36 w-36 rounded-full bg-brand-purple/45 blur-2xl pointer-events-none"
                />
                <motion.div
                  aria-hidden
                  animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand-pink/40 blur-2xl pointer-events-none"
                />
                <motion.div
                  aria-hidden
                  animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-12 right-10 h-16 w-16 rounded-full bg-brand-orange/45 blur-xl pointer-events-none"
                />

                {/* sparkles */}
                <motion.span
                  aria-hidden
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-6 left-8 text-brand-purple pointer-events-none"
                >
                  <SparkleIcon size={14} />
                </motion.span>
                <motion.span
                  aria-hidden
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.6, repeat: Infinity, delay: 0.4 }}
                  className="absolute bottom-24 left-12 text-brand-pink pointer-events-none"
                >
                  <SparkleIcon size={12} />
                </motion.span>

                {/* CLOSE BUTTON */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close contact card"
                  className="absolute top-4 right-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/70 backdrop-blur-md text-brand-dark hover:bg-white hover:rotate-90 transition-all duration-300 shadow-sm"
                >
                  <CloseIcon />
                </button>

                {/* CONTENT */}
                <div className="relative p-5 sm:p-6">
                  {/* HEADER — icon + name + role */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15,
                        ease: easeOutExpo,
                      }}
                      className="relative shrink-0"
                    >
                      <div className="relative rounded-2xl p-[2px] bg-gradient-funky shadow-glow">
                        <div className="rounded-[14px] h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center bg-gradient-funky text-white">
                          <ChatIcon />
                        </div>
                      </div>
                      {/* online indicator */}
                      <span className="absolute -bottom-1 -right-1 inline-flex h-4 w-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm">
                        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                      </span>
                    </motion.div>

                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.25,
                        ease: easeOutExpo,
                      }}
                      className="min-w-0 flex-1"
                    >
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-dark/55 mb-0.5">
                        Let&rsquo;s talk
                      </p>
                      <h2
                        id="contact-modal-title"
                        className="font-display text-xl sm:text-2xl font-bold text-brand-dark leading-tight truncate"
                      >
                        Prakriti Panda
                      </h2>
                      <p className="text-xs sm:text-sm text-brand-dark/65 truncate">
                        UI/UX &amp; Graphic Designer
                      </p>
                    </motion.div>
                  </div>

                  {/* tagline strip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="mt-4 rounded-2xl border border-white/70 bg-white/55 backdrop-blur-md px-4 py-2.5 text-[13px] text-brand-dark/75 italic leading-snug"
                  >
                    &ldquo;Got an idea brewing? I&rsquo;d love to hear about
                    it — let&rsquo;s make it beautiful.&rdquo;
                  </motion.div>

                  {/* CONTACT METHODS */}
                  <div className="mt-4">
                    <SocialLinks />
                  </div>

                  {/* BOTTOM CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                    className="mt-5"
                  >
                    <a
                      href="mailto:pandaprakriti@gmail.com"
                      className="relative group flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-funky" />
                      <span className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-funky opacity-40 blur-xl group-hover:opacity-80 transition-opacity duration-500" />
                      <span className="relative">Send Email</span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
