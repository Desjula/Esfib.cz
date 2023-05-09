import React from "react";
import "./style.scss";
import Rain from "./../../images/Rain.jpg"

const Map = () => {
  return (
    <div className="map">
      <img className="map__img" src={Rain} alt="mapa" />
    </div>
  );
};

export default Map;