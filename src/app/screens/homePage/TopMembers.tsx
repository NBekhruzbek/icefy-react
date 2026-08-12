// import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import "../../../css/topMembers.css";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveTopMembers } from "./selector";
import { useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";

/** REDUX SELECTOR */
const topMembersRetriever = createSelector(
  retrieveTopMembers,
  (topMembers) => ({
    topMembers,
  }),
);

export default function TopMembers() {
  const { topMembers } = useSelector(topMembersRetriever);
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active Users</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {topMembers.length !== 0 ? (
                topMembers.map((member) => {
                  const imagePath = `${serverApi}/${member.memberImage}`;
                  return (
                    <Card variant="outlined" className="card">
                      <CardOverflow>
                        <AspectRatio ratio={"1"}>
                          <img src={imagePath} alt="" />
                        </AspectRatio>
                      </CardOverflow>

                      <CardOverflow variant="soft" className="info">
                        <Box>{member.memberNick}</Box>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">No Active Users!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
