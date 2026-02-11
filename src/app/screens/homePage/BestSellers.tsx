import React from "react";
import { Box, Container, Stack } from "@mui/material";

import SwiperCore from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ProductCard from "../../components/cards/BestSellers";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveBestSellers } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import "../../../css/bestSellers.css";

SwiperCore.use([Autoplay, Navigation, Pagination]);

/** REDUX SELECTOR */
const bestSellersRetriever = createSelector(
  retrieveBestSellers,
  (bestSellers) => ({
    bestSellers,
  }),
);

export default function BestSellers() {
  const { bestSellers } = useSelector(bestSellersRetriever);

  return (
    <div style={{ paddingBottom: "140px" }}>
      <Container>
        <Stack className="favorites">
          <Stack className="txt-area">
            <Box className={"main-txt"}>
              <Box component={"span"}>Our </Box>
              <Box component={"span"} color={"#F83D8E"}>
                Best{" "}
              </Box>
              <Box component={"span"}>Sellers</Box>
            </Box>
            <Box className={"extra-txt"}>
              Discover the favorites that keep our customers coming back for
              more.
            </Box>
          </Stack>
          <Stack className="cards">
            {bestSellers.map((product: Product) => {
              const imagePath = `${serverApi}/${product.productImages[0]}`;
              return (
                <ProductCard
                  _id={product._id}
                  image={imagePath}
                  title={product.productName}
                  description={product.productDesc}
                  price={product.productPrice}
                  views={product.productViews}
                  likes={product.productLikes}
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
