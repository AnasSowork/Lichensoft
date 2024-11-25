import React from 'react';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-40 px-40 flex flex-col lg:flex-row items-center lg:justify-between">
      <div className="lg:w-1/2 space-y-8">
        <h1 className="text-6xl font-bold text-gray-800 ">{t('boost_your_business')}</h1>  {/* Translated text */}
        <p className="text-xl text-gray-600">
          {t('tagline')}
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 text-lg rounded hover:bg-blue-700">
            {t('get_started')}
          </button>
          <button className="border border-gray-300 text-gray-800 px-8 py-3 text-lg rounded hover:bg-gray-100">
            {t('view_demo')}
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <img src="/assets/Dashboard.png" alt="Dashboard Preview" className="max-w-full lg:max-w-2xl rounded-lg filter drop-shadow-lg" />
      </div>
    </section>
  );
};

export default Banner;
