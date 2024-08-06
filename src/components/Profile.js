import React from 'react';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <h2>User Profile</h2>
      <div className={styles.profileDetails}>
        <p><strong>Username:</strong> JohnDoe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
      </div>
    </div>
  );
};

export default Profile;
