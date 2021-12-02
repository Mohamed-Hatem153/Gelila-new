import React from "react";
import "./ContactUsForm.css";
import leaf from "../../Assets/images/leaf.png";
import Zoom from "react-reveal/Zoom";

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
                <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
              </div>
              <div className="link">
                <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
              </div>
              <div className="link">
                <a><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
              </div>
              <div className="link">
                <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
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
