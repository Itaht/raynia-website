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
                <div className={styles.radioOption}>
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
                <div className={styles.radioOption}>
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
                <div className={styles.radioOption}>
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
              <div className={styles.type1}>ข้อมูลด้านกายภาพของหนังสือ:</div>
              <div className={styles.formGroup3}>
                <div className={styles.formGroup1}>
                  <label htmlFor="size">ขนาด:</label>
                  <input type="text" id="size" name="sizewidth" placeholder="กว้าง" className={styles.smallInput1} />
                  <h>x</h>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
