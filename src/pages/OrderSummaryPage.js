import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import productImg from '../assets/products.png';
import logo from '../assets/Animation.png';
import '../styles/OrderSummaryPage.css';

const OrderSummaryPage = () => {
  // Sample order data
  const orderItems = [
    {
      id: 1,
      name: 'Shabby Fabric I',
      price: 650,
      image: productImg
    },
    {
      id: 2,
      name: 'Shabby Fabric I',
      price: 650,
      image: productImg
    }
  ];

  const totalAmount = 1299;
  const deliveryAddress = "Times Square New York City, Pakistan";
  const city = "New York";
  const contact = "+92-123456-34";
  const email = "railroadcotton@exchange.com";

  return (
    <>
      <Header />
      <main className="order-summary-page">
        <div className="breadcrumb-container">
          <div className="breadcrumbs">
            <Link to="/cart">View Cart</Link>
            <span>/</span>
            <Link to="/checkout">CheckOut</Link>
            <span>/</span>
            <span className="current">Order Summary</span>
          </div>
        </div>

        <div className="order-icon-container">
          <img src={logo} alt="Railroad Cotton Exchange Logo" className="order-icon" />
        </div>

        <div className="order-summary-container">
          <h2>Items you ordered</h2>
          
          <div className="order-items">
            {orderItems.map(item => (
              <div key={item.id} className="order-item">
                <div className="order-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="order-item-name">{item.name}</div>
                <div className="order-item-price">${item.price}</div>
              </div>
            ))}
          </div>

          <div className="order-details">
            <div className="delivery-details">
              <p><strong>Delivery Address:</strong> {deliveryAddress}</p>
              <p><strong>City:</strong> {city}</p>
              <p><strong>Contact:</strong> {contact}</p>
              <p><strong>Email:</strong> {email}</p>
            </div>
            <div className="order-total">
              <p>Total: ${totalAmount}</p>
            </div>
          </div>

          <div className="back-to-store-container">
            <Link to="/" className="back-to-store-button">Back to Store</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderSummaryPage; 