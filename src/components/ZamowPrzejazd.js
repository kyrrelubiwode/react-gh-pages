import React from "react";
import "./ZamowPrzejazd.css";
import Divider from "./Divider";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ParallaxBanner } from "react-scroll-parallax";
const ZamowPrzejazd = () => {




  return (
    <div className="ZamowPrzejazdContainer">
      
      <div className="container-body-a">
        <ParallaxBanner
          layers={[
            { image: require("./bettermap.png"), speed: -20 },
            {
              speed: -5,
              children: (
                <div className="">
                  
                </div>
              ),
            },
            { image: "/images/mountain.png", speed: -10 },
          ]}
          className="bg-container-a"
        >
          <div className="ZamowPrzejazd__text">
            
          </div>
        </ParallaxBanner>
      </div>
    
    </div>
  );
};
export default ZamowPrzejazd;
