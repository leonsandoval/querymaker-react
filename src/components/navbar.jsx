import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          QueryMaker
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/bono" className="nav-link">
                Bono
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/cme" className="nav-link">
                CME
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/lme" className="nav-link">
                LME
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
