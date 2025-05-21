import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ProductSection from '../components/ProductSection';
import Subscribe from '../components/Subscribe';

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <SearchBar />
        <Categories />
        <ProductSection />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage; 