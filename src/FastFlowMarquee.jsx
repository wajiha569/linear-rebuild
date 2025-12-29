// FastFlowMarquee.jsx
import React from "react";
import "./FastFlowMarquee.css";

export default function FastFlowMarquee({ children, duration = 6 }) {
  return (
    <div className="marquee-viewport">
      <div
        className="marquee-track"
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="marquee-item">{children}</div>
        <div className="marquee-item">{children}</div>
      </div>
    </div>
  );
}