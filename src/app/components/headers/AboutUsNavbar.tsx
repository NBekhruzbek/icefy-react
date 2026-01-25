import React, { useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../../css/otherNavbar.css";

export function AboutUsNavbar() {
  const authMember = null;
  return (
    <div
      className="other-navbar"
      style={{
        height: "500px",
      }}
    >
      <Container sx={{ mt: "10px" }}>
        <Stack
          sx={{ height: "80px" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography>
              <NavLink to="/" className={"icefy-logo"}>
                <img
                  style={{ width: "120px", height: "120px " }}
                  src="/icons/logo.svg"
                />
                Icefy
              </NavLink>
            </Typography>
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            minWidth={"700px"}
            alignItems={"center"}
          >
            <Box className={"nav-txt hover-line"}>
              <NavLink to="/" activeClassName={"underline"} exact>
                Home
              </NavLink>
            </Box>
            <Box className={"nav-txt hover-line"}>
              <NavLink to="/about" activeClassName={"underline"} exact>
                About Us
              </NavLink>
            </Box>
            <Box className={"nav-txt hover-line"}>
              <NavLink to="/products" activeClassName={"underline"} exact>
                Products
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"nav-txt hover-line"}>
                <NavLink to="/orders" activeClassName={"underline"} exact>
                  Orders
                </NavLink>
              </Box>
            ) : null}
            <Box className={"nav-txt hover-line"}>
              <NavLink to="/blog-page" activeClassName={"underline"} exact>
                Blogs
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"nav-txt hover-line"}>
                <NavLink to="/user-page" activeClassName={"underline"} exact>
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"nav-txt hover-line"}>
              <NavLink to="/help-page" activeClassName={"underline"} exact>
                Help
              </NavLink>
            </Box>
            {/** BASKET */}

            {!authMember ? (
              <Box>
                <Button
                  variant="contained"
                  style={{ background: "#F83D8E", color: "#f8f8ff" }}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img />
            )}
          </Stack>
        </Stack>
        <Stack
          sx={{
            mt: "140px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box className={"main-txt"}>About Us</Box>
          <Box
            sx={{
              width: "231.19px",
              height: "52px",
              mt: "35px",
              ml: "500px",
              borderRadius: "35px",
              background: "#fff",
              boxShadow: "0 2px 73px 2px rgba(0, 0, 0, 0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <Box>
              <NavLink
                to={"/"}
                style={{
                  color: "#f83d8e",
                  textDecoration: "none",
                  fontFamily: "Archivo",
                  fontSize: "18px",
                }}
              >
                Home
              </NavLink>
            </Box>
            <Box
              sx={{ color: "#0f0200", fontFamily: "Archivo", fontSize: "18px" }}
            >
              / About Us
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
