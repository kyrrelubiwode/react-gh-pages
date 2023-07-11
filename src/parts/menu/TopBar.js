import React from "react";
import './TopBar.css';
function TopBar(){
    return(
        <div className="topbar">
        <div className="topbar__left">
          {/* Logo */}
          <img
            className="Logo"
            src={require("../../resources/logo.png")}
            alt="something"
            width="180px"
          />
        </div>
        <div className="topbar__middle">
          {/* Hrefs */}
          <div className="NavBarContainer">
          <a className='NavBarLinkMid' href="#">Home</a>
          </div>
          <div className="NavBarContainer">
          <a className='NavBarLinkMid' href="#">Home</a>
          </div>
          
          <div className="NavBarContainer">
          <a className='NavBarLinkMid' href="#">Home</a>
          </div>
          
          <div className="NavBarContainer">
          <a className='NavBarLinkMid' href="#">Home</a>
          </div>
          
          <div className="NavBarContainer">
          <a className='NavBarLinkMid' href="#">Home</a>
          </div>
          
          
          

        </div>
        <div className="topbar__right">
          {/* Language Changer */}
          <a className='NavBarLink' href="#">Zaloguj</a>
          <a className='NavBarLinkReverse' href="#">Załóż Konto</a>
      
        </div>
      </div>
    )
}

export default TopBar;