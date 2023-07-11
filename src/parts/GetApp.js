import React from "react";
import './GetApp.css'
function GetApp(){
    return(
        <div className="GetAppContainer">
            <div className="GetAppText">
                <h1>Pobierz Aplikacje i w drogę!</h1>
                <img
            className="GetAppDownload"
            src={require("../resources/dwnbtns.jpg")}
            alt="something"
            
          />
            </div>
               <img
            className="GetAppImage"
            src={require("../resources/12.png")}
            alt="something"
            
          />
        </div>
    )
}

export default GetApp;