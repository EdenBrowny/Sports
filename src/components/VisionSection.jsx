import React from "react";
import "./VisionSection.css";
import image2 from "../assists/images/image2.png";

function VisionSection() {
  return (
    <>
      <div className="vision">
        <div className="vision-head">
          <h2>Our Academy</h2>
        </div>

        <div className="vision-img">
          <div className="football"></div>
          <img src={image2} alt="" />
        </div>
      </div>
    </>
  );
}

export default VisionSection;
