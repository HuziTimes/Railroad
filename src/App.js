import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSummaryPage from './pages/OrderSummaryPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import './styles/Landingpage.css';
import './styles/CartPage.css';
import './styles/CheckoutPage.css';
import './styles/OrderSummaryPage.css';
import './styles/ContactPage.css';
import './styles/AboutPage.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-summary" element={<OrderSummaryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
