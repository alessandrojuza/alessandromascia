import React, { useState } from "react";
import "../styles/SkillsSection.scss";
import SingleSkill from "./SingleSkill";
import IconHtml from "../img/skill-icons/icon-html.png";
import IconCss from "../img/skill-icons/icon-css.png";
import IconJavascript from "../img/skill-icons/icon-javascript.png";
import IconSass from "../img/skill-icons/icon-sass.png";
import IconReact from "../img/skill-icons/icon-react.png";
import IconPhotoshop from "../img/skill-icons/icon-photoshop.png";
import IconFigma from "../img/skill-icons/icon-figma.png";
import IconXd from "../img/skill-icons/icon-xd.png";
import IconLogicPro from "../img/skill-icons/icon-logic.png";
import IconFinalCut from "../img/skill-icons/icon-fcpx.png";

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <div className="skill-box">
        <h1>SKILLS</h1>
        <div className="coding-skills">
          <SingleSkill imgUrl={IconHtml} name="HTML" />
          <SingleSkill imgUrl={IconCss} name="CSS" />
          <SingleSkill imgUrl={IconJavascript} name="JavaScript" />
          <SingleSkill imgUrl={IconSass} name="SASS" />
          <SingleSkill imgUrl={IconReact} name="ReactJS" />
          <SingleSkill imgUrl={IconPhotoshop} name="Adobe Photoshop" />
          {/* <SingleSkill imgUrl={IconXd} name="Adobe XD" /> */}
          <SingleSkill imgUrl={IconFigma} name="Figma" />
          <SingleSkill imgUrl={IconLogicPro} name="Logic Pro" />
          <SingleSkill imgUrl={IconFinalCut} name="Final Cut Pro" />
        </div>
      </div>
      <div className="project-box">
        <h1>PROJECTS</h1>
      </div>
    </div>
  );
};

export default SkillsSection;
