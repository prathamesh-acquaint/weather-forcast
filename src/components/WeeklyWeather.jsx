import React, { useContext } from "react";
import { Context } from "../context/AppContext";
import { Puff } from "react-loader-spinner";

const WeeklyWeather = () => {
  const { data, loading } = useContext(Context);
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const getDayName = (date) => {
    const d = new Date(date);
    return d.getDay();
  };

  if (loading) {
    return <Puff color="#6ca0e0" />;
  }

  return (
    <div className="weekly-weather">
      <div className="weekly-title">
        <h3>Weekly Report</h3>
      </div>
      <div className="weekly-weather-cards">
        {data.forecast.forecastday.map((item, index) => {
          if (index <= 6)
            return (
              <div key={index} className="weekly-card">
                <div className="day">{weekDays[getDayName(item.date)]}</div>
                <img src={item.day.condition.icon} alt="icon" />
                <div className="temp-day">{item.day.avgtemp_c}° C</div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default WeeklyWeather;
