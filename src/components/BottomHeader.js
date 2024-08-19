import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../styles/BottomHeader.module.css';

const BottomHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [position, setPosition] = useState('home'); // Default to 'home'
  const [extraOffset, setExtraOffset] = useState(0); // Initialize extra offset
  const purpleButtonRef = useRef(null);
  const buttonRefs = {
    home: useRef(null),
    search: useRef(null),
    sign: useRef(null),
  };

  useEffect(() => {
    const updatePositionBasedOnPath = () => {
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
        case '/addbookdata': 
          setPosition('book');
          break;
        case '/homepage':
        default:
          setPosition('home');
          break;
      }
    };

    updatePositionBasedOnPath();
  }, [location.pathname]);

  useEffect(() => {
    const updatePurpleButtonPosition = () => {
      const button = buttonRefs[position].current;
      const purpleButton = purpleButtonRef.current;
      if (button && purpleButton) {
        const buttonRect = button.getBoundingClientRect();
        const headerRect = purpleButton.parentElement.getBoundingClientRect();
        // Position relative to header with extra offset
        purpleButton.style.transform = `translateX(${buttonRect.left - headerRect.left + extraOffset}px)`;
      }
    };

    updatePurpleButtonPosition();

    window.addEventListener('resize', updatePurpleButtonPosition);
    return () => {
      window.removeEventListener('resize', updatePurpleButtonPosition);
    };
  }, [position, extraOffset]);

  const handleClick = (newPosition, path) => {
    if (newPosition !== position) {
      setExtraOffset(prevOffset => prevOffset + 10); // Increment offset by 10px each time a new button is clicked
      setPosition(newPosition);
    }

    // Ensure the navigation happens immediately after the position is set
    navigate(path);
  };

  return (
    <header className={styles.header}>
      <img
        src='/iconbottomheader/purplebutton.svg'
        alt='Purple Button'
        className={styles.purplebutton}
        ref={purpleButtonRef}
      />
      <div className={styles.buttonWrapper}>
        <button 
          className={styles.buttonhome} 
          onClick={() => handleClick('home', '/homepage')}
          ref={buttonRefs.home}
        >
          hhh
        </button>
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
        <button 
          className={styles.buttonsearch} 
          onClick={() => handleClick('search', '/search')}
          ref={buttonRefs.search}
        >
          sss
        </button>
        <img 
          src={position === 'search' ? '/iconbottomheader/searchwhite.svg' : '/iconbottomheader/searchblack.svg'} 
          alt={position === 'search' ? 'Search White' : 'Search Black'} 
          className={styles.searchblack} 
        />
      </div>
      <div className={styles.buttonWrapper2}>
        <button 
          className={styles.buttonsign} 
          onClick={() => handleClick('sign', '/sign')}
          ref={buttonRefs.sign}
        >
          sign
        </button>
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
