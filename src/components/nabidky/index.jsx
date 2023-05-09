import React from "react";
import "./style.scss";
import Nabidka from "./../nabidka"

const Nabidky = () => {
  return (
    <div className="nabidky">
      <Nabidka nabidka={"inženýrství"} />
      <Nabidka nabidka={"technická řešení"} />
      <Nabidka nabidka={"poradenství"} />
    </div>
  );
};

export default Nabidky;