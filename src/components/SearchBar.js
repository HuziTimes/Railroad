import React from 'react';

const SearchBar = () => {
  return (
    <div className="container">
      <form className="search-form">
        <select>
          <option value="">All Categories</option>
          <option value="fabric">Fabric</option>
          <option value="patterns">Patterns</option>
          <option value="notions">Notions</option>
        </select>
        <input type="text" placeholder="Search anything here" />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar; 