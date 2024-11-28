import React, { useState } from "react";

const Dropdown = () => {
  // On déclare un état false
  const [dropdownOuvert, setDropdownOuvert] = useState(false);
  // On déclare une fonction qui fait passer dropdownOuvert à true
  const toggle = () => {
    setDropdownOuvert((switchEtat) => !switchEtat);
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
          visibility: dropdownOuvert ? "visible" : "hidden",
          opacity: dropdownOuvert ? "1" : "0",
          height: dropdownOuvert ? "100%" : "0",
        }}
      >
        <p
          style={{
            marginTop: dropdownOuvert ? "0" : "-30px",
          }}
        >
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
