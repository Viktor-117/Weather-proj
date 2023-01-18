import { useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { Box } from './NowWeather.styled';
import WeatherCard from 'components/WeatherCard';

export default function NowWeather() {
  const { current_weather } = useSelector(selectors.getForecastData);

  return (
    <Box>
      <WeatherCard weatherInfo={current_weather} />
    </Box>
  );
}
