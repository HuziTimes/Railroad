import React from 'react';
import { useNavigate } from 'react-router-dom';
import productImg from '../assets/products.png';

const ProductSection = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      name: 'Larkspur Shadow Play',
      price: '$11.99',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      rating: 5,
      reviews: 100,
    },
    {
      id: 2,
      name: 'Larkspur Shadow Play',
      price: '$11.99',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      rating: 5,
      reviews: 100,
    },
    {
      id: 3,
      name: 'Larkspur Shadow Play',
      price: '$11.99',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      rating: 5,
      reviews: 100,
    },
  ];
  
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="new-products">
      <h3>New Products</h3>
      <div className="products-container">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="product-item"
            onClick={() => handleProductClick(product.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="product-image-wrapper">
              <img src={productImg} alt={product.name} />
              <button className="favorite-button" onClick={(e) => e.stopPropagation()}>
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div className="product-info">
              <h4>{product.name}</h4>
              <span>{product.price}</span>
            </div>
            <p className="product-description">{product.description}</p>
            <div className="product-rating">
              {[...Array(product.rating)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
              <span>({product.reviews})</span>
            </div>
            <button 
              className="view-product-button"
              onClick={(e) => {
                e.stopPropagation();
                handleProductClick(product.id);
              }}
            >
              View Product
            </button>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="explore-more-button">
          Explore More
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default ProductSection; 