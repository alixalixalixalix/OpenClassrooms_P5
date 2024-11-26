import React, { useState } from "react";

const Dropdown = () => {
  // On déclare un état false
  const [dropdownOuvert, setdropdownOuvert] = useState(false);
  // Le toggle permet de passer de false à true
  const toggle = () => {
    setdropdownOuvert((prev) => !prev);
  };

  return (
    <div className="dropdownAbout">
      <div className="dropdownAbout__top" onClick={toggle}>
        <h3>Fiabilité</h3>
        <img
          src="/arrow-dropdown.png"
          alt="icon dropdown"
          style={{
            transform: dropdownOuvert ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
      <div
        className="dropdownAbout__bot"
        style={{
          display: dropdownOuvert ? "block" : "none",
        }}
      >
        <ul>
          <li>hiuzejilr</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
