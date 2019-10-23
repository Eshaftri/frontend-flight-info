import React from "react";
import { Link } from "react-router-dom";
import "./NavComp.css";

const NavComp = props => (
  <header className="nav_bar">
    <nav className="toolbar__navigation">
      <div className="toolbar_navigation-items btn-group">
        <ul>
          <li>
            <Link to="/flight_list">
              <button
                className="button"
                onClick={() => props.handleArrDep("A")}
              >
                Arrivals
              </button>
            </Link>
          </li>
          <li>
            <Link to="/flight_list">
              <button
                className="button"
                onClick={() => props.handleArrDep("D")}
              >
                Departures
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="title">Flight Information</div>
    </nav>
  </header>
);

export default NavComp;
