import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactButton = () => {
  const { t } = useTranslation();

  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700">
      {t('contact_us')}
    </button>
  );
};

export default ContactButton;
