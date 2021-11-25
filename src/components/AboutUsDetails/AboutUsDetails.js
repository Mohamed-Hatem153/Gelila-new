import React from "react";
import leaf from "../../Assets/images/leaf.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import "./AboutusDetails.css";

const AboutUsDetails = () => {
  return (
    <div className="about-us-details">
      <div className="grid">
        <Fade left>
          <div className="about-us-details-title">
            <p>who we are</p>
            <h3>our story</h3>
            <div>
              <img src={leaf} alt="leaf" />
            </div>
          </div>
        </Fade>
        <div className="we-are-gelila">
          <Zoom>
            <h2>
              We are <span>GELILA</span>
            </h2>
          </Zoom>
          <p>
            “<span>Gelila</span> is a leading Egyptian company exporting fresh
            produce all over the world. The company was founded in 1985 through
            the vision of Mr. Fahmy Gelila who aspired to export the highest
            quality Egyptian produce to the world. The company has seen
            tremendous growth in the past few years which allowed them to
            construct a state-of-the-art Packing house in Sadat Industrial city
            which will further improve the packing capabilities and quality of
            the company’s products. The company prides itself in delivering high
            quality products through rigorous processes and workflows that
            result in vegetables and fruits with delicious taste and world-class
            appearance”
          </p>
        </div>
        <div className="about-us-small-text">
          <Fade left>
            <div className="small-text">
              <p className="gelila-owns">
                GELILA owns a number of facilities that support its processes
                for maximum quality products .
              </p>
              <span>Headquarters :</span>
              <p className="gelila-address">
                Arab Republic of Egypt, Dakahlia governorate, Mit Ghamr, Gelila
                building - Portsaid St. Phone: +2 010939000
              </p>
            </div>
          </Fade>
          <div className="gelila-green-image"></div>
        </div>
        <div className="mission">
          <div className="mission-image"></div>
          <div className="mission-text">
            <Zoom>
              <h2>Our Mission</h2>
              <div>
                <img src={leaf} alt="leaf" />
              </div>
            </Zoom>
            <Fade right>
              <p>
                “Employ best-in-class work processes, build strong and
                sustainable relationships with our suppliers, resellers and
                consumers, promote healthy and balanced diets and deliver value
                to our shareholders and country.”
              </p>
            </Fade>
          </div>
        </div>
        <div className="vision">
          <div className="vision-text">
            <Zoom>
              <h2>Our Vision</h2>
              <div>
                <img src={leaf} alt="leaf" />
              </div>
            </Zoom>
            <Fade left>
              <p>
                “GELILA vision is to delight consumers world-wide through
                healthy, delicious and nutritious fruits & vegetables , and to
                be on the forefront of development as it relates to customers’
                needs, global trends and industry requirements. Our strategic
                partnering with our international producers and customers will
                lead us to be the most relied on supplier of fresh fruits &
                Vegetables in the region.”
              </p>
            </Fade>
          </div>
          <div className="vision-image"></div>
        </div>
        <div className="goals">
          <div className="goals-image"></div>
          <div className="goals-text">
            <Zoom>
              <h2>Our Goals</h2>
              <div>
                <img src={leaf} alt="leaf" />
              </div>
            </Zoom>
            <Fade right>
              <p>
                “The company goals are to continuously improve the internal
                efficiency of its operations, thus improving quality of the
                products and delivering value to our stakeholders, while
                expanding operations to more areas of the agricultural value
                chain .”
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDetails;
