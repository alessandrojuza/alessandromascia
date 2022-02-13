import React from "react";
import "../styles/MainSection.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Header from "./Header";

const MainSection = () => {
  return (
    <div className="main-section" id="home">
      <div className="header-section">
        <Header />
      </div>
      <div className="logo-section">
        <h1>ALESSANDRO</h1>
        <h1>MASCIA</h1>
        <h2>FRONT END DEVELOPER</h2>
        <div className="social-icon-container">
          <GitHubIcon
            className="social-icon"
            onClick={() =>
              window.open("https://github.com/alessandrojuza", "_blank")
            }
          />
          <LinkedInIcon
            className="social-icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/alessandro-mascia",
                "_blank"
              )
            }
          />
          <EmailIcon
            className="social-icon"
            onClick={() => window.open("mailto:mascia.alessandro89@gmail.com")}
          />
        </div>
      </div>
      <div className="bottom-section">
        <ArrowDropDownIcon className="arrow-down-icon" />
      </div>
    </div>
  );
};

export default MainSection;
