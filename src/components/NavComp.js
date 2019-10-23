import React from "react";
import logo from "../logo.svg";

import "./NavComp.css";

const NavComp = props => (
  <header className="nav_bar">
    <nav className="toolbar__navigation">
      <div to="/">
        <img src={logo} alt="store" className="toolbar__logo" />
      </div>
      <div className="toolbar_navigation-items btn-group">
        <ul>
          <li>
            <button className='button' onClick={() => props.handleArrDep("A")}>
              Arrivals
            </button>
          </li>
          <li>
            <button className='button' onClick={() => props.handleArrDep("D")}>
              Departures
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavComp;
