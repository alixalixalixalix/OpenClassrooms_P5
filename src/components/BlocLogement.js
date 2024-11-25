import React from "react";
import Dropdown from "./Dropdown";

const BlocLogement = () => {
  return (
    <div className="blocLogement marginComponent">
      <div className="blocLogement__intro">
        <h1>Cory loft on the Canal Saint-Martin</h1>
        <p>Paris, Île-de-France</p>
        <div className="blocLogement__intro__tags">
          <button>Cozy</button>
          <button>Canal</button>
          <button>Paris 10</button>
        </div>
      </div>
      <div className="blocLogement__hote">
        <div className="blocLogement__hote__nom">
          <p>
            Alexandre <br />
            Dumas
          </p>
          <img src="/alexandre-dumas.webp" alt="photo hote" />
        </div>
        <div className="blocLogement__hote__note">
          <img src="/star-active.png" alt="etoile notation" />
          <img src="/star-active.png" alt="etoile notation" />
          <img src="/star-active.png" alt="etoile notation" />
          <img src="/star-inactive.png" alt="etoile notation" />
          <img src="/star-inactive.png" alt="etoile notation" />
        </div>
      </div>
      <div>
        <Dropdown />
        <Dropdown />
      </div>
    </div>
  );
};

export default BlocLogement;
