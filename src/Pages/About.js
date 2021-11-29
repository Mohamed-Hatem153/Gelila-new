import React from "react";
import AboutUsDetails from "../components/AboutUsDetails/AboutUsDetails";
import AboutUsHeader from "../components/AboutUsHeader/AboutUsHeader";
import Certification from '../components/Certifications/Certification';
import GlobalMarketMap from "../components/GlobalMarketMap/GlobalMarketMap";
import GlobalMarketTitle from "../components/GlobalMarketTitle/GlobalMarketTitle";

const About = () => {
  return (
    <div>
      <AboutUsHeader />
      <AboutUsDetails />
      <GlobalMarketTitle />
      <GlobalMarketMap />
      <Certification />
    </div>
  );
};

export default About;
