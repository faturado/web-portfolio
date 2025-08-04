import React from "react";
import { Icon } from "@iconify/react";
import { aboutInfo } from "../../app/personal-info/about";

const About = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center px-6">
      {/* Title moved down a bit from the top */}
      <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-12 mt-30">
        {aboutInfo.title}
        <span className="bg-red-500 h-2 w-16 block mt-2 mx-auto"></span>
      </h2>

      {/* Main content grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start flex-1">
        {/* Left side - Profile and Text */}
        <div className="flex flex-col items-center space-y-6">
          {/* Profile Image with gradient border */}
          <div className="w-64 h-64 rounded-full p-1 bg-gradient-to-r from-[#c31432] to-[#240b36]">
            <img
              src={aboutInfo.profileImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-2 border-transparent"
            />
          </div>

          {/* Text Content below image */}
          <div className="w-full">
            <p className="text-lg text-white/90 leading-relaxed text-center lg:text-left">
              {aboutInfo.description}
            </p>
          </div>
        </div>

        {/* Right side - Tech Stack */}
        <div className="flex justify-center lg:justify-end">
          <div className="grid grid-cols-3 gap-7 max-w-md mt-6">
            {aboutInfo.techStack.map((tech) => (
              <div
                key={tech.id}
                className="relative bg-black/40 rounded-lg p-4 text-center hover:scale-105 transition-transform"
              >
                {/* Gradient border using pseudo-element */}
                <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-[#c31432] to-[#240b36]">
                  <div className="bg-black/40 rounded-lg h-full w-full"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl mb-2 flex justify-center">
                    <Icon icon={tech.icon} className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
