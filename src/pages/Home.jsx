import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "/src/pages/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { TimelineSection } from "../components/TimelineSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { GithubStatsSection } from "../components/GithubStatsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { VisitorBadge } from "@/components/VisitorBadge";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TimelineSection />
        <ProjectsSection />
        <GithubStatsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Live visitor count badge */}
      <VisitorBadge />
    </div>
  );
};
