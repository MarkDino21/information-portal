import React from "react";

const Header = props => (
  <header className="header">
    <div className="o-container o-flex o-flex--space-between header-wrapper">
      <div className="header-title">{props.title}</div>
      <nav className="o-list-bare">
        <li className="header-nav-item">Home</li>
        <li className="header-nav-item">About</li>
        <li className="header-nav-item">Contact</li>
      </nav>
    </div>
  </header>
);

export default Header;
