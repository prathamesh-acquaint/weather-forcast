import React, { useContext } from "react";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import WeeklyWeather from "./WeeklyWeather";
import UpcomingDaysWeather from "./UpcomingDaysWeather";
import HourlyWeather from "./HourlyWeather";
import { Context } from "../context/AppContext";
import { Puff } from "react-loader-spinner";
import Error from "./Error";

const Layout = () => {
  const { loading, isError } = useContext(Context);
  return (
    <>
      <div className="container">
        <Search />
        {loading ? (
          <div className="loader">
            <Puff color="#6ca0e0" />
          </div>
        ) : isError ? (
          <Error />
        ) : (
          <>
            <CurrentWeather />
            <WeeklyWeather />
            <UpcomingDaysWeather />
          </>
        )}
        <div className="next-days-report"></div>
      </div>
      <div className="container-2">
        {loading ? (
          <div className="loader">
            <Puff color="#6ca0e0" />
          </div>
        ) : (
          !isError && <HourlyWeather />
        )}
      </div>
    </>
  );
};

export default Layout;
