import React from 'react';
import { useTranslation } from 'react-i18next';

const OurFeatures = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-b from-white to-blue-100 py-20 px-1 flex flex-col lg:flex-row lg:justify-center items-center">
      <div className="lg:w-1/2 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row lg:items-start-center lg:space-x-60">
          <h2 className="text-5xl font-bold text-gray-800 lg:w-1/2">{t('our_features_title')}</h2>
          <p className="text-xl text-gray-600 mt-4 lg:mt-0 lg:w-1/2">
            {t('our_features_description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
