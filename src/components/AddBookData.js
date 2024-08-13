import React from 'react';
import styles from '../styles/AddBookData.module.css';
import Header from './Header';
import BottomHeader from './BottomHeader';

const AddBookData = () => {
  return (
    <div className={styles.welcome}>
      <Header />
      <div className={styles.buttonback}>
        <a href="/book" className={styles.back}>
          <img src='/back.svg' alt='Back' className={styles.iconback} />
        </a>
      </div>
      <BottomHeader />
      <div className={styles.contentContainer}>
      <div className={styles.topic}>เพิ่มข้อมูลหนังสือ</div>
    </div>
    </div>
  );
};

export default AddBookData;
