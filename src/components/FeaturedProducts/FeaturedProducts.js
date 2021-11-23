import React, { useState} from "react";
import { FaEye } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { AiOutlineClose } from "react-icons/ai";
import leaf from "../../Assets/images/leaf.png";
import "./FeaturedProducts.css";
import orange from "../../Assets/products/Orange-Navel.png";
import mango from "../../Assets/products/Mango-alphonso.png";
import lemon from "../../Assets/products/lemon.png";
import mandarin from "../../Assets/products/Mandarin.png";

const Featuredproducts = [
  {
    id: 1,
    name: "Orange",
    image: orange,
    duration: 'From Dec. to Feb.',
    details:
      "The Navel Orange is a good orange. Helps keep blood pressure under check and lowers cholestrol.",
  },
  {
    id: 2,
    name: "Mandarin",
    image: mandarin,
    duration: 'From Nov. to Mar.',
    details:
      "This citrus fruit contains Vitamins A, B, and a high level of Vitamin C has multiple health benefits, from reducing the risk of cancer to weight loss.",
  },
  {
    id: 3,
    name: "Lemon (Eureka)",
    image: lemon,
    duration: 'From Oct. to Jan.',
    details:
      "Lemon health benefits includes improving vitamin C levels, decreasing blood cholesterol, boosting liver function, boosting metabolism.",
  },
  {
    id: 4,
    name: "Mango Alphonso",
    image: mango,
    duration: 'From Apr. to Oct.',
    details:
      "Also known as 'The King of Fruits,' Alphonso mangoes are rich in flavour and are premium variety of mango. It can be eaten fresh, sliced or pureed and are rich in vitamins.",
  },
];

const FeaturedProducts = () => {
  const [popupContent, setPopupContent] = useState([]);
  const [popupToggle, setPopupToggle] = useState(false);
  const changeContent = (product) => {
    setPopupContent([product]);
    setPopupToggle(!popupToggle);
  };
  return (
    <div className="featured-products">
      <div className="container grid">
        <div className="featured-products-title">
          <p>our products</p>
          <h3>featured products</h3>
          <div>
            <img src={leaf} alt="leaf" />
          </div>
        </div>
        <div className="our-featured-products">
          <div className="grid">
            {Featuredproducts.map((product) => {
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

export default FeaturedProducts;
