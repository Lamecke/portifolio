import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Header = () => {
  return (
    <header id="component-header">
      <h1 className="name-user">Lamecke Bruno</h1>
      <ul className="menu-list">
        <li>
          <a
            href="https://www.linkedin.com/in/lamecke-bruno-846529211"
            className="no-decoration"
          >
            <FaLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Lamecke/" className="no-decoration">
            <FaGithubSquare className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/lameckebruno/"
            className="no-decoration"
          >
            <FaSquareInstagram className="icon" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
