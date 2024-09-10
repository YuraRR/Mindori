import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Animated({
  children,
  initialX = 0,
  initialY = 150,
  duration = 0.5,
  delay = 0,
  scale = 1,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY, scale: scale }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
