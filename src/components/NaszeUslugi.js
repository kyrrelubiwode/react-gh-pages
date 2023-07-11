import React from "react";
import "./NaszeUslugi.css";
import Divider from "./Divider";
function NaszeUslugi() {
  return (
    <div className="NaszeUslugiContainer">
      <Divider></Divider>
      <div className="NaszeUslugiBox__btns">
        <button>Siema</button>
        <button>Siema</button>
        <button>Siema</button>
        <button>Siema</button>
      </div>
      <div className="NaszeUslugiBox">
        <div className="NaszeUslugiBox__left"></div>
        <div className="NaszeUslugiBox__img"></div>
        <div className="NaszeUslugiBox__right"></div>
      </div>
    </div>
  );
}
export default NaszeUslugi;
