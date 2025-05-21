import React from 'react';
import heroBanner from '../assets/herobanner.png';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-inner">
        <img src={heroBanner} alt="Fabric collection" />
        <div className="hero-overlay">
          <h2>Revamp Your Interiors with Up to 65% Off on Fabrics!</h2>
          <button>
            Explore Products
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner; 