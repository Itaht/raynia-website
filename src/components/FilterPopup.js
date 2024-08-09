import React, { useState } from 'react';
import styles from '../styles/FilterPopup.module.css';

const FilterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('');

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleConfirm = () => {
    closePopup(); // Close the popup when Confirm is clicked
  };

  return (
    <div className={styles.container}>
      <img
        src='/filtericon.svg'
        alt='Filter Icon'
        className={styles.filterIcon}
        onClick={togglePopup}
      />
      {isOpen && <div className={styles.overlay} onClick={closePopup}></div>}
      <div className={`${styles.popup} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={closePopup}>x</button>
        <h2>Filter / <b>กรองหนังสือ:</b></h2>

        <div className={styles.subjectSection}>
          <h3>วิชา: <span className={styles.redText}>***(ปิดปรับปรุง)</span></h3>
          <div className={styles.checkboxContainer}>
            <div className={styles.column}>
              <label>
                <input type="checkbox" /> คณิตศาสตร์
              </label>
            </div>
            <div className={styles.column}>
              <label>
                <input type="checkbox" /> ฟิสิกส์
              </label>
            </div>
            <div className={styles.column}>
              <label>
                <input type="checkbox" /> เคมี
              </label>
            </div>
            <div className={styles.column}>
              <label>
                <input type="checkbox" /> ชีววิทยา
              </label>
            </div>
            <div className={`${styles.moreOptions} ${showMore ? styles.show : ''}`}>
              <div className={styles.column}>
                <label>
                  <input type="checkbox" /> ดาราศาสตร์
                </label>
              </div>
              <div className={styles.column}>
                <label>
                  <input type="checkbox" /> ธรณีวิทยา
                </label>
              </div>
              <div className={styles.column}>
                <label>
                  <input type="checkbox" /> ภาษาไทย
                </label>
              </div>
              <div className={styles.column}>
                <label>
                  <input type="checkbox" /> ภาษาอังกฤษ
                </label>
              </div>
              <div className={styles.column}>
                <label>
                  <input type="checkbox" /> ภาษาอื่นๆ
                </label>
              </div>
              <div className={styles.column}>
                <label>
                  <input type="checkbox" /> สังคมศึกษา
                </label>
              </div>
              <div className={styles.column}>
                <label>
                  <input type="checkbox" /> ประวัติศาสตร์
                </label>
              </div>
              <div className={styles.column}>
                <label>
                  <input type="checkbox" /> ศาสนา
                </label>
              </div>
              <div className={styles.column}>
                <label>
                  <input type="checkbox" /> กฎหมาย
                </label>
              </div>
            </div>
            <button className={styles.showMoreButton} onClick={toggleShowMore}>
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>

        <div className={styles.levelSection}>
          <h3>ระดับชั้น:</h3>
          <div className={styles.radioGrid}>
            <div className={styles.radioOption}>
              <label>
                <input
                  type="radio"
                  name="level"
                  value="level1"
                  checked={selectedLevel === 'level1'}
                  onChange={handleLevelChange}
                />
                ม.1
              </label>
            </div>
            <div className={styles.radioOption}>
              <label>
                <input
                  type="radio"
                  name="level"
                  value="level2"
                  checked={selectedLevel === 'level2'}
                  onChange={handleLevelChange}
                />
                ม.2
              </label>
            </div>
            <div className={styles.radioOption}>
              <label>
                <input
                  type="radio"
                  name="level"
                  value="level3"
                  checked={selectedLevel === 'level3'}
                  onChange={handleLevelChange}
                />
                ม.3
              </label>
            </div>
            <div className={styles.radioOption}>
              <label>
                <input
                  type="radio"
                  name="level"
                  value="level4"
                  checked={selectedLevel === 'level4'}
                  onChange={handleLevelChange}
                />
                ม.4
              </label>
            </div>
            <div className={styles.radioOption}>
              <label>
                <input
                  type="radio"
                  name="level"
                  value="level5"
                  checked={selectedLevel === 'level5'}
                  onChange={handleLevelChange}
                />
                ม.5
              </label>
            </div>
            <div className={styles.radioOption}>
              <label>
                <input
                  type="radio"
                  name="level"
                  value="level6"
                  checked={selectedLevel === 'level6'}
                  onChange={handleLevelChange}
                />
                ม.6
              </label>
            </div>
          </div>
        </div>

        <div className={styles.typeSection}>
          <h3>ประเภทหนังสือ: <span className={styles.redText}>***(ปิดปรับปรุง)</span></h3>
          <div className={styles.checkboxContainer}>
            <div className={styles.column}>
              <label>
                <input type="checkbox" /> เนื้อหา
              </label>
            </div>
            <div className={styles.column}>
              <label>
                <input type="checkbox" /> โจทย์
              </label>
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.clearButton}>Clear</button>
          <button className={styles.confirmButton} onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
