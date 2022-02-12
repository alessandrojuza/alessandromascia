import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1>AM</h1>
      <div className="section-container">
        <a href="">HOME</a>
        <a href="">SKILLS</a>
        <a href="">PROJECT</a>
        <a href="">CONTACT</a>
      </div>
    </div>
  );
};

export default Header;
