import React from "react";
import { createRoot } from "react-dom/client";
import "./style.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Kontakt from "./components/kontakt";
import Sluzby from "./components/sluzby";
import Reference from "./components/reference";
import ONas from "./components/o_nas";
import Map from "./components/map";
import PictureBeginning from "./components/picture_beginning"
import Nabidky from "./components/nabidky"
import NabidkaSluzeb from "./components/nabidka_sluzeb"

const App = () => {
  return (
    <div className="container">
      <Header />
      <PictureBeginning />
      <Nabidky />
      <ONas />
      <NabidkaSluzeb />
      <Sluzby />
      <Reference />
      <Kontakt />
      <Map />
      <Footer />
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
