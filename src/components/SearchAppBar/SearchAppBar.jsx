import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  SearchWrapper,
} from './SearchAppBar.styled';
import CitySelect from 'components/CitySelect';
import axios from 'axios';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

axios.defaults.baseURL = 'https://geocoding-api.open-meteo.com/v1/';

export default function SearchAppBar() {
  const [location, setLocation] = useState('');
  const [cityList, setCityList] = useState('');

  const handleChange = e => {
    setLocation(e.target.value);

    async function searchLocation() {
      try {
        const res = await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=5`
        );
        setCityList(res.data.results);
      } catch (error) {}
    }

    searchLocation();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Weather
          </Typography>

          <SearchWrapper>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search location"
                inputProps={{ 'aria-label': 'search' }}
                value={location}
                onChange={handleChange}
              />
            </Search>
            {cityList && location && (
              <CitySelect cities={cityList} isChosen={setLocation} />
            )}
          </SearchWrapper>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
