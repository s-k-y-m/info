import React from 'react';

var Info = (props) => (
  <div>
    <div className="box">
      <div className="title-name">{props.test.name}</div>
      <div className="desc">{props.test.desc}</div>
      <a href="Something" alt className="zgt-place-sheet-basic-details">{props.test.location}</a> <a href="Something" alt className="zgt-place-sheet-basic-details">$$</a>
    
      <div className="divider"> 
        <img src="./assets/z-logo-icon-red.svg" alt className="test"></img>
      </div>
      <div className="section-heading">THE ZAGAT REVIEW</div>
      <div className="zgt-place-sheet-zagat-rating">
        
        <div className="cell">
          <div className="zgt-place-sheet-zagat-rating-value">{props.test.food_rating}</div>
          <div className="label-score">Food</div>
        </div>
        <div className="cell">
          <div className="zgt-place-sheet-zagat-rating-value">{props.test.decor_rating}</div>
          <div className="label-score">Decor</div>
        </div>
        <div className="cell">
          <div className="zgt-place-sheet-zagat-rating-value">{props.test.service_rating}</div>
          <div className="label-score">Service</div>
        </div>
      </div><br></br>
      <div className="body-large">{props.test.desc_bold}</div>
    </div>
  </div>
);

export default Info;