import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import apiService from "../api";

const userSlice = createSlice({
  name: "user",
  initialState: { isLoggedIn: false, username: null, token: null },
  reducers: {
    loginSuccess: (state, { payload }) => {
      const tokenData = jwtDecode(payload.token);
      state.isLoggedIn = true;
      state.username = tokenData.username;
      state.token = payload.token;
      apiService.setAuthorizationToken(payload.token);
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.username = null;
      state.token = null;
      apiService.setAuthorizationToken(null);
    }
  }
});

export const { loginSuccess } = userSlice.actions;

export const loginAsync = (email, password) => dispatch => {
  axios
    .post("https://localhost:8000/api/login_check", {
      email: email,
      password: password
    })
    .then(res => {
      dispatch(loginSuccess({ token: res.data.token }));
    })
    .catch(err => {
      alert(err);
    });
};

export default userSlice;
