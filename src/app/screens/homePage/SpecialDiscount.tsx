import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../../css/specialDiscount.css";

export default function SpecialDiscount() {
  return (
    <div style={{ background: "#683292" }}>
      <Box sx={{ position: "relative" }}>
        <img
          style={{
            position: "absolute",
            width: "900px",
            height: "693px",
            zIndex: "0",
            right: "0",
          }}
          src="/img/discount_background.png"
          alt="Your browser doesn't support the image!"
        />
      </Box>
      <Container sx={{ position: "relative" }}>
        <img
          src="/img/discount50.png"
          alt="Your browser does not support the img!"
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            marginLeft: "500px",
            zIndex: "1000",
          }}
        />
        <Stack className="discount" direction={"row"}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: "140px",
              ml: "100px",
              paddingBottom: "140px",
            }}
          >
            <Box className={"main-txt"}>Special Discount!</Box>
            <Box className={"extra-txt"}>Buy One Sundae, Get One 50% Off!</Box>
            <Stack sx={{ flexDirection: "row" }}>
              <NavLink to={"/products"} className={"nav-link"}>
                <Button className="button" variant="contained">
                  Get This Deal
                </Button>
              </NavLink>
              <Box className="discount-code">
                Use code: SUMMER50 at checkout.
              </Box>
            </Stack>
          </Stack>
          <Box position={"relative"}>
            <img
              src="/img/sundae.png"
              alt="Your browser does not support the img!"
              style={{
                width: "563px",
                height: "538px",
                marginTop: "40px",
                zIndex: "5",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
