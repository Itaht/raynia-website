import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import styles from '../styles/HomePage.module.css';
import Header from './Header';
import BottomHeader from './BottomHeader';
import DropdownButton from './DropdownButton';
import FilterPopUp from './FilterPopup';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentTutorial, setCurrentTutorial] = useState(1);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleIconClick = () => {
    setShowPopup(true);
    setIsClosing(false);
  };

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      setCurrentTutorial(1); // Reset to the first tutorial when closing the popup
    }, 500); // Duration of the slide-down animation
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
    { id: 20, src: '/tutorials/tutorial20.svg', alt: 'Tutorial 20' }
  ];

  const currentTutorialData = tutorials.find(tutorial => tutorial.id === currentTutorial);

  // Handle the click event on the "+" button
  const handleAddBookClick = () => {
    navigate('/addbook'); // Navigate to the /addbook page
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      <BottomHeader />
      <div className={styles.Container}>
        <div className={styles.Details}>Explore books</div>
        <div className={styles.icontutorial} onClick={handleIconClick}>
          <img src='/icontutorial.svg' alt='Icon Tutorial' />
        </div>
        <div className={styles.iconfilter}></div>
        <div className={styles.bg}></div>
        <div className={styles.func}>
          <DropdownButton />
          <FilterPopUp />
        </div>
        {showPopup && (
          <div className={styles.overlay} onClick={closePopup}>
            <div className={`${styles.popup} ${isClosing ? styles.close : styles.open}`} onClick={e => e.stopPropagation()}>
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
        {/* Add the "+" button */}
        <div className={styles.addButton} onClick={handleAddBookClick}>
          <div className={styles.vertical}></div>
          <div className={styles.horizontal}></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
