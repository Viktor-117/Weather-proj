import { createSlice } from '@reduxjs/toolkit';
import getForecast from './operations';

const initialState = {
  city: { latitude: null, longitude: null, name: null },
  forecastData: null,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const slice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity(state, action) {
      state.city = action.payload;
    },
  },
  extraReducers: {
    [getForecast.fulfilled](state, action) {
      console.log(action.payload);
      state.isLoading = false;
      state.forecastData = action.payload;
    },
    [getForecast.pending]: handlePending,
    [getForecast.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const cityReducer = slice.reducer;

export const { setCity } = slice.actions;

export default cityReducer;
