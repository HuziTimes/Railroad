import React from 'react';
import fabricImg from '../assets/fabric.png';
import patternsImg from '../assets/Patterns.png';
import notionsImg from '../assets/Notions.png';

const Categories = () => {
  const categories = [
    { name: 'Fabric', image: fabricImg },
    { name: 'Patterns', image: patternsImg },
    { name: 'Notions', image: notionsImg },
  ];

  return (
    <section className="categories">
      <h3>Explore Our Categories</h3>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img src={category.image} alt={category.name} />
            <div className="category-overlay">
              <span>{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories; 