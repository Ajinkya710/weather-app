import React from "react";

const WeatherCard = (props) => {
  console.log(props)
  return (
    <div className="card mb-3 mx-3" style={{ width: "25rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-text">{props.data.main.temp}</p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
