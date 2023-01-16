import { createSlice } from '@reduxjs/toolkit';
import getForecast from './operations';

const initialState = {
  city: { latitude: null, longitude: null },
  cityName: null,
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
    setCityName(state, action) {
      state.cityName = action.payload;
    },
  },
  extraReducers: {
    [getForecast.fulfilled](state, action) {
      console.log(action.payload);
      state.isLoading = false;
      state.city = action.payload;
    },
    [getForecast.pending]: handlePending,
    [getForecast.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const cityReducer = slice.reducer;

export const { setCityName } = slice.actions;

export default cityReducer;
