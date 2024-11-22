import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src="logo-kasa-red.png" alt="logo kasa rouge"/>
      </a>
      <Navigation />
    </header>
  );
};

export default Header;
