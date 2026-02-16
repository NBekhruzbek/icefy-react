import { TabPanel } from "@mui/lab";
import { Box, Stack, Button } from "@mui/material";
import { createSelector } from "@reduxjs/toolkit";
import moment from "moment";
import { retrieveProcessOrders } from "./selector";
import { useSelector } from "react-redux";
import { Order, OrderItem } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";

/** REDUX SELECTOR */
const processOrderRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({ processOrders }),
);

export default function ProcessOrders() {
  const { processOrders } = useSelector(processOrderRetriever);

  return (
    <TabPanel value="2">
      <Stack>
        {processOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product = order.productData.filter(
                    (ele: Product) => item.productId === ele._id,
                  )[0];
                  const imagePath = `${serverApi}/${product.productImages[0]}`;

                  return (
                    <Box key={item._id} className={"orders-name-price"}>
                      <img src={imagePath} alt="" className="order-img" />
                      <p className="product-title">{product.productName}</p>
                      <Box className={"price-box"}>
                        <p>${item.itemPrice}</p>
                        <img src="/icons/close.svg" alt="" />
                        <p>{item.itemQuantity}</p>
                        <img src="/icons/pause.svg" alt="" />
                        <p style={{ marginLeft: "15px" }}>
                          ${item.itemPrice * item.itemQuantity}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price </p>
                  <p> ${order.orderTotal - order.orderDelivery} </p>
                  <img src="/icons/plus.svg" style={{ marginLeft: "20px" }} />
                  <p>Delivery cost</p>
                  <p>${order.orderDelivery}</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>
                <Box
                  className="data-compl"
                  sx={{
                    width: "150px !important",
                    pt: "5px",
                    textAlign: "center",
                    borderRadius: "10px",
                    background: "#adc9fa",
                  }}
                >
                  {moment().format("YY-MM-DD HH:mm")}
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "220px !important",
                    ml: "320px",
                    borderRadius: "10px",
                  }}
                  className="cancel-button"
                >
                  Verify Order
                </Button>
              </Box>
            </Box>
          );
        })}

        {!processOrders ||
          (processOrders.length === 0 && (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <img
                src="/icons/no-data.png"
                style={{ width: 300, height: 300 }}
              />
            </Box>
          ))}
      </Stack>
    </TabPanel>
  );
}
