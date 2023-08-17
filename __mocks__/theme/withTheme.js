import React from 'react';

import {ThemeProvider} from 'styled-components/native';
import mockTheme from '../../src/configuration/theme';

export default function WithTheme({children}) {
  return <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>;
}
