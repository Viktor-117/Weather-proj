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
  console.log('Hi');
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: {
    [fetchCurrentWeather.fulfilled](state, action) {
      console.log('Hi');
      state.isLoading = false;
      state.forecastData = action.payload;
      state.loadCard = true;
    },
    [fetchCurrentWeather.pending]: handlePending,
    [fetchCurrentWeather.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const weatherReducer = weatherSlice.reducer;

// export const { getForecast } = weatherSlice.actions;

export default weatherReducer;
