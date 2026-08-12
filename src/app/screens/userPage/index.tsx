import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Box,
  Container,
  Pagination,
  PaginationItem,
  Stack,
  Tab,
  Tabs,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Settings } from "./Settings";
import { useNavigate } from "react-router-dom";
import "../../../css/userPage.css";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { MemberType } from "../../../lib/enums/member.enum";
import { TabContext, TabPanel } from "@mui/lab";
import { CartItem } from "../../../lib/types/search";
import LikedProducts from "../../components/cards/LikedProducts";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { setLikedProducts } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { retrieveLikedProducts } from "./selector";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/** REDUX SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setLikedProducts: (data: Product[]) => dispatch(setLikedProducts(data)),
});

const productsRetriever = createSelector(retrieveLikedProducts, (products) => ({
  products,
}));

interface UsersPageProps {
  onAdd: (item: CartItem) => void;
}
export function UsersPage(props: UsersPageProps) {
  const { onAdd } = props;

  const navigate = useNavigate();
  const { authMember } = useGlobals();

  const dispatch = useDispatch();
  const { setLikedProducts } = useMemo(
    () => actionDispatch(dispatch),
    [dispatch],
  );
  const { products } = useSelector(productsRetriever);

  const [productSearch, setProductSearch] = useState<any>({
    page: 1,
    limit: 6,
  });
  const [value, setValue] = React.useState("1");

  if (!authMember) navigate("/");

  const fetchLikedProducts = useCallback(async () => {
    try {
      const productService = new ProductService();
      const data = await productService.getLikedProducts(productSearch);
      setLikedProducts(data);
    } catch (err) {
      console.log(err);
    }
  }, [productSearch, setLikedProducts]);

  useEffect(() => {
    // Backenddan data fetch qilish
    fetchLikedProducts();
  }, [fetchLikedProducts]);

  /** HANDLERS */
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    fetchLikedProducts();
  };

  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    setProductSearch((prev: any) => ({
      ...prev,
      page: value,
    }));
  };

  return (
    <div className={"user-page"}>
      <Container>
        <Stack className={"my-page-frame"}>
          <Stack
            className={"my-page-left"}
            sx={{
              borderRadius: "20px",
              background:
                "linear-gradient(106deg, #efd7ef 8%, #f5f9fc 40%, #f8eae1 66%, #eaf8f9 91%)",
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  className={"table_list"}
                  sx={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    background:
                      "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                  }}
                >
                  <Tab
                    label="Modify Member Details"
                    value={"1"}
                    sx={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                      color: "white !important",
                      fontWeight: "600",
                      backgroundColor:
                        value === "1" ? "#F768A6" : "transparent",
                    }}
                  />
                  <Tab
                    label="Liked Products"
                    value={"2"}
                    sx={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                      color: "white !important",
                      fontWeight: "600",
                      backgroundColor:
                        value === "2" ? "#F768A6" : "transparent",
                    }}
                  />
                </Tabs>
              </Box>
              <Stack>
                <Stack>
                  <TabPanel value={"1"}>
                    <Settings />
                  </TabPanel>
                  <TabPanel value={"2"}>
                    <Stack sx={{ ml: "50px", mr: "50px" }}>
                      {/* PRODUCTS */}
                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                          gap: "20px",
                          flexWrap: "wrap",
                        }}
                      >
                        {products.length !== 0 ? (
                          products.map((product: Product) => {
                            return (
                              <LikedProducts
                                _id={product._id}
                                image={product.productImages[0]}
                                title={product.productName}
                                description="Rich chocolate ice cream with chunks of brownie."
                                price={product.productPrice}
                                likes={product.productLikes}
                                views={product.productViews}
                                isLiked={product.isLiked}
                                rating={4.9}
                                onAdd={onAdd}
                                onRefresh={fetchLikedProducts}
                              />
                            );
                          })
                        ) : (
                          <Box
                            sx={{
                              width: "800px",
                              height: "800px",
                              display: "flex",
                              flexDirection: "row",
                              alignContent: "center",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              alt="No liked products"
                              src="/icons/no-data.png"
                              style={{
                                width: 450,
                                height: 450,
                                marginTop: "120px",
                              }}
                            />
                          </Box>
                        )}
                      </Stack>
                      <Stack>
                        <Pagination
                          sx={{ mt: "35px", ml: "325px" }}
                          count={
                            products.length > 3
                              ? productSearch.page + 1
                              : productSearch.page
                          }
                          page={productSearch.page}
                          renderItem={(item) => (
                            <PaginationItem
                              components={{
                                previous: ArrowBackIcon,
                                next: ArrowForwardIcon,
                              }}
                              {...item}
                              color={"primary"}
                            />
                          )}
                          onChange={paginationHandler}
                        />
                      </Stack>
                    </Stack>
                    <Stack
                      sx={{
                        ml: "50px",
                        mr: "50px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        gap: "20px",
                      }}
                    >
                      <Stack className="pagination-section"></Stack>
                    </Stack>
                  </TabPanel>
                </Stack>
              </Stack>
            </TabContext>
          </Stack>

          <Stack className={"my-page-right"}>
            <Box className={"order-info-box"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <div className={"order-user-img"}>
                  <img
                    alt="User avatar"
                    src={
                      authMember?.memberImage
                        ? `${serverApi}/${authMember.memberImage}`
                        : "/icons/user.png"
                    }
                    className={"order-user-avatar"}
                  />
                  <div className={"order-user-icon-box"}>
                    <img
                      alt=""
                      src={
                        authMember?.memberType === MemberType.ADMIN
                          ? "/icons/restaurant.svg"
                          : "/icons/user-badge.svg"
                      }
                    />
                  </div>
                </div>
                <span className={"order-user-name"}>
                  {authMember?.memberNick}
                </span>
                <span className={"order-user-prof"}>
                  {authMember?.memberType}
                </span>
                <span className={"order-user-prof"}>
                  {authMember?.memberAddress
                    ? authMember.memberAddress
                    : "No address"}
                </span>
                <span className={"order-user-prof"}>
                  {authMember?.memberPhone
                    ? authMember.memberPhone
                    : "No Phone number"}
                </span>
              </Box>
              <Box className={"user-media-box"}>
                <FacebookIcon />
                <InstagramIcon />
                <TelegramIcon />
                <YouTubeIcon />
              </Box>
              <p className={"user-desc"}>
                {authMember?.memberDesc ?? "No description"}
              </p>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
