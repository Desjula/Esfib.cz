import React from "react";
import "./style.scss";
import Basketball from "./../../images/Basketball.jpg"

const PictureBeginning = () => {
  return (
    <div className="picture_beginning">
      <h2 className="picture_beginning__header">jsme odborníci na projektování průmyslových staveb</h2>
      <img className="picture_beginning__img" src={Basketball} alt="" />
      <p className="picture_beginning__stripe"></p>
    </div>
  );
};

export default PictureBeginning;
