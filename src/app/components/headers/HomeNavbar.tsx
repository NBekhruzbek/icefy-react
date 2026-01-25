import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
  const authMember = null;
  return (
    <div className="home-navbar">
      <div className="video-bg">
        <video autoPlay muted loop playsInline>
          <source src="/video/header2.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <Container sx={{ mt: "55px", height: "643px" }}>
        <Stack
          sx={{ height: "50px" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography>
              <NavLink to="/" className={"icefy-logo"}>
                <img
                  style={{ width: "160px", height: "160px " }}
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
              <NavLink to="/" activeClassName={"underline"}>
                Home
              </NavLink>
            </Box>
            <Box className={"nav-txt hover-line"}>
              <NavLink to="/about" activeClassName={"underline"}>
                About Us
              </NavLink>
            </Box>
            <Box className={"nav-txt hover-line"}>
              <NavLink to="/prducts" activeClassName={"underline"}>
                Products
              </NavLink>
            </Box>
            {!authMember ? (
              <Box className={"nav-txt hover-line"}>
                <NavLink to="/orders" activeClassName={"underline"}>
                  Orders
                </NavLink>
              </Box>
            ) : null}
            <Box className={"nav-txt hover-line"}>
              <NavLink to="/blog-page" activeClassName={"underline"}>
                Blogs
              </NavLink>
            </Box>
            {!authMember ? (
              <Box className={"nav-txt hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"nav-txt hover-line"}>
              <NavLink to="/help" activeClassName={"underline"}>
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
        <Stack>DETAIL</Stack>
      </Container>
    </div>
  );
}
