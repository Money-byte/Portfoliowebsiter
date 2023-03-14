import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Aprajit Sharma❤️</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#contactme" className="footer_link">
              About
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/aprajit._.sharma/"
            className="home_social-icon"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/aprajit.sharma.31"
            className="home_social-icon"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://twitter.com/MoNeYisnoob007"
            className="home_social-icon"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169 Aprajit Sharma.All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
