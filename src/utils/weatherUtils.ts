import {WeatherForecast} from './../types/weatherTypes';
import {ForecastItem} from 'src/types/APIResponseTypes';

export const roundOffTemperature = (temperature: number): number => {
  // Round off temperature to nearest integer
  return Math.round(temperature);
};

export const filterForecastByDay = (
  forecasts: ForecastItem[],
): ForecastItem[] => {
  // Filter out forecasts that are not end of day
  const endOfDayRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2} 21:00:00/;
  return forecasts.filter(item => item.dt_txt.match(endOfDayRegex) !== null);
};

const daysInWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
export const summarizeDayForecast = (
  forecast: ForecastItem,
): WeatherForecast => {
  // Summarize forecast for a day
  const day = daysInWeek[new Date(forecast.dt_txt).getDay()];
  return {
    day,
    maxTemperature: roundOffTemperature(forecast.main.temp_max),
    minTemperature: roundOffTemperature(forecast.main.temp_min),
    currentTemperature: roundOffTemperature(forecast.main.temp),
    weatherCondition: forecast.weather[0].main,
    id: `${forecast.dt}`,
  };
};
