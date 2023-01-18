import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const { fetchCurrentWeather, fetchTodayWeather, fetchDailyWeather } =
  operations;

const initialState = {
  forecastData: null,
  isLoading: false,
  loadCard: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.loadCard = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.forecastData = action.payload;
  state.loadCard = true;
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: {
    [fetchCurrentWeather.fulfilled]: handleFulfilled,
    [fetchCurrentWeather.pending]: handlePending,
    [fetchCurrentWeather.rejected]: handleRejected,

    [fetchTodayWeather.fulfilled]: handleFulfilled,
    [fetchTodayWeather.pending]: handlePending,
    [fetchTodayWeather.rejected]: handleRejected,

    [fetchDailyWeather.fulfilled]: handleFulfilled,
    [fetchDailyWeather.pending]: handlePending,
    [fetchDailyWeather.rejected]: handleRejected,
  },
});

const weatherReducer = weatherSlice.reducer;

// export const { getForecast } = weatherSlice.actions;

export default weatherReducer;
