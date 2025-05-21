import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = () => {
  return (
    <>
      <Header />
      <main>
        <ProductDetail />
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailPage; 