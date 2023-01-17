import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: { latitude: null, longitude: null, name: null },
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity(state, action) {
      state.city = action.payload;
    },
  },
});

const cityReducer = citySlice.reducer;

export const { setCity } = citySlice.actions;

export default cityReducer;
