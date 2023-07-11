import React from "react";
import ParallaxEffect from "../ParallaxEffect";
import { ParallaxProvider } from "react-scroll-parallax";
import VideoSection from "../VideoSection";
import Kieruj from "../Kieruj";
import ZamowPrzejazd from "../../components/ZamowPrzejazd";
function TopSection(){



    return(
        <div>

           
            <ParallaxProvider>
                <ParallaxEffect >

                </ParallaxEffect>
            </ParallaxProvider>
            <VideoSection>

            </VideoSection>
            <ParallaxProvider>
                <ZamowPrzejazd></ZamowPrzejazd>
            </ParallaxProvider>
            <Kieruj></Kieruj>
        </div>
    )
}
export default TopSection;