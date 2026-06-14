import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorGlow = () => {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const springX = useSpring(x, { stiffness: 160, damping: 22, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 160, damping: 22, mass: 0.5 });

  useEffect(() => {
    // Only enable on devices with a fine pointer
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{
        translateX: springX,
        translateY: springY,
      }}
      className="pointer-events-none fixed top-0 left-0 z-[60] -ml-[200px] -mt-[200px] h-[400px] w-[400px] rounded-full"
    >
      <div
        className="h-full w-full rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(127,90,240,0.35), rgba(255,77,141,0.18) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </motion.div>
  );
};

export default CursorGlow;
