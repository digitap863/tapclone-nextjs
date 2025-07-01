import React from "react";
import circle from "../../assets/Asset-2_300x-1X.png";
import Image from "next/image";

const HeroCircle = () => {
  return (
    <>
      <div className="circle ">
        <div className="circleBorder  ">
          <div className="circleBorderCircle "></div>
        </div>
        <Image className="mainCircle  " src={circle} alt="" quality={100} />
      </div>
    </>
  );
};

export default HeroCircle;
