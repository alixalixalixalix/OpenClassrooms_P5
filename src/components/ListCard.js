import React from "react";
import Card from "./Card";
import data from "../data/data.json";

const ListCard = () => {
  return (
    <section className="marginComponent">
      <div id="listCard">
        {data.map(({ id, title, cover }) => (
          <Card key={`${title}-${id}`} id={id} title={title} cover={cover} />
        ))}
      </div>
    </section>
  );
};

export default ListCard;