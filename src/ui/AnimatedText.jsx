import React from "react";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AnimatedText = ({ text, className }) => {
  return (
    <div className="flex">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className={className}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
