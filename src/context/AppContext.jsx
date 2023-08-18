import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchCurrentWeatherData = async (lat, long) => {
    let queryLat = `${lat},${long}`;

    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_WEATHER_ACCESS_KEY
      }&q=${queryLat}&days=10&aqi=no&alerts=no`
    );
    const data = await res.json();
    return data;
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const longitude = position.coords.longitude;
      const latitude = position.coords.latitude;
      fetchCurrentWeatherData(latitude, longitude).then((data) => {
        if (data.error) {
          console.log("error occurred");
          setIsError(true);
        } else {
          setLoading(false);
          setData(data);
          console.log(data);
        }
      });
    });
  };

  const fetchDesiredData = async (city) => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_WEATHER_ACCESS_KEY
      }&q=${city}&days=10&aqi=no&alerts=no`
    );
    return await res.json();
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        fetchDesiredData,
        isError,
        setIsError,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
