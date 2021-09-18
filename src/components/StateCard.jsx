import React from "react";

const StateCard = ({ name, img, desc }) => {
  return (
    <div className="column is-one-fifth is-justify-content-flex-start">
      <div className="card is-equal-height">
        <div className="card-image">
          <figure className="image ">
            <img src={img} alt="Placeholder image" className="image" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-5 has-text-centered">{name}</p>
        </div>
        <div className="content desc has-text-centered">
          {desc} <br></br>
          <span className="has-text-weight-bold">... click to read more</span>
        </div>
      </div>
    </div>
  );
};
export default StateCard;
