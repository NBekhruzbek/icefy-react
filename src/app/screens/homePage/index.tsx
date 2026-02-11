import React, { useEffect } from "react";
import Intro from "./Intro";
import ClassicFavorites from "./ClassicFavorites";
import SpecialDiscount from "./SpecialDiscount";
import BestSellers from "./BestSellers";
import Comments from "./Comments";
import Instagram from "./Instagram";
import "../../../css/home.css";
import TopMembers from "./TopMembers";

export function HomePage() {
  // Selector: Store => Data

  useEffect(() => {
    // Backend server data request => Data
    // Slice: Data => Store
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
