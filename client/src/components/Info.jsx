import React from 'react';

var Info = (props) => (
  <div>
    <div className="box">
      <div className="title-name">{props.test.name}</div>
      <div className="desc">{props.test.desc}</div>
      <a href="Something" alt className="basic-details">{props.test.location}</a> <a href="Something" alt className="basic-details">{props.test.expense}</a>
    
      <div className="divider"> 
        <img src="./assets/z-logo-icon-red.svg" className="test"></img>
      </div>
      <div className="section-heading">THE ZAGAT REVIEW</div>
      <div className="place-rating">
        
        <div className="cell">
          <div className="ratings">{props.test.food_rating}</div>
          <div className="label-score">Food</div>
        </div>
        <div className="cell">
          <div className="ratings">{props.test.decor_rating}</div>
          <div className="label-score">Decor</div>
        </div>
        <div className="cell">
          <div className="ratings">{props.test.service_rating}</div>
          <div className="label-score">Service</div>
        </div>
      </div><br></br>
      <div className="body-large">{props.test.desc_bold}</div>
    </div>
  </div>
);

export default Info;