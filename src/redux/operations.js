import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://api.open-meteo.com/v1';

const getForecast = createAsyncThunk(
  'city/getForecast',
  async ({ latitude, longitude }, thunkAPI) => {
    const queryParamaters = `https://api.open-meteo.com/v1/forecast?latitude=${latitude.toFixed(
      2
    )}&longitude=${longitude.toFixed(2)}&current_weather=true`;
    try {
      const response = await axios.get(queryParamaters, {
        headers: {
          'Access-Control-Allow-Origin': 'https://api.open-meteo.com',
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getForecast;
