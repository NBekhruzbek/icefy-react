import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import "../../../css/instagram.css";

interface InstagramPost {
  id: number;
  image: string;
  alt: string;
}

const instagramPosts: InstagramPost[] = [
  { id: 1, image: "/img/instagram1.jpg", alt: "Ice cream cone" },
  { id: 2, image: "/img/instagram2.jpg", alt: "Dessert bowl" },
  { id: 3, image: "/img/instagram3.jpg", alt: "Pink ice cream" },
  { id: 4, image: "/img/instagram5.jpg", alt: "Cupcake" },
  { id: 5, image: "/img/instagram4.png", alt: "Girl with ice cream" },
  { id: 6, image: "/img/instagram6.jpg", alt: "Colorful ice cream" },
  { id: 7, image: "/img/instagram7.jpg", alt: "Ice cream dessert" },
  { id: 8, image: "/img/instagram8.jpg", alt: "Frozen treat" },
];

// Duplicate array for continuous scrolling
const duplicatedPosts = [...instagramPosts, ...instagramPosts];

export default function Instagram() {
  return (
    <div className="instagram-frame">
      <Container>
        <Stack className="instagram-main">
          {/* Title */}
          <Typography
            sx={{
              fontFamily: '"Berkshire Swash", cursive',
              fontSize: "48px",
              fontWeight: 400,
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            Follow Us on <span style={{ color: "#f83d8e" }}>Instagram</span>
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: '"Archivo", sans-serif',
              fontSize: "16px",
              fontWeight: 400,
              color: "#646464",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Join our Instagram community for updates, special deals, and more!
          </Typography>

          {/* Instagram Carousel */}
          <Box className="instagram-carousel-wrapper">
            {/* Left Decoration Circle */}
            <Box className="deco-circle deco-left"></Box>

            {/* Right Decoration Circle */}
            <Box className="deco-circle deco-right"></Box>

            {/* Carousel Container */}
            <a href="https://www.instagram.com/mr_bekhruzbek1">
              <Box className="instagram-carousel">
                {duplicatedPosts.map((post, index) => (
                  <Box
                    key={index}
                    className="instagram-post"
                    sx={{
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        "& .instagram-overlay": {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <img src={post.image} alt={post.alt} />
                    <Box className="instagram-overlay">
                      <Box className="instagram-icon">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9ZM17.5 6C18.3284 6 19 6.67157 19 7.5C19 8.32843 18.3284 9 17.5 9C16.6716 9 16 8.32843 16 7.5C16 6.67157 16.6716 6 17.5 6Z" />
                        </svg>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </a>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
