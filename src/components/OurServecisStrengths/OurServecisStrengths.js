import React from "react";
import leaf from "../../Assets/images/leaf.png";
import "./OurServecisStrengths.css";
import strenght1 from "../../Assets/strenghts/strenght-1.png";
import strenght2 from "../../Assets/strenghts/strenght-2.png";
import strenght4 from "../../Assets/strenghts/strenght-4.png";
import strenght5 from "../../Assets/strenghts/strenght-5.png";
import strenght6 from "../../Assets/strenghts/strenght-6.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const OurServecisStrengths = () => {
  return (
    <div className="our-strengths">
      <div className="container grid">
        <div className="our-strengths-title span-col-2">
        <Zoom>
          <h3>our Strengths</h3>
          <div>
            <img src={leaf} alt="leaf" />
          </div>
          </Zoom>
        </div>
        <Fade left>
        <div className="strengths-intro span-col-2">
          <p>
            GELILA is proud to deliver high quality fresh fruits and vegetables
            from farm to your locality at a competitive price. Customer
            Satisfaction being our prime focus, we consistently innovate and
            adopt modernized approaches to keep up with the ever growing
            consumer needs.
          </p>
        </div>
        </Fade>
        <div className="strength sub-grid">
          <div className="image">
            <img src={strenght1} alt="strenght1" />
          </div>
          <div className="text span-col-2">
            <h4>EXPERIENCE</h4>
            <img src={leaf} alt="leaf" />
            <p>
              More than 35 years of dedicated experience, as a family business.
            </p>
          </div>
        </div>
        <div className="strength sub-grid right">
          <div className="text span-col-2">
            <h4>EMPLOYEES</h4>
            <img src={leaf} alt="leaf" />
            <p>
              Staff strength of more than 1000 employees across 3 different
              companies working at 4 different locations within the Egypt
              central market.
            </p>
          </div>
          <div className="image">
            <img src={strenght2} alt="strenght2" />
          </div>
        </div>
        <div className="strength sub-grid">
          <div className="image">
            <img src={strenght4} alt="strenght3" />
          </div>
          <div className="text span-col-2">
            <h4>PARTNERS</h4>
            <img src={leaf} alt="leaf" />
            <p>alot of exclusive trading partners around the world.</p>
          </div>
        </div>
        <div className="strength sub-grid right">
          <div className="text span-col-2">
          <h4>GOODS EXPORTED</h4>
          <img src={leaf} alt="leaf" />
            <p>Our goods are exported to Saudi Arabia, Malaysia, UAE, India, China, Bahrin, Oman, Russia, Slovenia, Holland and more</p>
          </div>
          <div className="image">
            <img src={strenght6} alt="strenght5" />
          </div>
        </div>
        <div className="strength sub-grid">
          <div className="image">
            <img src={strenght5} alt="strenght6" />
          </div>
          <div className="text span-col-2">
            <h4>FRESH PRODUCTS</h4>
            <img src={leaf} alt="leaf" />
            <p>Fresh products sourced from within Egypt.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServecisStrengths;
