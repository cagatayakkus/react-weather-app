import { Weather } from "../interfaces/Weather";

export const formatWeather = (data: any): Weather => {
  let weather: Weather = {
    main: data.weather[0].main,

    locationInfo: {
      country: data.sys.country,
      name: data.name,
    },

    celsiusTemperature: Math.round(data.main.temp - 272.15),

    kelvinTemperature: Math.round(data.main.temp),

    wind: {
      speed: data.wind.speed,
      deg: data.wind.deg,
    },
  };

  return weather;
};
