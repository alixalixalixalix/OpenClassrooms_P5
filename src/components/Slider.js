import React from "react";
import { useState } from "react";

const Slider = ({ pictures }) => {
  const [compteur, setCompteur] = useState(1);
  let min = 1;
  let max = pictures.length;

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
          {pictures.map((picture) => (
            <img src={picture}/>
          ))}
        </div>
        <div className="slider__ui">
          <img
            src="/arrow-slider-left.png"
            alt="icon précédente"
            onClick={prev}
          />
          <p>
            {compteur}/{max}
          </p>
          <img
            src="/arrow-slider-right.png"
            alt="icon suivante"
            onClick={next}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
