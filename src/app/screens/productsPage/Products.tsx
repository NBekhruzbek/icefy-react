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

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

const products = [
  {
    productName: "Coconut Milk",
    imagePath: "/img/CoconutMilk.jpg",
    productLike: false,
  },
  {
    productName: "Almond Joy Sundae",
    imagePath: "/img/AlmondJoySundae.jpg",
    productLike: true,
  },
  {
    productName: "Berry Sorbet",
    imagePath: "/img/BerrySorbet.jpg",
    productLike: false,
  },
  {
    productName: "Chocolate Fudge",
    imagePath: "/img/ChocolateFudge.jpg",
    productLike: true,
  },
  {
    productName: "Dairy Free Classic",
    imagePath: "/img/DairyFreeClassic.jpg",
    productLike: false,
  },
  {
    productName: "Dairy Free Almond",
    imagePath: "/img/DairyFreeAlmond.jpg",
    productLike: true,
  },
];

export default function Products() {
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
                  ? products.map((product, index) => {
                      return (
                        <ProductCard
                          image={product.imagePath}
                          title={product.productName}
                          description="Rich chocolate ice cream with chunks of brownie."
                          price={5.49}
                          like={product.productLike}
                          view={8}
                          rating={4.9}
                          calories={255}
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
