import React from 'react';
import styles from '../styles/Profile.module.css';
import Header from '../components/Header';
import BottomHeader from './BottomHeader';

const Profile = () => {
  return (
    <div className={styles.Profile}>
      <Header />
      <BottomHeader />
      <div className={styles.buttonback}>
        <a href="/sign" className={styles.back}>O0</a>
        <img src='/back.svg' alt='Back' className={styles.iconback}/>      
      </div>
      <div className={styles.template}>
        <img src='/profiletemplate.svg' alt='Profile Template' className={styles.profiletemplate} />
        <div className={styles.describe}>
          <div className={styles.name}>Name: </div>
          <div className={styles.username}>Username: </div>
          <div className={styles.status}>Status: </div>
        </div>
        <div className={styles.buttonconfirm}>
          <a href="/" className={styles.confirm}>ส่งคำขอเป็นสำนักพิมพ์</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
