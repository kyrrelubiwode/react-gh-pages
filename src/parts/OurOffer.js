import React from "react";
import "./OurOffer.css";
import Grid from "./Grid";
import Divider from "../components/Divider";
import NaszeForum from "./NaszeForum";

function OurOffer() {
  return (
    <div>
        <div className="OurOfferContainer">
        <Divider></Divider>
        <div className="OurOfferText">
            <h1>Poznaj zalety naszego systemu</h1>
        </div>
      <Grid></Grid>
    
    </div>
    
    <NaszeForum></NaszeForum>
  
    </div>
    
  );
}

export default OurOffer;
