import React from "react";
import "./style.scss";
import Obr from "./../../images/grimm.jpg"

const NabidkaSluzeb = () => {
  return (
    <div className="nabidka">
      <h3 className="nabidka__header" >nabízíme širokou nabídku služeb</h3>
      <img className="nabidka__img" src={Obr} alt="" />
    </div>
  );
};

export default NabidkaSluzeb;

