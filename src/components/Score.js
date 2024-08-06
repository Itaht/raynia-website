import React from 'react';
import styles from '../styles/Score.module.css';

const Score = () => {
  return (
    <div className={styles.scoreContainer}>
      <h2>Book Scores</h2>
      <div className={styles.scoreList}>
        <p><strong>Book Title:</strong> 4.5/5</p>
        <p><strong>Book Title:</strong> 3.8/5</p>
        {/* Add more scores here */}
      </div>
    </div>
  );
};

export default Score;
