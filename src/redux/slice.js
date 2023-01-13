import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const initialState = {
  city: { longitude: null, latitude: null },
  isLoading: false,
  error: null,
};

const handlePending = state => (state.isLoading = true);

const slice = createSlice({
  name: 'city',
  initialState,
  extraReducers: {
    [operations.getForecast.fulfilled](state, action) {
      state.isLoading = false;
      state.city = action.payload;
    },
    [operations.getForecast.pending]: handlePending,
    [operations.getForecast.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const reducer = slice.reducer;

export default reducer;
