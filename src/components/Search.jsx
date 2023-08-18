import React, { useContext, useState } from "react";
import { Context } from "../context/AppContext";

const Search = () => {
  const [city, setCity] = useState("");
  const { setLoading, setData, data, fetchDesiredData, setIsError } =
    useContext(Context);

  console.log("From Search Component", city, data);

  const clickHandler = () => {
    setLoading(true);
    fetchDesiredData(city).then((data) => {
      if (data.error) {
        console.log("error occurred");
        setIsError(true);
        setLoading(false);
      } else {
        setIsError(false);
        console.log("new search comp res", data);
        setLoading(false);
        setData(data);
      }
    });
  };

  return (
    <div className="search">
      <div className="form">
        <input
          type="text"
          name="search"
          id="search-w"
          placeholder="ex-Ahmedabad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={clickHandler}>Show</button>
      </div>
    </div>
  );
};

export default Search;
