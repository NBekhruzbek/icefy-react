import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../../../css/footer.css";

const Footers = styled.div`
  width: 100%;
  height: 390px;
  display: flex;
  background: #683292;
  background-size: cover;
`;

export default function Footer() {
  const authMember = null;

  return (
    <Footers>
      <Container sx={{ maxWidth: "100%" }}>
        <Stack className="footer">
          <Stack className="footer-logo">
            <Box>
              <img
                style={{ width: "160px", height: "160px " }}
                src="/icons/logo.svg"
              />
            </Box>
            <Typography className="logo-txt">Icefy</Typography>
          </Stack>
          <Stack className="navigator">
            <Typography className="nav-txt">Navigation</Typography>
            <Stack className="nav-menu">
              <Stack className="nav-menu1">
                <Box className={"nav-menu-nav"}>
                  <Typography className="nav-dot">.</Typography>
                  <NavLink to="/" className={"nav-menu-txt"}>
                    Home
                  </NavLink>
                </Box>
                <Box className={"nav-menu-nav"}>
                  <Typography className="nav-dot">.</Typography>
                  <NavLink to="/about" className={"nav-menu-txt"}>
                    About
                  </NavLink>
                </Box>
                <Box className={"nav-menu-nav"}>
                  <Typography className="nav-dot">.</Typography>
                  <NavLink to="/blog-page" className={"nav-menu-txt"}>
                    Blog
                  </NavLink>
                </Box>
              </Stack>
              <Stack className="nav-menu1">
                <Box className={"nav-menu-nav"}>
                  <Typography className="nav-dot">.</Typography>
                  <NavLink to="/products" className={"nav-menu-txt"}>
                    Products
                  </NavLink>
                </Box>
                <Box className={"nav-menu-nav"}>
                  <Typography className="nav-dot">.</Typography>
                  <NavLink to="/orders" className={"nav-menu-txt"}>
                    Orders
                  </NavLink>
                </Box>
                <Box className={"nav-menu-nav"}>
                  <Typography className="nav-dot">.</Typography>
                  <NavLink to="/help" className={"nav-menu-txt"}>
                    Help
                  </NavLink>
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: "10px",
                }}
              >
                <LocationOnIcon sx={{ color: "white" }} />
              </Box>
              <Stack sx={{ pl: "15px", mt: "6px" }}>
                <Box className={"nav-menu-txt2"}>Address: </Box>
                <Box className={"nav-menu-txt3"}>206 World cup-ro, 원천동</Box>
                <Box className={"nav-menu-txt3"}>
                  Yeongtong-gu, Suwon-si, Gyeonggi-do
                </Box>
              </Stack>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                mt: "40px",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <EmailIcon sx={{ color: "white" }} />
              </Box>

              <Stack sx={{ pl: "15px", mt: "6px" }}>
                <Box className={"nav-menu-txt2"}>Email:</Box>
                <Box className={"nav-menu-txt3"}>bekhruzbek2022@gmail.com</Box>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <PhoneEnabledIcon
                sx={{ width: "46px", height: "46px", color: "white" }}
              />

              <Stack sx={{ pl: "15px", mt: "6px" }}>
                <Box className={"nav-menu-txt2"}>010-5889-8183</Box>
                <Box className={"nav-menu-txt3"}>Got Questions?</Box>
                <Box className={"nav-menu-txt3"}>
                  Call us 24/7, when you want
                </Box>
              </Stack>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                mt: "40px",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a href="https://www.facebook.com/NBekhruzbek">
                  <FacebookIcon sx={{ color: "white", mt: "5px" }} />
                </a>
              </Box>
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ml: "30px",
                }}
              >
                <a href="https://www.linkedin.com/in/nbekhruzbek/">
                  <LinkedInIcon sx={{ color: "white", mt: "5px" }} />
                </a>
              </Box>
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ml: "30px",
                }}
              >
                <a href="https://www.instagram.com/mr_bekhruzbek1">
                  <InstagramIcon sx={{ color: "white", mt: "5px" }} />
                </a>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            padding: "20px 0",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            justifyContent: "center",
            alignItems: "center",
            background: "#683292",
            marginTop: "65px",
          }}
        >
          <Box
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontFamily: "Archivo",
              fontSize: "14px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Copyright © 2024 BlackRise Themes Inc All rights reserved.
          </Box>
        </Stack>
      </Container>
    </Footers>
  );
}
