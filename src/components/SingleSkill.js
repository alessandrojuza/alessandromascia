import React, { useState } from "react";
import "../styles/SingleSkill.scss";

const SingleSkill = ({ imgUrl, name }) => {
  return (
    <div className="single-skill">
      <img src={imgUrl} alt="" className="skill-img" />
      <p>{name}</p>
    </div>
  );
};

export default SingleSkill;
