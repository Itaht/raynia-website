import React, { useState } from 'react';
import styles from '../styles/HomePage.module.css';
import Header from '../components/Header';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentTutorial, setCurrentTutorial] = useState(1);

  const handleIconClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setCurrentTutorial(1); // Reset to the first tutorial when closing the popup
  };

  const nextTutorial = () => {
    setCurrentTutorial(prev => prev + 1);
  };

  const prevTutorial = () => {
    setCurrentTutorial(prev => prev - 1);
  };

  const tutorials = [
    { id: 1, src: '/tutorials/tutorial1.svg', alt: 'Tutorial 1' },
    { id: 2, src: '/tutorials/tutorial2.svg', alt: 'Tutorial 2' },
    { id: 3, src: '/tutorials/tutorial3.svg', alt: 'Tutorial 3' },
    { id: 4, src: '/tutorials/tutorial4.svg', alt: 'Tutorial 4' },
    { id: 5, src: '/tutorials/tutorial5.svg', alt: 'Tutorial 5' },
    { id: 6, src: '/tutorials/tutorial6.svg', alt: 'Tutorial 6' },
    { id: 7, src: '/tutorials/tutorial7.svg', alt: 'Tutorial 7' },
    { id: 8, src: '/tutorials/tutorial8.svg', alt: 'Tutorial 8' },
    { id: 9, src: '/tutorials/tutorial9.svg', alt: 'Tutorial 9' },
    { id: 10, src: '/tutorials/tutorial10.svg', alt: 'Tutorial 10' },
    { id: 11, src: '/tutorials/tutorial11.svg', alt: 'Tutorial 11' },
    { id: 12, src: '/tutorials/tutorial12.svg', alt: 'Tutorial 12' },
    { id: 13, src: '/tutorials/tutorial13.svg', alt: 'Tutorial 13' },
    { id: 14, src: '/tutorials/tutorial14.svg', alt: 'Tutorial 14' },
    { id: 15, src: '/tutorials/tutorial15.svg', alt: 'Tutorial 15' },
    { id: 16, src: '/tutorials/tutorial16.svg', alt: 'Tutorial 16' },
    { id: 17, src: '/tutorials/tutorial17.svg', alt: 'Tutorial 17' },
    { id: 18, src: '/tutorials/tutorial18.svg', alt: 'Tutorial 18' },
    { id: 19, src: '/tutorials/tutorial19.svg', alt: 'Tutorial 19' },
    { id: 20, src: '/tutorials/tutorial20.svg', alt: 'Tutorial 20' },
    // Add more tutorials as needed
  ];

  const currentTutorialData = tutorials.find(tutorial => tutorial.id === currentTutorial);

  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.profileContainer}>
        <div className={styles.profileDetails}>Explore books</div>
        <div className={styles.icontutorial} onClick={handleIconClick}>
          <img src='/icontutorial.svg' alt='Icon Tutorial' />
        </div>
        {showPopup && (
          <div className={styles.overlay} onClick={closePopup}>
            <div className={styles.popup} onClick={e => e.stopPropagation()}>
              {currentTutorialData && (
                <>
                  <img src={currentTutorialData.src} alt={currentTutorialData.alt} />
                  <button className={styles.buttonPrev} onClick={prevTutorial} disabled={currentTutorial === 1}></button>
                  <button className={styles.buttonNext} onClick={nextTutorial} disabled={currentTutorial === tutorials.length}></button>
                </>
              )}
              <button className={styles.buttonClose} onClick={closePopup}></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
