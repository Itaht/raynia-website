// components/DropdownButton.js
import React, { useState } from 'react';
import styles from '../styles/DropdownButton.module.css';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Default');
  const [animating, setAnimating] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setAnimating(false);
    }, 300); // Duration of the animation
    // Log the selected option with the prefix "sort:"
    console.log(`Sort by ${option}`);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button className={styles.dropdownButton} onClick={toggleDropdown}>
        <div className={styles.textContainer}>
          <span className={styles.normalText}>Sort by</span>
          {!isOpen && <span className={styles.boldText}>{selectedOption}</span>}
        </div>
        <img src='/iconsort.svg' alt='Icon Sort' className={styles.iconSort} />
      </button>
      <ul className={`${styles.dropdownMenu} ${isOpen ? styles.open : animating ? styles.close : ''}`}>
        <li onClick={() => handleOptionClick('Default')}>
          <span>Sort by Default</span>
          <img
            src={selectedOption === 'Default' ? '/select.svg' : '/notselect.svg'}
            alt={selectedOption === 'Default' ? 'Select Icon' : 'Not Select Icon'}
            className={styles.notSelectIcon}
          />
        </li>
        <li onClick={() => handleOptionClick('Price: high to low')}>
          <span>Sort by Price: high to low</span>
          <img
            src={selectedOption === 'Price: high to low' ? '/select.svg' : '/notselect.svg'}
            alt={selectedOption === 'Price: high to low' ? 'Select Icon' : 'Not Select Icon'}
            className={styles.notSelectIcon}
          />
        </li>
        <li onClick={() => handleOptionClick('Price: low to high')}>
          <span>Sort by Price: low to high</span>
          <img
            src={selectedOption === 'Price: low to high' ? '/select.svg' : '/notselect.svg'}
            alt={selectedOption === 'Price: low to high' ? 'Select Icon' : 'Not Select Icon'}
            className={styles.notSelectIcon}
          />
        </li>
      </ul>
    </div>
  );
};

export default DropdownButton;
