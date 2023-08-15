import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import Header from 'components/Header';

import useCurrentWeather from 'src/hooks/useCurrentWeather';
import theme from './configuration/theme';

const Home = (): JSX.Element => {
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
  console.log(currentWeather);

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Header weather={currentWeather} />

        <ForecastTable>
          {Array(5)
            .fill({})
            .map(() => (
              <ForecastField>
                <TemperatureItem>
                  <TemperatureValue>Min </TemperatureValue>
                </TemperatureItem>
                <TemperatureItem>
                  <TemperatureValue>Min</TemperatureValue>
                </TemperatureItem>
                <TemperatureItem>
                  <TemperatureValue>Min</TemperatureValue>
                </TemperatureItem>
              </ForecastField>
            ))}
        </ForecastTable>
      </Page>
    </ThemeProvider>
  );
};

//#region styled-components

const Page = styled.View`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  flex: 1;
`;

const TemperatureItem = styled.View`
  padding-horizontal: 20;
`;
const TemperatureValue = styled.Text`
  text-align: center;
`;
const ForecastTable = styled.View`
  flex: 3;
  background-color: green;
  padding-vertical: 10;
`;

const ForecastField = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 15;
`;

//#endregion
export default Home;
