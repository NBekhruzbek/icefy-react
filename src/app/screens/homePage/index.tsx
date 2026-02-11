import React, { useEffect } from "react";
import Intro from "./Intro";
import ClassicFavorites from "./ClassicFavorites";
import SpecialDiscount from "./SpecialDiscount";
import BestSellers from "./BestSellers";
import Comments from "./Comments";
import Instagram from "./Instagram";
import "../../../css/home.css";
import TopMembers from "./TopMembers";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setClassicFavorites } from "./slice";
import { Product } from "../../../lib/types/product";
import { retrieveClassicFavorites } from "./selector";
import { useDispatch, useSelector } from "react-redux";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setClassicFavorites: (data: Product[]) => dispatch(setClassicFavorites(data)),
});
const classicFavoritesRetriever = createSelector(
  retrieveClassicFavorites,
  (classicFavorites) => ({ classicFavorites }),
);

export function HomePage() {
  const { setClassicFavorites } = actionDispatch(useDispatch());
  const { classicFavorites } = useSelector(classicFavoritesRetriever);

  useEffect(() => {}, []);

  return (
    <div className="home-page">
      <Intro />
      <ClassicFavorites />
      <SpecialDiscount />
      <BestSellers />
      <TopMembers />
      <Comments />
      <Instagram />
    </div>
  );
}
