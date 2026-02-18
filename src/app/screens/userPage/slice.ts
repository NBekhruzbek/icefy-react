import { createSlice } from "@reduxjs/toolkit";
import { UserPageState } from "../../../lib/types/screen";

const initialState: UserPageState = {
  likedProducts: [],
};

const userPageSlice = createSlice({
  name: "userPage",
  initialState,
  reducers: {
    setLikedProducts: (state, action) => {
      state.likedProducts = action.payload;
    },
  },
});

export const { setLikedProducts } = userPageSlice.actions;

const UserPageReducer = userPageSlice.reducer;
export default UserPageReducer;
