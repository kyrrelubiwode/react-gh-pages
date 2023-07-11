import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import './ParallaxEffect.css'
function ParallaxEffect(){

  const inlineStyle = {
    background: '#fff',
    left: '25%',
    top: '25%',
    position: 'absolute',
    padding: '10px',
    transform: 'translate(-50%, -50%)',
  }
    return(
        <div className="tt"><ParallaxBanner
          layers={[
            { image: require("../resources/Tuo.png"), speed: -20 },
            {
              speed: -10,
              children: (
                <div style={{ height: 500 }}>
                <div style={inlineStyle}>Ładny jakiś slogan</div>
                
              </div>
              ),
            },
         
          ]}
          className="bg-container"
        >
         
        
        </ParallaxBanner></div>
    )
}
export default ParallaxEffect;