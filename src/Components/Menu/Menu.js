import React from "react";

import { NavLink } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className="nav__item-link">
            List
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/diagram" className="nav__item-link">
            Diagram
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
