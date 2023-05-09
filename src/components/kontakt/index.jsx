import React from "react";
import "./style.scss";

const Kontakt = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="kontakt">
      <div className="kontakt__form">
        <h3 className="kontakt__form__header">kontaktní formulář</h3>
        <p className="kontakt__form__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit
          explicabo aspernatur perferendis architecto ducimus blanditiis earum
          minus. Dolore porro velit nam aut, aspernatur obcaecati reiciendis
          nesciunt eaque, unde ipsa fugiat quia, corporis ab error nulla beatae
          exercitationem nemo rerum fuga provident explicabo delectus animi.
          Deserunt ratione beatae eaque explicabo.
        </p>
        <form className="kontakt__formular" onSubmit={handleSubmit}>
          <label className="kontakt__form__label" htmlFor="name">
            Vaše jméno*
          </label>
          <input
            className="kontakt__form__input"
            type="text"
            name="name"
            id="name"
            required
          />
          <label className="kontakt__form__label" htmlFor="email">
            Váš email*
          </label>
          <input
            className="kontakt__form__input"
            type="email"
            name="email"
            id="email"
            required
          />
          <label className="kontakt__form__label" htmlFor="">
            Váš telefon
          </label>
          <input
            className="kontakt__form__input"
            type="tel"
            name="tel"
            id="tel"
          />
          <label className="kontakt__form__label" htmlFor="message">
            Zpráva*
          </label>
          <textarea
            className="kontakt__form__input"
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          <button className="kontakt__form__button" type="submit">
            odeslat
          </button>
        </form>
      </div>
      <div className="kontakt__udaje">
        <h3 className="kontakt__udaje__header">kontaktní údaje</h3>
        <p className="kontakt__udaje__text">Lorem, ipsum dolor.</p>
        <p className="kontakt__udaje__text">Lorem, ipsum.</p>
        <p className="kontakt__udaje__text">Lorem, ipsum dolor.</p>
        <img className="kontakt__udaje__pic" src="" alt="telefon" />
        <img className="kontakt__udaje__pic" src="" alt="email" />
        <a className="kontakt__udaje__link" href="">
          Lorem ipsum dolor sit amet consectetur.
        </a>
        <a className="kontakt__udaje__link" href="">
          Lorem ipsum dolor sit.
        </a>
        <p className="kontakt__udaje__text">Lorem, ipsum.</p>
        <p className="kontakt__udaje__text">Lorem, ipsum.</p>
        <p className="kontakt__udaje__text"></p>
        <p className="kontakt__udaje__text">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Kontakt;
