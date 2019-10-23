import React from "react";
import logo from "../logo.svg";

import "./NavComp.css";

const NavComp = props => (
  <header className="nav_bar">
    <nav className="toolbar__navigation">
      <div to="/">
        <img src={logo} alt="store" className="toolbar__logo" />
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <div class='btn btn-secondary active' onClick={() => props.handleArrDep("A")}>
              Arrivals
            </div>
          </li>
          <li>
            <div class='btn btn-secondary' onClick={() => props.handleArrDep("D")}>
              Departures
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavComp;
