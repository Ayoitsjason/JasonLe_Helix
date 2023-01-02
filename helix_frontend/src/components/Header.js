import React from "react";
import Logo from "../images/Logo.JPG";

const Header = () => {
  return (
    <div className="header-jumbo">
      <div className="image-container">
        <img className="image-logo" src={Logo} alt="logo"></img>
      </div>
      <h1 className="text-main__special--1">Near Protocol</h1>
    </div>
  );
};

export default Header;
