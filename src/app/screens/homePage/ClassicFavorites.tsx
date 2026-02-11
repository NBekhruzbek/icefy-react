import React from "react";
import { Box, Container, Stack } from "@mui/material";

import SwiperCore from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ProductCard from "../../components/cards/Favorites";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveClassicFavorites } from "./selector";
import "../../../css/classicFavorites.css";
import { useSelector } from "react-redux";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";

SwiperCore.use([Autoplay, Navigation, Pagination]);

/** REDUX SLICE & SELECTOR */
const classicFavoritesRetriever = createSelector(
  retrieveClassicFavorites,
  (classicFavorites) => ({ classicFavorites }),
);

export default function ClassicFavorites() {
  const { classicFavorites } = useSelector(classicFavoritesRetriever);

  console.log("classicFavorites:", classicFavorites);

  return (
    <div className="fav">
      <Container>
        <Stack className="favorites">
          <Stack className="txt-area">
            <Box className={"main-txt"}>
              <Box component={"span"}>Our </Box>
              <Box component={"span"} color={"#F83D8E"}>
                Classic{" "}
              </Box>
              <Box component={"span"}>Favorites</Box>
            </Box>
            <Box className={"extra-txt"}>
              Check out our top products that our customers love.
            </Box>
          </Stack>
          <Stack className="cards">
            {classicFavorites.map((ele: Product) => {
              const imagePath = `${serverApi}/${ele.productImages[0]}`;
              return (
                <ProductCard
                  _id={ele._id}
                  image={imagePath}
                  title={ele.productName}
                  description={ele.productDesc}
                  price={ele.productPrice}
                  views={ele.productViews}
                  likes={ele.productLikes}
                  rating={4.9}
                  width={280}
                />
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
