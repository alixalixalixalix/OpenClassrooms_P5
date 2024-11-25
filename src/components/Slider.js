import React from "react";

const Slider = () => {
  return (
    <div id="slider" className="marginComponent">
      <div>
        <img src="/arrow-slider-left.png" alt="icon image précédente" />
      </div>
      <div>
        <p>1/4</p>
      </div>
      <div>
        <img src="/arrow-slider-right.png" alt="icon image suivante" />
      </div>
    </div>
  );
};

export default Slider;
