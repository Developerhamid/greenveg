import React from "react";

const Card = ({ title, descr, image }) => {
  return (
    <>
      <div className="card-container">
        <div className="card-image">
          <img src={image} alt="card" />
        </div>
        <div className="card-info">
          <h3>{title}</h3>
          <span className="card-description">{descr}</span>
          <button className="btn-services btns" onClick={() => alert('We can add more details')} >read more</button>
        </div>
      </div>
    </>
  );
};

export default Card;
