import React from 'react';

const Header = () => (
  <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
    <img src="/assets/logo.png" alt="LichenSoft Logo" className="h-12" />
    <nav className="space-x-8 text-lg">
      <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
      <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
      <a href="#language" className="text-gray-700 hover:text-blue-600">Language</a>
    </nav>
  </header>
);

export default Header;
