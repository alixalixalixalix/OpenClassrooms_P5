import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerAbout from "../components/BannerAbout";
import Dropdown from "../components/Dropdown";
import data from "../data/about.json";

const About = () => {

  let x = JSON.stringify(data)
  console.log(x)

  return (
    <div>
      <p>{data[3].name}</p>
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
