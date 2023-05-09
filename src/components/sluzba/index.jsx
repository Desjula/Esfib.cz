import React from "react";
import "./style.scss";

const Sluzba = (cislo) => {
  return (
    <div className="sluzba">
      <h3 className="sluzba__header">sluzba</h3>
      <p className="sluzba__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit
        fugiat harum natus quo magnam, officiis qui, assumenda soluta quibusdam
        deleniti quos iste. Veniam numquam cum molestias doloremque
        exercitationem magnam perferendis incidunt fugit alias deleniti, error
        porro blanditiis culpa neque enim omnis rem? Eos saepe assumenda dolorum
        consequatur, hic maxime dolores, enim mollitia aperiam ratione commodi
        sed ipsum officiis laboriosam.
      </p>
      <button className="sluzba__button">více informací</button>
    </div>
  );
};

export default Sluzba;
