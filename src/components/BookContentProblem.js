import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/BookContentProblem.module.css';
import Header from './Header';
import BottomHeader from './BottomHeader';

const BookContentProblem = () => {
    const [showTutorialPopup, setShowTutorialPopup] = useState(false);
    const [isClosing, setIsClosing] = useState(false);  // For closing animation
    const [currentTutorial, setCurrentTutorial] = useState(1);
    const [showBookPopup, setShowBookPopup] = useState(false);
    const [currentImage, setCurrentImage] = useState('book'); // State to track current book image
    const [showExplanationStylePopup, setShowExplanationStylePopup] = useState(false); // State for explanation style popup
    const navigate = useNavigate();

    const handleIconClick = () => {
        setShowTutorialPopup(true);
        setIsClosing(false);
    };

    const handleImageClick = () => {
        setShowBookPopup(true);
    };

    const closeTutorialPopup = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowTutorialPopup(false);
            setCurrentTutorial(1); // Reset to the first tutorial when closing the popup
        }, 500); // Duration of the slide-down animation
    };

    const closeBookPopup = () => {
        setShowBookPopup(false);
    };

    const nextTutorial = () => {
        setCurrentTutorial(prev => prev + 1);
    };

    const prevTutorial = () => {
        setCurrentTutorial(prev => prev - 1);
    };

    const nextImage = () => {
        setCurrentImage(prevImage => (prevImage === 'book' ? 'book1' : 'book'));
    };

    const prevImage = () => {
        setCurrentImage(prevImage => (prevImage === 'book1' ? 'book' : 'book1'));
    };

    const handleExplanationStyleClick = () => {
        setShowExplanationStylePopup(true);
    };

    const closeExplanationStylePopup = () => {
        setShowExplanationStylePopup(false);
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

    const handleAddDataClick = () => {
        navigate('/addbookcontentproblemdata');
    };

    return (
        <div className={styles.welcome}>
            <Header />
            <div className={styles.buttonback}>
                <a href="/homepage" className={styles.back}>
                    <img src='/back.svg' alt='Back' className={styles.iconback} />
                </a>
            </div>
            <BottomHeader />
            <div className={styles.icontutorial} onClick={handleIconClick}>
                <img src='/icontutorial.svg' alt='Icon Tutorial' />
            </div>
            <div className={styles.iconfilter}></div>

            {/* Tutorial Popup */}
            {showTutorialPopup && (
                <div className={styles.overlay} onClick={closeTutorialPopup}>
                    <div className={`${styles.popup} ${isClosing ? styles.close : styles.open}`} onClick={e => e.stopPropagation()}>
                        {currentTutorialData && (
                            <>
                                <img src={currentTutorialData.src} alt={currentTutorialData.alt} />
                                <button className={styles.buttonPrev} onClick={prevTutorial} disabled={currentTutorial === 1}>{"<"}</button>
                                <button className={styles.buttonNext} onClick={nextTutorial} disabled={currentTutorial === tutorials.length}>{">"}</button>
                            </>
                        )}
                        <button className={styles.buttonClose} onClick={closeTutorialPopup}></button>
                    </div>
                </div>
            )}

            {/* Book Popup */}
            {showBookPopup && (
                <div className={styles.overlay} onClick={closeBookPopup}>
                    <div className={styles.imagePopup} onClick={e => e.stopPropagation()}>
                        <button className={styles.buttonPrev1} onClick={prevImage}>{"<"}</button>
                        <img src={`/${currentImage}.jpg`} alt={currentImage} className={styles.popupImage} />
                        <button className={styles.buttonNext1} onClick={nextImage}>{">"}</button>
                        <button onClick={closeBookPopup} className={styles.buttonClose}></button>
                    </div>
                </div>
            )}
            {/* Explanation Style Popup */}
            {showExplanationStylePopup && (
                <div className={styles.overlay} onClick={closeExplanationStylePopup}>
                    <div className={styles.explanationPopup} onClick={e => e.stopPropagation()}>
                        <button onClick={closeExplanationStylePopup} className={styles.closeButton}>
                            <img src='/discard.svg' alt='Close' />
                        </button>
                        <img src='/explanationstylepopup.svg' alt='Explanation Style Popup' />
                    </div>
                </div>
            )}
            <div className={styles.details}>
            <div className={styles.description}>รายละเอียดหนังสือ</div>
            <div className={styles.contentCompleteness}>ความครบของเนื้อหา</div>
            <div className={styles.contentdetail}>ความละเอียดของเนื้อหา</div>
            <div className={styles.explanationstyle}>
                    <div className={styles.explanationstyletext}>รูปแบบการอธิบาย</div>
                    <img
                        className={styles.explanationstylepopup}
                        src='icontutorial.svg'
                        alt='Explanation Style'
                        onClick={handleExplanationStyleClick}
                    />
                </div>
            <div className={styles.varietyOfQuestions}>ความหลากหลายของโจทย์</div>
            <div className={styles.answer}>เฉลย</div>
            <div className={styles.difficultyOfQuestions}>ความยากของโจทย์</div>
            <div className={styles.easyused}>ใช้งานง่าย</div>
            <div className={styles.comfortableread}>อ่านสบายตา</div>
            </div>
            <div className={styles.move}>
                <div className={styles.bookImageContainer} onClick={handleImageClick}>
                    <img src="/book.svg" alt="book" className={styles.bookImage} />
                </div>
                <div className={styles.booktype}>หนังสือเนื้อหา - โจทย์</div>
                <div className={styles.price}>ราคา:</div>
                <div className={styles.level}>ระดับชั้น:</div>
                <div className={styles.booktag}>book tags</div>
            </div>
            <div className={styles.buttonaddbookdata} onClick={handleAddDataClick}>
                <button type="addbookcontentdata" className={styles.addbookdata}>เพิ่มข้อมูลหนังสือ</button>
                <div className={styles.plusicon}>+</div>
            </div>
        </div>
    );
};

export default BookContentProblem;