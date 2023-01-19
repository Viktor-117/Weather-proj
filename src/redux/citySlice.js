import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: { latitude: null, longitude: null, name: null, timezone: null },
  period: 'now',
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity(state, action) {
      state.city = action.payload;
    },
    setPeriod(state, action) {
      state.period = action.payload;
    },
  },
});

const cityReducer = citySlice.reducer;

export const { setCity, setPeriod } = citySlice.actions;

export default cityReducer;
