import React from "react";
import leaf from "../../Assets/images/leaf.png";
import "./AboutUsHeader.css";

const AboutUsHeader = () => {
  return (
    <div className="about-us-header">
      <div>
        <h3>About Us</h3>
        <div>
          <img src={leaf} alt="leaf" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeader;
