import React, { useState } from "react";
import "../styles/SkillsSection.scss";
import SingleSkill from "./SingleSkill";
import SingleProject from "./SingleProject";
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
import alexandreIcon from "../img/project-img/alexandre.png";
import accudartsIcon from "../img/project-img/accudarts.png";
import TooshortIcon from "../img/project-img/2short.png";
import Fade from "react-reveal/Fade";

const SkillsSection = () => {
  return (
    <div className="skills-section" id="skills">
      <div className="skill-section-subcontainer">
        <Fade>
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
        </Fade>
        <Fade>
          <div className="project-box">
            <h1>PROJECTS</h1>
            <SingleProject
              imgUrl={alexandreIcon}
              name="ALEXANDRE"
              description="A website for a fictional fashion brand."
              websiteUrl="https://alexandre-fashion.netlify.app/"
              githubUrl="https://github.com/alessandrojuza/alexandre"
              features={"ReactJS, SASS, Axios, Responsive"}
            />
            <SingleProject
              imgUrl={accudartsIcon}
              name="ACCU DARTS"
              description="Accu Darts is an online scoreboard for darts players."
              websiteUrl="https://accudarts.netlify.app/"
              githubUrl="https://github.com/alessandrojuza/accu-darts"
              features={"ReactJS, SASS, Responsive"}
            />
            <SingleProject
              imgUrl={TooshortIcon}
              name="2SHORT"
              description="
          2Short is a little web app that allows the user to shorten a long URL."
              websiteUrl="https://2short.netlify.app/"
              githubUrl="https://github.com/alessandrojuza/2short"
              features={"ReactJS, SASS, Axios, Responsive"}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default SkillsSection;
