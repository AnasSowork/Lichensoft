import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import ContactButton from './ContactButton';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#f1f6ff] to-[#fdfbff] p-4 shadow-sm fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        <Logo />
        <div className="flex items-center space-x-6">
          <NavLinks />
          <ContactButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
