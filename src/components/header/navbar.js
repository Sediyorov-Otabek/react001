import React, { useState } from "react";
import "./header.css";
import navlogo from "../../assets/Screenshot_3 [Recovered] 1.png";
import { TfiAlignJustify } from "react-icons/tfi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container">
      <nav className="nav">
        <div>
          <img src={navlogo} alt="logo" />
        </div>
        <div className={`nav__collect ${isMenuOpen ? "show" : ""}`}>
          <ul className="nav__collection">
            <li className="nav__itemm">
              <a href="">home</a>
            </li>
            <li className="nav__itemm">
              <a href="">project</a>
            </li>
            <li className="nav__itemm">
              <a href="">services</a>
            </li>
            <li className="nav__itemm">
              <a href="">about</a>
            </li>
            <li className="nav__itemm">
              <a href="">blog</a>
            </li>
            <li className="nav__itemm">
              <a href="">shop</a>
            </li>
            <li className="nav__itemm">
              <a href="">contact</a>
            </li>
          </ul>
          <button className="nav__btn">sign in</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <TfiAlignJustify />
        </div>
      </nav>
    </header>
  );
}

export default Header;
