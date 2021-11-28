import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import header from "../../Assets/images/header-bg.png";
import logo from "./assets/logo_final.svg";
import "./NewNavbar.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="social-links">
        <ul className="social-links__list">
          <li onClick={closeMobileMenu}>
            <a
              rel="noreferrer"
              href="https://www.facebook.com/Gelila-108309847991503"
            >
              <FaFacebookF />
            </a>
          </li>
          <li onClick={closeMobileMenu}>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/company/gelila-eg/mycompany/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li onClick={closeMobileMenu}>
            <a href="/">
              <FaInstagram />
            </a>
          </li>
          <li onClick={closeMobileMenu}>
            <a
              href="https://goo.gl/maps/oM784Cv3wdnvbEYv8"
              target="_blank"
              rel="noreferrer"
            >
              <FaMapMarkerAlt />
            </a>
          </li>
        </ul>
      </div>
      <div className="logo-nav">
        <div className="logo-container">
          <img
            src={logo}
            className="logo"
            onClick={() => navigate("/")}
            alt="logo"
          />
        </div>
        <div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to="/" className="link">
                Home
              </NavLink>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to="/products" className="link">
                Products
              </NavLink>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to="/about" className="link">
                About
              </NavLink>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to="/services" className="link">
                Services
              </NavLink>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to="/contact" className="link">
                Contact
              </NavLink>
            </li>
            <div className="social-links-mobile option">
              <li onClick={closeMobileMenu}>
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/Gelila-108309847991503"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li onClick={closeMobileMenu}>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/gelila-eg/mycompany/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li onClick={closeMobileMenu}>
                <a href="/">
                  <FaInstagram />
                </a>
              </li>
              <li onClick={closeMobileMenu}>
                <a
                  href="https://goo.gl/maps/oM784Cv3wdnvbEYv8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaMapMarkerAlt />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
      <div className="header-bg">
        <img src={header} alt="header-bg" />
      </div>
    </div>
  );
};

export default Header;
