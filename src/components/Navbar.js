import React from "react";
import { Link } from "react-router-dom";

import Menu from "../assets/menu.svg";
import Exit from "../assets/exit.svg";

import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Link className="logo" to="/">
          Mart<span>Chant</span>
        </Link>

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
          </ul>

          <ul className="secondary-nav">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li className="go-premium-cta">
              <Link to="/register">Get started</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
