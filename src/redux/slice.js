import { createSlice } from '@reduxjs/toolkit';
import { getForecast } from './operations';

const initialState = {
  city: { latitude: null, longitude: null },
  isLoading: false,
  error: null,
};

const handlePending = state => (state.isLoading = true);

const slice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity(state, action) {
      console.log(action);
      state.city = action.payload;
    },
    // [getForecast.fulfilled](state, action) {
    //   console.log('Hi');
    //   console.log(action.payload);
    //   state.isLoading = false;
    //   state.city = action.payload;
    // },
    // [getForecast.pending]: handlePending,
    // [getForecast.rejected](state, action) {
    //   console.log(action);
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

const cityReducer = slice.reducer;

export const { setCity } = slice.actions;

console.log(cityReducer);
console.log(slice.actions);

export default cityReducer;
