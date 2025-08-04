import React from "react";
import About from "@/components/about/about";
import ShootingStar from "@/components/star/shooting-star";

const AboutPage = () => {
  return (
    <div className="relative">
      {/* Multiple shooting stars for about section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Generate 6 shooting stars with staggered timing */}
        {[...Array(6)].map((_, i) => (
          <ShootingStar
            key={`about-shooting-${i}`}
            duration={Math.random() * 3 + 2} // 2-5 seconds
            delay={Math.random() * 8 + i * 1.5} // Staggered delays
            size={Math.random() * 2 + 1.5} // 1.5-3.5px
            tailLength={Math.random() * 40 + 50} // 50-90px
          />
        ))}
      </div>

      <About />
    </div>
  );
};

export default AboutPage;
