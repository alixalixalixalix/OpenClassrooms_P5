import React from "react";

const Card = ({ id, title, cover }) => {
  return (
    <a href="">
      <article
        key={id}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(4, 4, 4, 0.4)), url(${cover})`,
        }}
      >
        <h3>{title}</h3>
      </article>
    </a>
  );
};

export default Card;

// id, title, cover, pictures, description, hostName, hotsPic, rating, location, equipments, tags
