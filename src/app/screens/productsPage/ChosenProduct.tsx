import {
  Container,
  Stack,
  Box,
  Typography,
  Button,
  Rating,
  IconButton,
} from "@mui/material";
import { ChosenProductNavbar } from "../../components/headers/ChosenProduct";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { setChosenProduct, setRestaurant } from "./slice";
import { retrieveChosenProduct, retrieveRestaurant } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setRestaurant: (data: Product[]) => dispatch(setRestaurant(data)),
  setChosenProduct: (data: Product[]) => dispatch(setChosenProduct(data)),
});

const productsRetriever = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  }),
);

const restaurantRetriever = createSelector(
  retrieveRestaurant,
  (restaurant) => ({
    restaurant,
  }),
);

export default function ChosenProduct() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "/img/AlmondJoySundae.jpg",
    "/img/BerrySorbet.jpg",
    "/img/ChocolateFudge.jpg",
    "/img/DairyFreeAlmond.jpg",
    "/img/DairyFreeClassic.jpg",
  ];

  const thumbnails = [
    "/img/AlmondJoySundae.jpg",
    "/img/BerrySorbet.jpg",
    "/img/ChocolateFudge.jpg",
    "/img/DairyFreeAlmond.jpg",
    "/img/DairyFreeClassic.jpg",
  ];

  return (
    <div style={{ background: "#ecf6f6" }}>
      <ChosenProductNavbar />
      <Container maxWidth="lg">
        <Stack
          direction="row"
          spacing={4}
          sx={{
            py: 4,
            alignItems: "flex-start",
            pt: "80px",
            pb: "80px",
          }}
        >
          {/* Left - Thumbnails */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              minWidth: "120px",
            }}
          >
            {thumbnails.map((thumb, index) => (
              <Box
                key={index}
                onClick={() => setSelectedImage(index)}
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "12px",
                  border:
                    selectedImage === index
                      ? "3px solid #f83d8e"
                      : "2px solid #e0e0e0",
                  cursor: "pointer",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#f83d8e",
                    transform: "scale(1.05)",
                  },
                  backgroundColor: "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={thumb}
                  alt={`Product ${index + 1}`}
                  style={{
                    width: "90%",
                    height: "90%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Center - Main Image */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "500px",
              height: "auto",
              borderRadius: "40px",
            }}
          >
            {/* Heart Icon */}
            <IconButton
              onClick={() => setIsFavorite(!isFavorite)}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 1)",
                },
              }}
            >
              {isFavorite ? (
                <FavoriteIcon sx={{ color: "#f83d8e" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>

            {/* Main Image */}
            <img
              src={images[selectedImage]}
              alt="Product"
              style={{
                borderRadius: "40px",
                border: "3px solid pink",
                minWidth: "500px",
                maxWidth: "95%",
                maxHeight: "95%",
              }}
            />
          </Box>

          {/* Right - Product Info */}
          <Box
            sx={{
              minWidth: "350px",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              background: "white",
              padding: "30px",
              borderRadius: "40px",
              border: "2px solid #F83D8E",
            }}
          >
            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: "700",
                color: "#0f0200",
              }}
            >
              Chocolate Brownie Sundae
            </Typography>

            {/* Rating */}
            <Stack direction="row" alignItems="center" gap={1}>
              <Rating value={4.9} precision={0.1} readOnly />
              <Typography sx={{ fontWeight: "600", color: "#646464" }}>
                4.9 (245 reviews)
              </Typography>
            </Stack>

            {/* Price */}
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#f83d8e",
              }}
            >
              $5.49
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: "#646464",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              Rich chocolate ice cream with chunks of brownie, topped with
              whipped cream and a cherry. Perfect for those who love indulgent
              desserts.
            </Typography>

            {/* Details */}
            <Stack spacing={1}>
              <Typography sx={{ fontWeight: "600", color: "#0f0200" }}>
                Details:
              </Typography>
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ color: "#646464" }}>Category:</Typography>
                <Typography sx={{ fontWeight: "600" }}>Kids</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ color: "#646464" }}>Size:</Typography>
                <Typography sx={{ fontWeight: "600" }}>Standard</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ color: "#646464" }}>Availability:</Typography>
                <Typography sx={{ fontWeight: "600", color: "#4caf50" }}>
                  In Stock
                </Typography>
              </Stack>
            </Stack>

            {/* Quantity */}
            <Stack
              direction="row"
              alignItems="center"
              gap={2}
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                padding: "8px 12px",
                width: "fit-content",
              }}
            >
              <IconButton
                size="small"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                sx={{
                  color: "#6b46c1",
                  "&:hover": { backgroundColor: "rgba(107, 70, 193, 0.1)" },
                }}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
              <Typography
                sx={{
                  fontWeight: "600",
                  minWidth: "30px",
                  textAlign: "center",
                }}
              >
                {quantity}
              </Typography>
              <IconButton
                size="small"
                onClick={() => setQuantity(quantity + 1)}
                sx={{
                  color: "#6b46c1",
                  "&:hover": { backgroundColor: "rgba(107, 70, 193, 0.1)" },
                }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Stack>

            {/* Add to Cart Button */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#6b46c1",
                color: "white",
                padding: "14px",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "10px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#5a3ba0",
                },
                transition: "all 0.3s ease",
              }}
              startIcon={<ShoppingCartIcon />}
            >
              Add to Cart
            </Button>

            {/* Share */}
            <Typography
              sx={{
                textAlign: "center",
                color: "#646464",
                fontSize: "14px",
                cursor: "pointer",
                "&:hover": {
                  color: "#f83d8e",
                  textDecoration: "underline",
                },
              }}
            >
              Share this product
            </Typography>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
