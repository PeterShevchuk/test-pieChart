import React from "react";

import { NavLink } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className="nav__item-link">
            Список
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/diagram" className="nav__item-link">
            Діаграма
          </NavLink>
        </li>
        {/* <li className="nav__item">
          <NavLink to="/diagram2" className="nav__item-link">
            Діаграма #2
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Menu;
