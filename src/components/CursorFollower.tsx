import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [visible]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-6 w-6 rounded-full border border-primary/60 mix-blend-difference"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 150, mass: 0.5 }}
    />
  );
};

export default CursorFollower;
