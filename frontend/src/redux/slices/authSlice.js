import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkIsUserLoggedIn: (state) => {
      if (localStorage.getItem("user")) {
        state.isLoggedIn = true;
      }
    },
    login: (state, action) => {
      localStorage.setItem("user", action.payload);
      state.isLoggedIn = true;
    },
    logout: (state) => {
      localStorage.clear();
      state.isLoggedIn = false;
    },
  },
});

export const { checkIsUserLoggedIn, logout, login } = authSlice.actions;

export default authSlice.reducer;
