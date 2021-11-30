import React from 'react'
import leaf from "../../Assets/images/leaf.png";
import './ContactUsHeader.css'

const ContactUsHeader = () => {
    return (
        <div className="contact-us-header">
      <div>
        <h3>Contact Us</h3>
        <div>
          <img src={leaf} alt="leaf" />
        </div>
      </div>
    </div>
    )
}

export default ContactUsHeader
