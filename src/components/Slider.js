import React, { useEffect, useRef } from "react";
import { useState } from "react";

const Slider = ({ id, pictures }) => {
  const [alone, setAlone] = useState(false);

  useEffect(() => {
    if (pictures.length < 2) {
      setAlone(true);
    }
  })

  const [compteur, setCompteur] = useState(1);
  let min = 1;
  let max = pictures.length;

  const ref = useRef(null);

  const next = () => {
    if (compteur < max) {
      setCompteur(compteur + 1);
      ref.current.scrollLeft += ref.current.offsetWidth;
    } else {
      setCompteur(min); //setCompteur(compteur === 1);
      ref.current.scrollLeft -= ref.current.offsetWidth * 4;
    }
  };
  const prev = () => {
    if (compteur > min) {
      setCompteur(compteur - 1);
      ref.current.scrollLeft -= ref.current.offsetWidth;
    } else {
      setCompteur(max);
      ref.current.scrollLeft += ref.current.offsetWidth * 4;
    }
  };

  return (
    <div className="slider marginComponent">
      <div className="slider__container">
        <div className="slider__container__img" ref={ref}>
          {pictures.map((picture) => (
            <img key={`${picture}-${id}`} src={picture} alt="" />
          ))}
        </div>
        <div style={alone ? { display: "none" } : null} className="slider__container__ui">
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
