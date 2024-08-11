import React, { useState } from 'react';
import styles from '../styles/AddBook.module.css';
import Header from './Header';
import BottomHeader from './BottomHeader';

const AddBook = () => {

  return (
    <div className={styles.addbookContainer}>
      <Header />
      <BottomHeader />
    </div>
  );
};

export default AddBook;
