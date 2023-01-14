import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.open-meteo.com/v1';

const getForecast = createAsyncThunk(
  'city/getForecast',
  async (data, thunkAPI) => {
    try {
      const response = await axios.get('forecast/', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getForecast;
