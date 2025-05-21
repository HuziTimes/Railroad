import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import productImg from '../assets/products.png';

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Larkspur Shadow Play',
      price: 650,
      quantity: 1,
      image: productImg
    },
    {
      id: 2,
      name: 'Larkspur Shadow Play',
      price: 650,
      quantity: 1,
      image: productImg
    },
    {
      id: 3,
      name: 'Larkspur Shadow Play',
      price: 650,
      quantity: 1,
      image: productImg
    }
  ]);
  
  const [couponCode, setCouponCode] = useState('');
  
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const salesTax = 20;
  const shipping = 'Free';
  const couponDiscount = 10;
  const total = subtotal + salesTax - couponDiscount;

  return (
    <>
      <Header />
      <main className="cart-page">
        <div className="container">
          {/* Breadcrumbs */}
          <div className="breadcrumb-container">
            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <span>/</span>
              <span className="current">Cart</span>
            </div>
          </div>
          
          <h1 className="cart-title">Shopping Cart</h1>
          <p className="cart-count"><span className="bold">{cartItems.length} items</span> in your cart</p>
          
          <div className="cart-layout">
            {/* Cart Items Table - Left Side */}
            <div className="cart-table-container">
              <div className="cart-table">
                <div className="cart-header">
                  <div className="cart-cell product-header">Product</div>
                  <div className="cart-cell price-header">Price</div>
                  <div className="cart-cell quantity-header">Quantity</div>
                  <div className="cart-cell subtotal-header">Subtotal</div>
                </div>
                
                {cartItems.map(item => (
                  <div key={item.id} className="cart-row">
                    <div className="cart-cell product-cell">
                      <div className="product-info">
                        <img src={item.image} alt={item.name} className="product-thumbnail" />
                        <div className="product-name">{item.name}</div>
                      </div>
                    </div>
                    <div className="cart-cell price-cell">${item.price}</div>
                    <div className="cart-cell quantity-cell">
                      <div className="quantity-control">
                        <button 
                          className="quantity-btn decrease"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          −
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          className="quantity-btn increase"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="cart-cell subtotal-cell">${item.price * item.quantity}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Cart Summary - Right Side */}
            <div className="cart-sidebar">
              {/* Coupon Section */}
              <div className="coupon-section">
                <input 
                  type="text" 
                  placeholder="Coupon Code" 
                  className="coupon-input"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button className="apply-coupon-button">Apply</button>
              </div>
              
              <div className="cart-summary">
                <h2 className="summary-title">Cart Total</h2>
                
                <div className="summary-row">
                  <span className="summary-label">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} item{cartItems.reduce((sum, item) => sum + item.quantity, 0) !== 1 ? 's' : ''})</span>
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
                
                <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage; 