import {roundOffTemperature} from './../utils/weatherUtils';
import {API_ENDPOINT, API_KEY} from './../configuration/constants';
import {CurrentWeatherAPIResponse} from '../types/APIResponseTypes';
import {WeatherSummary, Coordinates} from '../types/weatherTypes';
import {useState, useEffect} from 'react';

const useCurrentWeather = (
  coordinates: Coordinates,
): {
  currentWeather: WeatherSummary;
  isLoading: boolean;
  error: string | null;
} => {
  const [currentWeather, setCurrentWeather] = useState<WeatherSummary>({
    currentTemperature: 0,
    minTemperature: 0,
    maxTemperature: 0,
    weatherCondition: 'Sunny',
  });
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCurrentWeather = async () => {
    const fetchResponse = await fetch(
      `${API_ENDPOINT}/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${API_KEY}&units=metric`,
    );

    if (fetchResponse.ok) {
      const currentTemperature: CurrentWeatherAPIResponse =
        await fetchResponse.json();

      const newWeatherSummary: WeatherSummary = {
        currentTemperature: roundOffTemperature(
          currentTemperature.main.feels_like,
        ),
        minTemperature: roundOffTemperature(currentTemperature.main.temp_min),
        maxTemperature: roundOffTemperature(currentTemperature.main.temp_max),
        weatherCondition: currentTemperature?.weather[0].main,
      };

      setCurrentWeather(newWeatherSummary);
    } else {
      // TODO Use
      setError(
        'An error occurred while fetching current weather. Please retry',
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetchCurrentWeather();
    return () => {
      abortController.abort();
    };
  }, []);

  return {currentWeather, isLoading, error};
};

export default useCurrentWeather;
