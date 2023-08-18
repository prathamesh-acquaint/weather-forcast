import React, { useContext } from "react";
import { Context } from "../context/AppContext";
import { Puff } from "react-loader-spinner";

const HourlyWeather = () => {
  const { data, loading } = useContext(Context);

  if (loading) {
    return <Puff color="#6ca0e0" />;
  }
  return (
    <div className="hourly-weather">
      {data.forecast.forecastday[0].hour.map((item, index) => (
        <div key={index} className="hourly-card">
          <h3>{item.time.split(" ")[1]}</h3>
          <img src={item.condition.icon} alt="icon" />
          <h4>{item.temp_c}° C</h4>
        </div>
      ))}
    </div>
  );
};

export default HourlyWeather;
