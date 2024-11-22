import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="p-6 bg-blue-600 text-white text-center">
      <p>&copy; 2024 LichenSoft. All rights reserved.</p>
      <nav className="mt-4">
        <a href="#feature">Privacy Policy</a>
        <a href="#Tearms of service" >Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;
