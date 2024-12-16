import React, { useEffect, useRef } from "react";
import { useState } from "react";

const Slider = ({ id, pictures }) => {
  const [alone, setAlone] = useState(false);

  // Si pictures < 2, on n'affiche pas les éléments d'UI
  useEffect(() => {
    pictures.length < 2 ? setAlone(true) : setAlone(false);
  }, [pictures.length]);

  const [compteur, setCompteur] = useState(1);
  let min = 1;
  let max = pictures.length;

  const ref = useRef(null);

  const [isDisabled, setIsDisabled] = useState(false);
  const delay = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 750);
  };

  const next = () => {
    if (!isDisabled) {
      if (compteur < max) {
        delay();
        setCompteur(compteur + 1);
        ref.current.scrollLeft += ref.current.offsetWidth;
      } else {
        delay();
        setCompteur(min);
        ref.current.scrollLeft -= ref.current.offsetWidth * max;
      }
    }
  };
  const prev = () => {
    if (!isDisabled) {
      if (compteur > min) {
        delay();
        setCompteur(compteur - 1);
        ref.current.scrollLeft -= ref.current.offsetWidth;
      } else {
        delay();
        setCompteur(max);
        ref.current.scrollLeft += ref.current.offsetWidth * max;
      }
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
        <div
          style={alone ? { display: "none" } : null}
          className="slider__container__ui"
        >
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
