import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import messaageReducer from "./messageSlice.js";

import socketReducer from "./socketSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    message: messaageReducer,
    socket: socketReducer,
  },
});

export default store;
