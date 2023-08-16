import {filterForecastByDay, summarizeDayForecast} from '../utils/weatherUtils';
import {WeatherForecastAPIResponse} from '../types/APIResponseTypes';
import {API_ENDPOINT, API_KEY} from '../configuration/constants';
import {useState, useEffect} from 'react';
import {Coordinates, WeatherForecast} from '../types/weatherTypes';

const useWeatherForecast = (
  coordinates: Coordinates,
): {
  weatherForecast: WeatherForecast[];
  isLoading: boolean;
  error: string | null;
} => {
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchForecast = async () => {
    setIsLoading(true);
    const fetchResponse = await fetch(
      // TODO Revert
      'https://cd06-41-80-116-151.ngrok.io/forecast',
      // `${API_ENDPOINT}/forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${API_KEY}&units=metric`,
    );

    if (fetchResponse.ok) {
      const forecast: WeatherForecastAPIResponse = await fetchResponse.json();

      const filteredForecast = filterForecastByDay(forecast.list);

      const newWeatherForecast: WeatherForecast[] = filteredForecast.map(
        dailyForecast => summarizeDayForecast(dailyForecast),
      );
      // console.log(newWeatherForecast);
      setWeatherForecast(newWeatherForecast);
    } else {
      setError(
        'An error occurred while fetching weather forecast. Please retry',
      );
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchForecast();
    return () => {};
  }, []);

  return {weatherForecast, isLoading, error};
};

export default useWeatherForecast;
