import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { RiFullscreenExitLine } from "react-icons/ri";
import "./Navigation.scss";

const Navigation = () => {
  const [menuView, setMenuView] = useState(false);

  return (
    <div className="navigation-container">
      <nav className="navigation">
        <div className="navigation__hamburger-container">
          <button
            className="navigation__hamburger"
            onClick={() => setMenuView(!menuView)}
          >
            {menuView ? <RiFullscreenExitLine /> : <CgMenuGridR />}
          </button>

          <a className="navigation__home" href="/">
            nicholashuynh.
          </a>
        </div>
        {menuView && (
          <ul className="navigation__hamburger-list">
            <li>
              <a
                className="navigation__hamburger-list-item"
                href="#about"
                onClick={() => setMenuView(!menuView)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="navigation__hamburger-list-item"
                href="#projects"
                onClick={() => setMenuView(!menuView)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="navigation__hamburger-list-item"
                href="#experience"
                onClick={() => setMenuView(!menuView)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="navigation__hamburger-list-item"
                href="#contact"
                onClick={() => setMenuView(!menuView)}
              >
                Contact
              </a>
            </li>
          </ul>
        )}

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
    </div>
  );
};

export default Navigation;
