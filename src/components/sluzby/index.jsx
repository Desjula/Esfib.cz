import React from "react";
import "./style.scss";
import Sluzba from "../sluzba";

const Sluzby = () => {
  return (
    <div className="sluzby">
      <Sluzba cislo={1} />
      <Sluzba cislo={2} />
      <Sluzba cislo={3} />
      <Sluzba cislo={4} />
    </div>
  );
};

export default Sluzby;
