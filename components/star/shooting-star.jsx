import React from "react";

const ShootingStar = ({
  duration = 3,
  delay = 0,
  size = 2,
  tailLength = 60,
  className = "",
}) => {
  // Generate more realistic shooting star angles with bias towards natural directions
  const angleTypes = [
    { min: 30, max: 60 }, // Top-left to bottom-right (most common)
    { min: 120, max: 150 }, // Top-right to bottom-left
    { min: 210, max: 240 }, // Bottom-right to top-left (rare)
    { min: 300, max: 330 }, // Bottom-left to top-right (rare)
  ];

  const selectedAngleType =
    angleTypes[Math.floor(Math.random() * angleTypes.length)];
  const angle =
    Math.random() * (selectedAngleType.max - selectedAngleType.min) +
    selectedAngleType.min;

  // Smart starting positions based on angle for natural trajectories
  let startX, startY;

  if (angle >= 30 && angle <= 60) {
    // Top-left to bottom-right: start from top or left edge
    const startFromTop = Math.random() > 0.5;
    startX = startFromTop ? Math.random() * 30 : -5; // Start from left third or off-screen left
    startY = startFromTop ? -5 : Math.random() * 30; // Start from off-screen top or top third
  } else if (angle >= 120 && angle <= 150) {
    // Top-right to bottom-left: start from top or right edge
    const startFromTop = Math.random() > 0.5;
    startX = startFromTop ? Math.random() * 30 + 70 : 105; // Start from right third or off-screen right
    startY = startFromTop ? -5 : Math.random() * 30; // Start from off-screen top or top third
  } else if (angle >= 210 && angle <= 240) {
    // Bottom-right to top-left: start from bottom or right edge
    const startFromBottom = Math.random() > 0.5;
    startX = startFromBottom ? Math.random() * 30 + 70 : 105; // Start from right third or off-screen right
    startY = startFromBottom ? 105 : Math.random() * 30 + 70; // Start from off-screen bottom or bottom third
  } else {
    // Bottom-left to top-right: start from bottom or left edge
    const startFromBottom = Math.random() > 0.5;
    startX = startFromBottom ? Math.random() * 30 : -5; // Start from left third or off-screen left
    startY = startFromBottom ? 105 : Math.random() * 30 + 70; // Start from off-screen bottom or bottom third
  }

  return (
    <div
      className={`shooting-star-random ${className}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        width: `${size}px`,
        height: `${size}px`,
        "--tail-length": `${tailLength}px`,
        "--start-x": `${startX}vw`,
        "--start-y": `${startY}vh`,
        "--angle": `${angle}deg`,
      }}
    />
  );
};

export default ShootingStar;
