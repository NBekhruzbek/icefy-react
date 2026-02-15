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
import "../../../css/homeNavbar.css";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { Logout } from "@mui/icons-material";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
  handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  handleCloseLogout: () => void;
  handleLogoutRequest: () => void;
}
export function HomeNavbar(props: HomeNavbarProps) {
  const {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
    setSignupOpen,
    setLoginOpen,
    handleLogoutClick,
    anchorEl,
    handleCloseLogout,
    handleLogoutRequest,
  } = props;

  const { authMember } = useGlobals();

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
        <Stack sx={{ mt: "177px", ml: "76px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Box
              sx={{
                width: "60px",
                height: "3px",
                backgroundColor: "#f83d8e",
              }}
            />
            <Box className={"welcome-txt"}>Welcome to The Icefy</Box>
          </Box>
          <Stack sx={{ width: "847px", height: "247px", mt: "30px" }}>
            <Box className={"dis-txt"}>Discover Sweet</Box>
            <Box className={"dis-txt"}>Delights!</Box>
          </Stack>
          <Stack>
            <Box className={"intro-txt"}>
              Relish the timeless taste of handcrafted ice cream, made with
              passion and the finest ingredients.
            </Box>
          </Stack>
          <Stack>
            {!authMember ? (
              <Box sx={{ mt: "60px" }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "#ad06b9",
                    color: "#f8f8ff",
                    width: "120px",
                    height: "50px",
                  }}
                  onClick={() => setSignupOpen(true)}
                >
                  SIGN UP
                </Button>
              </Box>
            ) : (
              <img />
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
