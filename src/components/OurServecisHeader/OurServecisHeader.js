import React from "react";
import leaf from "../../Assets/images/leaf.png";
import './OurServecisHeader.css'

const OurServecisHeader = () => {
  return (
    <div className="our-servecis-header">
      <div>
        <h3>Our Servecis</h3>
        <div>
          <img src={leaf} alt="leaf" />
        </div>
      </div>
    </div>
  );
};

export default OurServecisHeader;
