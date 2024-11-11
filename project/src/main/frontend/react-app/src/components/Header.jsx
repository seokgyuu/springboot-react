import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" role="banner">
      <div className="header_inner">
        <div className="header_logo">
          <Link to="/">gyu</Link>
        </div>
        <nav className="header_nav" role="navigation" aria-label="메인메뉴">
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;