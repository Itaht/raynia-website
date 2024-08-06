import React from 'react';
import styles from '../styles/SignUp.module.css';

const SignUp = () => {
  return (
    <div className={styles.signUpContainer}>
      <h2>Sign Up</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className={styles.submitButton}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
