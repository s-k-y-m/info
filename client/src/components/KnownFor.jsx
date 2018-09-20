import React from 'react';
import styles from '../../../public/info.css';

var KnownFor = (props) => (
  <div>
    <div className={styles.box2}>
      
      <div className={styles.sectionHeading}>KNOWN FOR</div>
      <div className={styles.known}>
        {props.data.knownfor_img.map((element, index) => {
          return <div className={styles.knownKeywords}> 
            <img src={element} key={index.element} className={styles.knownImages}></img>
            <div className={styles.knownKeywords} key={element.index}>{element.slice(18, -4).charAt(0).toUpperCase() +
              element.slice(19, -4).replace('-', ' ')}</div>
          </div>
          ;
        } )}
      </div>
      <br></br><br></br><br></br>
      <div className={styles.sectionHeading}>ZAGAT MENTIONS OF {props.data.name}</div>
      <br></br>
      <div className={styles.mentionsBox}>
        {props.data.mentions.map((element, index) => {
          return <div className={styles.knownDesc} key={index.element}>
            <img src={element} className={styles.knownCell} key={index.element}></img>
            <div className={styles.knownWords} key={element.index}>{props.data.knownfor_desc[index]}</div>
            <br></br><br></br>
          </div>
          ;
        } )}
      </div>
    </div>
  </div>
      

);

export default KnownFor;