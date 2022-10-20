import React from "react";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <a className="navigation__list-item" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="navigation__list-item" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="navigation__list-item" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
