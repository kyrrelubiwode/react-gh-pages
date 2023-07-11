import React from "react";
import "./TopMenu.css";
function TopMenu() {
  return (
    <div className="TopMenuContainer">
      <div className="TopMenuContainer__Content">
        <div class="basic__navbar">
          <div class="basic__navbar__link">
            {" "}
            <a class="navbar__href">O Nas</a>{" "}
          </div>
          <div class="basic__navbar__link">
            {" "}
            <a class="navbar__href">Usługi</a>{" "}
          </div>
          <div class="basic__navbar__link">
            {" "}
            <a class="navbar__href">Cennik</a>{" "}
          </div>
          <div class="basic__navbar__link">
            {" "}
            <a class="navbar__href">Wsparcie</a>{" "}
          </div>
          <div class="basic__navbar__link">
            {" "}
            <a class="navbar__href">Kontakt</a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopMenu;
