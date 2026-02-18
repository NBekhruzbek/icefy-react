import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";

const selectUserPage = (state: AppRootState) => state.userPage;

export const retrieveLikedProducts = createSelector(
  selectUserPage,
  (UserPage) => UserPage.likedProducts,
);
