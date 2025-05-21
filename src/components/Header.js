import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png.png';
import cartIcon from '../assets/Rectangle 648 (1).png';
import userIcon from '../assets/Vector (1).png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const cartItemCount = 3; // This would typically come from a cart context or state

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo-section">
            <img src={logo} alt="Railroad Cotton Exchange" />
            <div className="logo-text">
              <span>Railroad Cotton</span>
              <span>Exchange</span>
            </div>
          </Link>
          
          <nav className="desktop-nav">
            <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink>
            <NavLink to="/shop" className={location.pathname.includes('/shop') ? 'active' : ''}>Shop</NavLink>
            <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact us</NavLink>
            <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>About us</NavLink>
          </nav>
          
          <div className="account-desktop">
            <Link to="/cart" className="cart-button">
              <div className="cart-icon-wrapper">
                <img src={cartIcon} alt="Cart" className="header-icon" />
                {cartItemCount > 0 && <span className="cart-count-badge">{cartItemCount}</span>}
              </div>
              Cart
            </Link>
            <button>
              <img src={userIcon} alt="My Account" className="header-icon" />
              My Account
            </button>
          </div>

          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'show' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="logo-section" onClick={closeMenu}>
            <img src={logo} alt="Railroad Cotton Exchange" />
            <div className="logo-text">
              <span>Railroad Cotton</span>
              <span>Exchange</span>
            </div>
          </Link>
          <button className="mobile-menu-close" onClick={toggleMobileMenu}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <nav className="mobile-menu-nav">
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/shop" className={location.pathname.includes('/shop') ? 'active' : ''} onClick={closeMenu}>Shop</NavLink>
          <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact us</NavLink>
          <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About us</NavLink>
        </nav>
        
        <div className="mobile-menu-account">
          <Link to="/cart" className="cart-button" onClick={closeMenu}>
            <div className="cart-icon-wrapper">
              <img src={cartIcon} alt="Cart" className="header-icon" />
              {cartItemCount > 0 && <span className="cart-count-badge">{cartItemCount}</span>}
            </div>
            Cart
          </Link>
          <button>
            <img src={userIcon} alt="My Account" className="header-icon" />
            My Account
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 