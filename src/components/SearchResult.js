import React from 'react';
import styles from '../styles/SearchResult.module.css';

const SearchResult = () => {
  // Example search result data
  const results = [
    {
      id: 1,
      title: 'Book Title 1',
      author: 'Author 1',
      description: 'Description for book 1',
    },
    {
      id: 2,
      title: 'Book Title 2',
      author: 'Author 2',
      description: 'Description for book 2',
    },
    // Add more results as needed
  ];

  return (
    <div className={styles.searchResultContainer}>
      <h2>Search Results</h2>
      <div className={styles.results}>
        {results.map((result) => (
          <div key={result.id} className={styles.resultCard}>
            <h3>{result.title}</h3>
            <p><strong>Author:</strong> {result.author}</p>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
