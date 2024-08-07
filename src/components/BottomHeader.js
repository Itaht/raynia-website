import React from 'react';
import styles from '../styles/BottomHeader.module.css';

const BottomHeader = () => {
  return (
    <header className={styles.header}>
        <div className={styles.buttonWrapper}>
          <a href="/homepage" className={styles.buttonhome}>hhh</a>
          <img src='/homewhite.svg' alt='Home White' className={styles.homewhite}/>
          <img src='/purplebutton.svg' alt='Purple Button' className={styles.purplebutton}/>
        </div>
        <div className={styles.buttonWrapper1}>
          <a href="/search" className={styles.buttonsearch}>sss</a>
          <img src='/searchblack.svg' alt='Search Black' className={styles.searchblack}/>
        </div>
        <div className={styles.buttonWrapper2}>
          <a href="/sign" className={styles.buttonsign}>sign</a> 
          <img src='/signblack.svg' alt='Sign Black' className={styles.signblack}/>
        </div>
    </header>
  );
};

export default BottomHeader;
