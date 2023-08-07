import React from "react";

const WeatherCard = () => {
  return (
    <div className="card mb-3 mx-3" style={{width: "25rem"}}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">City Name</h5>
        <p className="card-text">
          CITY DATA
        </p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
