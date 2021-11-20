import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import leaf from "../../Assets/images/leaf.png";

import { certificatesImages } from './certificates';

import './Certification.css';

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
    <section className={`${'section-bg'} ${borderNone ? '' : 'brand'}`}>
      <div className="container grid">
        <div className="certification-title span-col-2">
          <p>our certification</p>
          <h3>International certifications</h3>
          <div>
            <img src={leaf} alt="leaf" />
          </div>
        </div>
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
        <div>One</div>
      <div>Two</div>
      </div>
      
    </section>
  );
};

export default Certifications;