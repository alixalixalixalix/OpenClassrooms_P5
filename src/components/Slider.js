import React from "react";

const Slider = () => {

  return (
    <div className="slider marginComponent">
      <div className="slider__imgContainer">
        <img src="/logement-1.jpg" />
        <img src="/logement-1.jpg" />
        <img src="/logement-1.jpg" />
        <img src="/logement-1.jpg" />
      </div>
      <div className="slider__ui">
        <div className="slider__ui__gauche">
          <img src="/arrow-slider-left.png" alt="icon image précédente" />
        </div>
        <div>
          <p>1/4</p>
        </div>
        <div className="slider__ui__droite">
          <img src="/arrow-slider-right.png" alt="icon image suivante" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
