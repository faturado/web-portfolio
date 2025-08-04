"use client";
import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import {
  heroGreetings,
  personalInfo,
} from "../app/personal-info/personal-info";
import { socialLinks, footerInfo } from "@/app/personal-info/links";
import ConstellationStars from "@/components/star/constellation-star";

const Hero = () => {
  // Icon mapping
  const iconMap = {
    Github: Github,
    Mail: Mail,
    Linkedin: Linkedin,
  };

  return (
    <div className="w-screen h-screen relative flex items-center justify-center overflow-hidden">
      {/* Interactive Constellation Background */}
      <ConstellationStars starCount={80} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {heroGreetings.greeting}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 drop-shadow-md">
          {heroGreetings.subtitle}
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mb-6">
          {Object.entries(socialLinks).map(([key, link]) => {
            const IconComponent = iconMap[link.icon];
            return (
              <a
                key={key}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 transition-colors drop-shadow-md"
                aria-label={link.label}
              >
                <IconComponent className="w-8 h-8" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm drop-shadow-md">
          {footerInfo.copyright}
        </p>
      </div>
    </div>
  );
};

export default Hero;
