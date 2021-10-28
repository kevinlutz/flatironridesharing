import React from "react";
import background from "./background.mp4";
import logo1 from "./Craigslist1.png";
import "./Filter_Header.css";

function Header() {
  return (
    <div id="header">
      <video
        src={background}
        loop
        muted
        id="background-video"
        autoPlay={true}
      />
      <img id="logo" src={logo1} />
    </div>
  );
}

export default Header;
