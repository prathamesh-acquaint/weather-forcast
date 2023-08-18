import React, { useContext } from "react";
import { Context } from "../context/AppContext";
import { Puff } from "react-loader-spinner";

const CurrentWeather = () => {
  const { data, loading } = useContext(Context);
  console.log("current weather comp ", data);

  if (loading) {
    return <Puff color="#6ca0e0" />;
  }
  return (
    <div className="current-weather">
      <div className="city">
        <h1>{data.location.name}</h1>
      </div>
      <div className="additional-info">
        <div className="icon">
          <img src={data.current.condition.icon} alt="icon" />
        </div>
        <div className="details">
          <div className="temprature">
            <span className="temp">{data.current.temp_c}° C</span>
          </div>
          <div className="feels-like">
            <span>Feels Like: {data.current.feelslike_c}° C</span>
          </div>
          <div className="sun-info">
            <span>Sunrise: {data.forecast.forecastday[0].astro.sunrise}</span>
            <span>Sunset: {data.forecast.forecastday[0].astro.sunset}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
