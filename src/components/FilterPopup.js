import React, { useState } from 'react';
import styles from '../styles/FilterPopup.module.css';

const FilterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [showGraphContent, setShowGraphContent] = useState(false);
  const [showGraphProblem, setShowGraphProblem] = useState(false);
  const [visibleGraphContent, setVisibleGraphContent] = useState(''); // Track the visible graph in "เนื้อหา"
  const [visibleGraphProblem, setVisibleGraphProblem] = useState(''); // Track the visible graph in "โจทย์"

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

  const handleGraphContentToggle = (event) => {
    setShowGraphContent(event.target.checked);
  };

  const handleGraphProblemToggle = (event) => {
    setShowGraphProblem(event.target.checked);
  };

  const handleConfirm = () => {
    closePopup();
  };

  const handleGraphContentClick = (graphName) => {
    setVisibleGraphContent((prev) => (prev === graphName ? '' : graphName));
  };

  const handleGraphProblemClick = (graphName) => {
    setVisibleGraphProblem((prev) => (prev === graphName ? '' : graphName));
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
        <div className={styles.textBackground}>
          <h2>Filter / <b>กรองหนังสือ:</b></h2>
        </div>
        
        <div className={styles.scrollableContent}>
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
                  <input type="checkbox" onChange={handleGraphContentToggle} /> เนื้อหา
                </label>
                <div className={`${styles.graphContent} ${showGraphContent ? styles.show : ''}`}>
                  <div><img src="/graph/graphcontent.svg" alt="Graph Content" /></div>
                  <div className={`${styles.bluegraph} ${visibleGraphContent === 'blue' ? styles.visible : visibleGraphContent ? styles.dimmed : ''}`} onClick={() => handleGraphContentClick('blue')}>
                    <img src="/graph/bluegraph.svg" alt="Blue Graph" />
                  </div>
                  <div className={`${styles.greengraph} ${visibleGraphContent === 'green' ? styles.visible : visibleGraphContent ? styles.dimmed : ''}`} onClick={() => handleGraphContentClick('green')}>
                    <img src="/graph/greengraph.svg" alt="Green Graph" />
                  </div>
                  <div className={`${styles.yellowgraph} ${visibleGraphContent === 'yellow' ? styles.visible : visibleGraphContent ? styles.dimmed : ''}`} onClick={() => handleGraphContentClick('yellow')}>
                    <img src="/graph/yellowgraph.svg" alt="Yellow Graph" />
                  </div>
                  <div className={`${styles.redgraph} ${visibleGraphContent === 'red' ? styles.visible : visibleGraphContent ? styles.dimmed : ''}`} onClick={() => handleGraphContentClick('red')}>
                    <img src="/graph/redgraph.svg" alt="Red Graph" />
                  </div>
                </div>
              </div>
              <div className={styles.column}>
                <label>
                  <input type="checkbox" onChange={handleGraphProblemToggle} /> โจทย์
                </label>
                <div className={`${styles.graphProblem} ${showGraphProblem ? styles.show : ''}`}>
                  <div><img src="/graph/graphproblem.svg" alt="Graph Problem" /></div>
                  <div className={`${styles.bluegraph} ${visibleGraphProblem === 'blue' ? styles.visible : visibleGraphProblem ? styles.dimmed : ''}`} onClick={() => handleGraphProblemClick('blue')}>
                    <img src="/graph/bluegraph.svg" alt="Blue Graph" />
                  </div>
                  <div className={`${styles.greengraph} ${visibleGraphProblem === 'green' ? styles.visible : visibleGraphProblem ? styles.dimmed : ''}`} onClick={() => handleGraphProblemClick('green')}>
                    <img src="/graph/greengraph.svg" alt="Green Graph" />
                  </div>
                  <div className={`${styles.yellowgraph} ${visibleGraphProblem === 'yellow' ? styles.visible : visibleGraphProblem ? styles.dimmed : ''}`} onClick={() => handleGraphProblemClick('yellow')}>
                    <img src="/graph/yellowgraph.svg" alt="Yellow Graph" />
                  </div>
                  <div className={`${styles.redgraph} ${visibleGraphProblem === 'red' ? styles.visible : visibleGraphProblem ? styles.dimmed : ''}`} onClick={() => handleGraphProblemClick('red')}>
                    <img src="/graph/redgraph.svg" alt="Red Graph" />
                  </div>
                </div>
              </div>
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
