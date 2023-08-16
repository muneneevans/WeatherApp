import {WeatherSummary, WeatherTheme} from 'src/types/weatherTypes';

// TODO fix error
import sunnyImage from 'src/assets/images/sea_sunny.png';
import cloudyImage from 'src/assets/images/sea_cloudy.png';
import rainyImage from 'src/assets/images/sea_rainy.png';

import sunnyIcon from 'src/assets/Icons/clear.png';
import cloudyIcon from 'src/assets/Icons/partlysunny.png';
import rainyIcon from 'src/assets/Icons/rain.png';

import {WeatherLabel, WeatherColors} from 'src/types/weatherTypes';
const useWeatherTheme = (weather: WeatherSummary): WeatherTheme => {
  switch (weather.weatherCondition) {
    case 'Clouds':
      return {
        color: WeatherColors.Clouds,
        label: WeatherLabel.Clouds,
        image: cloudyImage,
        icon: cloudyIcon,
      };
    case 'Rain':
      return {
        color: WeatherColors.Rain,
        label: WeatherLabel.Rain,
        image: rainyImage,
        icon: rainyIcon,
      };
    case 'Clear':
      return {
        color: WeatherColors.Sun,
        label: WeatherLabel.Sun,
        image: sunnyImage,
        icon: sunnyIcon,
      };
    case 'Sun':
      return {
        color: WeatherColors.Sun,
        label: WeatherLabel.Sun,
        image: sunnyImage,
        icon: sunnyIcon,
      };

    default:
      return {
        color: WeatherColors.Sun,
        label: WeatherLabel.Sun,
        image: sunnyImage,
        icon: sunnyIcon,
      };
  }
};

export default useWeatherTheme;
