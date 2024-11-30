import React from "react";

const Slider = () => {
  return (
    <div id="slider" className="marginComponent">
      <div class="conteneurImages">
        <img src="/logement-1.jpg" />
        <img src="/logement-1.jpg" />
        <img src="/logement-1.jpg" />
        <img src="/logement-1.jpg" />
      </div>
      <div class="interaction">
        <div id="gauche">
          <img src="/arrow-slider-left.png" alt="icon image précédente" />
        </div>
        <div>
          <p>1/4</p>
        </div>
        <div id="droite">
          <img src="/arrow-slider-right.png" alt="icon image suivante" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
