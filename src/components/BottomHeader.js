import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../styles/BottomHeader.module.css';

const BottomHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [position, setPosition] = useState('home');

  useEffect(() => {
    switch (location.pathname) {
      case '/search':
        setPosition('search');  
        break;
      case '/sign-in':
      case '/sign-up':
      case '/sign':
        setPosition('sign');
        break;
      case '/book':
      case '/addbookdata':  // Handle both /book and /addbookdata paths
        setPosition('book');
        break;
      case '/homepage':
      default:
        setPosition('home');
        break;
    }
  }, [location.pathname]);

  const handleClick = (newPosition, path) => {
    if (newPosition !== 'book') {
      setPosition(newPosition);
      localStorage.setItem('purplebuttonPosition', newPosition);
    }
    setTimeout(() => {
      navigate(path);
    }, 500); // Adjust the delay as needed to match the animation duration
  };

  return (
    <header className={styles.header}>
      <img
        src='/iconbottomheader/purplebutton.svg'
        alt='Purple Button'
        className={`${styles.purplebutton} ${
          position === 'home' || position === 'book' ? styles.moveToHome :
          position === 'search' ? styles.moveToSearch :
          position === 'sign' ? styles.moveToSign : ''
        }`}
      />
      <div className={styles.buttonWrapper}>
        <button className={styles.buttonhome} onClick={() => handleClick('home', '/homepage')}>hhh</button>
        <img 
          src={
            position === 'home' 
              ? '/iconbottomheader/homewhite.svg' 
              : position === 'book' 
              ? '/iconbottomheader/bookwhite.svg' 
              : '/iconbottomheader/homeblack.svg'
          } 
          alt={
            position === 'home' 
              ? 'Home White' 
              : position === 'book' 
              ? 'Book White' 
              : 'Home Black'
          } 
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
    </header>
  );
};

export default BottomHeader;
