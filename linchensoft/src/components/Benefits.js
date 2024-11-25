import React from 'react';
import { useTranslation } from 'react-i18next';

const Benefits = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
        
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">{t('benefits_title')}</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-2xl">✔️</span>
              <div>
                <p className="text-xl font-semibold text-blue-600">{t('benefit_1_title')}</p>
                <p className="text-gray-600">{t('benefit_1_description')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-2xl">✔️</span>
              <div>
                <p className="text-xl font-semibold text-blue-600">{t('benefit_2_title')}</p>
                <p className="text-gray-600">{t('benefit_2_description')}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-blue-600 text-2xl">✔️</span>
              <div>
                <p className="text-xl font-semibold text-blue-600">{t('benefit_3_title')}</p>
                <p className="text-gray-600">{t('benefit_3_description')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <img
            src="/assets/laptop-image.png"
            alt="Laptop"
            className="w-full rounded-lg shadow-lg"
          />

          <div className="absolute top-10 left-10 bg-white shadow p-2 rounded-md">
            <p className="text-sm text-gray-800">{t('benefit_overlay_1')}</p>
          </div>
          <div className="absolute bottom-12 left-12 bg-white shadow p-2 rounded-md">
            <p className="text-sm text-gray-800">{t('benefit_overlay_2')}</p>
          </div>
          <div className="absolute top-32 right-10 bg-white shadow p-2 rounded-md">
            <p className="text-sm text-gray-800">{t('benefit_overlay_3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
