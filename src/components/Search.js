import React, { useState } from 'react';
import styles from '../styles/Search.module.css';
import Header from '../components/Header';
import BottomHeader from './BottomHeader';

const Search = () => {
  const [query, setQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // Show the popup when the search is initiated
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.searchContainer}>
      <Header />
      <BottomHeader />
      <h2>Search for Books</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter book title or author"
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.closeButton} onClick={handleClosePopup}>&times;</span>
            <h3>Book Found</h3>
            <p>How to write website application101</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
