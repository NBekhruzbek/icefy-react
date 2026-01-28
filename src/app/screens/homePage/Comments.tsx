import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Avatar,
  Rating,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../css/comments.css";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  text: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kevin Andrew",
    title: "Happy Customer",
    text: "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas as peratur aut odit aut fugit, sed beatae vitae dicta ripiscing elit, sed do euismod tempor incididunt. Labore et dolore magna aliqua ut enim ad minim adipiscing elit, sed do euismod tempor incidunt aut labore.",
    image: "/img/testimonial1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Verified Buyer",
    text: "Absolutely love this ice cream! The quality is amazing and the flavors are so unique. Customer service was excellent and delivery was fast. I've already recommended it to all my friends. Will definitely order again!",
    image: "/img/testimonial2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Happy Customer",
    text: "Best ice cream I've ever tasted! The texture is so creamy and smooth. Every flavor is a masterpiece. Highly recommend to anyone who loves quality desserts. Keep up the amazing work!",
    image: "/img/testimonial3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Emma Watson",
    title: "Verified Buyer",
    text: "Exceptional quality and taste! The ice cream melts perfectly on the tongue. The packaging is beautiful and it arrived in perfect condition. Worth every penny!",
    image: "/img/testimonial4.jpg",
    rating: 5,
  },
];

// Avatar images - background avatars positioned around
const avatarImages = [
  "/img/42.png",
  "/img/43.png",
  "/img/44.png",
  "/img/45.png",
  "/img/47.png",
  "/img/48.png",
  "/img/49.png",
  "/img/50.png",
];

export default function Comments() {
  return (
    <div className="testimonials-frame">
      <Container>
        <Stack className="testimonials-main">
          {/* Title */}
          <Typography
            className="testimonials-title"
            sx={{
              fontFamily: '"Berkshire Swash", cursive',
              fontSize: "48px",
              fontWeight: 400,
              textAlign: "center",
              marginBottom: "60px",
              lineHeight: "1.3",
            }}
          >
            Hear from Our <span style={{ color: "#f83d8e" }}>Happy</span>
            <br />
            <span style={{ color: "#f83d8e" }}>Ice Cream</span> Lovers
          </Typography>

          {/* Swiper for Testimonials */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Box className="testimonials-container">
                  {/* Background Avatar Images */}
                  <Box className="avatar-circle avatar-tl">
                    <Avatar
                      src={avatarImages[0]}
                      sx={{
                        width: 100,
                        height: 100,
                        border: "4px solid white",
                      }}
                    />
                  </Box>

                  <Box className="avatar-circle avatar-ml">
                    <Avatar
                      src={avatarImages[1]}
                      sx={{ width: 80, height: 80, border: "3px solid white" }}
                    />
                  </Box>

                  <Box className="avatar-circle avatar-bl">
                    <Avatar
                      src={avatarImages[2]}
                      sx={{ width: 90, height: 90, border: "4px solid white" }}
                    />
                  </Box>

                  <Box className="avatar-circle avatar-tm">
                    <Avatar
                      src={avatarImages[3]}
                      sx={{
                        width: 70,
                        height: 70,
                        marginTop: "32px",
                        border: "3px solid white",
                      }}
                    />
                  </Box>

                  <Box className="avatar-circle avatar-tr">
                    <Avatar
                      src={avatarImages[4]}
                      sx={{
                        width: 100,
                        height: 100,
                        border: "4px solid white",
                      }}
                    />
                  </Box>

                  <Box className="avatar-circle avatar-mr">
                    <Avatar
                      src={avatarImages[5]}
                      sx={{ width: 85, height: 85, border: "4px solid white" }}
                    />
                  </Box>

                  <Box className="avatar-circle avatar-br">
                    <Avatar
                      src={avatarImages[6]}
                      sx={{ width: 75, height: 75, border: "3px solid white" }}
                    />
                  </Box>

                  {/* Center Testimonial Content */}
                  <Stack className="testimonial-content">
                    <Typography
                      className="testimonial-text"
                      sx={{
                        fontFamily: '"Archivo", sans-serif',
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#333333",
                        lineHeight: "1.8",
                        textAlign: "center",
                        marginBottom: "30px",
                      }}
                    >
                      {testimonial.text}
                    </Typography>

                    {/* Customer Info */}
                    <Stack alignItems="center" gap={1}>
                      <Avatar
                        src={testimonial.image}
                        sx={{
                          width: 80,
                          height: 80,
                          border: "4px solid #f83d8e",
                          marginBottom: "10px",
                        }}
                      />

                      <Typography
                        sx={{
                          fontFamily: '"Archivo", sans-serif',
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#f83d8e",
                        }}
                      >
                        {testimonial.name}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: '"Archivo", sans-serif',
                          fontSize: "13px",
                          fontWeight: 400,
                          color: "#646464",
                          marginBottom: "8px",
                        }}
                      >
                        {testimonial.title}
                      </Typography>

                      <Rating
                        value={testimonial.rating}
                        readOnly
                        sx={{
                          "& .MuiRating-iconFilled": {
                            color: "#ffc107",
                          },
                        }}
                      />
                    </Stack>
                  </Stack>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
