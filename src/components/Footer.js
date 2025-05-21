import React from 'react';
import logo from '../assets/logo.png.png';
import icons from '../assets/icon_64 1.png';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-logo-section">
            <img src={logo} alt="Railroad Cotton Exchange" />
            <div className="footer-social-icons">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
          
          <div className="footer-links">
            <div>
              <h4>Navigation</h4>
              <ul>
                <li><NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink></li>
                <li><NavLink to="/shop" className={location.pathname.includes('/shop') ? 'active' : ''}>Shop</NavLink></li>
                <li><NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Services</NavLink></li>
                <li><NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</NavLink></li>
                {/* <li>Subscriptions</li> */}
              </ul>
              
              
            </div>
            {/* <nav className="footer-links">
            {/* <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink> */}
            {/* <NavLink to="/shop" className={location.pathname.includes('/shop') ? 'active' : ''}>Shop</NavLink> */}
            {/* <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Services</NavLink> */}
            {/* <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>About us</NavLink> */}
          {/* </nav> */} 
            
            <div>
              <h4>Contact us</h4>
              <ul className="footer-contact">
                <li>
                  <i className="fas fa-envelope"></i>
                  order@railroadcotton.com
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  T: +1 (979) 255-2014
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright © The Railroad Cotton Exchange</p>
          <div className="footer-powered-by">
            Powered by
            <img src={icons} alt="Stride Retail" />
            Stride Retail
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 