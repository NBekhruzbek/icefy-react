import { TabPanel } from "@mui/lab";
import { Box, Stack, Button } from "@mui/material";
import moment from "moment";

export default function ProcessOrders() {
  return (
    <TabPanel value="2">
      <Stack>
        {[1, 2].map((ele, index) => {
          return (
            <Box key={index} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {[1, 2, 3].map((ele2, index2) => {
                  return (
                    <Box key={index2} className={"orders-name-price"}>
                      <img
                        src="/img/DairyFreeClassic.jpg"
                        alt=""
                        className="order-img"
                      />
                      <p className="product-title">Dairy Free Classic</p>
                      <Box className={"price-box"}>
                        <p>$8</p>
                        <img src="/icons/close.svg" alt="" />
                        <p>2</p>
                        <img src="/icons/pause.svg" alt="" />
                        <p style={{ marginLeft: "15px" }}>$16</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price </p>
                  <p> $18 </p>
                  <img src="/icons/plus.svg" style={{ marginLeft: "20px" }} />
                  <p>Delivery cost</p>
                  <p>$2</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total</p>
                  <p>$20</p>
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

        {false && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src="/icons/noimage-list.svg"
              alt=""
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
