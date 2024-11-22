import React from 'react';
import '../pages/Home.css';

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-content">
          <div className="banner-left">
            <h1>Boost Your Business with LichenSoft</h1>
            <p>
              LichenSoft combines AI and smart software solutions, driving business efficiency to
              unprecedented levels.
            </p>
            <button>Get Started</button>
          </div>
          <div className="banner-right">
            <img src="dashboard.png" alt="Business" />
          </div>
        </div>
      </div>

      {/* Seamless Integration Section */}
      <section className="integration">
        <div className="integration-text">
          <h2>SEAMLESS INTEGRATION</h2>
          <p>
            We offer a variety of integrating features that help your business grow by making your
            processes more efficient and connected.
          </p>
        </div>
        <div className="integration-icons">
          <div className="icon">
            <img src="/path-to-icon1.png" alt="Integration 1" />
          </div>
          <div className="icon">
            <img src="/path-to-icon2.png" alt="Integration 2" />
          </div>
          <div className="icon">
            <img src="/path-to-icon3.png" alt="Integration 3" />
          </div>
          <div className="icon">
            <img src="/path-to-icon4.png" alt="Integration 4" />
          </div>
          {/* Add more icons as needed */}
        </div>
      </section>
    </div>
  );
};

export default Home;

