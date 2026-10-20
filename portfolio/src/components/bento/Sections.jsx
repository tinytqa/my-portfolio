"use client";

import { motion } from "framer-motion";
import { Briefcase, Compass, FolderKanban, Heart, Layers } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";
import CapabilityCard from "./CapabilityCard";
import TraceabilityStrip from "./TraceabilityStrip";
import LifeCard from "./LifeCard";
import BooksCard from "./BooksCard";
import PersonalityCard from "./PersonalityCard";
import ContactCard from "./ContactCard";
import ExperienceTimeline from "./ExperienceTimeline";
import SupportSkills from "./SupportSkills";
import AIReviewCard from "./AIReviewCard";
import MoreSection from "./MoreSection";
import FeaturedProject from "./FeaturedProject";
import ProjectGallery from "./ProjectGallery";
import AutomationLearningCard from "./AutomationLearningCard";

// One section per navbar tab; TabView shows the one matching the URL.

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

function Grid({ className, children }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`grid grid-cols-1 gap-6 w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ExperienceSection() {
  const s = useT().sections;
  return (
    <section id="experience">
      <SectionHeader
        icon={Briefcase}
        eyebrow={s.experience.eyebrow}
        title={s.experience.title}
        highlight={s.experience.highlight}
        description={s.experience.description}
      />
      <div className="max-w-4xl mx-auto">
        <ExperienceTimeline />
      </div>
    </section>
  );
}

export function SkillsSection() {
  const { CAPABILITIES } = useContent();
  const s = useT().sections;
  return (
    <section id="skills">
      <SectionHeader
        icon={Layers}
        eyebrow={s.skills.eyebrow}
        title={s.skills.title}
        highlight={s.skills.highlight}
        description={s.skills.description}
      />
      <Grid className="md:grid-cols-2">
        {CAPABILITIES.map((cap) => (
          <motion.div key={cap.id} variants={cardVariants} className="h-full">
            <CapabilityCard capability={cap} />
          </motion.div>
        ))}
        <motion.div variants={cardVariants} className="md:col-span-2">
          <AIReviewCard />
        </motion.div>
        <motion.div variants={cardVariants} className="md:col-span-2">
          <SupportSkills />
        </motion.div>
        <motion.div variants={cardVariants} className="md:col-span-2">
          <TraceabilityStrip />
        </motion.div>
      </Grid>
    </section>
  );
}

export function ProjectsSection() {
  const s = useT().sections;
  return (
    <section id="projects">
      <SectionHeader
        icon={FolderKanban}
        eyebrow={s.projects.eyebrow}
        title={s.projects.title}
        highlight={s.projects.highlight}
        description={s.projects.description}
      />
      <div className="mb-10">
        <FeaturedProject />
      </div>
      <ProjectGallery />
      <div className="mt-10">
        <AutomationLearningCard />
      </div>
    </section>
  );
}

export function MoreTabsSection() {
  const s = useT().sections;
  return (
    <section id="more">
      <SectionHeader
        icon={Compass}
        eyebrow={s.more.eyebrow}
        title={s.more.title}
        highlight={s.more.highlight}
      />
      <MoreSection />
    </section>
  );
}

export function LifeSection() {
  const s = useT().sections;
  return (
    <section id="life">
      <SectionHeader
        icon={Heart}
        eyebrow={s.life.eyebrow}
        title={s.life.title}
        highlight={s.life.highlight}
        description={s.life.description}
      />
      <Grid className="">
        <motion.div variants={cardVariants}>
          <PersonalityCard />
        </motion.div>
        <motion.div variants={cardVariants}>
          <LifeCard />
        </motion.div>
        <motion.div variants={cardVariants}>
          <BooksCard />
        </motion.div>
      </Grid>
    </section>
  );
}

// Its own layout (one centred call to action) rather than a section header + card grid
export function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 90, damping: 18 }}
      className="pt-4"
    >
      <ContactCard />
    </motion.section>
  );
}
