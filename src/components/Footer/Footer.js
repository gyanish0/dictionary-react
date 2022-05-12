import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by&nbsp;
        <a href="https://github.com/gyanish0" target="__blank">
          Gyanish Shrivastava
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://www.instagram.com/gyanishanurag" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/gyanish-shrivastava-153582137"
          target="__blank"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.twitter.com/srivastavgyani1" target="__blank">
          <i class="fab fa-twitter-square fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
