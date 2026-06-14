import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Send } from "lucide-react";
import { easeOutExpo } from "../animations/variants";

import ContactModal from "./contact/ContactModal";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to) => {
    if (to === "/") return location.pathname === "/" && !location.hash;
    if (to.startsWith("/#")) {
      return location.pathname === "/" && location.hash === to.slice(1);
    }
    return location.pathname === to;
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
      className={`fixed left-0 right-0 z-50 flex justify-center mx-auto transition-all duration-500 ${scrolled ? "top-0 w-full px-0" : "top-5 w-full max-w-[1200px] px-4 sm:px-6"
        }`}
    >
      <nav
        className={`relative flex items-center justify-between w-full py-2.5 transition-all duration-500
          ${scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-b border-white/60 rounded-none px-6 md:px-12"
            : "bg-white/80 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white/40 rounded-full px-6"
          }`}
      >
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start justify-center relative z-10 mt-1 pb-1">
          <div className="flex items-start relative">
            <span className="font-['Dancing_Script'] text-3xl font-bold text-[#1e1e1e] leading-none tracking-tight">Prakriti</span>
            {/* Spark Effect */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff4d8d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute -top-1.5 -right-5">
              <path d="M12 2L13 6M18 4L15 7M21 9L17 10" />
            </svg>
          </div>
          <span className="text-[9px] font-bold tracking-[0.45em] text-[#1e1e1e] uppercase mt-1 ml-1 leading-none">PANDA</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.to);
            return (
              <li key={link.label} className="relative">
                <Link
                  to={link.to}
                  className={`relative inline-flex flex-col items-center justify-center text-[15px] font-semibold transition-colors duration-300 ${active
                      ? "text-[#ff4d8d]"
                      : "text-[#475569] hover:text-[#ff4d8d]"
                    }`}
                >
                  <span className="relative z-10 py-1">{link.label}</span>
                  {active && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute -bottom-1 w-1.5 h-1.5 bg-[#ff4d8d] rounded-full"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => setContactOpen(true)}
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#ff8c42] to-[#ff4d8d] text-white px-6 py-2.5 rounded-full font-medium text-sm transition-transform hover:scale-105 shadow-[0_4px_14px_rgba(255,77,141,0.25)] z-10"
        >
          Let's Talk
          <Send className="w-4 h-4" />
        </button>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-end rounded-full text-[#1e1e1e] z-10 relative"
        >
          <div className="relative w-5 h-5">
            <span
              className={`absolute right-0 top-1.5 h-0.5 w-5 bg-current transition-transform duration-300 ${mobileOpen ? "translate-y-1.5 -rotate-45" : ""
                }`}
            />
            <span
              className={`absolute right-0 top-3.5 h-0.5 w-5 bg-current transition-transform duration-300 ${mobileOpen ? "-translate-y-1.5 rotate-45" : ""
                }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full mt-3 w-[min(90vw,22rem)] rounded-3xl bg-white/95 backdrop-blur-xl border border-black/5 shadow-xl p-3"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.to);
                return (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 text-sm font-semibold rounded-2xl transition-colors ${active
                          ? "bg-[#ff4d8d]/10 text-[#ff4d8d]"
                          : "text-[#475569] hover:bg-black/5 hover:text-[#ff4d8d]"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setContactOpen(true);
                  }}
                  className="mt-2 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#ff8c42] to-[#ff4d8d] text-white px-4 py-3 rounded-2xl font-semibold text-sm shadow-md"
                >
                  Let's Talk
                  <Send className="w-4 h-4" />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </motion.header>
  );
};

export default Navbar;
