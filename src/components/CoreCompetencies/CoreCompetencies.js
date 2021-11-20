import React from "react";
import "./CoreCompetencies.css";
import leaf from "../../Assets/images/leaf.png";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import gelilacore from "../../Assets/images/core/gelilacore.png";
import core1 from "../../Assets/images/core/core-1.png";
import core2 from "../../Assets/images/core/core-2.png";
import core3 from "../../Assets/images/core/core-3.png";
import core4 from "../../Assets/images/core/core-4.png";
import core5 from "../../Assets/images/core/core-5.png";
import core6 from "../../Assets/images/core/core-6.png";

const CoreCompetencies = () => {
  return (
    <div className="core-competencies">
      <div className="container grid">
      <Fade left>
        <div className="core-competencies-title">
          <p>what we do</p>
          <h3>Our Core Competencies</h3>
          <div>
            <img src={leaf} alt="leaf" />
          </div>
        </div>
        </Fade>
        <div className="grid">
          <div className="grid1">
          <Fade top>
            <div className="Competency">
              <div className="core-text core-text2">
                <h3>Uncompromised Quality</h3>
                <p>
                  We are dedicated to always supply the top quality fresh
                  produce.
                </p>
              </div>
              <div className="core-img">
                <img src={core1} alt="core1" />
              </div>
            </div>
            </Fade>
            <Fade left>
            <div className="Competency">
              <div className="core-text core-text2">
                <h3>Service Oriented</h3>
                <p>
                  We strive to deliver the best solution and services to our
                  customer.
                </p>
              </div>
              <div className="core-img">
                <img src={core3} alt="core3" />
              </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="Competency">
              <div className="core-text core-text2">
                <h3>Dedication</h3>
                <p>
                  We have been committed to this business for the last 40 years,
                  our commitment and dedication is reflected in our high
                  standard product and services on daily basis.
                </p>
              </div>
              <div className="core-img">
                <img src={core5} alt="core5" />
              </div>
            </div>
            </Fade>
          </div>
          <Flip left>
          <div className="Competency gelilacore">
            <img src={gelilacore} alt="gelila logo" />
          </div>
          </Flip>
          <div className="grid2">
          <Fade top>
            <div className="Competency">
              <div className="core-img">
                <img src={core2} alt="core2" />
              </div>
              <div className="core-text">
                <h3>Integrity</h3>
                <p>We work honestly, ethically and honorably.</p>
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="Competency">
              <div className="core-img">
                <img src={core4} alt="core4" />
              </div>
              <div className="core-text">
                <h3>Family culture</h3>
                <p>
                  We believe our employees are our family and therefore we
                  strive to be respectful, caring and compassionate with one
                  another.
                </p>
              </div>
            </div>
            </Fade>
            <Fade bottom>
            <div className="Competency">
              <div className="core-img">
                <img src={core6} alt="core6" />
              </div>
              <div className="core-text">
                <h3>Community & Environmental practice</h3>
                <p>
                  We act responsibly as members of the community in which we
                  operate and we respect our environment by recycling, reusing
                  and reducing our waste.
                </p>
              </div>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreCompetencies;
