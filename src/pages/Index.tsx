import { useState } from "react";
import NavBar from "@/components/portfolio/NavBar";

import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ProfilesSection from "@/components/portfolio/ProfilesSection";
import CertificationSection from "@/components/portfolio/CertificationSection";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-background text-foreground">

      <NavBar
        activeSection={activeSection}
        onNavClick={setActiveSection}
      />

      <main>

        {/* HOME PAGE */}
        {activeSection === "home" && (
          <>
            <HeroSection />
            <AboutSection />
            <ProfilesSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </>
        )}

        {/* INDIVIDUAL PAGES */}
        {activeSection === "about" && <AboutSection />}
        {activeSection === "skills" && <SkillsSection />}
        {activeSection === "projects" && <ProjectsSection />}
        {activeSection === "contact" && <ContactSection />}
        {activeSection === "education" && <EducationSection />}
        {activeSection === "experience" && <ExperienceSection />}
        {activeSection === "links" && <ProfilesSection />}
        {activeSection === "certification" && <CertificationSection />}

      </main>
    </div>
  );
}