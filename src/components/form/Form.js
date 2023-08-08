  import React, { useState, useEffect } from "react";
  import { world_cities } from "../../worldcities";
import FetchWeather from "../FetchWeather";

  const countries = [
    {
      name: "Australia",
      country_code: "AU",
    },
    {
      name: "Canada",
      country_code: "CA",
    },
    {
      name: "India",
      country_code: "IN",
    },
    {
      name: "New Zealand",
      country_code: "NZ",
    },
    {
      name: "United States",
      country_code: "US",
    },
  ];

  const Form = () => {
    const [selectedCountry, setSelectedCountry] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState([]);
    const [longitude, setLongitude] =  useState(null);
    const [lattitude, setLatitude] = useState(null);

    
    const checkWeather = (e) => {
      e.preventDefault();
      const city_data = world_cities.find(
        (city) => city.cities === selectedCity && city.coutry_code === selectedCountry
      );
      
      if(city_data) {
        setLatitude(city_data.lat);
        setLongitude(city_data.lng);
      }
  
    };

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });

      const all_cities = world_cities.filter(
        (c) => c.coutry_code === selectedCountry
      );
      const city_names = all_cities.map((city) => city.cities);
      setCities(city_names);
    }, [selectedCountry]);

    return (
      <div>
        <form className="form-horizontal row mx-2 my-5" onSubmit={checkWeather}>
          <select
            className="form-select col mx-2"
            id="countries"
            onChange={(e) => setSelectedCountry(e.target.value)}
            //   value={selectedCountry}
          >
            <option value="" selected disabled>
              Select a Country
            </option>
            {countries.map((country) => (
              <option key={country.name} value={country.country_code}>
                {country.name}
              </option>
            ))}
          </select>
          <select
            className="form-select col mx-2"
            id="cities"
            onChange={(e) => setSelectedCity(e.target.value)}
            //   value={selectedCountry}
          >
            <option value="" selected disabled>
              Select a City
            </option>
            {cities.map((city, index) => (
              <option key={index} value={city.country_code}>
                {city}
              </option>
            ))}
          </select>
          <button type="submit" class="btn btn-primary col-2 mx-2">
            Show
          </button>
        </form>

        
        <FetchWeather lat={lattitude} lng={longitude} />

      </div>
    );
  };

  export default Form;
