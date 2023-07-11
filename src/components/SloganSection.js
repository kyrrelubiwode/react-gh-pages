import React from "react";
import "./SloganSection.css";
import BasicTextBox from "./BasicTextBox";
function SloganSection() {
  const textContents = [
    {
      header: "SYSTEM ATOS TAXI",
      contents:
        "to kompleksowy system optymalizujący proces składania zamówień, stworzony z myślą o każdej firmie taksówkarskiej. System oferowany jest jako usługa abonamentowa, bez konieczności utrzymywania biura i urządzeń przez korporację taksówkarską. System ATOS Taxi został zaprojektowany w celu przyśpieszenia i zautomatyzowania zamówień oraz zmniejszenia kosztów związanych z utrzymaniem firmy.",
    },
  ];
  return (
    <div className="SloganContainer">
      <div className="SloganContainer__leftside"></div>
      <div className="SloganContainer__image">
        <img
          className="Slogan__png"
          src={require("../resources/Slogan.png")}
          alt="something"
        />
      </div>

      <div className="SloganContainer__Textside">
        <h1 class="mbs animate glow ">Koszty  Mini </h1>
        <h1 class="mbs animate glow delay-1"> Zyski Maksi </h1>
        <h1 class="mbs animate glow delay-2"> Do zmiany</h1>
      </div>
    </div>
  );
}
export default SloganSection;
