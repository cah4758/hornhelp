import React from "react";
import greenLogo from "../assets/images/hornhelp-mini-green-logo.png";
import longLogo from "../assets/images/hornhelp-long-logo-vector.png";

export default function Navbar() {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={greenLogo} alt="hornhelp logo" className="logo" />
          <img src={longLogo} alt="hornhelp logo" className="logo long" />
        </a>
        <ul id="navlinks">
          <li>
            <a href="#" className="link">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Lessons
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Note Tests
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
