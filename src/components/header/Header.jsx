import React, { useState } from "react";
import "./header.css";

const Header = () => {
  // ==============Toggle Menu=================//
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Aprajit Sharma
        </a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_items">
              <a href="#home" className="nav_links active-link">
                <i className="uil uil-estate nav_icons"></i>Home
              </a>
            </li>

            <li className="nav_items">
              <a href="#about" className="nav_links">
                <i className="uil uil-user nav_icons"></i>About
              </a>
            </li>

            <li className="nav_items">
              <a href="#skills" className="nav_links">
                <i className="uil uil-file-alt nav_icons"></i>Skills
              </a>
            </li>

            <li className="nav_items">
              <a href="#portfolio" className="nav_links">
                <i className="uil uil-scenery nav_icons"></i>Portfolio
              </a>
            </li>

            <li className="nav_items">
              <a href="#contact" className="nav_links">
                <i className="uil uil-message nav_icons"></i>Contact Me!
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav_close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
