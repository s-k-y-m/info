import React from 'react';

var KnownFor = (props) => (
  <div>
    <div className="box">
      <br></br><br></br>
      <div className="section-heading">KNOWN FOR</div>
      <div className="known">
        {props.data.knownfor_img.map((element, index) => {
          return <div className="known-keywords"> 
            <img src={element} key={index.element} className="known-images"></img>
            <div className="known-keywords" key={index}>{element.slice(18, -4).charAt(0).toUpperCase() +
              element.slice(19, -4).replace('-', ' ')}</div>
          </div>
          ;
        } )}
      </div>
      <br></br><br></br><br></br>
      <div className="section-heading">ZAGAT MENTIONS OF {props.data.name}</div>
      <br></br>
      <div className="mentions-box">
        {props.data.mentions.map((element, index) => {
          return <div className="known-desc" key={index.element}>
            <img src={element} className="known-cell" key={index.element}></img>
            <div className="known-words" key={index}>{props.data.knownfor_desc[index]}</div>
            <br></br><br></br>
          </div>
          ;
        } )}
      </div>
    </div>
  </div>
      

);

export default KnownFor;