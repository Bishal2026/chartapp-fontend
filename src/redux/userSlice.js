import { createSlice } from "@reduxjs/toolkit";

const userSilce = createSlice({
  name: "user",
  initialState: {
    authUser: null,
    otherUsers: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setOtherUser: (state, action) => {
      state.otherUsers = action.payload;
    },
  },
});

export const { setAuthUser, setOtherUser } = userSilce.actions;
export default userSilce.reducer;
