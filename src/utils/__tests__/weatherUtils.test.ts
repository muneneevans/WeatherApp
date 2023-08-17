import {
  roundOffTemperature,
  filterForecastByDay,
  summarizeDayForecast,
} from '../weatherUtils';

describe('roundOff Temperature Test', () => {
  it('should return an integer', () => {
    expect(typeof roundOffTemperature(20.5)).toEqual('number');
  });
  it('should round off correctly', () => {
    expect(roundOffTemperature(20.5)).toEqual(21);
    expect(roundOffTemperature(20.4)).toEqual(20);
  });
});

describe('summarizeDayForecast Test', () => {
  let mockForecastItem = {
    main: {
      temp: 14.61,
      feels_like: 12.51,
      temp_min: 14.61,
      temp_max: 15.56,
      pressure: 1017,
      sea_level: 1017,
      grnd_level: 1005,
      humidity: 72,
      temp_kf: -0.95,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    dt: 1602322800,
    dt_txt: '2020-10-10 12:00:00',
  };
  it('should return the correct day from date', () => {
    expect(summarizeDayForecast(mockForecastItem).day).toEqual('Saturday');

    mockForecastItem.dt_txt = '2020-10-11 12:00:00';
    expect(summarizeDayForecast(mockForecastItem).day).toEqual('Sunday');

    mockForecastItem.dt_txt = '2020-10-12 12:00:00';
    expect(summarizeDayForecast(mockForecastItem).day).toEqual('Monday');

    mockForecastItem.dt_txt = '2020-10-13 12:00:00';
    expect(summarizeDayForecast(mockForecastItem).day).toEqual('Tuesday');

    mockForecastItem.dt_txt = '2020-10-14 12:00:00';
    expect(summarizeDayForecast(mockForecastItem).day).toEqual('Wednesday');

    mockForecastItem.dt_txt = '2020-10-15 12:00:00';
    expect(summarizeDayForecast(mockForecastItem).day).toEqual('Thursday');

    mockForecastItem.dt_txt = '2020-10-16 12:00:00';
    expect(summarizeDayForecast(mockForecastItem).day).toEqual('Friday');
  });
});

describe('FilterforecastByDay Test', () => {
  let mockForecast = [
    {
      dt: 1602322800,
      dt_txt: '2020-10-10 21:00:00',
    },
    {
      dt: 1602322800,
      dt_txt: '2020-10-11 09:00:00',
    },
    {
      dt: 1602322800,
      dt_txt: '2020-10-12 12:00:00',
    },
    {
      dt: 1602322800,
      dt_txt: '2020-10-13 00:00:00',
    },
    {
      dt: 1602322800,
      dt_txt: '2020-10-14 12:00:00',
    },
    {
      dt: 1602322800,
      dt_txt: '2020-10-15 12:00:00',
    },
    {
      dt: 1602322800,
      dt_txt: '2020-10-16 12:00:00',
    },
  ];
  it('Should filter out dates with regex', () => {
    expect(filterForecastByDay(mockForecast).length).toEqual(1);
  });
});
