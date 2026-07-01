"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent">
      <motion.div
        className="h-full origin-left bg-primary"
        style={{ scaleX }}
      />
    </div>
  );
}
