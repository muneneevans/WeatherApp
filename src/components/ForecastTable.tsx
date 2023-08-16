import React from 'react';
import {WeatherForecast, WeatherSummary} from 'src/types/weatherTypes';
import styled from 'styled-components/native';
import DayForecast from './DayForecast';
import {FlatList} from 'react-native';
import useWeatherTheme from 'src/hooks/useWeatherTheme';

type Props = {
  weather: WeatherSummary;
  forecasts: WeatherForecast[];
};

const ForecastTable = ({forecasts, weather}: Props): JSX.Element => {
  const weatherTheme = useWeatherTheme(weather);

  return (
    <Container color={weatherTheme.color}>
      <FlatList
        data={forecasts}
        renderItem={({item: dailyForecast}) => (
          <DayForecast forecast={dailyForecast} />
        )}
        keyExtractor={dailyForecast => dailyForecast.id}
      />
    </Container>
  );
};

//#region styled components
const Container = styled.View<{color: string}>`
  flex: 3;
  background-color: ${props => props.color};
  padding-vertical: 10;
`;

//#endregion

export default ForecastTable;
