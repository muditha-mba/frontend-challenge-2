import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    setAppMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setAppMode } = appSlice.actions;

export default appSlice.reducer;
