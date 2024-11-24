import React from 'react';

const Benefits = () => (
  <section className="py-16">
    <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">What Benefit Will You Get?</h2>
    <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 mb-12">
      <div className="text-center space-y-3">
        <p className="text-2xl text-blue-600 font-semibold">Real-Time Data Validation</p>
        <p className="text-lg text-gray-600">Automatic error checking and validation tools.</p>
      </div>
      <div className="text-center space-y-3">
        <p className="text-2xl text-blue-600 font-semibold">Automated Workflows</p>
        <p className="text-lg text-gray-600">Simplify data processes and enhance productivity.</p>
      </div>
      <div className="text-center space-y-3">
        <p className="text-2xl text-blue-600 font-semibold">Custom Data Cleaning Solutions</p>
        <p className="text-lg text-gray-600">Remove inconsistencies and optimize data.</p>
      </div>
    </div>
  </section>
);

export default Benefits;
