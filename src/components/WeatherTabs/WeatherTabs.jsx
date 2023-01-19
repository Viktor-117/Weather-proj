import { RotatingLines } from 'react-loader-spinner';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { setPeriod } from 'redux/citySlice';
import operations from 'redux/operations';
import NowWeather from 'components/NowWeather';
import TodayWeather from 'components/TodayWeather';
import ThreeDaysWeather from 'components/ThreeDaysWeather';
import SevenDaysWeather from 'components/SevenDaysWeather';
import { Title, Container } from './WeatherTabs.styled';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function WeatherTabs() {
  const dispatch = useDispatch();
  const { latitude, longitude, name, timezone } = useSelector(
    selectors.getCity
  );
  const [value, setValue] = useState(0);
  let period = useSelector(selectors.getPeriod);
  const isLoading = useSelector(selectors.getIsLoading);
  const loadCard = useSelector(selectors.getLoadCard);

  const handleChange = (_, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        dispatch(operations.fetchCurrentWeather({ latitude, longitude }));
        dispatch(setPeriod('now'));
        break;
      case 1:
        dispatch(operations.fetchTodayWeather({ latitude, longitude }));
        dispatch(setPeriod('today'));
        break;

      case 2:
        dispatch(
          operations.fetchDailyWeather({ latitude, longitude, timezone })
        );
        dispatch(setPeriod('3 days'));
        break;

      case 3:
        dispatch(
          operations.fetchDailyWeather({ latitude, longitude, timezone })
        );
        dispatch(setPeriod('7 days'));
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
          <Tab label="7 Days" />
        </Tabs>
      </Box>
      {isLoading && <RotatingLines strokeColor="#3B8AD9" />}
      {period === 'now' && loadCard && <NowWeather />}
      {period === 'today' && loadCard && <TodayWeather />}
      {period === '3 days' && loadCard && <ThreeDaysWeather />}
      {period === '7 days' && loadCard && <SevenDaysWeather />}
    </Container>
  );
}
