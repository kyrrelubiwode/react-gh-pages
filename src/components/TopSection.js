import "./TopSectionMobile.css";
import "./TopSection.css";
import Hamburger from "./Menu/Hamburger";
//import BasicTextBox from "./BasicTextBox";
//import ArrowPointer from "./Menu/ArrowPointer";
import TopMenu from "./Menu/TopMenu";
//import TopSlogan from "./TopSlogan";
function TopSection() {


  return (
    <div className="TopContainer">
      <div className="TopBox">
        <div className="LogoContainer">
          <img
            className="Logo"
            src={require("../resources/logo.png")}
            alt="something"
            width="180px"
          />
        </div>
        <div className="MenuContainer">
          <TopMenu></TopMenu>
          <Hamburger></Hamburger>
        </div>
      </div>
      <div>
      
      </div>
    </div>
  );
}

export default TopSection;
