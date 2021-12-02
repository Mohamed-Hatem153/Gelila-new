import React from "react";
import "./ContactUsForm.css";
import leaf from "../../Assets/images/leaf.png";
import Zoom from "react-reveal/Zoom";
import linkedin from '../../Assets/images/linkedin (2).png'
import facebook from '../../Assets/images/facebook.png'
import instagram from '../../Assets/images/instagram.png'
import email from '../../Assets/images/mail4.png'

const ContactUsForm = () => {
  return (
    <div className="contact-us-form">
      <div className="container grid">
        <div className="contact-us-title">
          <Zoom>
            <h3>Git in touch with Us</h3>
            <div>
              <img src={leaf} alt="leaf" />
            </div>
          </Zoom>
        </div>
        <div className="form">
        <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2>CONTACT</h2>
            <div className="links">
              <div className="link">
                <a href="https://www.linkedin.com/company/gelila-eg/mycompany/"><img src={linkedin} alt="linkedin" /></a>
              </div>
              <div className="link">
                <a href="https://www.facebook.com/Gelila-108309847991503"><img src={facebook} alt="facebook" /></a>
              </div>
              <div className="link">
                <a href='/'><img src={instagram} alt="instagram" /></a>
              </div>
              <div className="link">
                <a href="mailto:info@gelila-eg.com"><img src={email} alt="email" /></a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form>
              <div className="form-item">
                <input className='name' type="text" name="sender" required="" />
                <label className='label1'>Name:</label>
              </div>
              <div className="form-item">
                <input className='email' type="text" name="email" required="" />
                <label className='label2'>Email:</label>
              </div>
              <div className="form-item">
                <input className='email' type="phone" name="email" required="" />
                <label className='label2'>Phone:</label>
              </div>
              <div className="form-item">
                <textarea className="text-aria" name="message" required=""></textarea>
                <label className='label3'>Message:</label>
              </div>
              <button className="submit-btn">Send</button>  
            </form>
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
