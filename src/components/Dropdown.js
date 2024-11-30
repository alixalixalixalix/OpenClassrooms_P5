import React, { useState } from "react";

const Dropdown = (dataAbout) => {
  // On déclare un état false
  const [dropdownOuvert, setDropdownOuvert] = useState(false);
  // On déclare une fonction qui fait passer dropdownOuvert à true
  const toggle = () => {
    setDropdownOuvert((switchEtat) => !switchEtat);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__top" onClick={toggle}>
        <h3>{dataAbout.name}</h3>
        <img
          src="/arrow-dropdown.png"
          alt="icon dropdown"
          style={{
            transform: dropdownOuvert ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
      <div
        className="dropdown__bot"
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
          {dataAbout.content}
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
