import { useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { Box, Container } from './SevenDaysWeather.styled';
import WeatherCard from 'components/WeatherCard';

export default function ThreeDaysWeather() {
  const { daily } = useSelector(selectors.getForecastData);
  const {
    time,
    temperature_2m_max,
    temperature_2m_min,
    weathercode,
    windspeed_10m_max,
  } = daily;

  const date = [];
  time.map(day =>
    date.push(new Date(day * 1000).toLocaleDateString('en-GB').substring(0, 5))
  );

  return (
    <Box>
      <Container>
        {date.map((item, index) => {
          return (
            <WeatherCard
              key={item}
              weatherInfo={{
                maxTemperature: temperature_2m_max[index],
                minTemperature: temperature_2m_min[index],
                weathercode: weathercode[index],
                windspeed: windspeed_10m_max[index],
                date: item,
              }}
            />
          );
        })}
      </Container>
    </Box>
  );
}
