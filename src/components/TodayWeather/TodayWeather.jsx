import { useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { Box, Container } from './TodayWeather.styled';
import WeatherCard from 'components/WeatherCard';

export default function TodayWeather() {
  const { hourly } = useSelector(selectors.getForecastData);
  console.log(hourly);

  const time = [
    '02.00',
    '05.00',
    '08.00',
    '11.00',
    '14.00',
    '17.00',
    '20.00',
    '23.00',
  ];
  const getTodayArray = (oldArr, newArr) => {
    for (let i = 2; i < 24; i += 3) {
      newArr.push(oldArr[i]);
    }
  };
  const temperature = [];
  const weathercode = [];
  const windSpeed = [];

  getTodayArray(hourly.temperature_2m, temperature);
  getTodayArray(hourly.weathercode, weathercode);
  getTodayArray(hourly.windspeed_10m, windSpeed);

  return (
    <Box>
      <Container>
        {time.map((item, index) => {
          return (
            <WeatherCard
              key={item}
              weatherInfo={{
                temperature: temperature[index],
                weathercode: weathercode[index],
                windSpeed: windSpeed[index],
                time: item,
              }}
            />
          );
        })}
      </Container>
    </Box>
  );
}
