import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { ServicesSection } from "@/components/sections/services";
import { SkillsSection } from "@/components/sections/skills";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <div className="pb-16">
      <Header />
      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-4 pt-12 sm:px-8">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <footer className="pb-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Crafted with curiosity & caffeine.
        </footer>
      </main>
    </div>
  );
}
