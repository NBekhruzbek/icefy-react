import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";
import { HomePage } from ".";

const initialState: HomePageState = {
  classicFavorites: [],
  bestSellers: [],
  topMembers: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setClassicFavorites: (state, action) => {
      state.classicFavorites = action.payload;
    },

    setbestSellers: (state, action) => {
      state.bestSellers = action.payload;
    },

    settopMembers: (state, action) => {
      state.topMembers = action.payload;
    },
  },
});

export const { setClassicFavorites, setbestSellers, settopMembers } =
  homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
