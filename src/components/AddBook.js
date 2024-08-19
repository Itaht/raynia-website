import React, { useState, useEffect } from 'react';
import styles from '../styles/AddBook.module.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import BottomHeader from './BottomHeader';

const AddBook = () => {
  const [fileName, setFileName] = useState('Upload File');
  const [selectedType, setSelectedType] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [formValues, setFormValues] = useState({
    bookName: '',
    author: '',
    price: '',
    subject: '',
    minLevel: '',
    minLevel2: '',
    maxLevel: '',
    maxLevel2: '',
    publisher: '',
    weight: '',
    thick: '',
    coverGram: '',
    paperGram: '',
    fontSize: '',
    bookDetails: '',
    contentCompleteness: '',
    textPercentage: '',
    diagramPercentage: '',
    picturePercentage: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    validateForm();
  }, [formValues]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleCheckboxChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    
    // Log the values for debugging
    console.log('Form Values:', formValues);
    console.log('Errors:', newErrors);
  
    setErrors(newErrors);
    setFormValid(Object.keys(newErrors).length === 0);
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm(); // Revalidate the form on submit
    if (!formValid) {
      alert('Please complete all fields correctly.');
      return;
    }
  
    const formData = {
      ...formValues,
      fileName: fileName,
      bookType: selectedType,
      binding: Array.from(event.target.binding).filter(input => input.checked).map(input => input.value),
    };
  
    console.log('Form Data:', formData);
    navigate('/homepage');
  };
  

  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.buttonback}>
        <a href="/homepage" className={styles.back}>
          <img src='/back.svg' alt='Back' className={styles.iconback} />
        </a>
      </div>
      <BottomHeader />
      <div className={styles.contentContainer}>
        <div className={styles.topic}>เพิ่มหนังสือ</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.bookForm}>
            <div className={styles.bookBox}>
              <div className={styles.formGroup}>
                <label htmlFor="bookName">ชื่อหนังสือ:</label>
                <input
  type="text"
  id="bookName"
  name="bookName"
  value={formValues.bookName}
  onChange={handleInputChange}
/>

              </div>
              <div className={styles.formGroup}>
                <label htmlFor="author">ชื่อผู้แต่ง:</label>
                <input
  type="text"
  id="author"
  name="author"
  value={formValues.author}
  onChange={handleInputChange}
/>

              </div>
              <div className={styles.formGroup}>
                <label htmlFor="price">ราคา:</label>
                <input
  type="number"
  id="price"
  name="price"
  value={formValues.price}
  min="0"
  step="0.01"
  onChange={handleInputChange}
  onKeyDown={(e) => {
    if (!/[\d.-]/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  }}
/>

              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">วิชา:</label>
                <input
  type="text"
  id="subject"
  name="subject"
  value={formValues.subject}
  onChange={handleInputChange}
/>

              </div>
              <div className={styles.formGroup}>
                <label>ช่วงระดับชั้น:</label>
              </div>
              <div className={styles.formGroup1}>
                <label htmlFor="minLevel">min:</label>
                <input
  type="text"
  id="minLevel"
  name="minLevel"
  value={formValues.minLevel}
  placeholder="ม.1 ถึง ม.6"
  pattern="ม.[1-6]"
  className={styles.smallInput}
  onChange={handleInputChange}
/>

<input
  type="text"
  id="minLevel2"
  name="minLevel2"
  value={formValues.minLevel2}
  placeholder="เทอม 1 - 2"
  pattern="เทอม [1-2]"
  className={styles.smallInput}
  onChange={handleInputChange}
/>

              </div>
              <div className={styles.formGroup1}>
                <label htmlFor="maxLevel">max:</label>
                <input
  type="text"
  id="maxLevel"
  name="maxLevel"
  value={formValues.maxLevel}
  placeholder="ม.1 ถึง ม.6"
  pattern="ม.[1-6]"
  className={styles.smallInput}
  onChange={handleInputChange}
/>

<input
  type="text"
  id="maxLevel2"
  name="maxLevel2"
  value={formValues.maxLevel2}
  placeholder="เทอม 1 - 2"
  pattern="เทอม [1-2]"
  className={styles.smallInput}
  onChange={handleInputChange}
/>

              </div>
              <div className={styles.formGroup2}>
                <label htmlFor="bookCover">ปกติหนังสือ:</label>
                <label className={styles.uploadButton}>
                  {fileName}
                  <input type="file" onChange={handleFileUpload} style={{ display: 'none' }} />
                </label>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="publisher">ชื่อสำนักพิมพ์:</label>
                <input
  type="text"
  id="publisher"
  name="publisher"
  value={formValues.publisher}
  onChange={handleInputChange}
/>

              </div>
              <div className={styles.levelSection}>
                <div className={styles.type}>ประเภทหนังสือ:</div>
                <div className={styles.radioGrid}>
                  <div className={styles.radioOption1}>
                    <label>
                      <input
                        type="radio"
                        name="bookType"
                        value="หนังสือเนื้อหา"
                        checked={selectedType === 'หนังสือเนื้อหา'}
                        onChange={handleCheckboxChange}
                      />
                      หนังสือเนื้อหา
                    </label>
                  </div>
                  <div className={styles.radioOption1}>
                    <label>
                      <input
                        type="radio"
                        name="bookType"
                        value="หนังสือโจทย์"
                        checked={selectedType === 'หนังสือโจทย์'}
                        onChange={handleCheckboxChange}
                      />
                      หนังสือโจทย์
                    </label>
                  </div>
                  <div className={styles.radioOption1}>
                    <label>
                      <input
                        type="radio"
                        name="bookType"
                        value="หนังสือเนื้อหา - โจทย์"
                        checked={selectedType === 'หนังสือเนื้อหา - โจทย์'}
                        onChange={handleCheckboxChange}
                      />
                      หนังสือเนื้อหา - โจทย์
                    </label>
                  </div>
                </div>

                {selectedType === 'หนังสือเนื้อหา' && (
                  <div>
                    <div className={styles.contentInfo}>กรอกข้อมูลหนังสือเนื้อหา</div>
                    <div className={styles.formGroup9}>
                      <label htmlFor="contentCompleteness">ความครบของเนื้อหา:</label>
                      <input
  type="text"
  id="contentCompleteness"
  name="contentCompleteness"
  value={formValues.contentCompleteness}
  placeholder="กรอกเลข 0 - 10"
  onChange={handleInputChange}
/>

                    </div>
                  {/* ความยาวต่อหัวข้อ Section */}
                  <div className={styles.radioTopicContainer}>
                    <div className={styles.headingCenter}>ความยาวต่อหัวข้อ</div>
                    <div className={styles.radioContainer}>
                      <div className={styles.radioButton}>
                        <input type="radio" id="length0" name="contentLength" value="0" />
                        <label htmlFor="length0">0</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="length1" name="contentLength" value="1" />
                        <label htmlFor="length1">1</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="length2" name="contentLength" value="2" />
                        <label htmlFor="length2">2</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="length3" name="contentLength" value="3" />
                        <label htmlFor="length3">3</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="length4" name="contentLength" value="4" />
                        <label htmlFor="length4">4</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="length5" name="contentLength" value="5" />
                        <label htmlFor="length5">5</label>
                      </div>
                    </div>
                  </div>

                  {/* อธิบายศัพท์เทคนิค Section */}
                  <div className={styles.radioTopicContainer}>
                    <div className={styles.headingCenter}>อธิบายศัพท์เทคนิค</div>
                    <div className={styles.radioContainer}>
                      <div className={styles.radioButton}>
                        <input type="radio" id="techExplain0" name="techExplain" value="0" />
                        <label htmlFor="techExplain0">0</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="techExplain1" name="techExplain" value="1" />
                        <label htmlFor="techExplain1">1</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="techExplain2" name="techExplain" value="2" />
                        <label htmlFor="techExplain2">2</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="techExplain3" name="techExplain" value="3" />
                        <label htmlFor="techExplain3">3</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="techExplain4" name="techExplain" value="4" />
                        <label htmlFor="techExplain4">4</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="techExplain5" name="techExplain" value="5" />
                        <label htmlFor="techExplain5">5</label>
                      </div>
                    </div>
                  </div>

                  {/* อธิบายเกินระดับที่เขียนไว้ Section */}
                  <div className={styles.radioTopicContainer}>
                    <div className={styles.headingCenter}>อธิบายเกินระดับที่เขียนไว้</div>
                    <div className={styles.radioContainer}>
                      <div className={styles.radioButton}>
                        <input type="radio" id="overExplain0" name="overExplain" value="0" />
                        <label htmlFor="overExplain0">0</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="overExplain1" name="overExplain" value="1" />
                        <label htmlFor="overExplain1">1</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="overExplain2" name="overExplain" value="2" />
                        <label htmlFor="overExplain2">2</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="overExplain3" name="overExplain" value="3" />
                        <label htmlFor="overExplain3">3</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="overExplain4" name="overExplain" value="4" />
                        <label htmlFor="overExplain4">4</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="overExplain5" name="overExplain" value="5" />
                        <label htmlFor="overExplain5">5</label>
                      </div>
                    </div>
                  </div>

                  {/* ยกตัวอย่างกรณีศึกษา Section */}
                  <div className={styles.radioTopicContainer}>
                    <div className={styles.headingCenter}>ยกตัวอย่างกรณีศึกษา</div>
                    <div className={styles.radioContainer}>
                      <div className={styles.radioButton}>
                        <input type="radio" id="caseStudy0" name="caseStudy" value="0" />
                        <label htmlFor="caseStudy0">0</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="caseStudy1" name="caseStudy" value="1" />
                        <label htmlFor="caseStudy1">1</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="caseStudy2" name="caseStudy" value="2" />
                        <label htmlFor="caseStudy2">2</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="caseStudy3" name="caseStudy" value="3" />
                        <label htmlFor="caseStudy3">3</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="caseStudy4" name="caseStudy" value="4" />
                        <label htmlFor="caseStudy4">4</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="caseStudy5" name="caseStudy" value="5" />
                        <label htmlFor="caseStudy5">5</label>
                      </div>
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
    value={formValues.textPercentage}  // Bind value to formValues
    onChange={handleInputChange}  // Update state on input
  />
  <div className={styles.percentLabel}>%</div>
</div>
<div className={styles.formGroup10}>
  <label htmlFor="diagramPercentage">Diagram:</label>
  <input
    type="text"
    id="diagramPercentage"
    name="diagramPercentage"
    value={formValues.diagramPercentage}  // Bind value to formValues
    onChange={handleInputChange}  // Update state on input
  />
  <div className={styles.percentLabel}>%</div>
</div>
<div className={styles.formGroup10}>
  <label htmlFor="picturePercentage">Picture:</label>
  <input
    type="text"
    id="picturePercentage"
    name="picturePercentage"
    value={formValues.picturePercentage}  // Bind value to formValues
    onChange={handleInputChange}  // Update state on input
  />
  <div className={styles.percentLabel}>%</div>
</div>
                  </div>
                </div>
              )}
              {selectedType === 'หนังสือโจทย์' && (
                  <div>
                    <div className={styles.contentInfo}>กรอกข้อมูลหนังสือโจทย์</div>
                    <div className={styles.diversitySection}>
                      <div className={styles.diversityHeading}>ความหลากหลายของโจทย์</div>
                      <div className={styles.radioTopicContainer1}>
                        <div className={styles.radioRow}>
                          <label className={styles.radioLabel}>โจทย์วิเคราะห์:</label>
                          <div className={styles.radioGroup}>
                            <label className={styles.radioOption2}>
                              <input type="radio" name="analysis" value="มี" />
                              มี
                            </label>
                            <label className={styles.radioOption2}>
                              <input type="radio" name="analysis" value="ไม่มี" />
                              ไม่มี
                            </label>
                          </div>
                        </div>
                      <div className={styles.radioRow}>
                        <label className={styles.radioLabel}>โจทย์ประยุกต์:</label>
                        <div className={styles.radioGroup}>
                          <label className={styles.radioOption2}>
                            <input type="radio" name="application" value="มี" />
                            มี
                          </label>
                          <label className={styles.radioOption2}>
                            <input type="radio" name="application" value="ไม่มี" />
                            ไม่มี
                          </label>
                        </div>
                      </div>
                      <div className={styles.radioRow}>
                        <label className={styles.radioLabel}>โจทย์ทดสอบความรู้:</label>
                        <div className={styles.radioGroup}>
                          <label className={styles.radioOption2}>
                            <input type="radio" name="test" value="มี" />
                            มี
                          </label>
                          <label className={styles.radioOption2}>
                            <input type="radio" name="test" value="ไม่มี" />
                            ไม่มี
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className={styles.diversityHeading}>เฉลย</div>
                    <div className={styles.radioTopicContainer1}>
                      <div className={styles.radioRow}>
                        <div className={styles.radioOption3}>
                          <input type="radio" name="explanation" value="อธิบายทุกตัวเลือก" />
                          อธิบายทุกตัวเลือก
                        </div>
                      </div>
                      <div className={styles.radioRow}>
                        <div className={styles.radioOption3}>
                          <input type="radio" name="explanation" value="อธิบายแค่ตัวเลือกที่ถูก" />
                          อธิบายแค่ตัวเลือกที่ถูก
                        </div>
                      </div>
                      <div className={styles.radioRow}>
                        <div className={styles.radioOption3}>
                          <input type="radio" name="explanation" value="เฉลยแค่ตัวเลือกที่ถูก" />
                          เฉลยแค่ตัวเลือกที่ถูก
                        </div>
                      </div>
                    </div>
                    <div className={styles.diversityHeading}>ความยาก</div>
                    <div className={styles.radioTopicContainer}>
                      <div className={styles.headingCenter}>ระดับความยากในการคิดเลข</div>
                      <div className={styles.radioContainer}>
                        <div className={styles.radioButton}>
                          <input type="radio" id="calculationDifficulty0" name="calculationDifficulty" value="0" />
                          <label htmlFor="calculationDifficulty0">0</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="calculationDifficulty1" name="calculationDifficulty" value="1" />
                          <label htmlFor="calculationDifficulty1">1</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="calculationDifficulty2" name="calculationDifficulty" value="2" />
                          <label htmlFor="calculationDifficulty2">2</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="calculationDifficulty3" name="calculationDifficulty" value="3" />
                          <label htmlFor="calculationDifficulty3">3</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="calculationDifficulty4" name="calculationDifficulty" value="4" />
                          <label htmlFor="calculationDifficulty4">4</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="calculationDifficulty5" name="calculationDifficulty" value="5" />
                          <label htmlFor="calculationDifficulty5">5</label>
                        </div>
                      </div>
                    </div>
                    {/* ความซับซ้อนของวิธีการคิด Section */}
                    <div className={styles.radioTopicContainer}>
                      <div className={styles.headingCenter}>ความซับซ้อนของวิธีการคิด</div>
                      <div className={styles.radioContainer}>
                        <div className={styles.radioButton}>
                          <input type="radio" id="complexity0" name="complexity" value="0" />
                          <label htmlFor="complexity0">0</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="complexity1" name="complexity" value="1" />
                          <label htmlFor="complexity1">1</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="complexity2" name="complexity" value="2" />
                          <label htmlFor="complexity2">2</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="complexity3" name="complexity" value="3" />
                          <label htmlFor="complexity3">3</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="complexity4" name="complexity" value="4" />
                          <label htmlFor="complexity4">4</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="complexity5" name="complexity" value="5" />
                          <label htmlFor="complexity5">5</label>
                        </div>
                      </div>
                    </div>

                    {/* ความยากในการวิเคราะห์ Section */}
                    <div className={styles.radioTopicContainer}>
                      <div className={styles.headingCenter}>ความยากในการวิเคราะห์</div>
                      <div className={styles.radioContainer}>
                        <div className={styles.radioButton}>
                          <input type="radio" id="analysisDifficulty0" name="analysisDifficulty" value="0" />
                          <label htmlFor="analysisDifficulty0">0</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="analysisDifficulty1" name="analysisDifficulty" value="1" />
                          <label htmlFor="analysisDifficulty1">1</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="analysisDifficulty2" name="analysisDifficulty" value="2" />
                          <label htmlFor="analysisDifficulty2">2</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="analysisDifficulty3" name="analysisDifficulty" value="3" />
                          <label htmlFor="analysisDifficulty3">3</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="analysisDifficulty4" name="analysisDifficulty" value="4" />
                          <label htmlFor="analysisDifficulty4">4</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="analysisDifficulty5" name="analysisDifficulty" value="5" />
                          <label htmlFor="analysisDifficulty5">5</label>
                        </div>
                      </div>
                    </div>

                    {/* ปริมาณศัพท์เทคนิค Section */}
                    <div className={styles.radioTopicContainer}>
                      <div className={styles.headingCenter}>ปริมาณศัพท์เทคนิค</div>
                      <div className={styles.radioContainer}>
                        <div className={styles.radioButton}>
                          <input type="radio" id="technicalTerms0" name="technicalTerms" value="0" />
                          <label htmlFor="technicalTerms0">0</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="technicalTerms1" name="technicalTerms" value="1" />
                          <label htmlFor="technicalTerms1">1</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="technicalTerms2" name="technicalTerms" value="2" />
                          <label htmlFor="technicalTerms2">2</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="technicalTerms3" name="technicalTerms" value="3" />
                          <label htmlFor="technicalTerms3">3</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="technicalTerms4" name="technicalTerms" value="4" />
                          <label htmlFor="technicalTerms4">4</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="technicalTerms5" name="technicalTerms" value="5" />
                          <label htmlFor="technicalTerms5">5</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selectedType === 'หนังสือเนื้อหา - โจทย์' && (
                  <div>
                    <div className={styles.contentInfo}>กรอกข้อมูลหนังสือเนื้อหา - โจทย์</div>
                    <div className={styles.formGroup9}>
                      <label htmlFor="contentCompleteness">ความครบของเนื้อหา:</label>
                      <input
  type="text"
  id="contentCompleteness"
  name="contentCompleteness"
  value={formValues.contentCompleteness}
  placeholder="กรอกเลข 0 - 10"
  onChange={handleInputChange}
/>

                    </div>
                    <div className={styles.radioTopicContainer}>
                      <div className={styles.headingCenter}>ความยาวต่อหัวข้อ</div>
                      <div className={styles.radioContainer}>
                        <div className={styles.radioButton}>
                          <input type="radio" id="length0" name="contentLength" value="0" />
                          <label htmlFor="length0">0</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="length1" name="contentLength" value="1" />
                          <label htmlFor="length1">1</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="length2" name="contentLength" value="2" />
                          <label htmlFor="length2">2</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="length3" name="contentLength" value="3" />
                          <label htmlFor="length3">3</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="length4" name="contentLength" value="4" />
                          <label htmlFor="length4">4</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="length5" name="contentLength" value="5" />
                          <label htmlFor="length5">5</label>
                        </div>
                      </div>
                    </div>

                  {/* อธิบายศัพท์เทคนิค Section */}
                  <div className={styles.radioTopicContainer}>
                    <div className={styles.headingCenter}>อธิบายศัพท์เทคนิค</div>
                    <div className={styles.radioContainer}>
                      <div className={styles.radioButton}>
                        <input type="radio" id="techExplain0" name="techExplain" value="0" />
                        <label htmlFor="techExplain0">0</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="techExplain1" name="techExplain" value="1" />
                        <label htmlFor="techExplain1">1</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="techExplain2" name="techExplain" value="2" />
                        <label htmlFor="techExplain2">2</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="techExplain3" name="techExplain" value="3" />
                        <label htmlFor="techExplain3">3</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="techExplain4" name="techExplain" value="4" />
                        <label htmlFor="techExplain4">4</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="techExplain5" name="techExplain" value="5" />
                        <label htmlFor="techExplain5">5</label>
                      </div>
                    </div>
                  </div>

                  {/* อธิบายเกินระดับที่เขียนไว้ Section */}
                  <div className={styles.radioTopicContainer}>
                    <div className={styles.headingCenter}>อธิบายเกินระดับที่เขียนไว้</div>
                    <div className={styles.radioContainer}>
                      <div className={styles.radioButton}>
                        <input type="radio" id="overExplain0" name="overExplain" value="0" />
                        <label htmlFor="overExplain0">0</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="overExplain1" name="overExplain" value="1" />
                        <label htmlFor="overExplain1">1</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="overExplain2" name="overExplain" value="2" />
                        <label htmlFor="overExplain2">2</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="overExplain3" name="overExplain" value="3" />
                        <label htmlFor="overExplain3">3</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="overExplain4" name="overExplain" value="4" />
                        <label htmlFor="overExplain4">4</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="overExplain5" name="overExplain" value="5" />
                        <label htmlFor="overExplain5">5</label>
                      </div>
                    </div>
                  </div>

                  {/* ยกตัวอย่างกรณีศึกษา Section */}
                  <div className={styles.radioTopicContainer}>
                    <div className={styles.headingCenter}>ยกตัวอย่างกรณีศึกษา</div>
                    <div className={styles.radioContainer}>
                      <div className={styles.radioButton}>
                        <input type="radio" id="caseStudy0" name="caseStudy" value="0" />
                        <label htmlFor="caseStudy0">0</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="caseStudy1" name="caseStudy" value="1" />
                        <label htmlFor="caseStudy1">1</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="caseStudy2" name="caseStudy" value="2" />
                        <label htmlFor="caseStudy2">2</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="caseStudy3" name="caseStudy" value="3" />
                        <label htmlFor="caseStudy3">3</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="caseStudy4" name="caseStudy" value="4" />
                        <label htmlFor="caseStudy4">4</label>
                      </div>
                      <div className={styles.radioButton}>
                        <input type="radio" id="caseStudy5" name="caseStudy" value="5" />
                        <label htmlFor="caseStudy5">5</label>
                      </div>
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
    value={formValues.textPercentage}  // Bind value to formValues
    onChange={handleInputChange}  // Update state on input
  />
  <div className={styles.percentLabel}>%</div>
</div>

<div className={styles.formGroup10}>
  <label htmlFor="diagramPercentage">Diagram:</label>
  <input
    type="text"
    id="diagramPercentage"
    name="diagramPercentage"
    value={formValues.diagramPercentage}  // Bind value to formValues
    onChange={handleInputChange}  // Update state on input
  />
  <div className={styles.percentLabel}>%</div>
</div>

<div className={styles.formGroup10}>
  <label htmlFor="picturePercentage">Picture:</label>
  <input
    type="text"
    id="picturePercentage"
    name="picturePercentage"
    value={formValues.picturePercentage}  // Bind value to formValues
    onChange={handleInputChange}  // Update state on input
  />
  <div className={styles.percentLabel}>%</div>
</div>
                  </div>
                  <div className={styles.diversitySection}>
                    <div className={styles.diversityHeading}>ความหลากหลายของโจทย์</div>
                    <div className={styles.radioTopicContainer}>
                      <div className={styles.radioRow}>
                        <label className={styles.radioLabel}>โจทย์วิเคราะห์:</label>
                        <div className={styles.radioGroup}>
                          <label className={styles.radioOption2}>
                            <input type="radio" name="analysis" value="มี" />
                            มี
                          </label>
                          <label className={styles.radioOption2}>
                            <input type="radio" name="analysis" value="ไม่มี" />
                            ไม่มี
                          </label>
                        </div>
                      </div>
                      <div className={styles.radioRow}>
                        <label className={styles.radioLabel}>โจทย์ประยุกต์:</label>
                        <div className={styles.radioGroup}>
                          <label className={styles.radioOption2}>
                            <input type="radio" name="application" value="มี" />
                            มี
                          </label>
                          <label className={styles.radioOption2}>
                            <input type="radio" name="application" value="ไม่มี" />
                            ไม่มี
                          </label>
                        </div>
                      </div>
                      <div className={styles.radioRow}>
                        <label className={styles.radioLabel}>โจทย์ทดสอบความรู้:</label>
                        <div className={styles.radioGroup}>
                          <label className={styles.radioOption2}>
                            <input type="radio" name="test" value="มี" />
                            มี
                          </label>
                          <label className={styles.radioOption2}>
                            <input type="radio" name="test" value="ไม่มี" />
                            ไม่มี
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className={styles.diversityHeading}>เฉลย</div>
                    <div className={styles.radioTopicContainer}>
                      <div className={styles.radioRow}>
                        <div className={styles.radioOption3}>
                          <input type="radio" name="explanation" value="อธิบายทุกตัวเลือก" />
                          อธิบายทุกตัวเลือก
                        </div>
                      </div>
                      <div className={styles.radioRow}>
                        <div className={styles.radioOption3}>
                          <input type="radio" name="explanation" value="อธิบายแค่ตัวเลือกที่ถูก" />
                          อธิบายแค่ตัวเลือกที่ถูก
                        </div>
                      </div>
                      <div className={styles.radioRow}>
                        <div className={styles.radioOption3}>
                          <input type="radio" name="explanation" value="เฉลยแค่ตัวเลือกที่ถูก" />
                          เฉลยแค่ตัวเลือกที่ถูก
                        </div>
                      </div>
                    </div>
                    <div className={styles.diversityHeading}>ความยาก</div>
                    <div className={styles.radioTopicContainer}>
                      <div className={styles.headingCenter}>ระดับความยากในการคิดเลข</div>
                      <div className={styles.radioContainer}>
                        <div className={styles.radioButton}>
                          <input type="radio" id="calculationDifficulty0" name="calculationDifficulty" value="0" />
                          <label htmlFor="calculationDifficulty0">0</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="calculationDifficulty1" name="calculationDifficulty" value="1" />
                          <label htmlFor="calculationDifficulty1">1</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="calculationDifficulty2" name="calculationDifficulty" value="2" />
                          <label htmlFor="calculationDifficulty2">2</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="calculationDifficulty3" name="calculationDifficulty" value="3" />
                          <label htmlFor="calculationDifficulty3">3</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="calculationDifficulty4" name="calculationDifficulty" value="4" />
                          <label htmlFor="calculationDifficulty4">4</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="calculationDifficulty5" name="calculationDifficulty" value="5" />
                          <label htmlFor="calculationDifficulty5">5</label>
                        </div>
                      </div>
                    </div>
                    {/* ความซับซ้อนของวิธีการคิด Section */}
                    <div className={styles.radioTopicContainer}>
                      <div className={styles.headingCenter}>ความซับซ้อนของวิธีการคิด</div>
                      <div className={styles.radioContainer}>
                        <div className={styles.radioButton}>
                          <input type="radio" id="complexity0" name="complexity" value="0" />
                          <label htmlFor="complexity0">0</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="complexity1" name="complexity" value="1" />
                          <label htmlFor="complexity1">1</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="complexity2" name="complexity" value="2" />
                          <label htmlFor="complexity2">2</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="complexity3" name="complexity" value="3" />
                          <label htmlFor="complexity3">3</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="complexity4" name="complexity" value="4" />
                          <label htmlFor="complexity4">4</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="complexity5" name="complexity" value="5" />
                          <label htmlFor="complexity5">5</label>
                        </div>
                      </div>
                    </div>

                    {/* ความยากในการวิเคราะห์ Section */}
                    <div className={styles.radioTopicContainer}>
                      <div className={styles.headingCenter}>ความยากในการวิเคราะห์</div>
                      <div className={styles.radioContainer}>
                        <div className={styles.radioButton}>
                          <input type="radio" id="analysisDifficulty0" name="analysisDifficulty" value="0" />
                          <label htmlFor="analysisDifficulty0">0</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="analysisDifficulty1" name="analysisDifficulty" value="1" />
                          <label htmlFor="analysisDifficulty1">1</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="analysisDifficulty2" name="analysisDifficulty" value="2" />
                          <label htmlFor="analysisDifficulty2">2</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="analysisDifficulty3" name="analysisDifficulty" value="3" />
                          <label htmlFor="analysisDifficulty3">3</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="analysisDifficulty4" name="analysisDifficulty" value="4" />
                          <label htmlFor="analysisDifficulty4">4</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="analysisDifficulty5" name="analysisDifficulty" value="5" />
                          <label htmlFor="analysisDifficulty5">5</label>
                        </div>
                      </div>
                    </div>

                    {/* ปริมาณศัพท์เทคนิค Section */}
                    <div className={styles.radioTopicContainer}>
                      <div className={styles.headingCenter}>ปริมาณศัพท์เทคนิค</div>
                      <div className={styles.radioContainer}>
                        <div className={styles.radioButton}>
                          <input type="radio" id="technicalTerms0" name="technicalTerms" value="0" />
                          <label htmlFor="technicalTerms0">0</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="technicalTerms1" name="technicalTerms" value="1" />
                          <label htmlFor="technicalTerms1">1</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="technicalTerms2" name="technicalTerms" value="2" />
                          <label htmlFor="technicalTerms2">2</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="technicalTerms3" name="technicalTerms" value="3" />
                          <label htmlFor="technicalTerms3">3</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="technicalTerms4" name="technicalTerms" value="4" />
                          <label htmlFor="technicalTerms4">4</label>
                        </div>
                        <div className={styles.radioButton}>
                          <input type="radio" id="technicalTerms5" name="technicalTerms" value="5" />
                          <label htmlFor="technicalTerms5">5</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className={styles.type1}>ข้อมูลด้านกายภาพของหนังสือ:</div>
              <div className={styles.formGroup3}>
                <div className={styles.formGroup1}>
                  <label htmlFor="size">ขนาด:</label>
                  <input
                    type="number"
                    id="sizewidth"
                    name="sizewidth"
                    placeholder="กว้าง"
                    className={styles.smallInput1}
                    min="0"
                    step="0.01"
                    onKeyDown={(e) => {
                      if (!/[\d.-]/.test(e.key) && e.key !== "Backspace") {
                        e.preventDefault();
                      }
                    }}
                  />
                  <div>x</div>
                  <input
                    type="number"
                    id="sizeheight"
                    name="sizeheight"
                    placeholder="ยาว"
                    className={styles.smallInput1}
                    min="0"
                    step="0.01"
                    onKeyDown={(e) => {
                      if (!/[\d.-]/.test(e.key) && e.key !== "Backspace") {
                        e.preventDefault();
                      }
                    }}
                  />
                  <div className={styles.cm}>cm.</div>
                </div>
              </div>
              <div className={styles.formGroup4}>
  <label htmlFor="weight">น้ำหนัก:</label>
  <input
    type="number"
    id="weight"
    name="weight"
    value={formValues.weight}  // Bind value to formValues
    onChange={handleInputChange}  // Update state on input
    min="0"
    step="0.01"
    onKeyDown={(e) => {
      if (!/[\d.-]/.test(e.key) && e.key !== "Backspace") {
        e.preventDefault();
      }
    }}
  />
  <div className={styles.kg}>kg.</div>
</div>

<div className={styles.formGroup4}>
  <label htmlFor="thick">ความหนา:</label>
  <input
    type="number"
    id="thick"
    name="thick"
    value={formValues.thick}  // Bind value to formValues
    onChange={handleInputChange}  // Update state on input
    min="0"
    step="0.01"
    onKeyDown={(e) => {
      if (!/[\d.-]/.test(e.key) && e.key !== "Backspace") {
        e.preventDefault();
      }
    }}
  />
  <div className={styles.cm}>cm.</div>
</div>

              <div className={styles.formGroup5}>
                <label>การเข้าเล่ม:</label>
                <div className={styles.checkboxContainer}>
                  <div className={styles.column}>
                    <label>
                      <input type="checkbox" name="binding" value="เย็บกี่" />
                      เย็บกี่
                    </label>
                    <label>
                      <input type="checkbox" name="binding" value="ไสกาว" />
                      ไสกาว
                    </label>
                  </div>
                </div>
              </div>

              <div className={styles.formGroup6}>
                <label htmlFor="coverGram">แกรมของปก:</label>
                <input
  type="number"
  id="coverGram"
  name="coverGram"
  value={formValues.coverGram}
  min="0"
  max="300"
  className={styles.smallInput}
  onChange={handleInputChange}
  onKeyDown={(e) => {
    if (!/[\d]/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  }}
/>

                <div className={styles.gramLabel}>gram</div>
              </div>

              <div className={styles.formGroup6}>
                <label htmlFor="paperGram">แกรมของกระดาษ:</label>
                <input
  type="number"
  id="paperGram"
  name="paperGram"
  value={formValues.paperGram}
  min="0"
  max="300"
  className={styles.smallInput}
  onChange={handleInputChange}
  onKeyDown={(e) => {
    if (!/[\d]/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  }}
/>

                <div className={styles.gramLabel}>gram</div>
              </div>

              <div className={styles.formGroup7}>
                <div className={styles.formgroupfont}>font:</div>
                <div className={styles.radioGrid}>
                  <div className={styles.radioOption}>
                    <label>
                      <input type="radio" name="fontType" value="ตัวพิมพ์" />
                      ตัวพิมพ์
                    </label>
                  </div>
                  <div className={styles.radioOption}>
                    <label>
                      <input type="radio" name="fontType" value="ตัวเขียน" />
                      ตัวเขียน
                    </label>
                  </div>
                </div>
                <div className={styles.fontSizeContainer}>
                  <label htmlFor="fontSize">font size:</label>
                  <input
  type="number"
  id="fontSize"
  name="fontSize"
  value={formValues.fontSize}
  min="8"
  max="72"
  className={styles.smallInput}
  onChange={handleInputChange}
  onKeyDown={(e) => {
    if (!/[\d]/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  }}
/>

                  <div className={styles.pxLabel}>px.</div>
                </div>
              </div>

              <div className={styles.formGroup8}>
                <label htmlFor="bookDetails">รายละเอียดหนังสือ:</label>
                <textarea
  id="bookDetails"
  name="bookDetails"
  value={formValues.bookDetails}
  onChange={handleInputChange}
  className={styles.largeInput}
/>

              </div>

              <div className={styles.buttonconfirm}>
                <button type="submit" className={styles.submit}>Submit</button>
              </div>

              <div className={styles.space}>o</div>
            </div>
          </div>
          </div>
        </form>
        </div>
      </div>
  );
};

export default AddBook;
