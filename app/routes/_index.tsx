import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
import About from "~/components/sections/About";
import Education from "~/components/sections/Education";
import WorkExperience from "~/components/sections/WorkExperience";
import Projects from "~/components/sections/Projects";
import { SocialLinks } from "~/components/sections/SocialLinks";

export const meta: MetaFunction = () => {
  return [
    { title: "Luke Thomas - Portfolio" },
    { name: "description", content: "Professional full-stack software developer portfolio" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen p-4 lg:overflow-hidden">
      <div className="grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_4fr_4fr_1fr] lg:grid-rows-[auto_1fr_1fr_1fr_auto] gap-4 lg:gap-8 p-8">
        {/* Header - spans full width */}
        <div className="col-span-full">
          <Header />
        </div>

        <div className="lg:col-start-2">
          <About />
        </div>

        <div className="lg:col-start-2">
          <WorkExperience />
        </div>

        <div className="lg:col-start-2">
          <Education />
        </div>

        <div className="lg:col-start-2">
          <a href="/LukeThomasMay2025.pdf" className="text-emerald-500 hover:text-emerald-800 dark:text-[#64ffda] dark:hover:text-[#64ffda]/80 transition-colors">
            View Full Résumé
          </a>
        </div>

        <div className="md:col-start-2 md:row-start-2 md:row-span-2 lg:col-start-3">
          <Projects />
        </div>

        <div className="hidden md:block">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}