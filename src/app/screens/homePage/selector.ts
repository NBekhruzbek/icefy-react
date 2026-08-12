import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveClassicFavorites = createSelector(
  selectHomePage,
  (HomePage) => HomePage.classicFavorites,
);

export const retrieveBestSellers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.bestSellers,
);

export const retrieveTopMembers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topMembers,
);
