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
import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { setChosenProduct, setRestaurant } from "./slice";
import { retrieveChosenProduct, retrieveRestaurant } from "./selector";
import { Product } from "../../../lib/types/product";
import { Member } from "../../../lib/types/member";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "../../services/ProductService";
import MemberService from "../../services/MemberService";
import { Messages, serverApi } from "../../../lib/config";
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals";
import { sweetErrorHandling } from "../../../lib/sweetAlert";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setRestaurant: (data: Member) => dispatch(setRestaurant(data)),
  setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
});

const chosenProductRetriever = createSelector(
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

interface ChosenProductProps {
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

export default function ChosenProduct(props: ChosenProductProps) {
  const {
    onAdd,
    cartItems,
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

  const { productId } = useParams<{ productId: string }>();
  const { setRestaurant, setChosenProduct } = actionDispatch(useDispatch());
  const { chosenProduct } = useSelector(chosenProductRetriever);
  const { restaurant } = useSelector(restaurantRetriever);

  const [selectedImage, setSelectedImage] = useState(0);
  const [meFavorited, setMeFavorited] = useState(chosenProduct?.isLiked);
  const [quantity, setQuantity] = useState(1);

  const [likess, setLikess] = useState<number>(
    chosenProduct?.productLikes ?? 0,
  );

  useEffect(() => {
    const product = new ProductService();
    const member = new MemberService();

    if (productId) {
      product
        .getProduct(productId)
        .then((data) => setChosenProduct(data))
        .catch((err) => console.log(err));

      member
        .getAdmin()
        .then((data) => setRestaurant(data))
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (chosenProduct) {
      setMeFavorited(authMember?._id && chosenProduct.isLiked ? true : false);
      setLikess(chosenProduct.productLikes ?? 0);
    }
  }, [authMember, chosenProduct]);

  const productService = new ProductService();

  const likesHandler = async () => {
    if (!authMember?._id) {
      alert("Please LOGIN first!");
      return;
    }
    if (!chosenProduct?._id) {
      alert("Something went wrong!");
      return;
    }

    try {
      const toggleLike = await productService.likeToggle(chosenProduct._id);
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
  if (!chosenProduct?._id) return null;

  const images = chosenProduct.productImages.map((ele) => {
    return `${serverApi}/${ele}`;
  });

  const thumbnails = chosenProduct.productImages.map((ele) => {
    return `${serverApi}/${ele}`;
  });

  return (
    <div style={{ background: "#ecf6f6" }}>
      <ChosenProductNavbar
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onDelete={onDelete}
        onDeleteAll={onDeleteAll}
        setLoginOpen={setLoginOpen}
        anchorEl={anchorEl}
        handleLogoutClick={handleLogoutClick}
        handleCloseLogout={handleCloseLogout}
        handleLogoutRequest={handleLogoutRequest}
      />
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
              height: "550px",
              borderRadius: "40px",
            }}
          >
            {/* Heart Icon */}
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                top: 48,
                right: 30,
                zIndex: 10,
              }}
            >
              <IconButton
                size="small"
                onClick={likesHandler}
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
                {meFavorited ? (
                  <FavoriteIcon sx={{ color: "#f83d8e", fontSize: "30px" }} />
                ) : (
                  <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
                )}
              </IconButton>
              {likess > 0 ? (
                <Box
                  sx={{
                    width: 24,
                    height: 27,
                    textAlign: "center",
                    ml: "-6px",
                    mt: "-4px",
                    zIndex: 12,
                    fontSize: "18px",
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
              {chosenProduct?.productName}
            </Typography>

            {/* Rating */}
            <Stack direction="row" alignItems="center" gap={1}>
              <Rating value={4.4} precision={0.1} readOnly />
              <Typography sx={{ fontWeight: "600", color: "#646464" }}>
                4.4 ({chosenProduct.productViews} reviews)
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
              $
              {typeof chosenProduct?.productPrice === "number" &&
              chosenProduct?.productPrice > 0
                ? chosenProduct?.productPrice.toFixed(2)
                : null}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: "#646464",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              {chosenProduct?.productDesc}
            </Typography>

            {/* Details */}
            <Stack spacing={1}>
              <Typography sx={{ fontWeight: "600", color: "#0f0200" }}>
                Details:
              </Typography>
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ color: "#646464" }}>Category:</Typography>
                <Typography sx={{ fontWeight: "600" }}>
                  {chosenProduct.productCategory}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ color: "#646464" }}>Size:</Typography>
                <Typography sx={{ fontWeight: "600" }}>
                  {chosenProduct.productSize}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ color: "#646464" }}>Availability:</Typography>
                <Typography sx={{ fontWeight: "600", color: "#4caf50" }}>
                  {chosenProduct.productLeftCount}
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
              onClick={(e) => {
                onAdd({
                  _id: chosenProduct._id,
                  quantity: 1,
                  name: chosenProduct.productName,
                  price: chosenProduct.productPrice,
                  image: chosenProduct.productImages[0],
                });
                e.stopPropagation();
              }}
              startIcon={<ShoppingCartIcon />}
            >
              Add to Cart
            </Button>

            {/* Share */}
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                fontSize: "14px",
                cursor: "pointer",
                color: "#646464",
                "&:hover": {
                  color: "#f83d8e",
                  textDecoration: "underline",
                },
              }}
            >
              <span style={{ marginLeft: "20px" }}>
                {restaurant?.memberType}:
              </span>
              <img
                src={`${serverApi}/${restaurant?.memberImage}`}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "22px",
                  marginLeft: "20px",
                }}
                alt=""
              />
              <span style={{ marginLeft: "20px" }}>
                {restaurant?.memberNick} -
              </span>
              <span style={{ marginLeft: "5px" }}>
                {restaurant?.memberPhone}
              </span>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
