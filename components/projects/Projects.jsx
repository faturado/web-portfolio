import React from "react";
import { projectsInfo } from "../../app/personal-info/projects";

const Projects = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center px-6">
      {/* Title with same styling as About */}
      <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-12 mt-30">
        {projectsInfo.title}
        <span className="bg-red-500 h-2 w-16 block mt-2 mx-auto"></span>
      </h2>

      {/* Projects content */}
      <div className="max-w-7xl mx-auto flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center h-full">
          {/* Left side - Project Image - Much Larger (2/3 width) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="w-full">
              <img
                src={projectsInfo.projects[0].image}
                alt={projectsInfo.projects[0].name}
                className="w-full h-[500px] rounded-lg shadow-2xl border-2 border-gradient-to-r from-[#c31432] to-[#240b36] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {projectsInfo.projects[0].name}
              </h3>
              <p className="text-lg text-white leading-relaxed">
                {projectsInfo.projects[0].description}
              </p>
            </div>

            {/* Technologies used */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-3">
                {projectsInfo.projects[0].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-black/40 border border-gradient-to-r from-[#c31432] to-[#240b36] rounded-lg px-4 py-2 text-white text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
