import { Box, Title } from './HomeView.styled';

export default function HomeView() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Title>Welcome to Weather Forecast Application!</Title>
      <Title>Please select your location in Searchbar</Title>
    </Box>
  );
}
