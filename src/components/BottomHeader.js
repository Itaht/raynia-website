import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/BottomHeader.module.css';

const BottomHeader = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState(() => {
    // Get the last position from localStorage or default to 'home'
    return localStorage.getItem('purpleButtonPosition') || 'home';
  });
  const purpleButtonRef = useRef(null);
  const buttonRefs = {
    home: useRef(null),
    search: useRef(null),
    sign: useRef(null),
  };

  const movePurpleButton = (newPosition) => {
    const targetButton = buttonRefs[newPosition].current;
    const purpleButton = purpleButtonRef.current;

    if (targetButton && purpleButton) {
      const targetButtonRect = targetButton.getBoundingClientRect();
      const headerRect = purpleButton.parentElement.getBoundingClientRect();
      const newTranslateX = targetButtonRect.left - headerRect.left;

      purpleButton.style.transform = `translateX(${newTranslateX}px)`;
    }
  };

  const handleClick = (newPosition, path) => {
    // Only update if the new position is different from the current one
    if (newPosition !== position) {
      movePurpleButton(newPosition);
      setPosition(newPosition);
      localStorage.setItem('purpleButtonPosition', newPosition);

      // After the button has moved, navigate to the new page
      setTimeout(() => {
        navigate(path);
      }, 500); // Adjust the timeout to match the transition duration (0.5s)
    }
  };

  useEffect(() => {
    // On initial load, just move the purple button to the last known position
    movePurpleButton(position);

    // Adjust position on window resize
    const handleResize = () => movePurpleButton(position);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [position]);

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
              : '/iconbottomheader/homeblack.svg'
          } 
          alt='Home Icon' 
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
          alt='Search Icon' 
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
          alt='Sign Icon' 
          className={styles.signblack} 
        />
      </div>
    </header>
  );
};

export default BottomHeader;