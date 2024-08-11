import React, { useState } from 'react';
import styles from '../styles/SignUp.module.css';
import Header from './Header';
import BottomHeader from './BottomHeader';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordMatchError, setPasswordMatchError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleConfirmClick = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError('Confirm password is not match as password');
    } else {
      setPasswordMatchError('');

      // Log the form data to the console
      console.log('Sign Up Form Data:', formData);

      // Redirect to profile page
      window.location.href = '/profile';
    }
  };

  return (
    <div className={styles.signInContainer}>
      <Header />
      <BottomHeader />
      <div className={styles.topic}>Sign up</div>
      <div className={styles.buttonback}>
        <a href="/sign" className={styles.back}>O</a>
        <img src='/back.svg' alt='Back' className={styles.iconback}/>      
      </div>
      <form onSubmit={handleConfirmClick}>
        <div className={styles.formGroup}>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {passwordMatchError && (
            <span className={styles.errorText}>{passwordMatchError}</span>
          )}
        </div>
        <div className={styles.buttonconfirm}>
          <button
            type="submit"
            className={styles.confirm}
            disabled={formData.password !== formData.confirmPassword}
          >
            Confirm
          </button>
        </div>
      </form>
      <div className={styles.buttonsignup}>
        <div className={styles.ask}>Already have an account? </div>
        <a href="/sign-in" className={styles.signup}>sign in</a>
      </div>
      {passwordMatchError && (
        <div className={styles.centeredError}>
          Confirm password is not match as password
        </div>
      )}
    </div>
  );
};

export default SignUp;
