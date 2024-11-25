// src/components/NavLinks.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NavLinks = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center space-x-6">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="text-gray-800 hover:text-gray-900 font-medium"
        >
          {t('language')} ▼
        </button>
        {isOpen && (
          <div className="absolute mt-2 bg-white shadow rounded-lg p-2">
            <button
              onClick={() => changeLanguage('en')}
              className="block text-left text-gray-700 w-full px-4 py-2 hover:bg-gray-100"
            >
              {t('english')}
            </button>
            <button
              onClick={() => changeLanguage('fr')}
              className="block text-left text-gray-700 w-full px-4 py-2 hover:bg-gray-100"
            >
              {t('french')}
            </button>
          </div>
        )}
      </div>
      <a href="#home" className="text-gray-600 hover:text-gray-800">
        {t('home')}
      </a>
      <a href="#faq" className="text-gray-600 hover:text-gray-800">
        {t('faq')}
      </a>
    </div>
  );
};

export default NavLinks;
