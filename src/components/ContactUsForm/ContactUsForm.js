import React from "react";
import "./ContactUsForm.css";
import { Formik } from "formik";
import * as Yup from "yup";
import leaf from "../../Assets/images/leaf.png";
import Zoom from "react-reveal/Zoom";
import linkedin from "../../Assets/images/linkedin (2).png";
import facebook from "../../Assets/images/facebook.png";
import instagram from "../../Assets/images/instagram.png";
import email from "../../Assets/images/mail4.png";

const ContactUsForm = () => (
  <Formik
    initialValues={{name: "", email: "", phone: "", message:"" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
      name: Yup.string()
        .required("Your name is required."),
      email: Yup.string()
        .email()
        .required("Your e-mail is required."),
      phone: Yup.number()
        .required("Your phone number is required.")
        .positive().integer()
        .min(5, "Phone number is too short - should be 5 chars minimum."),
      message: Yup.string()
        .required("Your message is required.")
    })}
  >
  {props => {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit
    } = props;
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
        <Zoom>
        <div className="form">
          <section id="contact">
            <div className="contact-box">
              <div className="contact-links">
                <h2>CONTACT</h2>
                <div className="links">
                  <div className="link">
                    <a href="https://www.linkedin.com/company/gelila-eg/mycompany/">
                      <img src={linkedin} alt="linkedin" />
                    </a>
                  </div>
                  <div className="link">
                    <a href="https://www.facebook.com/Gelila-108309847991503">
                      <img src={facebook} alt="facebook" />
                    </a>
                  </div>
                  <div className="link">
                    <a href="/">
                      <img src={instagram} alt="instagram" />
                    </a>
                  </div>
                  <div className="link">
                    <a href="mailto:info@gelila-eg.com">
                      <img src={email} alt="email" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-form-wrapper">
                <form action="https://formspree.io/f/xlezeegy" method="POST" onSubmit={handleSubmit}>
                  <div className="form-item">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.name && touched.name && "error"}
                      required
                    />
                    <label className="label1" htmlFor="name">
                      Name<span>*</span>:
                    </label>
                    {errors.name && touched.name && (
                      <div className="input-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div className="form-item">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.email && touched.email && "error"}
                      required
                    />
                    <label className="label2" htmlFor="email">
                      E-mail<span>*</span>:
                    </label>
                    {errors.email && touched.email && (
                      <div className="input-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-item">
                    <input
                      type="tel"
                      id="tel"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.phone && touched.phone && "error"}
                      required
                    />
                    <label className="label2" htmlFor="tel">
                      Phone<span>*</span>:
                    </label>
                    {errors.phone && touched.phone && (
                      <div className="input-feedback">{errors.phone}</div>
                    )}
                  </div>
                  <div className="form-item">
                    <textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.message && touched.message && "error"}
                      required
                    ></textarea>
                    <label className="label3" htmlFor="text-aria">
                      Message<span>*</span>:
                    </label>
                    {errors.message && touched.message && (
                      <div className="input-feedback">{errors.message}</div>
                    )}
                  </div>
                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    Send
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
        </Zoom>
      </div>
    </div>
  );
  }
}
  </Formik>
);

export default ContactUsForm;
