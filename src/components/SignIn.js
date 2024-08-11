import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/SignIn.module.css';
import Header from './Header';
import BottomHeader from './BottomHeader';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting the default way
    console.log('SignIn Data:', { email, password });
    
    // Logic to handle sign-in (e.g., sending data to an API) would go here

    // Navigate to the profile page after successful sign-in
    navigate('/profile');
  };

  return (
    <div className={styles.signInContainer}>
      <Header />
      <BottomHeader />
      <div className={styles.topic}>Sign in</div>
      <div className={styles.buttonback}>
        <a href="/sign" className={styles.back}>O</a>
        <img src='/back.svg' alt='Back' className={styles.iconback}/>      
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">email/username</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.buttonconfirm}>
          <button type="submit" className={styles.confirm}>Confirm</button>
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
