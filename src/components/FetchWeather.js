import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard"

const FetchWeather = (props) => {
  const [receivedData, setReceivedData] = useState([]);
  const [lastUpdatedTime, setLastUpdatedTime] = useState(null);
  
  console.log(receivedData.length);
  useEffect(() => {

    const currentTime = new Date().toLocaleTimeString('en-IN');
    setLastUpdatedTime(currentTime);

    if (props.lat !== null && props.lng !== null) {
      const fetchData = async () => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lng}&units=metric&APPID=204ea2dce2ab661c1e16b37a6bc4fe0b`
        )
          .then((res) => res.json())
          .then((result) => {
            setReceivedData(result);
            console.log(result);
          });
      };
      fetchData();
    }
  }, [props]);

  return (
    <div>
      {receivedData.length !== 0 ? (
        <WeatherCard data={receivedData} lastUpdatedTime={lastUpdatedTime}/>
      ) : (
        <div> 
          Fetching weather...
        </div>
      )}
    </div>
  );
};

export default FetchWeather;
