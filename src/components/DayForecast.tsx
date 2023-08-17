import React from 'react';
import {WeatherForecast} from 'src/types/weatherTypes';
import styled from 'styled-components/native';
import useWeatherTheme from 'src/hooks/useWeatherTheme';

type Props = {
  forecast: WeatherForecast;
};

const DayForecast = ({forecast}: Props): JSX.Element => {
  const theme = useWeatherTheme(forecast);
  return (
    <ForecastField>
      <TemperatureItem>
        <TemperatureValue alignment="left">{forecast.day}</TemperatureValue>
      </TemperatureItem>
      <TemperatureItem>
        <WeatherIcon source={theme.icon} />
      </TemperatureItem>
      <TemperatureItem>
        <TemperatureValue alignment="right">
          {`${forecast.currentTemperature}º`}
        </TemperatureValue>
      </TemperatureItem>
    </ForecastField>
  );
};

//#region styled components
const ForecastField = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: ${props => props.theme.lg};
`;
const TemperatureItem = styled.View`
  padding-horizontal: ${props => props.theme.xl};
  flex: 1;
`;
const TemperatureValue = styled.Text<{alignment: string}>`
  text-align: ${props => props.alignment};
  color: ${props => props.theme.textColor};
  font-size: ${props => props.theme.fontMedium};
`;
const WeatherIcon = styled.Image`
  height: ${props => props.theme.xl};
  weight: ${props => props.theme.xxl};
  align-self: center;
  resize-mode: contain;
`;
//#endregion

export default React.memo(DayForecast);
