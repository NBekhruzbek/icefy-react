import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

import SwiperCore from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ProductCard from "../../components/cards/BestSellers";
import "../../../css/bestSellers.css";

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function BestSellers() {
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
            <ProductCard
              image="/img/bestSeller1.png"
              title="Chocolate Brownie Sundae"
              description="Rich chocolate ice cream with chunks of brownie."
              price={5.49}
              rating={4.9}
              calories={255}
              width={280}
              height={420}
            />
            <ProductCard
              image="/img/bestSeller2.png"
              title="Chocolate Brownie Sundae"
              description="Rich chocolate ice cream with chunks of brownie."
              price={5.49}
              rating={4.9}
              calories={255}
              width={280}
              height={420}
            />
            <ProductCard
              image="/img/bestSeller3.png"
              title="Chocolate Brownie Sundae"
              description="Rich chocolate ice cream with chunks of brownie."
              price={5.49}
              rating={4.9}
              calories={255}
              width={280}
              height={420}
            />
            <ProductCard
              image="/img/bestSeller4.png"
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
