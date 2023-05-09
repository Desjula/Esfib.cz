import React from "react";
import "./style.scss";
import Logo from "./../../images/logo-ESFIB-barva.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="ESFIB" />
      <div className="header__links">
        <a className="header__link" href="">
          o nás
        </a>
        <a className="header__link" href="">
          služby
        </a>
        <a className="header__link" href="">
          reference
        </a>
        <a className="header__link" href="">
          kontakt
        </a>
      </div>
    </div>
  );
};

export default Header;
