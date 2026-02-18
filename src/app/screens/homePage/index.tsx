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
import { setBestSellers, setClassicFavorites, setTopMembers } from "./slice";
import { Product } from "../../../lib/types/product";
import { useDispatch } from "react-redux";
import ProductService from "../../services/ProductService";
import { Member } from "../../../lib/types/member";
import MemberService from "../../services/MemberService";
import { CartItem } from "../../../lib/types/search";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setClassicFavorites: (data: Product[]) => dispatch(setClassicFavorites(data)),
  setBestSellers: (data: Product[]) => dispatch(setBestSellers(data)),
  setTopMembers: (data: Member[]) => dispatch(setTopMembers(data)),
});

interface HomePageProps {
  onAdd: (item: CartItem) => void;
}

export function HomePage(props: HomePageProps) {
  const { onAdd } = props;
  const { setClassicFavorites, setBestSellers, setTopMembers } =
    actionDispatch(useDispatch());

  useEffect(() => {
    // Backend serverdan data fetch => Data
    const product = new ProductService();
    const member = new MemberService();

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

    member
      .getTopMembers()
      .then((data) => {
        setTopMembers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home-page">
      <Intro />
      <ClassicFavorites onAdd={onAdd} />
      <SpecialDiscount />
      <BestSellers onAdd={onAdd} />
      <TopMembers />
      <Comments />
      <Instagram />
    </div>
  );
}
