import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConfirmationModal from '../components/ConfirmationModal';
import productImg from '../assets/products.png';
import itemImage from '../assets/fabric.png';
import mastercardIcon from '../assets/Mastercard.png';
import visaIcon from '../assets/Visa.png';
import bkashIcon from '../assets/Bkash.png';
import nagadIcon from '../assets/Nagad.png';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [saveInfo, setSaveInfo] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Sample cart items
  const cartItems = [
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
  
  const subtotal = 1750;
  const salesTax = 20;
  const shipping = 'Free';
  const couponDiscount = 10;
  const total = 1760;

  const handlePlaceOrder = () => {
    setShowConfirmation(true);
  };

  const handleConfirmOrder = () => {
    // Process the order here
    setShowConfirmation(false);
    // You could navigate to a success page or show a success message
    navigate('/order-summary');
  };

  return (
    <>
      <Header />
      <main className="checkout-page">
        <div className="container">
          {/* Breadcrumbs */}
          <div className="breadcrumb-container">
            <div className="breadcrumbs">
              <Link to="/cart">View Cart</Link>
              <span>/</span>
              <span className="current">Checkout</span>
            </div>
          </div>
          
          <h1 className="checkout-title">Billing Details</h1>
          
          <div className="checkout-layout">
            {/* Billing Form - Left Side */}
            <div className="billing-form-container">
              <form className="billing-form">
                <div className="form-group">
                  <label htmlFor="firstName">
                    First Name<span className="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="streetAddress">
                    Street Address<span className="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="streetAddress" 
                    name="streetAddress" 
                    className="input-double-height"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="apartment">
                    Apartment, floor, etc. (optional)
                  </label>
                  <input 
                    type="text" 
                    id="apartment" 
                    name="apartment"
                    className="input-double-height" 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="townCity">
                    Town/City<span className="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="townCity" 
                    name="townCity" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phoneNumber">
                    Phone Number<span className="required">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="emailAddress">
                    Email Address<span className="required">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="emailAddress" 
                    name="emailAddress" 
                    required 
                  />
                </div>
                
                <div className="save-info-checkbox">
                  <input 
                    type="checkbox" 
                    id="saveInfo" 
                    checked={saveInfo}
                    onChange={() => setSaveInfo(!saveInfo)}
                  />
                  <label htmlFor="saveInfo">
                    Save this information for faster check-out next time
                  </label>
                </div>
              </form>
            </div>
            
            {/* Order Summary - Right Side */}
            <div className="order-summary">
              <h2 className="summary-title">Cart Total</h2>
              
              {/* Cart Items */}
              {cartItems.map(item => (
                <div key={item.id} className="checkout-item">
                  <div className="checkout-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="checkout-item-details">
                    <span className="checkout-item-name">{item.name}</span>
                    <span className="checkout-item-price">${item.price}</span>
                  </div>
                </div>
              ))}
              
              <div className="summary-details">
                <div className="summary-row">
                  <span className="summary-label">Subtotal (1 item)</span>
                  <span className="summary-value">${subtotal}</span>
                </div>
                
                <div className="summary-row">
                  <span className="summary-label">Sales Tax:</span>
                  <span className="summary-value">${salesTax}</span>
                </div>
                
                <div className="summary-row">
                  <span className="summary-label">Shipping:</span>
                  <span className="summary-value">{shipping}</span>
                </div>
                
                <div className="summary-row">
                  <span className="summary-label">Coupon Discount:</span>
                  <span className="summary-value">-${couponDiscount}</span>
                </div>
                
                <div className="summary-row total">
                  <span className="summary-label">Total:</span>
                  <span className="summary-value">${total}</span>
                </div>
              </div>
              
              {/* Payment Methods */}
              <div className="payment-methods">
                <div className="payment-option">
                  <input 
                    type="radio" 
                    id="bank" 
                    name="payment" 
                    value="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={() => setPaymentMethod('bank')}
                  />
                  <label htmlFor="bank">Bank</label>
                  {paymentMethod === 'bank' && (
                    <div className="payment-cards">
                      <img src={mastercardIcon} alt="Mastercard" />
                      <img src={visaIcon} alt="Visa" />
                      <img src={bkashIcon} alt="bKash" />
                      <img src={nagadIcon} alt="Nagad" />
                    </div>
                  )}
                </div>
                
                <div className="payment-option">
                  <input 
                    type="radio" 
                    id="cash" 
                    name="payment" 
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={() => setPaymentMethod('cash')}
                  />
                  <label htmlFor="cash">Cash on delivery</label>
                </div>
              </div>
              
              <button className="place-order-button" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Confirmation Modal */}
      <ConfirmationModal 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={handleConfirmOrder}
        amount={total}
      />
    </>
  );
};

export default CheckoutPage; 