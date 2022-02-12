import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo-initials">AM</h1>
      <div className="section-container">
        <a href="">HOME</a>
        <a href="">SKILLS</a>
        <a href="">PROJECTS</a>
        <a href="mailto:mascia.alessandro89@gmail.com">CONTACT</a>
      </div>
    </div>
  );
};

export default Header;
