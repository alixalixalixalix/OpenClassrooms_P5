import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerAbout from "../components/BannerAbout";
import Dropdown from "../components/Dropdown";
import data from "../data/about.json";

const About = () => {

  return (
    <div>
      <Header />
      <BannerAbout />
      <div className="section-dropdown marginComponent">
        <Dropdown name={data[0].name} content={data[0].content} />
        <Dropdown name={data[1].name} content={data[1].content} />
        <Dropdown name={data[2].name} content={data[2].content} />
        <Dropdown name={data[3].name} content={data[3].content} />
      </div>
      <Footer />
    </div>
  );
};

export default About;
