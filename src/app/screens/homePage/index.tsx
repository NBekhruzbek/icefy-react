import { Container } from "@mui/material";
import Intro from "./Intro";
import ClassicFavorites from "./ClassicFavorites";
import Categories from "./Categories";
import SpecialDiscount from "./SpecialDiscount";
import BestSellers from "./BestSellers";
import Comments from "./Comments";
import Instagram from "./Instagram";
import "../../../css/home.css";

export function HomePage() {
  return (
    <div className="home-page">
      <Intro />
      <ClassicFavorites />
      <Categories />
      <SpecialDiscount />
      <BestSellers />
      <Comments />
      <Instagram />
    </div>
  );
}
