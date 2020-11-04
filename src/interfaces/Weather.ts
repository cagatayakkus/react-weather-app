interface LocationInfo {
  country: string;
  name: string;
}

interface Wind {
  speed: number;
  deg: number;
}

export interface Weather {
  locationInfo: LocationInfo;
  main: string;
  celsiusTemperature: number;
  kelvinTemperature: number;
  wind: Wind;
}
