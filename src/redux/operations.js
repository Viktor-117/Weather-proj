import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCurrentWeather = createAsyncThunk(
  'city/getForecast',
  async ({ latitude, longitude }, thunkAPI) => {
    // console.log(latitude, longitude);
    const queryParamaters = `https://api.open-meteo.com/v1/forecast?latitude=${latitude.toFixed(
      2
    )}&longitude=${longitude.toFixed(
      2
    )}&hourly=temperature_2m,precipitation,rain,weathercode`;
    try {
      const response = await axios.get(queryParamaters);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = { fetchCurrentWeather };

export default operations;
