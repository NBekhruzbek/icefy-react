import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../../css/otherNavbar.css";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { Logout } from "@mui/icons-material";

interface ChosenPropducProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setLoginOpen: (isOpen: boolean) => void;
  handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  handleCloseLogout: () => void;
  handleLogoutRequest: () => void;
}
export function ChosenProductNavbar(props: ChosenPropducProps) {
  const {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
    setLoginOpen,
    handleLogoutClick,
    anchorEl,
    handleCloseLogout,
    handleLogoutRequest,
  } = props;

  const { authMember } = useGlobals();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="other-navbar"
      style={{
        height: "500px",
      }}
    >
      <Stack
        sx={{
          height: "90px",
          width: "100%",
          pl: "100px",
          pr: "120px",
          position: "fixed",
          top: "0",
          zIndex: "9999",
          background: scrolled ? "rgba(255,255,255,0.6)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
        }}
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
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Home
            </NavLink>
          </Box>
          <Box className={"nav-txt hover-line"}>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              About Us
            </NavLink>
          </Box>
          <Box className={"nav-txt hover-line"}>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Products
            </NavLink>
          </Box>
          {authMember ? (
            <Box className={"nav-txt hover-line"}>
              <NavLink
                to="/orders"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Orders
              </NavLink>
            </Box>
          ) : null}
          <Box className={"nav-txt hover-line"}>
            <NavLink
              to="/blog-page"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Blogs
            </NavLink>
          </Box>
          {authMember ? (
            <Box className={"nav-txt hover-line"}>
              <NavLink
                to="/user-page"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                My Page
              </NavLink>
            </Box>
          ) : null}
          <Box className={"nav-txt hover-line"}>
            <NavLink
              to="/help-page"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Help
            </NavLink>
          </Box>
          {/** BASKET */}
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            onDelete={onDelete}
            onDeleteAll={onDeleteAll}
          />

          {!authMember ? (
            <Box>
              <Button
                variant="contained"
                style={{ background: "#F83D8E", color: "#f8f8ff" }}
                onClick={() => setLoginOpen(true)}
              >
                Login
              </Button>
            </Box>
          ) : (
            <img
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                border: "2px solid #f83d8e",
              }}
              src={
                authMember?.memberImage
                  ? `${serverApi}/${authMember.memberImage}`
                  : "/icons/user.png"
              }
              aria-haspopup={"true"}
              onClick={handleLogoutClick}
            />
          )}
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={Boolean(anchorEl)}
            onClose={handleCloseLogout}
            onClick={handleCloseLogout}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleLogoutRequest}>
              <ListItemIcon>
                <Logout fontSize="small" style={{ color: "blue" }} />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Stack>
      </Stack>
      <Container sx={{ mt: "10px" }}>
        <Stack
          sx={{
            mt: "140px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box className={"main-txt"}>Product Detail</Box>
          <Box
            sx={{
              width: "331.19px",
              height: "52px",
              mt: "35px",
              ml: "465px",
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
                Home{" "}
              </NavLink>
              <NavLink
                to={"/products"}
                style={{
                  color: "#f83d8e",
                  textDecoration: "none",
                  fontFamily: "Archivo",
                  fontSize: "18px",
                }}
              >
                / Products
              </NavLink>
            </Box>
            <Box
              sx={{ color: "#0f0200", fontFamily: "Archivo", fontSize: "18px" }}
            >
              / Product-Detail
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
