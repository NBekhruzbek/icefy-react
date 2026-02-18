import React from "react";
import { Box, Container, Stack, Tab, Tabs } from "@mui/material";
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

export function UsersPage() {
  const navigate = useNavigate();
  const { authMember } = useGlobals();

  const [value, setValue] = React.useState("1");

  /** HANDLERS **/
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  if (!authMember) navigate("/");

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
                  <TabPanel value={"2"}>{/* <LikedProducts /> */}</TabPanel>
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
                    src={
                      authMember?.memberImage
                        ? `${serverApi}/${authMember.memberImage}`
                        : "/icons/user.png"
                    }
                    className={"order-user-avatar"}
                  />
                  <div className={"order-user-icon-box"}>
                    <img
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
