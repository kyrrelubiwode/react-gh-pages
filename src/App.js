import "./App.css";
import TopBar from "./parts/menu/TopBar";
import { ParallaxProvider } from "react-scroll-parallax";
import TopSection from "./parts/menu/TopSection";
import AA from "./components/AA";
import GetApp from "./parts/GetApp";
import JakDziala from "./parts/JakDziala";
import BottomSection from "./parts/BottomSection";
import OurOffer from "./parts/OurOffer";
function App() {
  return (
    <div className="Card">
      <TopBar></TopBar>
      <ParallaxProvider>
        <TopSection></TopSection>
      </ParallaxProvider>
      <GetApp></GetApp>
      <JakDziala></JakDziala>
      <OurOffer></OurOffer>
      <BottomSection></BottomSection>
      <AA></AA>
    </div>
  );
}

export default App;
