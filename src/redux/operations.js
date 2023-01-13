import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.open-meteo.com/v1';

const getForecast = createAsyncThunk(
  'city/getForecast',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('forecast/', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = { getForecast };

export default operations;
