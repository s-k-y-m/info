import React from 'react';

var Info = (props) => (
  <div>
    <div>
      <h1>Info Test!</h1>
    </div>
    <div>
      {props.test.map((element, index) => {
        return <div key={index}> <a href={element.name}> </a></div>})}
    </div>
  </div>

);

export default Info;