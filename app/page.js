import React from "react";
import HeroPage from "./hero-page/page";
import AboutPage from "./about/page";
import Header from "@/components/header/header";
import Stars from "@/components/star/star";
import ProjectsPage from "./projects/page";
import ExperiencePage from "./experience/page";

const page = () => {
  return (
    <div className="overflow-x-hidden relative bg-black min-h-screen">
      {/* Starry Background for entire page */}
      <Stars count={200} largeCount={50} />

      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Header />
        <HeroPage />
        <div className="relative">
          <AboutPage />
          <ProjectsPage />
          <ExperiencePage />
        </div>
      </div>
    </div>
  );
};

export default page;
