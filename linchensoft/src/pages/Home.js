import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import OurFeatures from '../components/OurFeatures';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <OurFeatures />
      <Features />
      <Benefits />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
