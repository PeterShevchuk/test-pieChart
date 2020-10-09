import React from 'react';


import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav className="">
          <ul>
             <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/diagram">Diagram</NavLink>
            </li>
          </ul>
        </nav>
    );
};

export default Menu;