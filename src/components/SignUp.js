import React from 'react';
import styles from '../styles/SignUp.module.css';
import Header from './Header';
import BottomHeader from './BottomHeader';

const SignUp = () => {
  return (
    <div className={styles.signInContainer}>
      <Header />
      <BottomHeader />
      <div className={styles.topic}>Sign up</div>
      <div className={styles.buttonback}>
        <a href="/sign" className={styles.back}>O</a>
        <img src='/back.svg' alt='Back' className={styles.iconback}/>      
      </div>
      <form>
      <div className={styles.formGroup}>
          <label htmlFor="email">email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="username">username</label>
          <input type="username" id="username" name="username" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">name</label>
          <input type="name" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirm-password">confirm password</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>
        <div className={styles.buttonconfirm}>
          <a href="/profile" className={styles.confirm}>Confirm</a>
        </div>
      </form>
      <div className={styles.buttonsignup}>
        <div className={styles.ask}>Already have an account? </div>
        <a href="/sign-in" className={styles.signup}>sign in</a>
      </div>
    </div>
  );
};

export default SignUp;
