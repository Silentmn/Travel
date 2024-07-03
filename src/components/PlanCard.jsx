import React from 'react';
import { Link } from "react-router-dom";


function PlanCard(props) {
  return (
    <div className="card3">
      <div className="card2-image">
        <img src={props.image}  />
      </div>
      <div className="card2-content">
        <h2 className='cardheading'>{props.name}</h2>
        <h3 className='cardprice'>₹ {props.price}</h3>/per head
        <p>{props.day} days tour</p>
        <Link to={`/details/${props.id}`} className="btn">Show Details</Link>
        <button className="btn">BUY</button>
      </div>
    </div>
  );
};

export default PlanCard;
