import React from "react";
import leaf from "../../Assets/images/leaf.png";
import "./AboutUsHeader.css";
import Zoom from "react-reveal/Zoom";

const AboutUsHeader = () => {
  return (
    <div className="about-us-header">
      <Zoom>
        <div>
          <h3>About Us</h3>
          <div>
            <img src={leaf} alt="leaf" />
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default AboutUsHeader;
