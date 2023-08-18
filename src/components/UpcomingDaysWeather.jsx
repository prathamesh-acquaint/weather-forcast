import React, { useContext } from "react";
import { Context } from "../context/AppContext";
import { Puff } from "react-loader-spinner";

const UpcomingDaysWeather = () => {
  const { data, loading } = useContext(Context);
  const getDate = (dt) => {
    const d = new Date(dt);
    return [d.getDate(), d.getMonth() + 1].join("/");
  };

  if (loading) {
    return <Puff color="#6ca0e0" />;
  }
  return (
    <div className="upcoming-days-weather">
      <div className="day-title">
        <h3>Upcoming 10 Days Report</h3>
      </div>
      <div className="days-wrapper">
        <div className="days-weather-cards">
          {data.forecast.forecastday.map((item, index) => {
            return (
              <div key={index} className="day-card">
                <div className="day">{getDate(item.date)}</div>
                <img src={item.day.condition.icon} alt="icon" />
                <div className="temp-day">{item.day.avgtemp_c}° C</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UpcomingDaysWeather;
