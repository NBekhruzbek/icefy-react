import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../../css/classicFavorites.css";
import SwiperCore from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ProductCard from "../../components/cards/Favorites";

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function ClassicFavorites() {
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
            <ProductCard
              image="/img/37.png"
              title="Chocolate Brownie Sundae"
              description="Rich chocolate ice cream with chunks of brownie."
              price={5.49}
              rating={4.9}
              calories={255}
              width={280}
              height={420}
            />
            <ProductCard
              image="/img/38.png"
              title="Chocolate Brownie Sundae"
              description="Rich chocolate ice cream with chunks of brownie."
              price={5.49}
              rating={4.9}
              calories={255}
              width={280}
              height={420}
            />
            <ProductCard
              image="/img/40.png"
              title="Chocolate Brownie Sundae"
              description="Rich chocolate ice cream with chunks of brownie."
              price={5.49}
              rating={4.9}
              calories={255}
              width={280}
              height={420}
            />
            <ProductCard
              image="/img/41.png"
              title="Chocolate Brownie Sundae"
              description="Rich chocolate ice cream with chunks of brownie."
              price={5.49}
              rating={4.9}
              calories={255}
              width={280}
              height={420}
            />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
