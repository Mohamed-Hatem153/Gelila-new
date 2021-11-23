import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leaf from "../../Assets/images/leaf.png";
import Fade from "react-reveal/Fade";

import { certificatesImages } from "./certificates";

import "./Certification.css";

const Certifications = ({ borderNone }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={`${"section-bg"} ${borderNone ? "" : "brand"}`}>
      <div className="container grid">
        <Fade left>
          <div className="certification-title span-col-2">
            <p>our certifications</p>
            <h3>International certifications</h3>
            <div>
              <img src={leaf} alt="leaf" />
            </div>
          </div>
        </Fade>
        {/* Slider */}
        <div className="slider-container span-col-2">
          <Slider {...settings}>
            {certificatesImages.map((brand) => (
              <div key={brand.id} className="slick-slide">
                <img
                  src={brand.brandImg}
                  alt="brand logo"
                  className="slick-img"
                />
              </div>
            ))}
          </Slider>
        </div>
        <Fade left>
          <div className="certificate-box">
            <img src={leaf} alt="leaf" />
            <h3>We Sale Best Agriculture Products</h3>
            <img src={leaf} alt="leaf" />
          </div>
        </Fade>
        <Fade right>
          <div className="certificate-box">
            <img src={leaf} alt="leaf" />
            <h3>We’ve +75 years experience in field</h3>
            <img src={leaf} alt="leaf" />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Certifications;
