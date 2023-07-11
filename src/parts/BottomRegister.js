import React from "react";
import "./BottomRegister.css";
function BottomRegister() {
  return (
    <div className="BottomRegisterContainer">
        <div>
            <h1>Poznaj większy zakres możliwości w naszej aplikacji mobilnej</h1>
        </div>
      <div className="BottomRegisterDownload">
        <div className="BottomRegisterDownload_client larger"></div>
        <div className="BottomRegisterDownload_driver larger"></div>
      </div>
      <div className="BottomRegisterRegister">
        <div className="BottomRegister larger border">
          <div>
            <h1>Zarejestruj sie, by zamówić przejazd</h1>
          </div>

          <div>
            <img
              className="arrowContainer"
              src={require("../resources/arrow.png")}
              alt="something"
            />
          </div>
        </div>

        <div className="BottomRegister larger border">
          <div>
            <h1>Zarejestruj sie jako kierowca</h1>
          </div>
          <div>
            <img
              className="arrowContainer"
              src={require("../resources/arrow.png")}
              alt="something"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BottomRegister;
