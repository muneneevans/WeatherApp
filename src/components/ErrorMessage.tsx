import React from 'react';
import styled from 'styled-components/native';

type Props = {
  message: string;
};

const ErrorMessage = ({message}: Props): JSX.Element => {
  return (
    <Banner>
      <ErrorText>{message}</ErrorText>
    </Banner>
  );
};

//#region styled component
const Banner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
`;
const ErrorText = styled.Text`
  font-size: ${props => props.theme.fontLarge};
  color: ${props => props.theme.foregroundColor};
  text-align: center;
`;
//#endregion

export default ErrorMessage;
