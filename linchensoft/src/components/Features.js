import React from 'react';
import '../pages/Home.css';

const Features = () => {
  return (
    <div id="features" className="features">
      <h2>Our Features You Can Get</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Data Connect</h3>
          <p>Easily integrate your data across platforms, enabling real-time insights.</p>
        </div>
        <div className="feature-item">
          <h3>Data Quality</h3>
          <p>Broken records fixed with advanced validation and cleaning tools.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;

