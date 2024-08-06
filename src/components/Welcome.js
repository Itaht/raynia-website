import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Welcome.module.css';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <motion.div
        initial={{ y: '200%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
        className={styles.name}
      >
        Raynia
      </motion.div>
      <motion.div
        initial={{ y: '200%', opacity: 1 }}
        animate={{ y: '0%', opacity: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
        className={styles.namewhite}
      >
        Raynia
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
        className={styles.buttons}
      >
        <div className={styles.buttonWrapper}>
          <a href="/sign-in" className={styles.buttonin}>Sign in</a>
        </div>
        <div className={styles.buttonWrapper}>
          <a href="/sign-up" className={styles.buttonup}>Sign up</a>
        </div>
        <div className={styles.buttonWrapper}>
          <a href="/homepage" className={styles.buttonguest}>Continue as guest</a>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 4 }}
        transition={{ duration: 3, ease: 'easeOut', delay: 1.5 }}
        className={styles.welcomemain}
      >
        <img className={styles.welcomedrop} src='/welcomedrop.svg' alt='Welcome Drop' />
      </motion.div>
    </div>
  );
};

export default Welcome;
