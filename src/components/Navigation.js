import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "navbar__lien--active" : "")}
        >
          <li className="navbar__lien">Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "navbar__lien--active" : "")}
        >
          <li className="navbar__lien">À propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
