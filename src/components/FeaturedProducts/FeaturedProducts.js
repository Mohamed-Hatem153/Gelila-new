import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import ProductModal from "../Modal/Modal";
import Fade from 'react-reveal/Fade';
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
    details:
      "The Valencia Orange is a sweet orange. Helps keep blood pressure under check and lowers cholestrol.",
  },
  {
    id: 2,
    name: "Mandarin",
    image: mandarin,
    details:
      "This citrus fruit contains Vitamins A, B, and a high level of Vitamin C has multiple health benefits, from reducing the risk of cancer to weight loss.",
  },
  {
    id: 3,
    name: "Lemon",
    image: lemon,
    details:
      "Lemon health benefits includes improving vitamin C levels, decreasing blood cholesterol, boosting liver function, boosting metabolism.",
  },
  {
    id: 4,
    name: "Mango",
    image: mango,
    details:
      "Also known as 'The King of Fruits,' Alphonso mangoes are rich in flavour and are premium variety of mango. It can be eaten fresh, sliced or pureed and are rich in vitamins.",
  },
];

const FeaturedProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const [modalOpen, setModalOpen] = useState(false);
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
            {/*Featuredproducts.map((product) => {
              return (
                <div key={product.id} className="product" onClick={toggleModal}>
                  <img src={product.image} alt={product.name} />
                  <h4>
                    {product.name} <FaEye className="product-eye" />
                  </h4>
                  <ProductModal isOpen={isOpen} toggleModal={toggleModal} product={product}/>
                </div>
              );
            })*/}
            <Fade left>
            <div className="product" onClick={toggleModal}>
              <img src={orange} alt="Orange" />
              <h4>
                Orange <FaEye className="product-eye" />
              </h4>
              <ProductModal
                isOpen={isOpen}
                toggleModal={toggleModal}
                img={orange}
                title="Orange"
                details="The Valencia Orange is a sweet orange. Helps keep blood pressure under check and lowers cholestrol."
              />
            </div>
            </Fade>
            <Fade top>
            <div className="product" onClick={toggleModal}>
              <img src={mandarin} alt="Mandarin" />
              <h4>
                Mandarin <FaEye className="product-eye" />
              </h4>
              <ProductModal
                isOpen={isOpen}
                toggleModal={toggleModal}
                img={mandarin}
                title="Mandarin"
                details="The Valencia Orange is a sweet orange. Helps keep blood pressure under check and lowers cholestrol."
              />
            </div>
            </Fade>
            <Fade bottom>
            <div className="product" onClick={toggleModal}>
              <img src={lemon} alt="Lemon" />
              <h4>
                Lemon <FaEye className="product-eye" />
              </h4>
              <ProductModal
                isOpen={isOpen}
                toggleModal={toggleModal}
                img={lemon}
                title="Lemon"
                details="The Valencia Orange is a sweet orange. Helps keep blood pressure under check and lowers cholestrol."
              />
            </div>
            </Fade>
            <Fade right>
            <div className="product" onClick={toggleModal}>
              <img src={mango} alt="Mango" />
              <h4>
                Mango <FaEye className="product-eye" />
              </h4>
              <ProductModal
                isOpen={isOpen}
                toggleModal={toggleModal}
                img={mango}
                title="Mango"
                details="The Valencia Orange is a sweet orange. Helps keep blood pressure under check and lowers cholestrol."
              />
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
