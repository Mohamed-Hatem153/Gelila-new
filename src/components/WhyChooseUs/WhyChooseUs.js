import React from "react";
import leaf from "../../Assets/images/leaf.png";
import { IoMdTrendingUp } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { GiDiploma } from "react-icons/gi";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="whychooseus">
      <div className="container grid">
        <Zoom>
          <div className="whychooseus-title">
            <p>we are gelila</p>
            <h3>why choose gelila.?</h3>
            <div>
              <img src={leaf} alt="leaf" />
            </div>
          </div>
        </Zoom>
        <div className="whygelila grid">
          <div className="whyus">
            <Fade top>
              <p>
                <span>GELILA</span> always ensures the maximum quality and we
                already consider international certification that support our
                consumers trust.
              </p>
            </Fade>
          </div>
          <div className="counter-us">
            <div className="counter-grid">
              <Fade left>
                <div className="certificate-box">
                  <img src={leaf} alt="leaf" />
                  <div>
                    <h4 className="counter">
                      +30
                    </h4>
                    <h3>Countries imported our products</h3>
                  </div>
                  <img src={leaf} alt="leaf" />
                </div>
              </Fade>
              <Fade right>
                <div className="certificate-box">
                  <img src={leaf} alt="leaf" />
                  <div>
                    <h4 className="counter">
                      +75000
                    </h4>
                    <h3>Tons of products sold during the last year</h3>
                  </div>
                  <img src={leaf} alt="leaf" />
                </div>
              </Fade>
            </div>
          </div>
          <div className="whyreasons grid">
            <Fade left>
              <div className="item">
                <span className="icon">
                  <IoMdTrendingUp />
                </span>
                <h6>Highest Quality Level</h6>
                <p>
                  we use the latest technology in sorting, sizing and packing,
                  From picking out the fruits and vegetables to storing and
                  delivering them we always ensure the best
                </p>
              </div>
            </Fade>
            <Fade left>
              <div className="item">
                <span className="icon">
                  <MdLock />
                </span>
                <h6>Secure and Seamless Processes</h6>
                <p>
                  our processes are always secured and Seamless at any stage to
                  ensure least effort and highest time saving for our customers.
                </p>
              </div>
            </Fade>
            <Fade right>
              <div className="item">
                <span className="icon">
                  <AiOutlineTeam />
                </span>
                <h6>Flexibility and Availability</h6>
                <p>
                  we are always hearing from you and available for your
                  inquiries.
                </p>
              </div>
            </Fade>
            <Fade right>
              <div className="item">
                <span className="icon">
                  <GiDiploma />
                </span>
                <h6>Certificates</h6>
                <p>
                  The ISO certificate was our first step towards getting
                  certified by international standards’ organizations.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
