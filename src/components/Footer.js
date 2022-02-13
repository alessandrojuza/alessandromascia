import React from "react";
import "../styles/Footer.scss";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <div className="footer">
      <Fade>
        <div className="upper-container"></div>
        <div className="text-container">
          <h1>LET'S WORK TOGETHER!</h1>
          <p>
            You can find me on{" "}
            <a
              href="https://www.linkedin.com/in/alessandro-mascia"
              className="paragraph-link"
              target="_blank"
            >
              Linkedin
            </a>
            ,
            <a
              href="https://www.github.com/alessandrojuza"
              className="paragraph-link"
              target="_blank"
            >
              GitHub
            </a>
            or you can just send me a message at
            <a
              href="mailto:mascia.alessandro89@gmail.com"
              className="paragraph-link"
              target="_blank"
            >
              mascia.alessandro89@gmail.com
            </a>
            .
            <br />
            Let's discuss your idea together.
          </p>
        </div>
        <div className="bottom-container">
          <p className="copyright-text">© 2022 - Alessandro Mascia</p>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
