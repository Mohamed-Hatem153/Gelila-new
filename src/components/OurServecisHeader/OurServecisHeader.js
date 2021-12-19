import React from "react";
import leaf from "../../Assets/images/leaf.png";
import "./OurServecisHeader.css";
import Zoom from "react-reveal/Zoom";

const OurServecisHeader = () => {
  return (
    <div className="our-servecis-header">
      <Zoom>
        <div>
          <h3>Our Servecis</h3>
          <div>
            <img src={leaf} alt="leaf" />
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default OurServecisHeader;
