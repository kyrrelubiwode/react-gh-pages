import React, { useState } from "react";
import "./Services.css";
const Services = () => {
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = (text) => {
    setDisplayText(text);
  };

  return (
    <div className="ServicesContainer">
      <div className="ServicesSlogan">
        <h1 className="KierujHeader"> Kieruj z Atosem!</h1>
      </div>
      <div className="btnContainer">
      <button
        className="button"
        onClick={() => handleButtonClick(" 1 clicked")}
      >
        Klient
      </button>
      <button
        className="button"
        onClick={() => handleButtonClick(" 2 clicked")}
      >
        Kierowca
      </button>
      <button
        className="button"
        onClick={() => handleButtonClick(" 3 clicked")}
      >
        Właściel Floty
      </button>
   
      </div>
      <div className="ServicesDivideSection">
        <div className="SericesDividePhoto">
            <div className="imageContainer"> 
            <img
            className="imageContainer"
            src={require("../resources/taxi-phrases.jpg")}
            alt="something"
            width="400px"
            height="500px"
            
        
          />
            </div>
        </div>
        <div className="ServicesDivideText">

        <p>{displayText}</p>
        </div>
      </div>

    </div>
  );
};

export default Services;
