import { useDispatch, useSelector } from 'react-redux';
import { City, CityInfo, Container } from './CitySelect.styled';
import FormControl from '@mui/material/FormControl';
import { setCity } from 'redux/citySlice';
import selectors from 'redux/selectors';
import operations from 'redux/operations';

export default function CitySelect({ cities, isChosen }) {
  const dispatch = useDispatch();
  const period = useSelector(selectors.getPeriod);

  const handleClick = ({ latitude, longitude, name, timezone }) => {
    dispatch(setCity({ latitude, longitude, name, timezone }));
    period === 'now' &&
      dispatch(operations.fetchCurrentWeather({ latitude, longitude }));
    period === 'today' &&
      dispatch(operations.fetchTodayWeather({ latitude, longitude }));
    period === '3 days' &&
      dispatch(operations.fetchDailyWeather({ latitude, longitude, timezone }));
    period === '7 days' &&
      dispatch(operations.fetchDailyWeather({ latitude, longitude, timezone }));
    isChosen('');
  };

  return (
    <Container
      sx={{
        width: 270,
      }}
    >
      <FormControl fullWidth>
        {cities.map(city => {
          const imgURL = `https://hatscripts.github.io/circle-flags/flags/${city.country_code.toLowerCase()}.svg`;
          return (
            <City key={city.id} onClick={() => handleClick(city)}>
              <img src={imgURL} alt="flag" width="20" />
              <CityInfo>{`${city.name}, ${city.country}`}</CityInfo>
            </City>
          );
        })}
      </FormControl>
    </Container>
  );
}
