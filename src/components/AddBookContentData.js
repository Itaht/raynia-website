import React, { useState, useEffect } from 'react';
import styles from '../styles/AddBookContentData.module.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import BottomHeader from './BottomHeader';

const AddBookContentData = () => {
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
    navigate('/bookcontent');
  };
  
  return (
    <div className={styles.welcome}>
      <Header />
      <div className={styles.buttonback}>
        <a href="/bookcontent" className={styles.back}>
          <img src='/back.svg' alt='Back' className={styles.iconback} />
        </a>
      </div>
      <BottomHeader />
      <form className={styles.contentContainer} onSubmit={handleSubmit}>
        <div className={styles.topic}>เพิ่มข้อมูลหนังสือ</div>
        <div className={styles.main}>
          <div className={styles.type}>[ สำหรับหนังสือเนื้อหา ]</div>
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
        <div className={styles.buttonconfirm}>
          <button type="submit" className={styles.submit} disabled={!formValid}>Submit</button>
        </div>
        <div className={styles.space}>o</div>
      </form>
    </div>
  );
};

export default AddBookContentData;
