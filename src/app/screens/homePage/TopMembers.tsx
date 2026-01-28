// import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import "../../../css/topMembers.css";

const activeUsers = [
  { memberNick: "Lora", memberImage: "/img/topMember1.jpg" },
  { memberNick: "Justin", memberImage: "/img/topMember2.png" },
  { memberNick: "Lea", memberImage: "/img/topMember3.jpg" },
  { memberNick: "John", memberImage: "/img/topMember4.jpg" },
];

export default function TopMembers() {
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active Users</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {activeUsers.length !== 0 ? (
                activeUsers.map((member) => {
                  const imagePath = `${member.memberImage}`;
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
