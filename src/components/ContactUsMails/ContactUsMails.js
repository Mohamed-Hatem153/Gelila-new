import React from "react";
import "./ContactUsMails.css";
import { FaUserAlt, FaPhoneAlt, FaFax } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ContactUsMails = () => {
  return (
    <div className="contact-us-mails">
      <div className="container grid">
        <div className="mails-list">
          <h4>Head Office</h4>
          <ul>
            <li>
              <FaUserAlt className="contact-icon"/> Arab Republic of Egypt, Dakahlia governorate, Mit
              Ghamr, Portsaid street, Gelila Building.
            </li>
            <li>
              <a href="tel://00201093900066" target="_self">
                <FaPhoneAlt className="contact-icon" />
                +2 010 939 000 66
              </a>
            </li>
            <li>
              <a href="tel://0020504919100">
                <FaFax className="contact-icon" />
                +2 0504 9191 00
              </a>
            </li>
            <li>
              <a href="mailto:info@gelila-eg.com">
                <IoMdMail className="contact-icon" />
                info@gelila-eg.com
              </a>
            </li>
          </ul>
          <hr />
          <h4>Planning Manager</h4>
          <ul>
            <li>
              <FaUserAlt className="contact-icon"/> Mr: Mahmoud Ali.
            </li>
            <li>
              <a href="mailto:Mahmoud.ali@gelila-eg.com">
                <IoMdMail className="contact-icon" />
                Mahmoud.ali@gelila-eg.com
              </a>
            </li>
          </ul>
          <hr />
        </div>
        <div className="mails-list">
          <h4>Chief Executive Officer (CEO)</h4>
          <ul>
            <li>
              <FaUserAlt className="contact-icon"/> Eng: Eslam Gelila.
            </li>
            <li>
              <a href="mailto:ceo@gelila-eg.com">
                <IoMdMail className="contact-icon" />
                ceo@gelila-eg.com
              </a>
            </li>
          </ul>
          <hr />
          <h4>Human Resource Manager</h4>
          <ul>
            <li>
              <FaUserAlt className="contact-icon"/> Mr: Abdullah Khalifa.
            </li>
            <li>
              <a href="mailto:hr.abdallah@gelila-eg.com">
                <IoMdMail className="contact-icon" />
                hr.abdallah@gelila-eg.com
              </a>
            </li>
          </ul>
          <hr />
        </div>
        <div className="mails-list">
          <h4>Sales Manager</h4>
          <ul>
            <li>
              <FaUserAlt className="contact-icon"/> Mr: Abd-Elbaset Gelila.
            </li>
            <li>
              <a href="mailto:abdelbaset@gelila-eg.com">
                <IoMdMail className="contact-icon" />
                abdelbaset@gelila-eg.com
              </a>
            </li>
          </ul>
          <hr />
          <h4>Supply Chain Manager</h4>
          <ul>
            <li>
              <FaUserAlt className="contact-icon"/> Mr: Mohamed Soliman.
            </li>
            <li>
              <a href="mailto:msoliman@gelila-eg.com">
                <IoMdMail className="contact-icon" />
                msoliman@gelila-eg.com
              </a>
            </li>
          </ul>
          <hr />
        </div>
        <div className="mails-list">
          <h4>Export Departments</h4>
          <ul>
            <li>
              <FaUserAlt className="contact-icon"/> Mr: Mohamed Ebadah.
            </li>
            <li>
              <a href="mailto:mohammed.ebadah@gelila-eg.com">
                <IoMdMail className="contact-icon" />
                Mohammed.ebadah@gelila-eg.com
              </a>
            </li>
          </ul>
          <hr />
          <h4>Quality Manager</h4>
          <ul>
            <li>
              <FaUserAlt className="contact-icon"/> Dr: Amro Eldesouki.
            </li>
            <li>
              <a href="mailto:amro.eldesouki@gelila-eg.com">
                <IoMdMail className="contact-icon" />
                Amro.eldesouki@gelila-eg.com
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ContactUsMails;
