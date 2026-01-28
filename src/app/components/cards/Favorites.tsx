import React, { useState } from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  Rating,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface ProductCardProps {
  image?: string;
  title?: string;
  description?: string;
  price?: number;
  rating?: number;
  calories?: number;
  width?: number;
  height?: number;
}

export default function ProductCard({
  image = "/img/ice-cream.png",
  title = "Chocolate Brownie Sundae",
  description = "Rich chocolate ice cream with chunks of brownie.",
  price = 5.49,
  rating = 4.9,
  calories = 255,
  width = 280,
  height = 420,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const authMember = null;

  return (
    <Card
      sx={{
        width: width,
        height: "auto",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "visible",
        backgroundColor: "#f8f6f9",
      }}
    >
      {/* Heart Icon - Top Left */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          zIndex: 10,
        }}
      >
        <IconButton
          size="small"
          onClick={() => setIsFavorite(!isFavorite)}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
          }}
        >
          {isFavorite ? (
            <FavoriteIcon sx={{ color: "#f83d8e" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </Box>

      {/* Product Image with Dimension Lines */}
      <Box
        sx={{
          position: "relative",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
          paddingTop: "20px",
          borderRadius: "20px",
          background: "#fae7cf",
        }}
      >
        {/* Product Image */}
        <img
          src={image}
          alt={title}
          style={{
            maxWidth: "85%",
            maxHeight: "85%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Content */}
      <CardContent sx={{ paddingTop: "20px", position: "relative" }}>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            fontSize: "16px",
            color: "#0f0200",
            marginBottom: "8px",
          }}
        >
          {title}
        </Typography>

        {/* Rating */}
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          sx={{ marginBottom: "8px" }}
        >
          <Rating
            value={rating}
            precision={0.1}
            readOnly
            size="small"
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#ffc107",
              },
            }}
          />
          <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
            {rating}
          </Typography>
        </Stack>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: "#646464",
            fontSize: "13px",
            lineHeight: "1.4",
            marginBottom: "16px",
          }}
        >
          {description}
        </Typography>

        {/* Footer - Price and Cart Button */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#f83d8e",
            }}
          >
            ${price.toFixed(2)}
          </Typography>

          <IconButton
            sx={{
              backgroundColor: "#6b46c1",
              color: "white",
              width: "44px",
              height: "44px",
              "&:hover": {
                backgroundColor: "#5a3ba0",
              },
            }}
          >
            <ShoppingCartIcon fontSize="small" />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
