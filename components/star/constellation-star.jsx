import React, { useEffect, useRef, useState } from "react";

const ConstellationStars = ({ starCount = 80 }) => {
  const containerRef = useRef(null);
  const [stars, setStars] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  // Generate stars on component mount
  useEffect(() => {
    const newStars = [...Array(starCount)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.6 + 0.4,
    }));
    setStars(newStars);
  }, [starCount]);

  // Track mouse position with throttling
  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          const rect = containerRef.current.getBoundingClientRect();
          setMousePos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
          });
        });
      }
    };

    const handleMouseEnter = () => setIsMouseInside(true);
    const handleMouseLeave = () => setIsMouseInside(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  // Calculate distance between two points
  const getDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  // Find stars near cursor for connections - INCREASED AREA
  const getStarsNearCursor = () => {
    const cursorConnectionDistance = 20; // Increased from 12 to 20

    return stars.filter((star) => {
      const distance = getDistance(star.x, star.y, mousePos.x, mousePos.y);
      return distance < cursorConnectionDistance;
    });
  };

  // Find connected stars to other stars - INCREASED AREA
  const getConnectedStars = (star) => {
    const connectionDistance = 15; // Increased from 10 to 15
    const cursorInfluenceDistance = 25; // Increased from 15 to 25

    const distanceFromCursor = getDistance(
      star.x,
      star.y,
      mousePos.x,
      mousePos.y
    );

    if (distanceFromCursor > cursorInfluenceDistance) return [];

    return stars.filter((otherStar) => {
      if (otherStar.id === star.id) return false;
      const distance = getDistance(star.x, star.y, otherStar.x, otherStar.y);
      const otherStarDistance = getDistance(
        otherStar.x,
        otherStar.y,
        mousePos.x,
        mousePos.y
      );
      return (
        distance < connectionDistance &&
        otherStarDistance < cursorInfluenceDistance
      );
    });
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      {/* SVG for constellation lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Star to star connections */}
        {stars.map((star) => {
          const connectedStars = getConnectedStars(star);
          return connectedStars.map((connectedStar) => {
            const starDistance = getDistance(
              star.x,
              star.y,
              mousePos.x,
              mousePos.y
            );
            const opacity = Math.max(0, 0.6 - starDistance / 40); // Adjusted opacity calculation

            return (
              <line
                key={`${star.id}-${connectedStar.id}`}
                x1={`${star.x}%`}
                y1={`${star.y}%`}
                x2={`${connectedStar.x}%`}
                y2={`${connectedStar.y}%`}
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="0.5"
                opacity={opacity}
              />
            );
          });
        })}

        {/* Cursor to star connections */}
        {isMouseInside &&
          getStarsNearCursor().map((star) => {
            const distance = getDistance(
              star.x,
              star.y,
              mousePos.x,
              mousePos.y
            );
            const opacity = Math.max(0, 1 - distance / 20); // Adjusted for larger area

            return (
              <line
                key={`cursor-${star.id}`}
                x1={`${mousePos.x}%`}
                y1={`${mousePos.y}%`}
                x2={`${star.x}%`}
                y2={`${star.y}%`}
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="1"
                opacity={opacity}
              />
            );
          })}
      </svg>

      {/* Stars */}
      {stars.map((star) => {
        const distanceFromCursor = getDistance(
          star.x,
          star.y,
          mousePos.x,
          mousePos.y
        );
        const isNearCursor = distanceFromCursor < 25; // Increased from 15 to 25
        const intensity = Math.max(0, 1 - distanceFromCursor / 25); // Adjusted calculation

        return (
          <div
            key={star.id}
            className="absolute bg-white rounded-full transition-all duration-300 ease-out"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size + (isNearCursor ? intensity * 1 : 0)}px`,
              height: `${star.size + (isNearCursor ? intensity * 1 : 0)}px`,
              opacity: star.opacity + (isNearCursor ? intensity * 0.3 : 0),
              boxShadow: isNearCursor
                ? `0 0 ${6 + intensity * 8}px rgba(255, 255, 255, ${
                    intensity * 0.6
                  })`
                : "none",
              transform: `translate(-50%, -50%)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ConstellationStars;
