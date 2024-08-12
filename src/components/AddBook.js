import React, { useState } from 'react';
import styles from '../styles/AddBook.module.css';
import Header from './Header';
import BottomHeader from './BottomHeader';

const AddBook = () => {
  const [fileName, setFileName] = useState('Upload File');
  const [selectedType, setSelectedType] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleCheckboxChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      <BottomHeader />
      <div className={styles.contentContainer}>
        <div className={styles.topic}>เพิ่มหนังสือ</div>
        <div className={styles.bookForm}>
          <div className={styles.bookBox}>
            <div className={styles.formGroup}>
              <label htmlFor="bookName">ชื่อหนังสือ:</label>
              <input type="text" id="bookName" name="bookName" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="author">ชื่อผู้แต่ง:</label>
              <input type="text" id="author" name="author" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="price">ราคา:</label>
              <input type="text" id="price" name="price" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">วิชา:</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className={styles.formGroup}>
              <label>ช่วงระดับชั้น:</label>
            </div>
            <div className={styles.formGroup1}>
              <label htmlFor="minLevel">min:</label>
              <input type="text" id="minLevel" name="minLevel" placeholder="ม.1 ถึง ม.6" className={styles.smallInput} />
              <input type="text" id="minLevel2" name="minLevel2" placeholder="เทอม 1 - 2" className={styles.smallInput} />
            </div>
            <div className={styles.formGroup1}>
              <label htmlFor="maxLevel">max:</label>
              <input type="text" id="maxLevel" name="maxLevel" placeholder="ม.1 ถึง ม.6" className={styles.smallInput} />
              <input type="text" id="maxLevel2" name="maxLevel2" placeholder="เทอม 1 - 2" className={styles.smallInput} />
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
              <input type="text" id="publisher" name="publisher" />
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
                    <input type="text" id="contentCompleteness" name="contentCompleteness" placeholder="กรอกเลข 0 - 10"/>
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
                      <input type="text" id="textPercentage" name="textPercentage"/>
                      <div className={styles.percentLabel}>%</div>
                    </div>
                    <div className={styles.formGroup10}>
                      <label htmlFor="diagramPercentage">Diagram:</label>
                      <input type="text" id="diagramPercentage" name="diagramPercentage"/>
                      <div className={styles.percentLabel}>%</div>
                    </div>
                    <div className={styles.formGroup10}>
                      <label htmlFor="picturePercentage">Picture:</label>
                      <input type="text" id="picturePercentage" name="picturePercentage"/>
                      <div className={styles.percentLabel}>%</div>
                    </div>
                  </div>
                </div>
              )}
              <div className={styles.type1}>ข้อมูลด้านกายภาพของหนังสือ:</div>
              <div className={styles.formGroup3}>
                <div className={styles.formGroup1}>
                  <label htmlFor="size">ขนาด:</label>
                  <input type="text" id="size" name="sizewidth" placeholder="กว้าง" className={styles.smallInput1} />
                  <div>x</div>
                  <input type="text" id="size" name="sizeheight" placeholder="ยาว" className={styles.smallInput1} />
                  <div className={styles.cm}>cm.</div>
                </div>
              </div>
              <div className={styles.formGroup4}>
                <label htmlFor="weight">น้ำหนัก:</label>
                <input type="weight" id="weight" name="weight" />
                <div className={styles.kg}>kg.</div>
              </div>
              <div className={styles.formGroup4}>
                <label htmlFor="thick">ความหนา:</label>
                <input type="thick" id="thick" name="thick" />
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
                <input type="text" id="coverGram" name="coverGram" className={styles.smallInput} />
                <div className={styles.gramLabel}>gram</div>
              </div>
              <div className={styles.formGroup6}>
                <label htmlFor="paperGram">แกรมของกระดาษ:</label>
                <input type="text" id="paperGram" name="paperGram" className={styles.smallInput} />
                <div className={styles.gramLabel}>gram</div>
              </div>
              <div className={styles.formGroup7}>
                <div className={styles.formgroupfont}>font:</div>
                <div className={styles.radioGrid}>
                  <div className={styles.radioOption}>
                    <label>
                      <input
                        type="radio"
                        name="fontType"
                        value="ตัวพิมพ์"
                      />
                      ตัวพิมพ์
                    </label>
                  </div>
                  <div className={styles.radioOption}>
                    <label>
                      <input
                        type="radio"
                        name="fontType"
                        value="ตัวเขียน"
                      />
                      ตัวเขียน
                    </label>
                  </div>
                </div>
                <div className={styles.fontSizeContainer}>
                  <label htmlFor="fontSize">font size:</label>
                  <input type="text" id="fontSize" name="fontSize" className={styles.smallInput} />
                  <div className={styles.pxLabel}>px.</div>
                </div>
                <div className={styles.formgrouppaper}>เนื้อกระดาษ:</div>
                <div className={styles.radioGrid1}>
                  <div className={styles.radioOption}>
                    <label>
                      <input
                        type="radio"
                        name="paper"
                        value="ถนอมสายตา"
                      />
                      ถนอมสายตา
                    </label>
                  </div>
                  <div className={styles.radioOption}>
                    <label>
                      <input
                        type="radio"
                        name="paper"
                        value="ไม่ถนอมสายตา"
                      />
                      ไม่ถนอมสายตา
                    </label>
                  </div>
                </div>
                <div className={styles.formgroupprinted}>การตีพิมพ์:</div>
                <div className={styles.radioGrid1}>
                  <div className={styles.radioOption}>
                    <label>
                      <input
                        type="radio"
                        name="printed"
                        value="ขาว - ดำ"
                      />
                      ขาว - ดำ
                    </label>
                  </div>
                  <div className={styles.radioOption}>
                    <label>
                      <input
                        type="radio"
                        name="printed"
                        value="สี"
                      />
                      สี
                    </label>
                  </div>
                </div>
                <div className={styles.formgroupspacing}>ระยะห่างบรรทัด:</div>
                <div className={styles.radioGrid2}>
                  <div className={styles.radioOption}>
                    <label>
                      <input
                        type="radio"
                        name="spacing"
                        value="ขนาดเท่า 1 ตัวอักษร"
                      />
                      ขนาดเท่า 1 ตัวอักษร
                    </label>
                  </div>
                  <div className={styles.radioOption}>
                    <label>
                      <input
                        type="radio"
                        name="spacing"
                        value="ขนาดไม่เท่า 1 ตัวอักษร"
                      />
                      ขนาดไม่เท่า 1 ตัวอักษร
                    </label>
                  </div>
                </div>
                <div className={styles.formGroup8}>
                  <label htmlFor="bookDetails">รายละเอียดหนังสือ:</label>
                  <textarea id="bookDetails" name="bookDetails" className={styles.largeInput}></textarea>
                </div>
                <div className={styles.buttonconfirm}>
                  <button type="submit" className={styles.submit}>Submit</button>
                </div>
              </div>
              <div className={styles.space}>o</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
