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
  Badge,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

interface ProductCardProps {
  image?: string;
  title?: string;
  description?: string;
  price?: number;
  like?: boolean;
  view?: number;
  rating?: number;
  calories?: number;
}

export default function ProductCard({
  image = "/img/ice-cream.png",
  title = "Chocolate Brownie Sundae",
  description = "Rich chocolate ice cream with chunks of brownie.",
  price = 5.49,
  like = false,
  view = 0,
  rating = 4.9,
  calories = 255,
}: ProductCardProps) {
  const authMember = null;

  return (
    <Card
      sx={{
        width: "270px",
        height: "380px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#e7f6f6",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
          transform: "translateY(-4px)",
        },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Heart Icon - Top Left */}
      <Box
        sx={{
          position: "absolute",
          top: 208,
          left: 228,
          zIndex: 10,
        }}
      >
        <Button className="view-btn" sx={{ right: "36px" }}>
          <Badge badgeContent={view} color="secondary">
            <RemoveRedEyeIcon sx={{ color: view > 0 ? "gray" : "white" }} />
          </Badge>
        </Button>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 155,
          left: 210,
          zIndex: 10,
        }}
      >
        <IconButton
          size="small"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "6px",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
              transform: "scale(1.1)",
            },
          }}
        >
          {like ? (
            <FavoriteIcon sx={{ color: "#f83d8e", fontSize: "20px" }} />
          ) : (
            <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
          )}
        </IconButton>
      </Box>

      {/* Product Image */}
      <Box
        sx={{
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "10px",
          backgroundColor: "#e7f6f6",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "20px",
            objectFit: "contain",
            transition: "transform 0.3s ease",
          }}
        />
      </Box>

      {/* Content */}
      <CardContent
        sx={{
          padding: "12px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            fontSize: "16px",
            color: "#0f0200",
            marginBottom: "4px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "32px",
          }}
        >
          {title}
        </Typography>

        {/* Rating */}
        <Stack
          direction="row"
          alignItems="center"
          gap={0.5}
          sx={{ marginBottom: "6px" }}
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
              "& .MuiRating-iconEmpty": {
                color: "#e0e0e0",
              },
            }}
          />
          <Typography
            sx={{ fontSize: "12px", fontWeight: "600", color: "#646464" }}
          >
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
            marginBottom: "8px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "28px",
          }}
        >
          {description}
        </Typography>

        {/* Footer - Price and Cart Button */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginTop: "auto" }}
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
              width: "40px",
              height: "40px",
              padding: "0",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#5a3ba0",
                transform: "scale(1.05)",
              },
              "&:active": {
                transform: "scale(0.98)",
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
