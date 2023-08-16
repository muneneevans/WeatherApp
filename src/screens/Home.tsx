import React, {useEffect} from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import Header from 'components/Header';

import theme from 'src/configuration/theme';
import ForecastTable from 'src/components/ForecastTable';
import useLocation from 'src/hooks/useLocation';

const Home = (): JSX.Element => {
  const {location} = useLocation();

  const getWeather = () => {};

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {location && (
        <Page>
          <Header location={location} />
          <ForecastTable location={location} />
        </Page>
      )}
    </ThemeProvider>
  );
};

//#region styled-components

const Page = styled.View`
  background-color: ${props => props.theme.backgroundColor};
  flex: 1;
`;

//#endregion
export default Home;
