import React from "react";

const Card = (props) => {
  return (
    <div className="card" style={props.style}>
      <p className="card-title">{props.title}</p>
      <p className="card-desc"> {props.desc}</p>
      <div className="card-img">
        <img src={props.icon} alt="card-icon" className="card-icon" />
      </div>
    </div>
  );
};

export default Card;
