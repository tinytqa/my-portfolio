"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Activity, Binary, BrainCircuit, Sparkles } from "lucide-react";

export default function Geometric3DVisual() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking with spring damping
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), {
    damping: 20,
    stiffness: 150,
  });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[420px] lg:max-w-[480px] aspect-square mx-auto flex items-center justify-center select-none"
      style={{ perspective: 1000 }}
    >
      {/* Background radial ambient glow aura */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-72 h-72 rounded-full blur-[90px] bg-gradient-to-tr from-[#10B981] via-[#4ADE80] to-[#86EFAC] pointer-events-none"
      />

      {/* Main 3D Tilting Frame */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Outer Gyroscope Ring 1 (Yaw) */}
        <motion.div
          animate={{
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[320px] sm:w-[360px] h-[320px] sm:h-[360px] rounded-full border border-[#4ADE80]/30 shadow-[0_0_20px_rgba(74,222,128,0.15)] flex items-center justify-center pointer-events-none"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(65deg)",
          }}
        >
          {/* Orbital Satellite Node */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#4ADE80] shadow-[0_0_15px_#4ADE80] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>
        </motion.div>

        {/* Outer Gyroscope Ring 2 (Pitch) */}
        <motion.div
          animate={{
            rotateZ: [360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[270px] sm:w-[300px] h-[270px] sm:h-[300px] rounded-full border border-[#10B981]/40 border-dashed pointer-events-none"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(70deg)",
          }}
        >
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#86EFAC] shadow-[0_0_12px_#86EFAC]" />
        </motion.div>

        {/* Core 3D Breathing Floating Geometric Crystal (Hexagonal Prism / Glass Core) */}
        <motion.div
          animate={{
            y: [-12, 12, -12],
            rotateX: [0, 15, 0],
            rotateY: [0, 360],
            scale: [0.94, 1.06, 0.94], // Breathing pulsation
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 18, repeat: Infinity, ease: "linear" },
            scale: { duration: 3.8, repeat: Infinity, ease: "easeInOut" }, // Breathing pulse cycle
          }}
          className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center pointer-events-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Outer Glass Morphic Diamond */}
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4ADE80]/15 via-[#121816]/70 to-[#10B981]/25 backdrop-blur-xl border-2 border-[#4ADE80]/40 shadow-[0_0_40px_rgba(74,222,128,0.3)] transform rotate-45"
            style={{ transform: "rotate(45deg) translateZ(25px)" }}
          />

          {/* Inner Counter-Rotating Hex Lattice */}
          <motion.div
            animate={{ rotate: [45, 225, 45] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-4 rounded-2xl border border-[#86EFAC]/30 bg-black/40 backdrop-blur-md flex items-center justify-center"
            style={{ transform: "translateZ(45px)" }}
          >
            {/* Center Core Neural Nexus Sphere */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-white via-[#4ADE80] to-[#10B981] shadow-[0_0_35px_#4ADE80] flex items-center justify-center"
            >
              <BrainCircuit className="w-8 h-8 text-[#0B1110]" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Holographic Satellite Metric 1: RAG Status */}
        <motion.div
          animate={{
            y: [-6, 8, -6],
            x: [0, 4, 0],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transform: "translateZ(65px)" }}
          className="absolute -top-3 -right-2 sm:right-2 px-3 py-1.5 rounded-xl glass-panel border border-[#4ADE80]/30 flex items-center gap-2 shadow-lg"
        >
          <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-ping" />
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-mono text-slate-400">Model Engine</span>
            <span className="text-xs font-semibold text-[#86EFAC]">RAG • Gemini 2.0</span>
          </div>
        </motion.div>

        {/* Floating Holographic Satellite Metric 2: Vector Dimension */}
        <motion.div
          animate={{
            y: [8, -8, 8],
            x: [-3, 3, -3],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transform: "translateZ(75px)" }}
          className="absolute -bottom-2 -left-2 sm:left-4 px-3 py-1.5 rounded-xl glass-panel border border-[#10B981]/30 flex items-center gap-2 shadow-lg"
        >
          <Binary className="w-3.5 h-3.5 text-[#4ADE80]" />
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-mono text-slate-400">Embedding Dim</span>
            <span className="text-xs font-mono font-medium text-slate-200">1536-d pgvector</span>
          </div>
        </motion.div>

        {/* Floating Holographic Satellite Metric 3: Badminton Activity */}
        <motion.div
          animate={{
            y: [-5, 6, -5],
          }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transform: "translateZ(55px)" }}
          className="absolute bottom-16 -right-4 sm:-right-6 px-3 py-1.5 rounded-xl glass-panel border border-[#4ADE80]/20 flex items-center gap-2 shadow-lg hidden sm:flex"
        >
          <Activity className="w-3.5 h-3.5 text-[#4ADE80]" />
          <span className="text-xs font-mono text-slate-300">
            Shuttle Speed: <span className="text-[#4ADE80]">320 km/h</span>
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
