import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import { Box, Title } from './HomeView.styled';

export default function HomeView() {
  const cityIsChosen = useSelector(selectors.getCityName);

  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Title>Welcome to Weather Forecast Application!</Title>
      <Title>Please select your location in Searchbar</Title>
      {cityIsChosen && <Navigate to="/weather" />}
    </Box>
  );
}
