import React from "react";

const WeatherCard = (props) => {
  console.log(props)

  return (
    <div className="card mb-3 mx-3" style={{ width: "25rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-text">Country: {props.data.sys.country}</p>
        {/* <p className="card-text">Weather: {props.data.weather.description}</p> */}
        <p className="card-text">Temperature: {props.data.main.temp}</p>
        <p className="card-text">Feels like: {props.data.main.feels_like}</p>
        <p className="card-text">Min Temperature: {props.data.main.temp_min}</p>
        <p className="card-text">Max Temperature: {props.data.main.temp_max}</p>
        <p className="card-text">Humidity: {props.data.main.humidity}</p>
        <p className="card-text">Pressure: {props.data.main.pressure}</p>
        
        {/* <p className="card-text">Sunrise: {new Date(props.data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="card-text">Sunset: {new Date(props.data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="card-text">Timezone: {new Date(props.data.timezone * 1000).toLocaleTimeString('en-IN')}</p> */}
        {/* <button type="button" className="btn btn-outline-info" onClick={refresh}>Refresh</button> */}
        <p className="card-text">
          <small className="text-body-secondary">Last updated: {props.lastUpdatedTime}</small>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
