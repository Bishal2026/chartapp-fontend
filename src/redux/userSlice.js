import { createSlice } from "@reduxjs/toolkit";

const userSilce = createSlice({
  name: "user",
  initialState: {
    authUser: null,
    otherUsers: null,
    seletedUser: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setOtherUser: (state, action) => {
      state.otherUsers = action.payload;
    },
    setSeletedUser: (state, action) => {
      state.seletedUser = action.payload;
    },
  },
});

export const { setAuthUser, setOtherUser, setSeletedUser } = userSilce.actions;
export default userSilce.reducer;
