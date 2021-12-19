import React from "react";
import leaf from "../../Assets/images/leaf.png";
import "./ContactUsHeader.css";
import Zoom from "react-reveal/Zoom";

const ContactUsHeader = () => {
  return (
    <div className="contact-us-header">
      <Zoom>
        <div>
          <h3>Contact Us</h3>
          <div>
            <img src={leaf} alt="leaf" />
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default ContactUsHeader;
