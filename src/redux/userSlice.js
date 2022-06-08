import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    selectedType: null,
    companyDetails: null,
    services: null,
    isFetching: false,
    error: false,
    errorMessage: null,
  },
  reducers: {
    setType: (state, action) => {
      state.selectedType = action.payload;
    },
    fetchingStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.errorMessage = null;
      state.currentUser = action.payload;
    },
    getCompanyDetails: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.errorMessage = null;
      state.companyDetails = action.payload;
    },
    getSelectedServices: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.errorMessage = null;
      state.services = action.payload;
    },
    fetchError: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  fetchingStart,
  loginSuccess,
  fetchError,
  getCompanyDetails,
  setType,
  getSelectedServices,
} = userSlice.actions;

export default userSlice.reducer;
