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
import { CartItem } from "../../../lib/types/search";

SwiperCore.use([Autoplay, Navigation, Pagination]);

/** REDUX & SELECTOR */
const classicFavoritesRetriever = createSelector(
  retrieveClassicFavorites,
  (classicFavorites) => ({ classicFavorites }),
);

interface ClassicFavoritesProps {
  onAdd: (item: CartItem) => void;
}

export default function ClassicFavorites(props: ClassicFavoritesProps) {
  const { onAdd } = props;
  const { classicFavorites } = useSelector(classicFavoritesRetriever);

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
              return (
                <ProductCard
                  _id={ele._id}
                  image={ele.productImages[0]}
                  title={ele.productName}
                  description={ele.productDesc}
                  price={ele.productPrice}
                  views={ele.productViews}
                  likes={ele.productLikes}
                  isLiked={ele.isLiked}
                  rating={4.9}
                  width={280}
                  onAdd={onAdd}
                />
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
