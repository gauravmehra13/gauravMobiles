import React, { useRef } from "react";
import "./Scroll.css";

const ScrollButton = () => {
  const featureCardsRef = useRef(null);

  const scrollToFeatureCards = () => {
    featureCardsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToFeatureCards}
      style={{ position: "relative", top: 35 }}
    >
      <span>
        <div className="scroll-down"></div>
        <div className="scroll-down"></div>
      </span>
      <div ref={featureCardsRef}></div>
    </div>
  );
};

export default ScrollButton;
