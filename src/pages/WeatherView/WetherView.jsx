import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import selectors from 'redux/selectors';
import { Box, Title } from './WetherView.styled';
import WeatherTabs from 'components/WeatherTabs';
import WeatherInfo from 'components/WeatherInfo';

export default function WeatherView() {
  const city = useSelector(selectors.getCity);
  const isLoading = useSelector(selectors.getIsLoading);
  const loader = isLoading && !city;
  const render = !isLoading && city;

  return (
    <Box>
      {isLoading && <RotatingLines strokeColor="#3B8AD9" />}
      {!city.name ? <Navigate to="/" /> : <Title>{city.name}</Title>}
      <WeatherTabs />
      {loader ? <RotatingLines strokeColor="#3B8AD9" /> : <WeatherInfo />}
    </Box>
  );
}
