import React from "react";
import "./style.scss";
import Kocicka from "../../images/kocicka1.jpg"
import Jenga from "../../images/Jenga.jpg"

const Reference = () => {
  return (
    <div className="reference">
      <h2 className="reference__header">reference</h2>
      <div className="reference__buildings">
        <img id="1" src={Jenga} alt="1" className="reference__buildings__pic" />
        <img id="2" src={Jenga} alt="2" className="reference__buildings__pic" />
        <img id="3" src={Jenga} alt="3" className="reference__buildings__pic" />
        <img id="4" src={Jenga} alt="4" className="reference__buildings__pic" />
        <img id="5" src={Jenga} alt="5" className="reference__buildings__pic" />
        <img id="6" src={Jenga} alt="6" className="reference__buildings__pic" />
        <img id="7" src={Jenga} alt="7" className="reference__buildings__pic" />
        <img id="8" src={Jenga} alt="8" className="reference__buildings__pic" />
      </div>
      <button className="reference__button">více referencí</button>
    </div>
  );
};

export default Reference;
