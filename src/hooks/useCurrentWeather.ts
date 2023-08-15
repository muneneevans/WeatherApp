import {formatTemperature} from './../utils/weatherUtils';
import {API_ENDPOINT, API_KEY} from './../configuration/constants';
import {CurrentWeatherAPIResponse} from '../types/APIResponses';
import {WeatherSummary, Coordinates} from '../types/weatherTypes';
import {useState, useEffect} from 'react';

const useCurrentWeather = (
  coordinates: Coordinates,
): {
  currentWeather: WeatherSummary;
  isLoading: boolean;
  error: string;
} => {
  const [currentWeather, setCurrentWeather] = useState<WeatherSummary>({
    currentTemperature: 0,
    minTemperature: 0,
    maxTemperature: 0,
    weatherCondition: 'Sunny',
  });
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const fetchCurrentWeather = async () => {
    const fetchResponse = await fetch(
      `${API_ENDPOINT}?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${API_KEY}&units=metric`,
    );

    if (fetchResponse.ok) {
      const currentTemperature: CurrentWeatherAPIResponse =
        await fetchResponse.json();

      const newWeatherSummary: WeatherSummary = {
        currentTemperature: formatTemperature(
          currentTemperature.main.feels_like,
        ),
        minTemperature: formatTemperature(currentTemperature.main.temp_min),
        maxTemperature: formatTemperature(currentTemperature.main.temp_max),
        weatherCondition: currentTemperature?.weather[0].main,
      };

      setCurrentWeather(newWeatherSummary);
    } else {
      setError(
        'An error occurred while fetching current weather. Please retry',
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCurrentWeather();
    return () => {
      // TODO Add abort controller
      //   effect;
    };
  }, []);

  return {currentWeather, isLoading, error};
};

export default useCurrentWeather;
