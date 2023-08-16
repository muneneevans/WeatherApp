import React from 'react';
import styled from 'styled-components/native';
import {WeatherSummary} from 'src/types/weatherTypes';
import useWeatherTheme from 'src/hooks/useWeatherTheme';

// TODO Extract Props
const Header = ({weather}: {weather: WeatherSummary}): JSX.Element => {
  const weatherTheme = useWeatherTheme(weather);
  return (
    <Container color={weatherTheme.color}>
      <Banner source={weatherTheme.image}>
        <SafeAreaView />
        <BannerTitle>{`${weather.currentTemperature}º`}</BannerTitle>
        <BannerSubTitle>{weatherTheme.label}</BannerSubTitle>
      </Banner>
      <Temperature>
        <TemperatureItem>
          <TemperatureValue>{weather.minTemperature}</TemperatureValue>
          <TemperatureValue>Min</TemperatureValue>
        </TemperatureItem>
        <TemperatureItem>
          <TemperatureValue>
            {`${weather.currentTemperature}º`}
          </TemperatureValue>
          <TemperatureValue>Current</TemperatureValue>
        </TemperatureItem>
        <TemperatureItem>
          <TemperatureValue>{`${weather.maxTemperature}º`}</TemperatureValue>
          <TemperatureValue>Max</TemperatureValue>
        </TemperatureItem>
      </Temperature>
    </Container>
  );
};

//#region styled components
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

const Temperature = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 10;
`;
const TemperatureItem = styled.View`
  padding-horizontal: 20;
`;
//#endregion

export default Header;
