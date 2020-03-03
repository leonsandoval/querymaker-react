import React, { Component } from "react";


class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="/" className="navbar-brand">
          QueryMaker
        </a>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <a href="/bono" className="nav-link">
                Bono
              </a>
            </li>
            <li className="navbar-item">
              <a href="/cme" className="nav-link">
                CME
              </a>
            </li>
            <li className="navbar-item">
              <a href="/lme" className="nav-link">
                LME
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
