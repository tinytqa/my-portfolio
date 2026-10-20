"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Hero from "@/components/hero/Hero";
import SectionPage from "./SectionPage";
import {
  ExperienceSection,
  SkillsSection,
  ProjectsSection,
  MoreTabsSection,
  LifeContactSection,
} from "@/components/bento/Sections";
import { useContent } from "@/lib/i18n";

const SECTIONS = {
  "/experience": ExperienceSection,
  "/skills": SkillsSection,
  "/projects": ProjectsSection,
  "/more": MoreTabsSection,
  "/contact": LifeContactSection,
};

// Same as the root layout's metadata title
const HOME_TITLE = "Trần Quỳnh Anh — Business Analyst & Tester";

/**
 * Rendered by every tab route (/, /experience, …). Tabs switch on the client via TabLink,
 * so this picks the section from the URL instead of relying on the route that loaded.
 */
export default function TabView() {
  const pathname = usePathname();
  const { PERSONAL_INFO, NAV_LINKS } = useContent();
  const Section = SECTIONS[pathname];

  // pushState does not re-run route metadata, so keep the browser tab title in sync here
  const label = NAV_LINKS.find((link) => link.href === pathname)?.label;
  useEffect(() => {
    document.title = label ? `${label} — ${PERSONAL_INFO.fullName}` : HOME_TITLE;
  }, [label, PERSONAL_INFO.fullName]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {Section ? (
        <SectionPage>
          <Section />
        </SectionPage>
      ) : (
        <Hero />
      )}
    </motion.div>
  );
}
