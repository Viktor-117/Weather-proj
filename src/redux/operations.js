import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCurrentWeather = createAsyncThunk(
  'weather/getForecast',
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

const fetchTodayWeather = createAsyncThunk(
  'weather/getForecast',
  async ({ latitude, longitude }, thunkAPI) => {
    const queryParamaters = `https://api.open-meteo.com/v1/forecast?latitude=${latitude.toFixed(
      2
    )}&longitude=${longitude.toFixed(
      2
    )}&hourly=temperature_2m,precipitation,rain,weathercode,windspeed_10m`;
    try {
      const response = await axios.get(queryParamaters);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchDailyWeather = createAsyncThunk(
  'weather/getForecast',
  async ({ latitude, longitude }, thunkAPI) => {
    const queryParamaters = `https://api.open-meteo.com/v1/forecast?latitude=${latitude.toFixed(
      2
    )}&longitude=${longitude.toFixed(
      2
    )}&timeformat=unixtime&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max,weathercode&timezone=auto`;
    try {
      const response = await axios.get(queryParamaters);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = {
  fetchCurrentWeather,
  fetchTodayWeather,
  fetchDailyWeather,
};

export default operations;
