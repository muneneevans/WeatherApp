import {WeatherSummary, WeatherTheme} from 'src/types/weatherTypes';

const sunnyImage = require('src/assets/images/sea_sunny.png');
const cloudyImage = require('src/assets/images/sea_cloudy.png');
const rainyImage = require('src/assets/images/sea_rainy.png');

const sunnyIcon = require('src/assets/Icons/clear.png');
const cloudyIcon = require('src/assets/Icons/partlysunny.png');
const rainyIcon = require('src/assets/Icons/rain.png');

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
