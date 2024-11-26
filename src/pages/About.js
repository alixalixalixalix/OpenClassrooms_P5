import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerAbout from "../components/BannerAbout";
import Dropdown from "../components/Dropdown";

const About = () => {

  return (
    <div>
      <Header />
      <BannerAbout />
      <div className="section-dropdown marginComponent">
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
      <Footer />
    </div>
  );
};

export default About;
