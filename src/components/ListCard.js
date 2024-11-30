import React from "react";
import Card from "./Card";
import data from "../data/data.json";
import { NavLink } from "react-router-dom";

const ListCard = () => {
  return (
    <section id="listCard" className="marginComponent">
      <NavLink
        to="/ficheLogement"
        className={(nav) => (nav.isActive ? "navbar__lien--active" : "")}
      >
        <Card title={data[0].title} cover={data[0].cover} />
      </NavLink>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default ListCard;
