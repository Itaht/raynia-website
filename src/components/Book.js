import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/Book.module.css';

const Book = () => {
  const { id } = useParams();
  // Fetch book details using the id
  return (
    <div className={styles.bookContainer}>
      <h2>Book Title</h2>
      <img src="path/to/book-image.png" alt="Book cover" className={styles.bookImage} />
      <p><strong>Author:</strong> Author Name</p>
      <p><strong>Description:</strong> This is a sample book description.</p>
      <p><strong>Published Date:</strong> 2023-08-03</p>
      <p><strong>ISBN:</strong> 123-456-789</p>
    </div>
  );
};

export default Book;
