import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';
import { Box, Pic } from './WeatherInfo.styled';
import selectors from 'redux/selectors';
import selectimg from './selectImg';

export default function WeatherInfo() {
  const { current_weather } = useSelector(selectors.getForecastData);
  const img = selectimg(current_weather.weathercode);
  console.log(img);

  return (
    <Box>
      <Card sx={{ width: 200 }}>
        <CardActionArea>
          <Pic src={img} alt="" height="100" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`Temp.: ${Math.round(current_weather.temperature)} \u{00B0}C`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Wind speed: ${current_weather.windspeed} km/h`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
