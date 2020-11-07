import React, { useState } from "react";
import classes from "./App.module.css";
import axios from "./axios";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Error from "./components/Error/Error";
import { Weather } from "./interfaces/Weather";
import { formatWeather } from "./utilities/Utilities";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [location, setLocation] = useState<string | null>(null);

  const [weather, setWeather] = useState<Weather | null>(null);

  const [error, setError] = useState<{ cod: string; message: string } | null>(
    null
  );

  const _searchHandler = () => {
    axios
      .get(`/weather?q=${location}&appid=${API_KEY}`)
      .then((res) => {
        let weatherData: Weather = formatWeather(res.data);
        setWeather(weatherData);
      })
      .catch((err) => {
        if (err.response) {
            setError(err.response.data);
        } else {
          setError({cod:"500", message: err.message.toLowerCase()});
        }
      });
  };

  const _inputHandler = (e) => {
    const { value } = e.target;
    setLocation(value);
  };

  return (
    <div className={classes.App}>
      <SearchBar change={_inputHandler} click={_searchHandler} />
      {error !== null ? <Error error={error} /> : ""}
      {weather !== null ? <WeatherCard weather={weather} /> : ""}
    </div>
  );
}

export default App;
