import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Moments() {
  return (
    <div className="about-us-moments">
      <Box className={"moments-img"}>
        <img
          src="/img/momentsImage.png"
          alt="Your browser does not support the img!"
        />
      </Box>
      <Box className={"momentsIcon1"}>
        <img
          src="/img/moments1.png"
          alt="Your browser does not support the img!"
        />
      </Box>
      <Box className={"momentsIcon2"}>
        <img
          src="/img/moments2.png"
          alt="Your browser does not support the img!"
        />
      </Box>
      <Box className={"momentsIcon3"}>
        <img
          src="/img/moments3.png"
          alt="Your browser does not support the img!"
        />
      </Box>
      <Container>
        <Stack className="txt-area">
          <Box className={"main-txt"}>
            <Box component={"span"}>Our Mission is to Create </Box>
            <Box component={"span"} color={"#F83D8E"}>
              Moments
            </Box>
          </Box>
          <Box className={"extra-txt"}>
            We strive to foster a welcoming and joyful environment where
            customers of all ages can gather, celebrate, and make lasting
            memories. Our commitment extends beyond serving great ice cream.
          </Box>
          <Button
            component={NavLink}
            to="/blog-page"
            variant="contained"
            className="button"
          >
            Read More
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
