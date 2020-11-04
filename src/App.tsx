import React, { useState } from "react";
import classes from "./App.module.css";
import axios from "./axios";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import { Weather } from "./interfaces/Weather";
import { formatWeather } from "./utilities/Utilities";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [location, setLocation] = useState<string | null>(null);

  const [weather, setWeather] = useState<Weather | null>(null);

  /*
  http://api.openweathermap.org/data/2.5/weather?q=Izmir&units=metric&appid=505281203bf31cec92ae2cd15f3fa222
  */

  const _searchHandler = () => {
    axios.get(`/weather?q=${location}&appid=${API_KEY}`).then((res) => {
      let weatherData: Weather = formatWeather(res.data);
      setWeather(weatherData);
    });
  };

  const _inputHandler = (e) => {
    const { value } = e.target;
    setLocation(value);
  };

  return (
    <div className={classes.App}>
      <SearchBar change={_inputHandler} click={_searchHandler} />
      {/* <input
        type="text"
        name="search"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={_searchHandler}>Search</button> */}
      {weather != null ? <WeatherCard weather={weather} /> : ""}
    </div>
  );
}

export default App;
