import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

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
