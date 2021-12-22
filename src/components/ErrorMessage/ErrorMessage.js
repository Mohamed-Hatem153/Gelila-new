import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = () => {
  return (
    <div className="error-message">
      <h1>404 Error Page not found</h1>
      <p className="zoom-area">Oops... There's something wrong.</p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <a
          href='/'
          className="more-link"
          rel="noreferrer"
        >
          Visit the Home page
        </a>
      </div>
    </div>
  );
};

export default ErrorMessage;
