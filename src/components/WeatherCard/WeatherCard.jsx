import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box, Pic, Time } from './WeatherCard.styled';
import selectimg from './selectImg';

export default function WeatherCard({ weatherInfo }) {
  console.log(weatherInfo);
  const { temperature, weathercode, windspeed, hour } = weatherInfo;

  const img = selectimg(weathercode);

  return (
    <Box>
      <Card sx={{ width: 240 }}>
        <CardActionArea>
          {hour && (
            <Time gutterBottom variant="h5" component="div">
              {hour}
            </Time>
          )}

          <Pic src={img} alt="" height="100" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`Temp.: ${Math.round(temperature)} \u{00B0}C`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Wind speed: ${windspeed} km/h`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
