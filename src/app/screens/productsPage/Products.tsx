import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  MenuItem,
  Pagination,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ProductCard from "../../components/cards/Products";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../../lib/types/product";
import { setProducts } from "./slice";
import { retrieveProducts } from "./selector";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "../../services/ProductService";
import {
  ProductCategory,
  ProductFlavor,
} from "../../../lib/enums/product.enum";
import { useEffect } from "react";
import { serverApi } from "../../../lib/config";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

export default function Products() {
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);

  useEffect(() => {
    const product = new ProductService();

    product
      .getProducts({
        page: 1,
        limit: 6,
        order: "createAt",
        // productCategory: ProductCategory,
        // productFlavor: ProductFlavor,
        search: "",
      })
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar-big-box">
            <Stack className="search-section">
              <Box className="search-box">
                <Input
                  placeholder="Search here"
                  disableUnderline
                  className="text-field"
                />
                <Button className="search-button">
                  <SearchIcon />
                </Button>
              </Box>
              <Box className={"category-title"}>IceFy</Box>
              <Box>
                <Select defaultValue="new" className={"filter-section"}>
                  <MenuItem value="new">New</MenuItem>
                  <MenuItem value="price">Price</MenuItem>
                  <MenuItem value="views">Views</MenuItem>
                </Select>
              </Box>
            </Stack>
            <Stack className="list-category-section">
              <Stack className="category-section">
                <Box className={"category-select"}>
                  <FormControl>
                    <FormLabel
                      id="demo-radio-buttons-group-label"
                      className="category-select-title"
                      sx={{ pl: "60px" }}
                    >
                      Categories
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      className="radio-group"
                    >
                      <FormControlLabel
                        value="CLASSIC"
                        control={<Radio />}
                        label="Classic"
                      />
                      <FormControlLabel
                        value="PREMIUM"
                        control={<Radio />}
                        label="Premium"
                      />
                      <FormControlLabel
                        value="LIMITED"
                        control={<Radio />}
                        label="Limited"
                      />
                      <FormControlLabel
                        value="KIDS"
                        control={<Radio />}
                        label="Kids"
                      />
                      <FormControlLabel
                        value="OTHER"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
                <Box className={"category-select"}>
                  <FormControl>
                    <FormLabel
                      id="demo-radio-buttons-group-label"
                      className="category-select-title"
                      sx={{ pl: "52px" }}
                    >
                      Flavor
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      className="radio-group"
                    >
                      <FormControlLabel
                        value="VANILLA"
                        control={<Radio />}
                        label="Vanilla"
                      />
                      <FormControlLabel
                        value="CHOCOLATE"
                        control={<Radio />}
                        label="Chololate"
                      />
                      <FormControlLabel
                        value="STRAWBERRY"
                        control={<Radio />}
                        label="Strawberry"
                      />
                      <FormControlLabel
                        value="COOKIES_CREAM"
                        control={<Radio />}
                        label="Cookies Cream"
                      />
                      <FormControlLabel
                        value="MANGO"
                        control={<Radio />}
                        label="Mango"
                      />
                      <FormControlLabel
                        value="MATCHA"
                        control={<Radio />}
                        label="Matcha"
                      />
                      <FormControlLabel
                        value="MINT_CHOCOLATE_CHIP"
                        control={<Radio />}
                        label="Mint Choloate Chip"
                      />
                      <FormControlLabel
                        value="COFFEE"
                        control={<Radio />}
                        label="Coffee"
                      />
                      <FormControlLabel
                        value="CARAMEL"
                        control={<Radio />}
                        label="Caramel"
                      />
                      <FormControlLabel
                        value="YOGURT"
                        control={<Radio />}
                        label="Yogurt"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Stack>
              <Stack className="product-cards">
                {products.length !== 0
                  ? products.map((product: Product) => {
                      const imagePath = `${serverApi}/${product.productImages[0]}`;
                      return (
                        <ProductCard
                          _id={product._id}
                          image={imagePath}
                          title={product.productName}
                          description="Rich chocolate ice cream with chunks of brownie."
                          price={product.productPrice}
                          likes={product.productLikes}
                          views={product.productViews}
                          rating={4.9}
                        />
                      );
                    })
                  : null}
                <Stack className="pagination-section">
                  <Pagination
                    sx={{ mt: "35px", ml: "325px" }}
                    count={3}
                    page={1}
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
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
