import {WeatherSummary, WeatherTheme} from 'src/types/weatherTypes';

// TODO fix error
import sunnyImage from 'src/assets/images/sea_sunny.png';
import cloudyImage from 'src/assets/images/sea_cloudy.png';
import rainyImage from 'src/assets/images/sea_rainy.png';
import {WeatherLabel, WeatherColors} from 'src/types/weatherTypes';
const useWeatherTheme = (weather: WeatherSummary): WeatherTheme => {
  switch (weather.weatherCondition) {
    case 'Clouds':
      return {
        color: WeatherColors.Clouds,
        label: WeatherLabel.Clouds,
        image: cloudyImage,
      };
    case 'Rain':
      return {
        color: WeatherColors.Rain,
        label: WeatherLabel.Rain,
        image: rainyImage,
      };
    case 'Clear':
      return {
        color: WeatherColors.Sun,
        label: WeatherLabel.Sun,
        image: sunnyImage,
      };
    case 'Sun':
      return {
        color: WeatherColors.Sun,
        label: WeatherLabel.Sun,
        image: sunnyImage,
      };

    default:
      return {
        color: WeatherColors.Sun,
        label: WeatherLabel.Sun,
        image: sunnyImage,
      };
  }
};

export default useWeatherTheme;
