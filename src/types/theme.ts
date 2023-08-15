declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
export interface Theme {
  fontTiny: number;
  fontSmall: number;
  fontMedium: number;
  fontLarge: number;
  fontExtraLarge: number;
  fontFamily: string;
  backgroundColor: string;

  textColor: string;
  textColorLight: string;

  foreGroundColor: string;
}
