"use client";

import { motion } from "framer-motion";

export default function TextReveal({ text = "Hi, I'm Quỳnh Anh", className = "" }) {
  // Split string into array of letters, keeping spaces intact
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -45,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] ${className}`}
    >
      {letters.map((char, index) => {
        // Highlight "Quỳnh Anh" with gradient mint
        const isNamePart = index >= 8; // "Hi, I'm " is 8 chars

        return (
          <motion.span
            key={index}
            variants={letterVariants}
            className={`inline-block ${
              char === " " ? "w-2 sm:w-3 md:w-4" : ""
            } ${
              isNamePart
                ? "bg-gradient-to-r from-[#4ADE80] via-[#86EFAC] to-[#10B981] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(74,222,128,0.4)]"
                : "text-slate-100"
            }`}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}
