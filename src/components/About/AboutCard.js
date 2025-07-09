import React from "react";

function AboutCard({ color, titleTop, animation, description }) {
  return (
    <div className="about-desc">
      <div
        className="about-desc-content"
        style={{
          transition: "1s ease-in-out",
          animation: animation,
        }}
      >
        <h1 
          style={{ color: color }} 
          className=" !text-3xl md:!text-5xl "
        >
          {titleTop}
        </h1>
        <div className="mt-4 text-base md:text-xl">{description}</div>
      </div>
    </div>
  );
}

export default AboutCard; 