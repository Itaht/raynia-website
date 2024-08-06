import React from 'react';
import styles from '../styles/SignIn.module.css';

const SignIn = () => {
  return (
    <div className={styles.signInContainer}>
      <header></header>
      <h2>Sign In</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className={styles.submitButton}>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
