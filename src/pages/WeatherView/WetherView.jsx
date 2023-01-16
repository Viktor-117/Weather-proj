import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { Box, Title } from './WetherView.styled';
import WeatherTabs from 'components/WeatherTabs';

export default function WeatherView() {
  const cityTitle = useSelector(selectors.getCityName);

  return (
    <Box>
      {!cityTitle ? <Navigate to="/" /> : <Title>{cityTitle}</Title>}

      <WeatherTabs />
    </Box>
  );
}
