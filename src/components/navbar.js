import React from "react";

import LanguageSwitcher from './languageSwitcher';
import logo from "../images/logo.jpg";

function Navbar() {
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img className="navbar-logo" src={logo} alt="logo" />
          <span>Peachy</span>
        </a>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasic" className="navbar-menu">
        <div className="navbar-start">
          <div className="buttons has-addons">
            <button className="navbar-item button is-warning is-selected" href="#">
              Today
            </button>
            <button className="navbar-item button" href="#">
              Weekly report
            </button>
          </div>
        </div>
        <div className="navbar-end">
          <div className="buttons is-grouped">
            <div style={{ marginRight: '10px' }}>Change language</div>
            <LanguageSwitcher/>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
