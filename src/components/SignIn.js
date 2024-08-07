import React from 'react';
import styles from '../styles/SignIn.module.css';
import Header from './Header';
import BottomHeader from './BottomHeader';

const SignIn = () => {
  return (
    <div className={styles.signInContainer}>
      <Header />
      <BottomHeader />
      <div className={styles.topic}>Sign in</div>
      <div className={styles.buttonback}>
        <a href="/homepage" className={styles.back}>O</a>
        <img src='' alt='Back' className={styles.iconback}/>      
      </div>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="email">email/username</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className={styles.buttonconfirm}>
          <a href="/homepage" className={styles.confirm}>Confirm</a>
        </div>
      </form>
      <div className={styles.buttonsignup}>
        <div className={styles.ask}>New to Raynia? </div>
        <a href="/sign-up" className={styles.signup}>Create an account</a>
      </div>
    </div>
  );
};

export default SignIn;
