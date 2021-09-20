import React from "react";

const StateCard = ({ name, img, desc }) => {
  return (
    <div className="column is-one-quarter">
      <div className="card is-equal-height">
        <div className="card-image">
          <figure className="image ">
            <img
              loading="lazy"
              src={img}
              alt="Placeholder image"
              className="image"
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-5 has-text-centered">{name}</p>
        </div>
        <div className="content desc has-text-left">
          {desc}... <br></br>
          <span className="has-text-weight-bold has-text-centered">
            click to read more
          </span>
        </div>
      </div>
    </div>
  );
};
export default StateCard;
