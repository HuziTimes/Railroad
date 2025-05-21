import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import truckIcon from '../assets/Services.png'; // Import delivery truck icon
import headsetIcon from '../assets/Services (1).png'; // Import customer service icon
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="about-page">
        <div className="breadcrumb-container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="current">About us</span>
          </div>
        </div>

        <div className="about-container">
          <div className="story-section">
            <div className="story-content">
              <h1>Our Story</h1>
              <p>
                Shabby fabric traces its origins to rural Europe, where worn-out textiles 
                were repurposed into charming home decor, laying the foundation for 
                what became the "shabby chic" style in the 1980s. Popularized by designer 
                Rachel Ashwell, this aesthetic embraced imperfections, featuring faded 
                patterns, soft colors, and textured weaves that exuded vintage charm. With 
                the rise of e-commerce, shabby fabric gained global recognition for its 
                versatility in crafts, fashion, and home decor. Today, it remains a timeless 
                choice, celebrated for its eco-friendly production and ability to add a 
                touch of rustic elegance to any project.
              </p>
            </div>
            <div className="story-image">
              {/* Image will be styled via CSS */}
            </div>
          </div>

          <div className="service-features">
            <div className="service-item">
              <div className="service-icon">
                <img src={truckIcon} alt="Free Delivery" className="service-icon-img" />
              </div>
              <h3>FREE DELIVERY</h3>
              <p>Free delivery for all orders over $75</p>
            </div>
            
            <div className="service-item">
              <div className="service-icon">
                <img src={headsetIcon} alt="Customer Service" className="service-icon-img" />
              </div>
              <h3>FRIENDLY CUSTOMER SERVICE</h3>
              <p>Friendly customer support</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage; 