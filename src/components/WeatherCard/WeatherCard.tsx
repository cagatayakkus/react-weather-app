import React from "react";
import { Weather } from "../../interfaces/Weather";
import WindDirection from "../WindDirection/WindDirection";
import classes from "./WeatherCard.module.css";

interface WeatherCardProps {
  weather: Weather;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className={classes.WeatherCard}>
      <div className={classes.Header}>
        <div className={classes.Title}>
          {`${weather.locationInfo.country} | ${weather.locationInfo.name}`}
        </div>
        <div className={classes.Main}>
          <div className={classes.MainText}>{weather.main}</div>
        </div>
      </div>
      <div className={classes.Content}>
        <div className={classes.Temperature}>
          <div className={classes.TemperatureTitle}>Temperature</div>
          <div className={classes.TemperatureArea}>
            <div className={classes.CelciusTemperatureArea}>
              {weather.celsiusTemperature}&#8451;
            </div>
            <div className={classes.KelvinTemperatureArea}>
              {weather.kelvinTemperature}&#x212A;
            </div>
          </div>
        </div>
        <div className={classes.Wind}>
          <div className={classes.WindTitle}>Wind</div>
          <div className={classes.WindArea}>
            <div className={classes.DegreeArea}>
              <WindDirection deg={weather.wind.deg} />
            </div>
            <div>{weather.wind.speed} m/s</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
