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
import { setBestSellers, setClassicFavorites } from "./slice";
import { Product } from "../../../lib/types/product";
import { useDispatch } from "react-redux";
import ProductService from "../../services/ProductService";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setClassicFavorites: (data: Product[]) => dispatch(setClassicFavorites(data)),
  setBestSellers: (data: Product[]) => dispatch(setBestSellers(data)),
});

export function HomePage() {
  const { setClassicFavorites, setBestSellers } = actionDispatch(useDispatch());

  useEffect(() => {
    // Backend serverdan data fetch => Data
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productLikes",
      })
      .then((data) => {
        setClassicFavorites(data);
      })
      .catch((err) => {
        console.log(err);
      });

    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
      })
      .then((data) => {
        setBestSellers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
