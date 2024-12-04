import React from "react";
import { useState } from "react";

const Slider = () => {
  const [compteur, setCompteur] = useState(1);
  let min = 1;
  let max = 4; // à terme max = nombre de pic dans la data

  function next() {
    if (compteur < max) {
      setCompteur(compteur + 1);
    } else {
      setCompteur(min); //setCompteur(compteur === 1);
    }
  }
  function prev() {
    if (compteur > min) {
      setCompteur(compteur - 1);
    } else {
      setCompteur(max);
    }
  }

  return (
    <div className="marginComponent">
      <div className="slider">
        <div className="slider__imgContainer">
          <img src="/logement-1.jpg" alt="" />
          <img src="/logement-1.jpg" alt="" />
          <img src="/logement-1.jpg" alt="" />
          <img src="/logement-1.jpg" alt="" />
        </div>
        <div className="slider__ui">
          <img src="/arrow-slider-left.png" alt="icon précédente" />
          <p>
            {compteur}/{max}
          </p>
          <img src="/arrow-slider-right.png" alt="icon suivante" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
