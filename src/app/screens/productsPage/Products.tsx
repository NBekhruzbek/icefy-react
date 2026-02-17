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
import { Product, ProductInquery } from "../../../lib/types/product";
import { setProducts } from "./slice";
import { retrieveProducts } from "./selector";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "../../services/ProductService";
import {
  ProductCategory,
  ProductFlavor,
} from "../../../lib/enums/product.enum";
import { ChangeEvent, useEffect, useState } from "react";
import { serverApi } from "../../../lib/config";
import { CartItem } from "../../../lib/types/search";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

interface ProductsProps {
  onAdd: (item: CartItem) => void;
}

export default function Products(props: ProductsProps) {
  const { onAdd } = props;

  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);
  const [productSearch, setProductSearch] = useState<ProductInquery>({
    page: 1,
    limit: 6,
    order: "createdAt",
    productCategory: undefined,
    productFlavor: undefined,
    search: "",
  });
  const [searchText, setSearchText] = useState<string>("");
  useEffect(() => {
    const product = new ProductService();

    product
      .getProducts(productSearch)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [productSearch]);

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  }, [searchText]);

  /** HANDLARS */

  const searchCategoryHandler = (category?: ProductCategory) => {
    productSearch.page = 1;
    productSearch.productCategory = category;
    setProductSearch({ ...productSearch });
  };

  const searchFlavorHandler = (flavor?: ProductFlavor) => {
    productSearch.page = 1;
    productSearch.productFlavor = flavor;
    setProductSearch({ ...productSearch });
  };

  const searchOrderHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch({ ...productSearch });
  };

  const searchProductHandler = () => {
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };

  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({ ...productSearch });
  };

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
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key == "Enter") searchProductHandler();
                  }}
                />
                <Button
                  className="search-button"
                  onClick={searchProductHandler}
                >
                  <SearchIcon />
                </Button>
              </Box>
              <Box className={"category-title"}>IceFy</Box>
              <Box>
                <Select defaultValue="new" className={"filter-section"}>
                  <MenuItem
                    value="new"
                    onClick={() => searchOrderHandler("createdAt")}
                  >
                    New
                  </MenuItem>
                  <MenuItem
                    value="price"
                    onClick={() => searchOrderHandler("productPrice")}
                  >
                    Price
                  </MenuItem>
                  <MenuItem
                    value="likes"
                    onClick={() => searchOrderHandler("productLikes")}
                  >
                    Likes
                  </MenuItem>
                  <MenuItem
                    value="views"
                    onClick={() => searchOrderHandler("productViews")}
                  >
                    Views
                  </MenuItem>
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
                        value="NONE"
                        control={<Radio />}
                        label="None"
                        onChange={() => searchCategoryHandler(undefined)}
                      />
                      <FormControlLabel
                        value="CLASSIC"
                        control={<Radio />}
                        label="Classic"
                        onChange={() =>
                          searchCategoryHandler(ProductCategory.CLASSIC)
                        }
                      />
                      <FormControlLabel
                        value="PREMIUM"
                        control={<Radio />}
                        label="Premium"
                        onChange={() =>
                          searchCategoryHandler(ProductCategory.PREMIUM)
                        }
                      />
                      <FormControlLabel
                        value="LIMITED"
                        control={<Radio />}
                        label="Limited"
                        onChange={() =>
                          searchCategoryHandler(ProductCategory.LIMITED)
                        }
                      />
                      <FormControlLabel
                        value="KIDS"
                        control={<Radio />}
                        label="Kids"
                        onChange={() =>
                          searchCategoryHandler(ProductCategory.KIDS)
                        }
                      />
                      <FormControlLabel
                        value="OTHER"
                        control={<Radio />}
                        label="Other"
                        onChange={() =>
                          searchCategoryHandler(ProductCategory.OTHER)
                        }
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
                        value="NONE"
                        control={<Radio />}
                        label="None"
                        onChange={() => searchFlavorHandler(undefined)}
                      />
                      <FormControlLabel
                        value="VANILLA"
                        control={<Radio />}
                        label="Vanilla"
                        onChange={() =>
                          searchFlavorHandler(ProductFlavor.VANILLA)
                        }
                      />
                      <FormControlLabel
                        value="CHOCOLATE"
                        control={<Radio />}
                        label="Chololate"
                        onChange={() =>
                          searchFlavorHandler(ProductFlavor.CHOCALATE)
                        }
                      />
                      <FormControlLabel
                        value="STRAWBERRY"
                        control={<Radio />}
                        label="Strawberry"
                        onChange={() =>
                          searchFlavorHandler(ProductFlavor.STRAWBERRY)
                        }
                      />
                      <FormControlLabel
                        value="COOKIES_CREAM"
                        control={<Radio />}
                        label="Cookies Cream"
                        onChange={() =>
                          searchFlavorHandler(ProductFlavor.COOKIES_CREAM)
                        }
                      />
                      <FormControlLabel
                        value="MANGO"
                        control={<Radio />}
                        label="Mango"
                        onChange={() =>
                          searchFlavorHandler(ProductFlavor.MANGO)
                        }
                      />
                      <FormControlLabel
                        value="MATCHA"
                        control={<Radio />}
                        label="Matcha"
                        onChange={() =>
                          searchFlavorHandler(ProductFlavor.MATCHA)
                        }
                      />
                      <FormControlLabel
                        value="MINT_CHOCOLATE_CHIP"
                        control={<Radio />}
                        label="Mint Choloate Chip"
                        onChange={() =>
                          searchFlavorHandler(ProductFlavor.MINT_CHOCOLATE_CHIP)
                        }
                      />
                      <FormControlLabel
                        value="COFFEE"
                        control={<Radio />}
                        label="Coffee"
                        onChange={() =>
                          searchFlavorHandler(ProductFlavor.COFFEE)
                        }
                      />
                      <FormControlLabel
                        value="CARAMEL"
                        control={<Radio />}
                        label="Caramel"
                        onChange={() =>
                          searchFlavorHandler(ProductFlavor.CARAMEL)
                        }
                      />
                      <FormControlLabel
                        value="YOGURT"
                        control={<Radio />}
                        label="Yogurt"
                        onChange={() =>
                          searchFlavorHandler(ProductFlavor.YOGURT)
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Stack>
              <Stack className="product-cards">
                {products.length !== 0
                  ? products.map((product: Product) => {
                      return (
                        <ProductCard
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
                        />
                      );
                    })
                  : null}
                <Stack className="pagination-section">
                  <Pagination
                    sx={{ mt: "35px", ml: "325px" }}
                    count={
                      products.length > 5
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
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
