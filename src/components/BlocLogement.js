import React, { useState } from "react";
import Dropdown from "./Dropdown";

const BlocLogement = ({
  title,
  location,
  hostName,
  hostPicture,
  description,
  tags,
  rating,
  equipments
}) => {


  return (
    <div className="blocLogement marginComponent">
      <div className="blocLogement__top">
        <div className="blocLogement__title">
          <h1>{title}</h1>
          <p>{location}</p>
          <div className="blocLogement__title__tags">
            {tags.map((unTag) => (
              <p>{`${unTag}`}</p>
            ))}
          </div>
        </div>
        <div className="blocLogement__hote">
          <div className="blocLogement__hote__nom">
            <p>{hostName}</p>
            <img src={hostPicture} alt="hote" />
          </div>
          <div className="blocLogement__hote__note">
            <img src="/star-active.png" alt="etoile notation" />
            <img src="/star-inactive.png" alt="etoile notation" />
            <img src="/star-inactive.png" alt="etoile notation" />
            <img src="/star-inactive.png" alt="etoile notation" />
            <img src="/star-inactive.png" alt="etoile notation" />
          </div>
        </div>
      </div>
      <div className="blocLogement__bot">
        <Dropdown name="Description" content={description} />
        <Dropdown
          name="Équipements"
          content={equipments.map((unEquipement) => (
            <li>{`${unEquipement}`}</li>
          ))}
        ></Dropdown>
      </div>
    </div>
  );
};

export default BlocLogement;
