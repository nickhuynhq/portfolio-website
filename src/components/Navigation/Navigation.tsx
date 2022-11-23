import React from "react";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <a className="navigation__home" href="/">nicholashuynh.</a>
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
          <a className="navigation__list-item" href="#experience">
            Experience
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
