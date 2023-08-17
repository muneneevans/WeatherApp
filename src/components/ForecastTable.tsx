import React from 'react';
import styled from 'styled-components/native';
import DayForecast from './DayForecast';
import {ActivityIndicator, FlatList} from 'react-native';
import useWeatherTheme from 'src/hooks/useWeatherTheme';
import {LocationInfo} from 'src/types/locationTypes';
import useWeatherForecast from 'src/hooks/useWeatherForecast';
import useCurrentWeather from 'src/hooks/useCurrentWeather';
import ErrorMessage from './ErrorMessage';

type ForecastTableProps = {
  location: LocationInfo;
};

const ForecastTable = ({location}: ForecastTableProps): JSX.Element => {
  const {currentWeather, isLoading, error} = useCurrentWeather({
    latitude: location.coords.latitude.toString(),
    longitude: location.coords.longitude.toString(),
  });
  const {weatherForecast} = useWeatherForecast({
    latitude: location.coords.latitude.toString(),
    longitude: location.coords.longitude.toString(),
  });
  const shouldShowError = !isLoading && error;

  const weatherTheme = useWeatherTheme(currentWeather);
  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (shouldShowError) {
    return <ErrorMessage message={error} />;
  }

  return (
    <Container color={weatherTheme.color}>
      <FlatList
        data={weatherForecast}
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
  padding-vertical: ${props => props.theme.md};
`;

//#endregion

export default React.memo(ForecastTable);
