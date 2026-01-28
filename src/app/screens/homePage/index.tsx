import { Container } from "@mui/material";
import Intro from "./Intro";
import ClassicFavorites from "./ClassicFavorites";
import SpecialDiscount from "./SpecialDiscount";
import BestSellers from "./BestSellers";
import Comments from "./Comments";
import Instagram from "./Instagram";
import "../../../css/home.css";
import TopMembers from "./TopMembers";

export function HomePage() {
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
