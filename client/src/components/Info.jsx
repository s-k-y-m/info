import React from 'react';
import styles from '../../../public/styles.css';

var Info = (props) => (
  <div>
    <div className={styles.box}>
      <div className={styles.titleName}>{props.test.name}</div>
      <div className={styles.desc}>{props.test.desc}</div>
      <a href="Something" className={styles.basicDetails}>{props.test.location}</a> <a href="Something" className={styles.basicDetails}>{props.test.expense}</a>
    
      <div className={styles.divider}> 
        <img src="./assets/z-logo-icon-red.svg" className={styles.test}></img>
      </div>
      <div className={styles.sectionHeading}>THE ZAGAT REVIEW</div>
      <div className={styles.placeRating}>
        
        <div className={styles.cell}>
          <div className={styles.ratings}>{props.test.food_rating}</div>
          <div className={styles.labelScore}>Food</div>
        </div>
        <div className={styles.cell}>
          <div className={styles.ratings}>{props.test.decor_rating}</div>
          <div className={styles.labelScore}>Decor</div>
        </div>
        <div className={styles.cell}>
          <div className={styles.ratings}>{props.test.service_rating}</div>
          <div className={styles.labelScore}>Service</div>
        </div>
      </div><br></br>
      <div className={styles.bodyLarge}>{props.test.desc_bold}</div>
    </div>
  </div>
);

export default Info;