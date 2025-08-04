"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "../../app/personal-info/personal-info";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    // Set client flag to true after hydration
    setIsClient(true);

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const headerHeight = 64;

      // Header becomes sticky when its current position would be at the top of viewport
      const stickyThreshold = heroHeight + 20;

      // Calculate which section is currently in view
      const currentSection = Math.round(scrollY / heroHeight);
      setActiveSection(currentSection);

      setScrollPosition(scrollY);
      setIsSticky(scrollY > stickyThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation functions
  const scrollToSection = (sectionIndex) => {
    const viewportHeight = window.innerHeight;
    const targetScrollPosition = viewportHeight * sectionIndex;

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };

  const scrollToHome = () => scrollToSection(0); // Hero section
  const scrollToAbout = () => scrollToSection(1); // About section
  const scrollToProjects = () => scrollToSection(2); // Projects section
  const scrollToExperience = () => scrollToSection(3); // Experience section
  const scrollToContacts = () => scrollToSection(4); // Contacts section

  // Helper function to get button classes
  const getButtonClasses = (sectionIndex) => {
    const baseClasses = "text-sm transition-colors";
    const isActive = activeSection === sectionIndex;

    if (isActive) {
      return `${baseClasses} text-red-500`;
    }
    return `${baseClasses} text-white hover:text-red-500`;
  };

  // Calculate position only on client side - push it down so it's not visible in hero
  const heroHeight = isClient ? window.innerHeight : 0;
  const headerPosition = heroHeight + 20; // Push it 20px below the viewport

  // Don't render until client-side hydration is complete
  if (!isClient) {
    return (
      <div
        className="w-screen h-16 flex items-center justify-between px-6 shadow-xl z-50 absolute"
        style={{
          backgroundColor: "var(--background-header)",
          top: "100vh", // Safe default for SSR - below viewport
        }}
      >
        {/* Left side - Initial with gradient */}
        <div className="font-bold text-lg bg-gradient-to-r from-[#c31432] to-[#240b36] bg-clip-text text-transparent">
          {personalInfo.initial}
        </div>

        {/* Right side - Navigation */}
        <nav className="flex space-x-8">
          <button
            onClick={scrollToHome}
            className="text-white text-sm hover:text-red-500 transition-colors"
          >
            HOME
          </button>
          <button
            onClick={scrollToAbout}
            className="text-white text-sm hover:text-red-500 transition-colors"
          >
            ABOUT
          </button>
          <button
            onClick={scrollToProjects}
            className="text-white text-sm hover:text-red-500 transition-colors"
          >
            PROJECTS
          </button>
          <button
            onClick={scrollToExperience}
            className="text-white text-sm hover:text-red-500 transition-colors"
          >
            EXPERIENCE
          </button>
          <button
            onClick={scrollToContacts}
            className="text-white text-sm hover:text-red-500 transition-colors"
          >
            CONTACTS
          </button>
        </nav>
      </div>
    );
  }

  return (
    <div
      className={`w-screen h-16 flex items-center justify-between px-6 shadow-xl z-50 ${
        isSticky ? "fixed top-0" : "absolute"
      }`}
      style={{
        backgroundColor: "var(--background-header)",
        top: isSticky ? 0 : `${headerPosition}px`,
      }}
    >
      {/* Left side - Initial with gradient */}
      <div className="font-bold text-lg bg-gradient-to-r from-[#c31432] to-[#240b36] bg-clip-text text-transparent">
        {personalInfo.initial}
      </div>

      {/* Right side - Navigation */}
      <nav className="flex space-x-8">
        <button onClick={scrollToHome} className={getButtonClasses(0)}>
          HOME
        </button>
        <button onClick={scrollToAbout} className={getButtonClasses(1)}>
          ABOUT
        </button>
        <button onClick={scrollToProjects} className={getButtonClasses(2)}>
          PROJECTS
        </button>
        <button onClick={scrollToExperience} className={getButtonClasses(3)}>
          EXPERIENCE
        </button>
        <button onClick={scrollToContacts} className={getButtonClasses(4)}>
          CONTACTS
        </button>
      </nav>
    </div>
  );
};

export default Header;
