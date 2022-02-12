import React from "react";
import "../styles/MainSection.scss";

import Header from "./Header";

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="header-section">
        <Header />
      </div>
      <div className="logo-section">
        <h1>ALESSANDRO</h1>
        <h1>MASCIA</h1>
        <h2>FRONT END DEVELOPER</h2>
      </div>
      <div className="bottom-section">
        <h1>V</h1>
      </div>
    </div>
  );
};

export default MainSection;
