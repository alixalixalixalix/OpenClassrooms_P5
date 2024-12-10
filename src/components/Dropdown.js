import React, { useState } from "react";

const Dropdown = ({ name, content }) => {
  // On déclare un état false
  const [dropdownOuvert, setDropdownOuvert] = useState(false);
  // On déclare une fonction toggle qui fait passer dropdownOuvert à true
  const toggle = () => {
    setDropdownOuvert((switchEtat) => !switchEtat);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__top" onClick={toggle}>
        <h3>{name}</h3>
        <img
          src="/arrow-dropdown.png"
          alt="icon dropdown"
          className={dropdownOuvert ? "topOpen" : "topClose"}
        />
      </div>
      <div
        className={`dropdown__bot ${dropdownOuvert ? "botOpen" : "botClose"}`}
      >
        {content}
      </div>
    </div>
  );
};

export default Dropdown;
