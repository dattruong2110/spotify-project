import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import songReducer from "../features/songSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    song: songReducer,
  },
});
