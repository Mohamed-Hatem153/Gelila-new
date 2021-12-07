import React, { useState } from "react";
import { OurAllProducts } from "./OurProducts";
import { FaEye } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { AiOutlineClose } from "react-icons/ai";
import leaf from "../../Assets/images/leaf.png";

const Product = () => {
  const [popupContent, setPopupContent] = useState([]);
  const [popupToggle, setPopupToggle] = useState(false);
  const changeContent = (product) => {
    setPopupContent([product]);
    setPopupToggle(!popupToggle);
  };
  return (
    <div className="featured-products">
      <div className="container grid">
        <Zoom>
          <div className="featured-products-title">
            <p>our products</p>
            <h3>vegetables and fruits</h3>
            <div>
              <img src={leaf} alt="leaf" />
            </div>
          </div>
        </Zoom>
        <div className="our-featured-products">
          <div className="grid">
            {OurAllProducts.map((product) => {
              return (
                <Fade bottom>
                  <div
                    key={product.id}
                    className="product"
                    onClick={() => changeContent(product)}
                  >
                    <img src={product.image} alt={product.name} />
                    <h4>
                      {product.name} <FaEye className="product-eye" />
                    </h4>
                  </div>
                </Fade>
              );
            })}
          </div>
          {popupToggle && (
            <div className="pop-up-container" onClick={changeContent}>
              <div className="pop-up-body" onClick={(e) => e.stopPropagation()}>
                <div className="pop-up-header">
                  <button onClick={changeContent}>
                    <AiOutlineClose />
                  </button>
                </div>
                <div className="pop-up-content">
                  {popupContent.map((pop) => {
                    return (
                      <div className="pop-up-card">
                        <div className="pop-up-details">
                          <h2>100% fresh. Sourced from Egypt.</h2>
                          <h3>Benefits:</h3>
                          <p>{pop.details}</p>
                          <p>Available: {pop.duration}</p>
                        </div>
                        <div className="pop-up-img">
                          <img src={pop.image} alt={pop.title} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
