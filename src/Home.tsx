import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import Header from 'components/Header';

import useCurrentWeather from 'src/hooks/useCurrentWeather';
import theme from './configuration/theme';
import useWeatherForecast from './hooks/useWeatherForecast';
import ForecastTable from './components/ForecastTable';

const Home = (): JSX.Element => {
  // Test cases
  // const {currentWeather, isLoading, error} = useCurrentWeather({
  //   latitude: '-1.204430',
  //   longitude: '36.942629',
  // });
  // const {currentWeather, isLoading, error} = useCurrentWeather({
  //   latitude: '-3.996579',
  //   longitude: '39.677461',
  // });
  const {currentWeather, isLoading, error} = useCurrentWeather({
    latitude: '26.034907',
    longitude: '-80.763846',
  });
  const {weatherForecast} = useWeatherForecast({
    latitude: '26.034907',
    longitude: '-80.763846',
  });
  // console.log(weatherForecast);

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Header weather={currentWeather} />
        <ForecastTable weather={currentWeather} forecasts={weatherForecast} />
      </Page>
    </ThemeProvider>
  );
};

//#region styled-components

const Page = styled.View`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  flex: 1;
`;

//#endregion
export default Home;
