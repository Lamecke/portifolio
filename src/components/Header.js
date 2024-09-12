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
          <FaLinkedin className="icon" />
        </li>
        <li>
          <FaGithubSquare className="icon" />
        </li>
        <li>
          <FaSquareInstagram className="icon" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
