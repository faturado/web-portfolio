import React from "react";

const Stars = ({ count = 200, largeCount = 50 }) => {
  return (
    <div className="fixed inset-0 bg-black z-0">
      {/* Generate small stars */}
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}

      {/* Generate larger twinkling stars */}
      {[...Array(largeCount)].map((_, i) => (
        <div
          key={`large-${i}`}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 2}px`,
            height: `${Math.random() * 2 + 2}px`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
