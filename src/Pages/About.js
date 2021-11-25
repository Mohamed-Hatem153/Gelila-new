import React from "react";
import AboutUsDetails from "../components/AboutUsDetails/AboutUsDetails";
import AboutUsHeader from "../components/AboutUsHeader/AboutUsHeader";
import Certification from '../components/Certifications/Certification';

const About = () => {
  return (
    <div>
      <AboutUsHeader />
      <AboutUsDetails />
      <Certification />
    </div>
  );
};

export default About;
