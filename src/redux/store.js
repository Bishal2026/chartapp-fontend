import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import messaageReducer from "./messageSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    message: messaageReducer,
  },
});

export default store;
