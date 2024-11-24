import React from 'react';

const Banner = () => (
  <section className="bg-gradient-to-b from-blue-100 to-white py-20 px-8 flex flex-col lg:flex-row items-center lg:justify-between">
    <div className="lg:w-1/2 space-y-8">
      <h1 className="text-6xl font-bold text-gray-800">Boost Your Business with LichenSoft.</h1>
      <p className="text-xl text-gray-600">
        LichenSoft combines AI and cloud technology to enhance data quality, providing efficient, error-free, and speedy workflows.
      </p>
      <div className="space-x-4">
        <button className="bg-blue-600 text-white px-8 py-3 text-lg rounded hover:bg-blue-700">Get Started</button>
        <button className="border border-gray-300 text-gray-800 px-8 py-3 text-lg rounded hover:bg-gray-100">View Demo</button>
      </div>
    </div>
    <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
      <img src="/assets/Dashboard.png" alt="Dashboard Preview" className="max-w-xs lg:max-w-md rounded-lg filter drop-shadow-lg" />
    </div>
  </section>
);

export default Banner;
