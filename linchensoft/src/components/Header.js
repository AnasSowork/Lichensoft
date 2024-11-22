import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="LichenSoft Logo" className="logo-image" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

