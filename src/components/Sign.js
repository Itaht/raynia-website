import React from 'react';
import styles from '../styles/Sign.module.css';
import Header from '../components/Header';
import BottomHeader from './BottomHeader';

const Sign = () => {
  return (
    <div className={styles.welcome}>
      <Header />
      <BottomHeader />
        <div className={styles.buttonWrapper}>
          <a href="/sign-in" className={styles.buttonin}>Sign in</a>
        </div>
        <div className={styles.buttonWrapper}>
          <a href="/sign-up" className={styles.buttonup}>Sign up</a>
        </div>
    </div>
  );
};

export default Sign;
