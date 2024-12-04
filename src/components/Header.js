import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/logo/logo-kasa-red.png";

const Header = () => {
  return (
    <header className="marginComponent">
      <a href="/">
        <img src={logo} alt="logo kasa rouge"/>
      </a>
      <Navigation />
    </header>
  );
};

export default Header;
