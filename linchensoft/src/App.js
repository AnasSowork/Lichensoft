import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './i18n' 
import OurFeatures from './components/OurFeatures';

const App = () => (
  <div>
    <Header />
    <Banner />
    <OurFeatures />
    <Features />
    <Benefits />
    <FAQ />
    <Footer />
  </div>
);

export default App;
