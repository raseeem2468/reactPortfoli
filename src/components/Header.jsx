import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Header.css"; // Ensure you import the CSS file

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header className={`header ${navActive ? "active" : ""}`}>
      <img src="./images/r.jpg" alt="Logo" className="logo" />
      <nav className="nav">
        <div className="nav-toggle" onClick={toggleNav}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`nav-list ${navActive ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" onClick={toggleNav}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" onClick={toggleNav}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" onClick={toggleNav}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/clients" onClick={toggleNav}>
              Clients
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/contact" className="contact-button">
        <i className="fa-solid fa-address-book"></i>
        Contact Me
      </Link>
    </header>
  );
};

export default Header;
