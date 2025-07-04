import React from "react";

function AboutCard({ color, titleTop, titleMid, titleBottom, animation, description }) {
  return (
    <div className="about-desc ">
      <div
        className="about-desc-content "
        style={{
          transition: "1s ease-in-out",
          animation: animation,
        }}
      >
        <h1 style={{ color: color }}>
          <span>{titleTop}</span>
          <br />
          {titleMid && <>{titleMid}<br /></>}
          {titleBottom && <>{titleBottom}</>}
        </h1>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

export default AboutCard; 