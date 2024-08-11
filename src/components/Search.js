import React, { useState } from 'react';
import styles from '../styles/Search.module.css';
import Header from '../components/Header';
import BottomHeader from './BottomHeader';
import DropdownButton from '../components/DropdownButton';
import FilterPopUp from '../components/FilterPopup';

const Search = () => {
  const [query, setQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleClearInput = () => {
    setQuery('');
  };

  return (
    <div className={styles.searchContainer}>
      <Header />
      <BottomHeader />
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <div className={styles.searchInputContainer}>
          <img src="/iconbottomheader/searchblack.svg" alt="Search" className={styles.searchIcon} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search..."
            className={styles.searchInput}
          />
          {query && <span className={styles.clearIcon} onClick={handleClearInput}>&times;</span>}
          <div className={styles.searchLine}></div> {/* Add this div for the line */}
        </div>
      </form>
      <div className={styles.func}>
        <DropdownButton />
        <FilterPopUp />
      </div>
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
