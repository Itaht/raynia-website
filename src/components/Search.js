import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import styles from '../styles/Search.module.css';
import Header from './Header';
import BottomHeader from './BottomHeader';
import DropdownButton from './DropdownButton';
import FilterPopUp from './FilterPopup';

const Search = () => {
  const [query, setQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

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

   // Handle the click event on each rectangle
   const handleRectangleClick = (index) => {
    if (index % 3 === 0) {
      navigate('/bookcontent');
    } else if (index % 3 === 1) {
      navigate('/bookproblem');
    } else {
      navigate('/bookcontentproblem');
    }
  };

  const getRectangleClass = (index) => {
    if (index % 3 === 0) return styles.rectangleBookContent;
    if (index % 3 === 1) return styles.rectangleBookProblem;
    return styles.rectangleBookContentProblem;
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
        <div className={styles.rectangleContainer}>
          {Array(100).fill(null).map((_, index) => (
            <div
              key={index}
              className={`${styles.rectangle} ${getRectangleClass(index)}`}
              onClick={() => handleRectangleClick(index)} // Pass the index to determine which page to navigate to
            ></div>
          ))}
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
