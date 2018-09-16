import React from 'react';

var KnownFor = (props) => (
  <div>
    <div className="box">
      <br></br><br></br>
      <div className="section-heading">KNOWN FOR</div>
      <div className="known">
        {props.data.knownfor_img.map((element, index) => {
          return <img src={element} key={index} className="known-images"></img>;
        })}
        {props.data.knownfor_img.map((element, index) => {
          return <div className="known-keywords" key={index}>{element.slice(18, -4)}</div>;
        })} 
      </div>
      <br></br><br></br><br></br>
      <div className="section-heading">ZAGAT MENTIONS OF {props.data.name}</div>
    </div>
  </div>
);

export default KnownFor;