import React from "react";
import leaf from "../../Assets/images/leaf.png";
import "./OurProductsHeader.css";

const OurProductsHeader = () => {
  return (
    <div className="our-products-header">
      <div>
        <h3>Our Products</h3>
        <div>
          <img src={leaf} alt="leaf" />
        </div>
      </div>
    </div>
  );
};

export default OurProductsHeader;
