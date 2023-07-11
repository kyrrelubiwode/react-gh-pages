import React from "react";
import BottomRegister from "./BottomRegister";
import ContactUs from "./ContactUs";
import Grid from "./Grid";
import ZamowPrzejazd from "../components/ZamowPrzejazd";
import { ParallaxProvider } from "react-scroll-parallax";
function BottomSection() {
  return (
    <div>
      <BottomRegister></BottomRegister>
      <ParallaxProvider>
        <ZamowPrzejazd></ZamowPrzejazd>
      </ParallaxProvider>
      <ContactUs></ContactUs>
    </div>
  );
}
export default BottomSection;
