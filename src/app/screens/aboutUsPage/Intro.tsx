import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Intro() {
  return (
    <div>
      <Box className={"intro-icon"}>
        <img
          src="/img/aboutUsIntroIcon.png"
          alt="Your browser does not support the img!"
        />
      </Box>
      <Container>
        <Stack className="about-intro">
          <Box>
            <img
              src="/img/aboutUsIntro.jpg"
              alt="Your browser does not support the img!"
              className={"intro-img"}
            />
          </Box>
          <Stack className="txt-area">
            <Box className={"main-txt"}>
              <Box component={"span"}>Our </Box>
              <Box component={"span"} color={"#F83D8E"}>
                Journey{" "}
              </Box>
              <Box component={"span"}>Began With a Simple Dream</Box>
            </Box>
            <Box className={"extra-txt"}>
              Our goal is to make the best ice cream using only the finest,
              natural ingredients. From rich, creamy classics to adventurous new
              creations, every flavor is meticulously crafted in-house to ensure
              the highest quality and freshness.
            </Box>
            <Box className={"extra-txt"}>
              We take pride in offering a diverse range of options, including
              dairy-free, vegan, and gluten-free choices, so everyone can find
              their perfect scoop.
            </Box>

            <NavLink
              to={"/blog-page"}
              style={{ width: "192.05px", textDecoration: "none" }}
            >
              <Button variant="contained" className="button">
                Read More
              </Button>
            </NavLink>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
