import React, { useState } from 'react';
import fabricImg from '../assets/products.png';
import reviewerAvatar1 from '../assets/avtar.1.png';
import reviewerAvatar2 from '../assets/avtar2.png';
import reviewerAvatar3 from '../assets/avtar3.png';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: 'Tom DeLonge',
      text: 'I absolutely love this shabby fabric! The quality is outstanding, with a soft texture and beautiful vintage patterns that bring my DIY projects to life. It\'s versatile and easy to work with, perfect for creating rustic home decor or crafts. Plus, the eco-friendly aspect makes me feel good about my purchase. Highly recommend it to anyone looking for charm and functionality in one fabric!',
      avatar: reviewerAvatar1
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      text: 'This fabric exceeded my expectations! The colors are true to the images online, and the material is durable yet soft. I used it for throw pillows and they turned out beautifully. Will definitely purchase again.',
      avatar: reviewerAvatar2
    },
    {
      id: 3,
      name: 'Michael Chen',
      text: 'Great quality fabric that works perfectly for my upholstery project. The vintage pattern adds character to my dining room chairs. Shipping was fast and the fabric arrived in perfect condition.',
      avatar: reviewerAvatar3
    }
  ];
  
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePrevReview = () => {
    setActiveReviewIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNextReview = () => {
    setActiveReviewIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToReview = (index) => {
    setActiveReviewIndex(index);
  };

  return (
    <div className="product-detail-page">
      {/* Breadcrumbs */}
      <div className="breadcrumb-container">
        <div className="breadcrumbs">
          <span>Products</span>
          <span>/</span>
          <span>Shabby Fabric type</span>
          <span>/</span>
          <span className="current">Product Detail</span>
        </div>
      </div>
      
      {/* Product Detail Section */}
      <div className="product-main-container">
        <div className="product-image-container">
          <img src={fabricImg} alt="SPECIAL IMPORTED IRANI FABRIC" className="product-main-image" />
        </div>
        
        <div className="product-info-container">
          <h1 className="product-title">SPECIAL IMPORTED IRANI FABRIC</h1>
          
          {/* Ratings */}
          <div className="product-ratings">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <span className="review-count">(100)</span>
          </div>
          
          {/* Product Specifications */}
          <div className="product-specs">
            <div className="spec-item">
              <span className="spec-label">Material:</span>
              <span className="spec-value">Durable, eco-friendly, and soft fabric with a vintage feel</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Design:</span>
              <span className="spec-value">Shabby chic pattern ideal for rustic or bohemian-themed projects</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Size:</span>
              <span className="spec-value">Available in multiple dimensions to suit various needs</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Uses:</span>
              <span className="spec-value">Great for quilting, sewing, home decor, or arts and crafts</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Care:</span>
              <span className="spec-value">Machine washable and easy to maintain for long-lasting beauty</span>
            </div>
          </div>
          
          {/* Product Price */}
          <div className="product-price-container">
            <p className="usd-text">USD(incl. of all taxes)</p>
            <div className="price-row">
              <span className="current-price">$600.72</span>
              <span className="original-price">$800.00</span>
            </div>
          </div>
          
          {/* Quantity Selector */}
          <div className="quantity-selector">
            <button className="quantity-btn" onClick={decrementQuantity}>−</button>
            <span className="quantity">{quantity}</span>
            <button className="quantity-btn" onClick={incrementQuantity}>+</button>
          </div>
          
          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="buy-now-btn">Buy Now</button>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          
          {/* Size Options */}
          <div className="size-options">
            <div className="size-option selected">
              <span>106 cm (42)</span>
            </div>
            <div className="size-option">
              <span>121 cm (48)</span>
            </div>
            <div className="size-option">
              <span>139 cm (55)</span>
            </div>
            <div className="size-option">
              <span>164 cm (65)</span>
            </div>
            <div className="size-option">
              <span>196 cm (77)</span>
            </div>
            <div className="size-option">
              <span>210 cm (83)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Description and Reviews */}
      <div className="product-tabs">
        <div className="tab-buttons">
          <button 
            className={activeTab === 'description' ? 'tab-btn active' : 'tab-btn'} 
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={activeTab === 'reviews' ? 'tab-btn active' : 'tab-btn'} 
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'description' && (
            <div className="description-tab">
              <p>
                Upgrade your crafting and decorating projects with this high-quality shabby fabric cloth. Featuring a rustic, 
                textured design, this versatile fabric is perfect for creating charming DIY crafts, upholstery, curtains, or 
                table runners
              </p>
              <p>
                Transform your creative ideas into reality with this shabby fabric cloth, combining functionality and style for 
                endless possibilities. Perfect for personal or professional use, it's a must-have for every crafter's collection! 
                Add it to your cart now and start creating timeless designs!
              </p>
              <p>More...</p>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div className="reviews-tab-container">
              <div className="review">
                <p className="review-text">{reviews[activeReviewIndex].text}</p>
                <p className="reviewer-name">{reviews[activeReviewIndex].name}</p>
              </div>
              
              <div className="review-navigation">
                <button className="nav-button prev" onClick={handlePrevReview}>‹ Prev</button>
                
                <div className="avatar-nav">
                  {reviews.map((review, index) => (
                    <div 
                      key={review.id} 
                      className={`avatar-container ${activeReviewIndex === index ? 'active' : ''}`}
                      onClick={() => goToReview(index)}
                    >
                      <img 
                        src={review.avatar} 
                        alt={`${review.name} avatar`} 
                        className="reviewer-avatar" 
                      />
                    </div>
                  ))}
                </div>
                
                <button className="nav-button next" onClick={handleNextReview}>Next ›</button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Related Products */}
      <div className="related-products">
        <h2>Related Products</h2>
        
        <div className="products-grid">
          {/* Product 1 */}
          <div className="related-product">
            <div className="product-img-container">
              <img src={fabricImg} alt="Larkspur Shadow Play" />
              <button className="wishlist-btn">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <h3>Larkspur Shadow Play</h3>
            <p className="product-price">$11.99</p>
            <p className="product-desc">Lorem ipsum dolor sit amet, consectetur</p>
            <div className="product-ratings">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="review-count">(100)</span>
            </div>
            <button className="view-product-btn">View Product</button>
          </div>
          
          {/* Product 2 */}
          <div className="related-product">
            <div className="product-img-container">
              <img src={fabricImg} alt="Larkspur Shadow Play" />
              <button className="wishlist-btn">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <h3>Larkspur Shadow Play</h3>
            <p className="product-price">$11.99</p>
            <p className="product-desc">Lorem ipsum dolor sit amet, consectetur</p>
            <div className="product-ratings">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="review-count">(100)</span>
            </div>
            <button className="view-product-btn">View Product</button>
          </div>
          
          {/* Product 3 */}
          <div className="related-product">
            <div className="product-img-container">
              <img src={fabricImg} alt="Larkspur Shadow Play" />
              <button className="wishlist-btn">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <h3>Larkspur Shadow Play</h3>
            <p className="product-price">$11.99</p>
            <p className="product-desc">Lorem ipsum dolor sit amet, consectetur</p>
            <div className="product-ratings">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="review-count">(100)</span>
            </div>
            <button className="view-product-btn">View Product</button>
          </div>
        </div>
        
        <div className="explore-more-container">
          <button className="explore-more-btn">
            Explore More
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 