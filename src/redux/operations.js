import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.open-meteo.com/v1';

export const getForecast = createAsyncThunk(
  'city/getForecast',
  async (data, { rejectWithValue }) => {
    console.log('hi');
    try {
      const response = await axios.get('forecast/', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
