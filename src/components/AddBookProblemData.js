import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
import styles from '../styles/AddBookProblemData.module.css';
import Header from './Header';
import BottomHeader from './BottomHeader';

const AddBookProblemData = () => {
  const [formData, setFormData] = useState({
    analysis: '',
    application: '',
    test: '',
    explanation: '',
    calculationDifficulty: '',
    complexity: '',
    analysisDifficulty: '',
    technicalTerms: '',
  });

  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/bookproblem');  // Use navigate instead of history.push
  };

  React.useEffect(() => {
    // Validate form (e.g., ensuring all fields are filled)
    const isValid = Object.values(formData).every((value) => value !== '');
    setFormValid(isValid);
  }, [formData]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.buttonback}>
        <a href="/bookproblem" className={styles.back}>
          <img src='/back.svg' alt='Back' className={styles.iconback} />
        </a>
      </div>
      <BottomHeader />
      <form className={styles.contentContainer} onSubmit={handleSubmit}>
        <div className={styles.topic}>เพิ่มข้อมูลหนังสือ</div>
        <div className={styles.main}>
          <div className={styles.type}>[ สำหรับหนังสือโจทย์ ]</div>
        </div>    
        <div className={styles.diversitySection}>
          <div className={styles.diversityHeading}>ความหลากหลายของโจทย์</div>
          <div className={styles.radioTopicContainer1}>
            <div className={styles.radioRow}>
              <label className={styles.radioLabel}>โจทย์วิเคราะห์:</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioOption2}>
                  <input type="radio" name="analysis" value="มี" onChange={handleChange} />
                  มี
                </label>
                <label className={styles.radioOption2}>
                  <input type="radio" name="analysis" value="ไม่มี" onChange={handleChange} />
                  ไม่มี
                </label>
              </div>
            </div>
            <div className={styles.radioRow}>
              <label className={styles.radioLabel}>โจทย์ประยุกต์:</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioOption2}>
                  <input type="radio" name="application" value="มี" onChange={handleChange} />
                  มี
                </label>
                <label className={styles.radioOption2}>
                  <input type="radio" name="application" value="ไม่มี" onChange={handleChange} />
                  ไม่มี
                </label>
              </div>
            </div>
            <div className={styles.radioRow}>
              <label className={styles.radioLabel}>โจทย์ทดสอบความรู้:</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioOption2}>
                  <input type="radio" name="test" value="มี" onChange={handleChange} />
                  มี
                </label>
                <label className={styles.radioOption2}>
                  <input type="radio" name="test" value="ไม่มี" onChange={handleChange} />
                  ไม่มี
                </label>
              </div>
            </div>
          </div>
          <div className={styles.diversityHeading}>เฉลย</div>
          <div className={styles.radioTopicContainer1}>
            <div className={styles.radioRow}>
              <div className={styles.radioOption3}>
                <input type="radio" name="explanation" value="อธิบายทุกตัวเลือก" onChange={handleChange} />
                อธิบายทุกตัวเลือก
              </div>
            </div>
            <div className={styles.radioRow}>
              <div className={styles.radioOption3}>
                <input type="radio" name="explanation" value="อธิบายแค่ตัวเลือกที่ถูก" onChange={handleChange} />
                อธิบายแค่ตัวเลือกที่ถูก
              </div>
            </div>
            <div className={styles.radioRow}>
              <div className={styles.radioOption3}>
                <input type="radio" name="explanation" value="เฉลยแค่ตัวเลือกที่ถูก" onChange={handleChange} />
                เฉลยแค่ตัวเลือกที่ถูก
              </div>
            </div>
          </div>
          <div className={styles.diversityHeading}>ความยาก</div>
          <div className={styles.radioTopicContainer}>
            <div className={styles.headingCenter}>ระดับความยากในการคิดเลข</div>
            <div className={styles.radioContainer}>
              <div className={styles.radioButton}>
                <input type="radio" id="calculationDifficulty0" name="calculationDifficulty" value="0" onChange={handleChange} />
                <label htmlFor="calculationDifficulty0">0</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="calculationDifficulty1" name="calculationDifficulty" value="1" onChange={handleChange} />
                <label htmlFor="calculationDifficulty1">1</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="calculationDifficulty2" name="calculationDifficulty" value="2" onChange={handleChange} />
                <label htmlFor="calculationDifficulty2">2</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="calculationDifficulty3" name="calculationDifficulty" value="3" onChange={handleChange} />
                <label htmlFor="calculationDifficulty3">3</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="calculationDifficulty4" name="calculationDifficulty" value="4" onChange={handleChange} />
                <label htmlFor="calculationDifficulty4">4</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="calculationDifficulty5" name="calculationDifficulty" value="5" onChange={handleChange} />
                <label htmlFor="calculationDifficulty5">5</label>
              </div>
            </div>
          </div>
          {/* ความซับซ้อนของวิธีการคิด Section */}
          <div className={styles.radioTopicContainer}>
            <div className={styles.headingCenter}>ความซับซ้อนของวิธีการคิด</div>
            <div className={styles.radioContainer}>
              <div className={styles.radioButton}>
                <input type="radio" id="complexity0" name="complexity" value="0" onChange={handleChange} />
                <label htmlFor="complexity0">0</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="complexity1" name="complexity" value="1" onChange={handleChange} />
                <label htmlFor="complexity1">1</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="complexity2" name="complexity" value="2" onChange={handleChange} />
                <label htmlFor="complexity2">2</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="complexity3" name="complexity" value="3" onChange={handleChange} />
                <label htmlFor="complexity3">3</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="complexity4" name="complexity" value="4" onChange={handleChange} />
                <label htmlFor="complexity4">4</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="complexity5" name="complexity" value="5" onChange={handleChange} />
                <label htmlFor="complexity5">5</label>
              </div>
            </div>
          </div>
          {/* ความยากในการวิเคราะห์ Section */}
          <div className={styles.radioTopicContainer}>
            <div className={styles.headingCenter}>ความยากในการวิเคราะห์</div>
            <div className={styles.radioContainer}>
              <div className={styles.radioButton}>
                <input type="radio" id="analysisDifficulty0" name="analysisDifficulty" value="0" onChange={handleChange} />
                <label htmlFor="analysisDifficulty0">0</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="analysisDifficulty1" name="analysisDifficulty" value="1" onChange={handleChange} />
                <label htmlFor="analysisDifficulty1">1</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="analysisDifficulty2" name="analysisDifficulty" value="2" onChange={handleChange} />
                <label htmlFor="analysisDifficulty2">2</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="analysisDifficulty3" name="analysisDifficulty" value="3" onChange={handleChange} />
                <label htmlFor="analysisDifficulty3">3</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="analysisDifficulty4" name="analysisDifficulty" value="4" onChange={handleChange} />
                <label htmlFor="analysisDifficulty4">4</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="analysisDifficulty5" name="analysisDifficulty" value="5" onChange={handleChange} />
                <label htmlFor="analysisDifficulty5">5</label>
              </div>
            </div>
          </div>
          {/* ปริมาณศัพท์เทคนิค Section */}
          <div className={styles.radioTopicContainer}>
            <div className={styles.headingCenter}>ปริมาณศัพท์เทคนิค</div>
            <div className={styles.radioContainer}>
              <div className={styles.radioButton}>
                <input type="radio" id="technicalTerms0" name="technicalTerms" value="0" onChange={handleChange} />
                <label htmlFor="technicalTerms0">0</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="technicalTerms1" name="technicalTerms" value="1" onChange={handleChange} />
                <label htmlFor="technicalTerms1">1</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="technicalTerms2" name="technicalTerms" value="2" onChange={handleChange} />
                <label htmlFor="technicalTerms2">2</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="technicalTerms3" name="technicalTerms" value="3" onChange={handleChange} />
                <label htmlFor="technicalTerms3">3</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="technicalTerms4" name="technicalTerms" value="4" onChange={handleChange} />
                <label htmlFor="technicalTerms4">4</label>
              </div>
              <div className={styles.radioButton}>
                <input type="radio" id="technicalTerms5" name="technicalTerms" value="5" onChange={handleChange} />
                <label htmlFor="technicalTerms5">5</label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonconfirm}>
          <button type="submit" className={styles.submit} disabled={!formValid}>Submit</button>
        </div>
        <div className={styles.space}>o</div>
      </form>
    </div>
  );
};

export default AddBookProblemData;
