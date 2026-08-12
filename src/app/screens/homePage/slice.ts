import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

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

    setBestSellers: (state, action) => {
      state.bestSellers = action.payload;
    },

    setTopMembers: (state, action) => {
      state.topMembers = action.payload;
    },
  },
});

export const { setClassicFavorites, setBestSellers, setTopMembers } =
  homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
