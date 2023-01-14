import { useDispatch } from 'react-redux';
import { City, CityInfo, Container } from './CitySelect.styled';
import FormControl from '@mui/material/FormControl';
import { setCity } from 'redux/slice';

export default function CitySelect({ cities }) {
  const dispatch = useDispatch();

  const handleClick = ({ latitude, longitude }) => {
    const gps = { latitude, longitude };
    dispatch(setCity(gps));
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
