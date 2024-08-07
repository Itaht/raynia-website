import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import for React Router v6
import styles from '../styles/BottomHeader.module.css';

const BottomHeader = () => {
  const [position, setPosition] = useState('home');
  const navigate = useNavigate(); // Updated for React Router v6

  useEffect(() => {
    const storedPosition = localStorage.getItem('purplebuttonPosition');
    if (storedPosition) {
      setPosition(storedPosition);
    }
  }, []);

  const handleClick = (newPosition, path) => {
    setPosition(newPosition);
    localStorage.setItem('purplebuttonPosition', newPosition);
    setTimeout(() => {
      navigate(path); // Updated for React Router v6
    }, 500); // Adjust the delay as needed to match the animation duration
  };

  return (
    <header className={styles.header}>
      <div className={styles.buttonWrapper}>
        <button className={styles.buttonhome} onClick={() => handleClick('home', '/homepage')}>hhh</button>
        <img 
          src={position === 'home' ? '/iconbottomheader/homewhite.svg' : '/iconbottomheader/homeblack.svg'} 
          alt={position === 'home' ? 'Home White' : 'Home Black'} 
          className={styles.homewhite} 
        />
      </div>
      <div className={styles.buttonWrapper1}>
        <button className={styles.buttonsearch} onClick={() => handleClick('search', '/search')}>sss</button>
        <img 
          src={position === 'search' ? '/iconbottomheader/searchwhite.svg' : '/iconbottomheader/searchblack.svg'} 
          alt={position === 'search' ? 'Search White' : 'Search Black'} 
          className={styles.searchblack} 
        />
      </div>
      <div className={styles.buttonWrapper2}>
        <button className={styles.buttonsign} onClick={() => handleClick('sign', '/sign')}>sign</button>
        <img 
          src={position === 'sign' ? '/iconbottomheader/signwhite.svg' : '/iconbottomheader/signblack.svg'} 
          alt={position === 'sign' ? 'Sign White' : 'Sign Black'} 
          className={styles.signblack} 
        />
      </div>
      <img
        src='/iconbottomheader/purplebutton.svg'
        alt='Purple Button'
        className={`${styles.purplebutton} ${
          position === 'home' ? styles.moveToHome :
          position === 'search' ? styles.moveToSearch :
          position === 'sign' ? styles.moveToSign : ''
        }`}
      />
    </header>
  );
};

export default BottomHeader;
