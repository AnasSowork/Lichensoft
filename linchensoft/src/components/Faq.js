import React, { useState } from 'react';

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <div className="mt-6">
        {["What is LichenSoft?", "How does Data Connect work?", "Can I customize my dashboard?"].map((question, index) => (
          <div key={index} className="mb-4">
            <button onClick={() => toggle(index)} className="font-bold text-lg bg-white p-4 shadow-md rounded w-full text-left">
              {question}
            </button>
            {open === index && (
              <p className="mt-2 p-4 bg-white rounded shadow-md">Answer to the question goes here.</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
