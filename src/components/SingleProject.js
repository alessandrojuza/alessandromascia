import React, { useState } from "react";
import "../styles/SingleProject.scss";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "react-simple-tooltip";

const SingleProject = ({
  imgUrl,
  name,
  description,
  websiteUrl,
  githubUrl,
  features,
}) => {
  return (
    <div className="single-project">
      <div className="img-container">
        <Tooltip
          content={features}
          fadeDuration="300"
          placement="left"
          radius="4"
          background="#000000a6"
          border="#000000a6"
        >
          <img
            src={imgUrl}
            alt=""
            className="project-img"
            onClick={() => window.open(websiteUrl, "_blank")}
            data-tip="ciao"
          />
        </Tooltip>
      </div>
      <div className="text-container">
        <h4>{name}</h4>
        <p>{description}</p>
        <div className="features-container"></div>
      </div>
      <div className="btn-container">
        <PlayCircleIcon
          className="btn-project"
          onClick={() => window.open(websiteUrl, "_blank")}
        />
        <GitHubIcon
          className="btn-project"
          onClick={() => window.open(githubUrl, "_blank")}
        />
      </div>
    </div>
  );
};

export default SingleProject;
