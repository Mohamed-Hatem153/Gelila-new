import React from "react";
import leaf from "../../Assets/images/leaf.png";
import "./ServecisWeOffer.css";
import Fade from "react-reveal/Fade";
import featureOne from "../../Assets/images/Webp.net-resizeimage (2).jpg";
import featureTwo from "../../Assets/images/Webp.net-resizeimage (5).jpg";
import featureThree from "../../Assets/images/service-1-img-3.jpg";
import featureFour from "../../Assets/images/Webp.net-resizeimage (3).jpg";

const ServecisWeOffer = () => {
  return (
    <div className="services-we-offer">
      <div className="container grid">
        <Fade left>
          <div className="servecis-title">
            <p>who we are</p>
            <h3>Features of our products</h3>
            <div>
              <img src={leaf} alt="leaf" />
            </div>
          </div>
        </Fade>
        <div className="our-features">
          <div className="who-us">
            <Fade top>
              <p>
                <span>gelila for import & export</span> Is one of the world
                leading companies in exporting Egyptian crops that was founded
                in 1985 in Egypt. The company develops all its facilities and
                processes to guarantee delivering its high quality products with
                the maximum efficiency and international standards in every
                aspect from selecting the best vegetables and fruits to packing
                them with the delicious same taste, appearance and nutrition .
              </p>
            </Fade>
          </div>
          <div className="features grid">
            <Fade left>
              <div className="feature">
                <div className="feature-details">
                  <div className="feature-header">
                    <h3>Fresh from Farm</h3>
                    <p>
                      We source and deliver some of the finest and fully
                      enriched natural fruits and vegetables from exclusive
                      farms .
                    </p>
                  </div>
                  <div className="feature-image">
                    <img src={featureOne} alt="featureOne" />
                  </div>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="feature">
                <div className="feature-details">
                  <div className="feature-header">
                    <h3>Quality Policy</h3>
                    <p>
                      We strive to achieve the latest international food
                      standards,thus being a frontrunner and a role model in the
                      arena of quality and hygiene.
                    </p>
                  </div>
                  <div className="feature-image">
                    <img src={featureTwo} alt="featureTwo" />
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="feature">
                <div className="feature-details">
                  <div className="feature-header">
                    <h3>Premium Quality</h3>
                    <p>
                      We offer the best agricultural products whether they are
                      fresh juicy fruits or nourishing vegetables to keep you
                      healthy .
                    </p>
                  </div>
                  <div className="feature-image">
                    <img src={featureThree} alt="featureThree" />
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="feature">
                <div className="feature-details">
                  <div className="feature-header">
                    <h3>100% Natural</h3>
                    <p>
                      We feel proud to say that all our products are completely
                      natural without the use of any preservatives, colors or
                      flavors.
                    </p>
                  </div>
                  <div className="feature-image">
                    <img src={featureFour} alt="featureOne" />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServecisWeOffer;
