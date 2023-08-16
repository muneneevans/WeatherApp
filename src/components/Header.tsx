import React from 'react';
import styled from 'styled-components/native';
import useWeatherTheme from 'src/hooks/useWeatherTheme';
import {LocationInfo} from 'src/types/locationTypes';
import useCurrentWeather from 'src/hooks/useCurrentWeather';
import ErrorMessage from './ErrorMessage';
import {ActivityIndicator} from 'react-native';

type HeaderProps = {
  location: LocationInfo;
};

const Header = ({location}: HeaderProps): JSX.Element => {
  console.log('current Location', location);

  const {currentWeather, isLoading, error} = useCurrentWeather({
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
      <Banner source={weatherTheme.image}>
        <SafeAreaView />
        <BannerTitle>{`${currentWeather.currentTemperature}º`}</BannerTitle>
        <BannerSubTitle>{weatherTheme.label}</BannerSubTitle>
      </Banner>
      <Temperature>
        <TemperatureItem>
          <TemperatureValue>{currentWeather.minTemperature}</TemperatureValue>
          <TemperatureValue>Min</TemperatureValue>
        </TemperatureItem>
        <TemperatureItem>
          <TemperatureValue>
            {`${currentWeather.currentTemperature}º`}
          </TemperatureValue>
          <TemperatureValue>Current</TemperatureValue>
        </TemperatureItem>
        <TemperatureItem>
          <TemperatureValue>{`${currentWeather.maxTemperature}º`}</TemperatureValue>
          <TemperatureValue>Max</TemperatureValue>
        </TemperatureItem>
      </Temperature>
    </Container>
  );
};

//#region styled components`
const Container = styled.View<{color: string}>`
  max-height: 450;
  flex: 3;
  background-color: ${props => props.color};
`;
const SafeAreaView = styled.SafeAreaView`
  opacity: 1;
  flex: 0;
`;
const Banner = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  resize-mode: cover;
`;

const BannerTitle = styled.Text`
  text-align: center;
  font-size: ${props => props.theme.fontExtraLarge};
  color: ${props => props.theme.textColor};
  text-align: center;
`;
const BannerSubTitle = styled.Text`
  text-align: center;
  font-size: ${props => props.theme.fontLarge};
  color: ${props => props.theme.textColor};
  text-align: center;
  text-transform: uppercase;
`;
const TemperatureValue = styled.Text`
  text-align: center;
  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.textColor};
`;

const Temperature = styled.View<{color: string}>`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 10;
`;
const TemperatureItem = styled.View`
  padding-horizontal: 20;
`;
//#endregion

export default React.memo(Header);
