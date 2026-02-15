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
import ProductService from "../../services/ProductService";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../../lib/types/search";
import { serverApi } from "../../../lib/config";

interface ProductCardProps {
  _id?: string;
  image?: string;
  title?: string;
  description?: string;
  price?: number;
  likes?: number;
  views?: number;
  rating?: number;
  onAdd: (item: CartItem) => void;
}

export default function ProductCard({
  _id,
  image,
  title,
  description,
  price,
  likes,
  views,
  rating,
  onAdd,
}: ProductCardProps) {
  const authMember = null;
  const imagePath = `${serverApi}/${image}`;

  const productService = new ProductService();
  const [meFavorited, setMeFavorited] = useState(false);
  const [likess, setLikess] = useState<number>(likes ?? 0);
  const navigate = useNavigate();

  const likesHandler = async () => {
    if (!authMember) {
      alert("Please LOGIN first!");
      return;
    }
    if (!_id) {
      alert("Something went wrong!");
      return;
    }

    setLikess(likess + 1);
    await productService.likeToggle(_id);

    setMeFavorited(!meFavorited);
  };

  const chooseIceCreamHandler = (id: string) => {
    navigate(`/products/${id}`);
  };

  return (
    <Card
      onClick={() => {
        if (_id) chooseIceCreamHandler(_id);
      }}
      sx={{
        width: "270px",
        height: "380px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
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
      {/* Heart Icon & Views Icon */}
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          top: 220,
          left: 215,
          zIndex: 10,
        }}
      >
        <IconButton
          size="small"
          onClick={(e: any) => {
            e.stopPropagation();
            likesHandler();
          }}
          sx={{
            backgroundColor: "#f4eddd",
            padding: "6px",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "rgb(232, 208, 208)",
              transform: "scale(1.1)",
            },
          }}
        >
          {!meFavorited ? (
            <FavoriteIcon sx={{ color: "#f83d8e", fontSize: "20px" }} />
          ) : (
            <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
          )}
        </IconButton>
        {(likes ?? 0) > 0 ? (
          <Box
            sx={{
              width: 18,
              height: 20,
              textAlign: "center",
              ml: "-6px",
              mt: "-4px",
              zIndex: 12,
              fontSize: "14px",
              borderRadius: "20px",
              background: "#faf2e9",
              border: "1px solid #f83d8e",
              color: "#f83d8e",
            }}
          >
            {likes}
          </Box>
        ) : null}
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 165,
          right: -30,
          zIndex: 10,
        }}
      >
        <Button
          className="view-btn"
          sx={{ right: "36px" }}
          onClick={(e: any) => {
            e.stopPropagation();
          }}
        >
          <Badge badgeContent={views} color="secondary">
            <RemoveRedEyeIcon
              sx={{ color: (views ?? 0) > 0 ? "gray" : "white" }}
            />
          </Badge>
        </Button>
      </Box>

      {/* Product Image */}
      <Box
        sx={{
          position: "relative",
          height: "190px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "20px",
          background: "#f4eddd",
        }}
      >
        <img
          src={imagePath}
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
            ${typeof price === "number" && price > 0 ? price.toFixed(2) : null}
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
            onClick={(e) => {
              onAdd({
                _id: _id,
                quantity: 1,
                name: title,
                price: price,
                image: image,
              });
              e.stopPropagation();
            }}
          >
            <ShoppingCartIcon fontSize="small" />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
