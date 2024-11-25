import React from 'react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gradient-to-b from-blue-100 to-white ">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">{t('seamless_integration')}</h2>  
      <div className="flex justify-center space-x-20 mb-12">
        <img src="/assets/icon.svg" alt="Icon" className="w-24 h-24"/>
        <img src="/assets/icon6.svg" alt="Icon 1" className="w-24 h-24"/>
        <img src="/assets/icon2.svg" alt="Icon 2" className="w-24 h-24"/>
        <img src="/assets/icon3.svg" alt="Icon 3" className="w-24 h-24"/>
        <img src="/assets/icon4.svg" alt="Icon 4" className="w-24 h-24"/>
        <img src="/assets/icon5.svg" alt="Icon 5" className="w-24 h-24"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <img src="/assets/dataconnect.svg" alt="Data Connect" className="w-full h-59 object-cover mb-6 rounded" />
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">{t('data_connect')}</h3>  
          <p className="text-lg text-gray-600">{t('data_connect_description')}</p>  
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <img src="/assets/dataquality.svg" alt="Data Quality" className="w-full h-59 object-cover mb-6 rounded" />
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">{t('data_quality')}</h3>  
          <p className="text-lg text-gray-600">{t('data_quality_description')}</p>  
        </div>
      </div>
    </section>
  );
};

export default Features;
