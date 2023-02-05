import { createSlice } from '@reduxjs/toolkit';
const filterState = { filter: '' };
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
