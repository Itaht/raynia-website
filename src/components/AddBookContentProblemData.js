import React, { useState, useEffect } from 'react';
import styles from '../styles/AddBookContentProblemData.module.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import BottomHeader from './BottomHeader';

const AddBookContentProblemData = () => {
  const [formValues, setFormValues] = useState({
    contentLength: '',
    techExplain: '',
    overExplain: '',
    caseStudy: '',
    textPercentage: '',
    diagramPercentage: '',
    picturePercentage: ''
  });

  const [formValid, setFormValid] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    validateForm();
  }, [formValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;

    if (!formValues.contentLength) {
      valid = false;
    }
    if (!formValues.techExplain) {
      valid = false;
    }
    if (!formValues.overExplain) {
      valid = false;
    }
    if (!formValues.caseStudy) {
      valid = false;
    }
    if (!formValues.textPercentage || !formValues.diagramPercentage || !formValues.picturePercentage) {
      valid = false;
    }
    if (parseInt(formValues.textPercentage || 0) + parseInt(formValues.diagramPercentage || 0) + parseInt(formValues.picturePercentage || 0) !== 100) {
      valid = false;
    }

    setFormValid(valid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formValid) {
      alert('Please complete all fields correctly.');
      return;
    }

    const formData = {
      ...formValues,
    };

    console.log('Form Data:', formData);
    navigate('/bookcontentproblem');
  };
  
  return (
    <div className={styles.welcome}>
      <Header />
      <div className={styles.buttonback}>
        <a href="/bookcontentproblem" className={styles.back}>
          <img src='/back.svg' alt='Back' className={styles.iconback} />
        </a>
      </div>
      <BottomHeader />
      <form className={styles.contentContainer} onSubmit={handleSubmit}>
        <div className={styles.topic}>เพิ่มข้อมูลหนังสือ</div>
        <div className={styles.main}>
          <div className={styles.type}>[ สำหรับหนังสือเนื้อหา - โจทย์ ]</div>
        </div>
        <div className={styles.radioTopicContainer}>
          <div className={styles.headingCenter}>ความยาวต่อหัวข้อ</div>
          <div className={styles.radioContainer}>
            {['0', '1', '2', '3', '4', '5'].map(value => (
              <div className={styles.radioButton} key={value}>
                <input 
                  type="radio" 
                  id={`length${value}`} 
                  name="contentLength" 
                  value={value} 
                  onChange={handleChange}
                />
                <label htmlFor={`length${value}`}>{value}</label>
              </div>
              ))}
            {errors.contentLength && <span className={styles.error}>{errors.contentLength}</span>}
          </div>
        </div>

        {/* อธิบายศัพท์เทคนิค Section */}
        <div className={styles.radioTopicContainer}>
          <div className={styles.headingCenter}>อธิบายศัพท์เทคนิค</div>
          <div className={styles.radioContainer}>
            {['0', '1', '2', '3', '4', '5'].map(value => (
              <div className={styles.radioButton} key={value}>
                <input 
                  type="radio" 
                  id={`techExplain${value}`} 
                  name="techExplain" 
                  value={value} 
                  onChange={handleChange}
                />
                <label htmlFor={`techExplain${value}`}>{value}</label>
              </div>
            ))}
            {errors.techExplain && <span className={styles.error}>{errors.techExplain}</span>}
          </div>
        </div>

        {/* อธิบายเกินระดับที่เขียนไว้ Section */}
        <div className={styles.radioTopicContainer}>
          <div className={styles.headingCenter}>อธิบายเกินระดับที่เขียนไว้</div>
          <div className={styles.radioContainer}>
            {['0', '1', '2', '3', '4', '5'].map(value => (
              <div className={styles.radioButton} key={value}>
                <input 
                  type="radio" 
                  id={`overExplain${value}`} 
                  name="overExplain" 
                  value={value} 
                  onChange={handleChange}
                />
                <label htmlFor={`overExplain${value}`}>{value}</label>
              </div>
            ))}
            {errors.overExplain && <span className={styles.error}>{errors.overExplain}</span>}
          </div>
        </div>

        {/* ยกตัวอย่างกรณีศึกษา Section */}
        <div className={styles.radioTopicContainer}>
          <div className={styles.headingCenter}>ยกตัวอย่างกรณีศึกษา</div>
          <div className={styles.radioContainer}>
            {['0', '1', '2', '3', '4', '5'].map(value => (
              <div className={styles.radioButton} key={value}>
                <input 
                  type="radio" 
                  id={`caseStudy${value}`} 
                  name="caseStudy" 
                  value={value} 
                  onChange={handleChange}
                />
                <label htmlFor={`caseStudy${value}`}>{value}</label>
              </div>
            ))}
            {errors.caseStudy && <span className={styles.error}>{errors.caseStudy}</span>}
          </div>
        </div>

        {/* รูปแบบการอธิบาย Section */}
        <div className={styles.formGroup}>
          <div className={styles.centerContainer}>
            <div className={styles.subHeading}>รูปแบบการอธิบาย</div>
            <div className={styles.smallText}>ผลรวมของ 3 หัวข้อต้องเท่ากับ 100%</div>
          </div>
        </div>
        <div className={styles.explanationFormGroup}>
          <div className={styles.formGroup10}>
            <label htmlFor="textPercentage">Text:</label>
            <input 
              type="text" 
              id="textPercentage" 
              name="textPercentage" 
              value={formValues.textPercentage} 
              onChange={handleChange} 
            />
            <div className={styles.percentLabel}>%</div>
          </div>
          <div className={styles.formGroup10}>
            <label htmlFor="diagramPercentage">Diagram:</label>
            <input 
              type="text" 
              id="diagramPercentage" 
              name="diagramPercentage" 
              value={formValues.diagramPercentage} 
              onChange={handleChange} 
            />
            <div className={styles.percentLabel}>%</div>
          </div>
          <div className={styles.formGroup10}>
            <label htmlFor="picturePercentage">Picture:</label>
            <input 
              type="text" 
              id="picturePercentage" 
              name="picturePercentage" 
              value={formValues.picturePercentage} 
              onChange={handleChange} 
            />
            <div className={styles.percentLabel}>%</div>
          </div>
          {errors.explanation && <span className={styles.error}>{errors.explanation}</span>}
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

export default AddBookContentProblemData;
