import React from "react";
import { Container, Stack, Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../../css/intro.css";

export default function Intro() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Container>
        <Box className={"circle-bg"}></Box>
        <img
          className="img1"
          src="/img/intro1.png"
          alt="Your browser can not support the img!"
        />
        <Stack className="intro" direction={"row"}>
          <img
            className={"intro-img"}
            src="/img/intro.png"
            alt="Your browser can not support the img!"
          />
          <Stack className="txt-area">
            <img
              className="img2"
              src="/img/intro2.png"
              alt="Your browser can not support the img!"
            />
            <Stack>
              <Box className={"main-txt1"}>
                Relive the Sweet Memories of Classic
              </Box>
              <Box className={"main-txt2"}>Ice Creams</Box>
            </Stack>
            <Box className={"extra-txt"}>
              From rich chocolate fudge to creamy vanilla sundaes, discover our
              menu of classic ice cream creations.
            </Box>
            <Box>
              <NavLink to={"/products"} style={{ textDecoration: "none" }}>
                <Button className={"button"} variant={"contained"}>
                  Explore Our Menu
                </Button>
              </NavLink>
            </Box>
          </Stack>
          <img
            className="img3 deco"
            src="/img/intro3.png"
            alt="Your browser can not support the img!"
          />
        </Stack>
      </Container>
    </div>
  );
}
