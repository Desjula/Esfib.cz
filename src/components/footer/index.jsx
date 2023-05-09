import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">2023</p>
      <p className="lfooter__text">ESFIB - Všechna práva vyhrazena</p>
      <a className="footer__link" href="">
        o nás
      </a>
      <a className="footer__link" href="">
        služby
      </a>
      <a className="footer__link" href="">
        reference
      </a>
      <a className="footer__link" href="">
        kontakt
      </a>
    </div>
  );
};

export default Footer;
