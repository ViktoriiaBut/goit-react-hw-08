import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    status: "",
  },

  reducers: {
    changeFilter(state, action) {
      state.status = action.payload;
    }
  }
});


export const selectNameFilter = (state) => state.filters.status;
export default slice.reducer;
export const { changeFilter } = slice.actions;

