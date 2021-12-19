import React from "react";
import leaf from "../../Assets/images/leaf.png";
import "./OurProductsHeader.css";
import Zoom from "react-reveal/Zoom";

const OurProductsHeader = () => {
  return (
    <div className="our-products-header">
      <Zoom>
        <div>
          <h3>Our Products</h3>
          <div>
            <img src={leaf} alt="leaf" />
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default OurProductsHeader;
