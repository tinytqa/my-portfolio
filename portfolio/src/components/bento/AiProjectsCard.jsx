"use client";

import { motion } from "framer-motion";
import NeuralParticles from "./NeuralParticles";
import {
  CheckCircle2,
  FileCheck,
  Cpu,
  Layers,
  ArrowUpRight,
  Plus,
  GitBranch,
  ShieldCheck,
  Search,
} from "lucide-react";

export default function AiProjectsCard() {
  // Kinetic marquee words
  const marqueeItems = [
    "AI Models & RAG Systems",
    "Business Analysis (BA)",
    "Quality Assurance (QA)",
    "Requirements Engineering",
    "Test Matrix & Validation",
    "pgvector & LangChain",
    "Zero Critical Escapes",
  ];

  return (
    <div className="relative w-full rounded-3xl glass-panel border border-accent/20 hover:border-accent/50 transition-all duration-500 overflow-hidden group p-6 sm:p-8">
      {/* Background Neural Particles Canvas */}
      <NeuralParticles />

      {/* Ambient background mint glow */}
      <div className="absolute -top-24 -left-24 w-60 h-60 bg-accent/15 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/25 transition-all duration-500" />

      {/* 1. Kinetic Typography Running Marquee Banner */}
      <div className="relative z-10 w-full overflow-hidden py-2.5 mb-8 border-y border-accent/15 bg-page/60 backdrop-blur-sm -mx-6 sm:-mx-8 px-6 sm:px-8">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              x: { duration: 25, repeat: Infinity, ease: "linear" },
            }}
            className="flex items-center gap-8 text-xs font-mono font-medium tracking-wider text-accent"
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
              (item, idx) => (
                <span key={idx} className="inline-flex items-center gap-3">
                  <span>{item}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: BA kiêm QA Engineering Experience */}
        <div className="lg:col-span-6 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-page/80 border border-accent/25 hover:border-accent/50 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-accent uppercase tracking-wider block">
                    Proven Experience
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-stone-900">
                    BA kiêm QA Engineering
                  </h4>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-accent/10 text-accent-soft border border-accent/30">
                Core Specialty
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
              Đóng vai trò cầu nối chặt chẽ giữa <strong>nghiệp vụ khách hàng (Business Requirements)</strong> và <strong>kiến trúc kỹ thuật</strong>. Làm chủ quy trình từ xây dựng BRD/SRS, phân rã User Stories, thiết kế Acceptance Criteria đến quản trị chất lượng sản phẩm (QA testing matrix, test scenarios, edge cases validation).
            </p>

            {/* Key Skill Highlights */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-stone-700 mb-4">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-stone-200">
                <FileCheck className="w-3.5 h-3.5 text-accent" />
                <span className="text-[11px]">BRD & SRS Specs</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-stone-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span className="text-[11px]">QA Test Scenarios</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-stone-200">
                <Search className="w-3.5 h-3.5 text-accent" />
                <span className="text-[11px]">Edge-Case Defense</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-stone-200">
                <GitBranch className="w-3.5 h-3.5 text-accent" />
                <span className="text-[11px]">UAT & Release Gates</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-[11px] font-mono text-stone-600">
            <span>Philosophy: Zero Critical Escapes</span>
            <span className="text-accent">High Reliability</span>
          </div>
        </div>

        {/* Right Column: AI / Data Projects & Customizable Slots */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          {/* Template Project 1: Enterprise RAG Architecture */}
          <div className="p-4 sm:p-5 rounded-2xl bg-page/80 border border-stone-200 hover:border-accent/40 transition-all duration-300 group/proj">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-accent-soft mb-1">
                  <Cpu className="w-3 h-3 text-accent" />
                  <span>AI & RAG Architecture</span>
                </div>
                <h5 className="text-sm sm:text-base font-semibold text-stone-900 group-hover/proj:text-accent transition-colors">
                  Enterprise RAG & Knowledge Hub
                </h5>
                <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                  Hệ thống truy xuất thông tin ngữ nghĩa thông minh kết hợp LangChain, PostgreSQL (pgvector) và mô hình ngôn ngữ lớn (LLM).
                </p>
              </div>
              <div className="w-7 h-7 rounded-lg bg-surface border border-stone-200 flex items-center justify-center text-stone-600 group-hover/proj:text-accent group-hover/proj:border-accent/40 transition-all">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {["LangChain", "Python", "pgvector", "RAG"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md bg-surface border border-accent/20 text-[10px] font-mono text-stone-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Template Project 2: Customizable Personal Project Slot */}
          <div className="p-4 sm:p-5 rounded-2xl bg-page/50 border border-dashed border-accent/25 hover:border-accent/60 transition-all duration-300 flex items-center justify-between cursor-pointer group/add">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-surface border border-accent/30 flex items-center justify-center text-accent group-hover/add:scale-105 group-hover/add:border-accent/60 transition-all">
                <Plus className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold text-stone-800 group-hover/add:text-accent transition-colors block">
                  Dự án cá nhân tiếp theo (Ready to Fill)
                </span>
                <span className="text-[11px] text-stone-600">
                  Dễ dàng bổ sung tên dự án, repo link & mô tả sau này
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-surface border border-stone-200 text-stone-600 group-hover/add:text-accent transition-colors hidden sm:inline">
              + Add Slot
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
