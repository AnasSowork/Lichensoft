import React from 'react';
import '../pages/Home.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1 className="banner-heading">
          Boost Your Business with LichenSoft.
        </h1>
        <div className="curved-line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 20"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 10 C50 20, 150 0, 200 10"
              stroke="#007bff"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>
        <p>
          LichenSoft combines AI and SaaS technologies to optimize business operations, increase
          productivity, and reduce costs.
        </p>
        <div className="banner-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">View Demo</button>
        </div>
      </div>
      <div className="banner-image">
        <img src="/dashboard.png" alt="Dashboard Preview" className="dashboard-image" />
      </div>
      
      {/* Seamless Integration Section */}
      <section className="seamless-integration">
        <h2>SEAMLESS INTEGRATION</h2>
        <p>
          We’re the expert in integrating technologies that help you boost your business. Our software integrates seamlessly with your current systems and processes.
        </p>
        <div className="integration-icons">
          <div className="icon">
            <img src="/integration-icon1.png" alt="Icon 1" />
            <p>Icon 1</p>
          </div>
          <div className="icon">
            <img src="/integration-icon2.png" alt="Icon 2" />
            <p>Icon 2</p>
          </div>
          <div className="icon">
            <img src="/integration-icon3.png" alt="Icon 3" />
            <p>Icon 3</p>
          </div>
          <div className="icon">
            <img src="/integration-icon4.png" alt="Icon 4" />
            <p>Icon 4</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
