import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../configs/firebaseConfig";

export const getUserInfo = () => {
  const user = auth.currentUser;

  if (user !== null) {
    const uid = user.uid;
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    const gender = user.gender;
    const dob = user.dob;
    const country = user.country;

    return {
      uid,
      displayName,
      email,
      photoURL,
      emailVerified,
      gender,
      dob,
      country,
    };
  } else {
    return null;
  }
};

const storedUser = localStorage.getItem("user");
const initialUser = storedUser ? JSON.parse(storedUser) : null;

const initialState = {
  user: initialUser,
  isAuthenticated: initialUser !== null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
