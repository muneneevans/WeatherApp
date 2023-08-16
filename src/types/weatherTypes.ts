export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface WeatherSummary {
  currentTemperature: number;
  minTemperature: number;
  maxTemperature: number;
  weatherCondition: string;
}
export interface WeatherTheme {
  color: string;
  label: string;
  image: string;
  icon: string;
}

export enum WeatherLabel {
  Clouds = 'CLOUDY',
  Rain = 'RAINY',
  Sun = 'SUNNY',
}
export enum WeatherColors {
  Clouds = '#54717A',
  Rain = '57575D',
  Sun = '#47AB2F',
}

export interface WeatherForecast extends WeatherSummary {
  day: string;
  id: string;
}
