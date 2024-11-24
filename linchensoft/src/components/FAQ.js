import React from 'react';

const FAQ = () => (
  <section className="py-16 bg-gray-50">
    <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
    <div className="max-w-3xl mx-auto space-y-6">
      <details className="bg-white p-6 rounded-lg shadow">
        <summary className="font-semibold text-2xl text-gray-800">What is LichenSoft?</summary>
        <p className="text-lg text-gray-600 mt-2">LichenSoft is an AI and cloud technology solution for data quality management.</p>
      </details>
      <details className="bg-white p-6 rounded-lg shadow">
        <summary className="font-semibold text-2xl text-gray-800">Can I customize my dashboard?</summary>
        <p className="text-lg text-gray-600 mt-2">Yes, LichenSoft provides extensive customization options for your dashboard.</p>
      </details>
    </div>
  </section>
);

export default FAQ;
