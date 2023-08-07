import React from 'react'

const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);

await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
// useEffect(() => {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     setLat(position.coords.latitude);
//     setLong(position.coords.longitude);
//   });

//   console.log("Latitude is:", lat)
//   console.log("Longitude is:", long)
// }, [lat, long]);

const FetchWeather = () => {
  return (
    <div>
      
    </div>
  )
}

export default FetchWeather
