import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Raynia</div>
      <nav>
        <ul className={styles.navList}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sign-in">Sign In</Link></li>
          <li><Link to="/sign-up">Sign Up</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
