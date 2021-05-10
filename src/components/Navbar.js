import React from "react";

import Menu from "../assets/menu.svg";
import Exit from "../assets/exit.svg";

import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <a className="logo" href="#">
          Mart<span>Chant</span>
        </a>

        <img
          id="mobile-cta"
          className="mobile-menu"
          src={Menu}
          alt="Open Navigation"
        />

        <nav>
          <img
            id="mobile-exit"
            className="mobile-menu-exit"
            src={Exit}
            alt="Close Navigation"
          />

          <ul className="primary-nav">
            <li className="current">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>

          <ul className="secondary-nav">
            <li>
              <a href="#">Login</a>
            </li>
            <li className="go-premium-cta">
              <a href="#">Get started</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
