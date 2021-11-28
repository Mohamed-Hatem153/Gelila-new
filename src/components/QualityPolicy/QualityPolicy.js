import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import leaf from "../../Assets/images/leaf.png";
import "./QualityPolicy.css";

const QualityPolicy = () => {
  return (
    <div className="quality-policy">
      <div className="quality-policy-text">
        <Zoom>
          <h2>Quality Policy</h2>
          <div>
            <img src={leaf} alt="leaf" />
          </div>
        </Zoom>
        <Fade bottom>
          <p>
            “GELILA operations are crafted and designed following strict
            compliance to the International ISO 22000-2005 standards and HACCP
            principles. The quality checks are followed and executed by our team
            of experienced quality control professionals, providing a complete
            assurance that our customers receive superior quality produce at the
            same time maintaining a safe, healthy, comfortable and hygienic
            working environment for all of our employees. We strive to improve
            and achieve the latest international food standards,thus being a
            frontrunner and a role model in the arena of quality and hygiene.”
          </p>
          <p className='quality-policy-description'>We are GELILA and we always insist on the Best!</p>
        </Fade>
      </div>
      <div className="quality-policy-image"></div>
    </div>
  );
};

export default QualityPolicy;
