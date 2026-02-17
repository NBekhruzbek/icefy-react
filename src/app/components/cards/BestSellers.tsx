import React, { useEffect, useState } from "react";
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
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { Messages } from "../../../lib/config";
import { useGlobals } from "../../hooks/useGlobals";

interface ProductCardProps {
  _id?: string;
  image?: string;
  title?: string;
  description?: string;
  price?: number;
  views?: number;
  likes?: number;
  isLiked?: boolean;
  rating?: number;
  width?: number;
}

export default function ProductCard({
  _id,
  image,
  title,
  description,
  price,
  views,
  likes,
  isLiked,
  rating,
  width,
}: ProductCardProps) {
  const { authMember } = useGlobals();
  const productService = new ProductService();
  const [meFavorited, setMeFavorited] = useState(isLiked);
  const [likess, setLikess] = useState<number>(likes ?? 0);

  useEffect(() => {
    setMeFavorited(!!authMember && !!isLiked);
    setLikess(likes ?? 0);
  }, [authMember, isLiked, likes]);

  const likesHandler = async () => {
    if (!authMember) {
      alert("Please LOGIN first!");
      return;
    }
    if (!_id) {
      alert("Something went wrong!");
      return;
    }

    try {
      const toggleLike = await productService.likeToggle(_id);
      if (toggleLike?.action === "created") {
        setLikess((prev) => prev + 1);
      }
      if (toggleLike?.action === "deleted") {
        setLikess((prev) => Math.max(0, prev - 1));
      }

      setMeFavorited((prev) => !prev);
    } catch (err) {
      console.log(err);
      sweetErrorHandling(Messages.error1);
    }
  };
  if (!_id) return null;

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
      {/* Visibility Icon - bottom right */}
      <Box
        sx={{
          position: "absolute",
          top: 270,
          left: 240,
          zIndex: 10,
        }}
      >
        <Button className="view-btn" sx={{ right: "36px" }}>
          <Badge badgeContent={views} color="secondary">
            <RemoveRedEyeIcon
              sx={{ color: (views ?? 0) > 0 ? "gray" : "white" }}
            />
          </Badge>
        </Button>
      </Box>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          top: 16,
          left: 16,
          zIndex: 10,
        }}
      >
        <IconButton
          size="small"
          onClick={likesHandler}
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
          {meFavorited ? (
            <FavoriteIcon sx={{ color: "#f83d8e", fontSize: "20px" }} />
          ) : (
            <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
          )}
        </IconButton>
        {(likess ?? 0) > 0 ? (
          <Box
            sx={{
              width: 18,
              height: 20,
              textAlign: "center",
              ml: "-2px",
              zIndex: 12,
              fontSize: "14px",
              borderRadius: "20px",
              background: "#faf2e9",
              border: "1px solid #f83d8e",
              color: "#f83d8e",
            }}
          >
            {likess}
          </Box>
        ) : null}
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
          paddingBottom: "20px",
          borderRadius: "20px",
          background: "#eddff1",
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
            borderRadius: "24px",
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
            ${typeof price === "number" && price > 0 ? price.toFixed(2) : null}
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
