import React from "react";
import Projects from "@/components/projects/Projects";
import ShootingStar from "@/components/star/shooting-star";

const ProjectsPage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Shooting Stars */}
      {[...Array(8)].map((_, i) => (
        <ShootingStar
          key={i}
          duration={Math.random() * 4 + 2} // 2-6 seconds
          delay={Math.random() * 10} // 0-10 second delay
          size={Math.random() * 2 + 1} // 1-3px size
          tailLength={Math.random() * 40 + 40} // 40-80px tail
          className="absolute z-0"
        />
      ))}

      {/* Projects Component */}
      <div className="relative z-10">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
