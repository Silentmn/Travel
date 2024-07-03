import React from 'react';


function Card(props) {
  return (
    <div className="card2">
      <div className="card2-image">
        <img src={props.image}  />
      </div>
      <div className="card2-content">
        <h2 className='cardheading'>{props.name}</h2>
        <h3 className='cardprice'>₹ {props.price}</h3>/per head
        <p>{props.day} days tour</p>
        <p>🇮🇳 {props.text}</p>
      </div>
    </div>
  );
};

export default Card;
