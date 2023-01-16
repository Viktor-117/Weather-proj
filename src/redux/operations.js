import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getForecast = createAsyncThunk(
  'city/getForecast',
  async ({ latitude, longitude }, thunkAPI) => {
    const queryParamaters = `https://api.open-meteo.com/v1/forecast?latitude=${latitude.toFixed(
      2
    )}&longitude=${longitude.toFixed(2)}&current_weather=true`;
    try {
      const response = await axios.get(queryParamaters);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getForecast;
