import { Navigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import operations from 'redux/operations';
import WeatherInfo from 'components/WeatherInfo';
import { Title, Container } from './WeatherTabs.styled';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function WeatherTabs() {
  const dispatch = useDispatch();
  const { latitude, longitude, name } = useSelector(selectors.getCity);
  const [value, setValue] = useState(0);
  //   const city = useSelector(selectors.getCity);
  const isLoading = useSelector(selectors.getIsLoading);
  const loadCard = useSelector(selectors.getLoadCard);

  // useEffect(() => {
  //   dispatch(operations.fetchCurrentWeather({ latitude, longitude }));
  // }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        dispatch(operations.fetchCurrentWeather({ latitude, longitude }));
        break;
      case 1:
        dispatch(operations.fetchTodayWeather({ latitude, longitude }));
        break;
      case 2:
        dispatch(operations.fetchDailyWeather({ latitude, longitude }));
        break;
      case 3:
        dispatch(operations.fetchDailyWeather({ latitude, longitude }));
        console.log(loadCard);
        break;
      default:
        return;
    }
  };

  return (
    <Container>
      <Title>{name}</Title>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Now" />
          <Tab label="Today" />
          <Tab label="3 Days" />
          <Tab label="5 Days" />
        </Tabs>
      </Box>
      {loadCard && <WeatherInfo />}
    </Container>
  );
}
