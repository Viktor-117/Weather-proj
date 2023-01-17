import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchCurrentWeather = createAsyncThunk(
  'city/getForecast',
  async ({ latitude, longitude }, thunkAPI) => {
    const queryParamaters = `https://api.open-meteo.com/v1/forecast?latitude=${latitude.toFixed(
      2
    )}&longitude=${longitude.toFixed(2)}&current_weather=true`;
    try {
      const response = await axios.get(queryParamaters);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchTodayWeather = createAsyncThunk(
  'city/getForecast',
  async ({ latitude, longitude }, thunkAPI) => {
    const queryParamaters = `https://api.open-meteo.com/v1/forecast?latitude=${latitude.toFixed(
      2
    )}&longitude=${longitude.toFixed(
      2
    )}&hourly=temperature_2m,precipitation,rain,weathercode`;
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
  'city/getForecast',
  async ({ latitude, longitude }, thunkAPI) => {
    const queryParamaters = `https://api.open-meteo.com/v1/forecast?latitude=${latitude.toFixed(
      2
    )}&longitude=${longitude.toFixed(
      2
    )}&daily=temperature_2m,precipitation,rain,weathercode`;
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
