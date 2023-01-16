import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import operations from 'redux/operations';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function WeatherTabs() {
  const dispatch = useDispatch();
  const { latitude, longitude } = useSelector(selectors.getCity);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        dispatch(operations.fetchCurrentWeather({ latitude, longitude }));
        break;
      case 1:
        dispatch(operations.fetchCurrentWeather({ latitude, longitude }));
        break;
      case 2:
        dispatch(operations.fetchCurrentWeather({ latitude, longitude }));
        break;
      case 3:
        dispatch(operations.fetchCurrentWeather({ latitude, longitude }));
        break;
      default:
        return;
    }
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Now" />
        <Tab label="Today" />
        <Tab label="3 Days" />
        <Tab label="5 Days" />
      </Tabs>
    </Box>
  );
}
