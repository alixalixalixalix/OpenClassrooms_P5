import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerAbout from "../components/BannerAbout";
import Dropdown from "../components/Dropdown";
import dataAbout from "../data/about.json";

const About = () => {

  return (
    <div>
      <Header />
      <BannerAbout />
      <div className="sectionDropdown marginComponent">
        {dataAbout.map(({ name, content }) => (
          <Dropdown name={name} content={content} />
        ))}

      </div>
      <Footer />
    </div>
  );
};

export default About;
