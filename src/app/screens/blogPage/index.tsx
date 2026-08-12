import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Button, Container } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
    },
  ],
}));

const blogs = [
  { blogName: "Frutti IceCream", imgPath: "/img/blog1.jpg" },
  { blogName: "Moments", imgPath: "/img/blog2.jpg" },
  { blogName: "Working", imgPath: "/img/blog3.jpg" },
  { blogName: "Mood", imgPath: "/img/blog4.jpg" },
];

export function BlogPage() {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div style={{ background: "#f5ede0" }}>
      <Container sx={{ pt: "40px", pb: "100px" }}>
        {blogs.length !== 0
          ? blogs.map((blog, index) => {
              return (
                <Card
                  key={index}
                  sx={{
                    maxWidth: 945,
                    alignSelf: "center",
                    mt: "50px",
                    ml: "180px",
                    borderRadius: "30px",
                    border: "1.5px solid #F83D8E",
                  }}
                >
                  <CardMedia
                    component="img"
                    height={"280px"}
                    image={blog.imgPath}
                    alt="A delicious salad in a white bowl"
                  />
                  <CardContent>
                    <Box
                      sx={{
                        fontSize: "20px",
                        color: "#F83D8E",
                        fontWeight: "600",
                        mb: "10px",
                      }}
                    >
                      {blog.blogName}
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "black", mb: "-20px" }}
                    >
                      Curabitur pulvinar euismod ante, ac sagittis ante posuere
                      ac. Vivamus luctus commodo dolor porta feugiat. Fusce at
                      velit id ligula acsagittis ante posuere ac pharetra
                      laoreet commodo dolor porta.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="sevimlilarga qo'shish">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="ulashish">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expandedIndex === index}
                      onClick={() => handleExpandClick(index)}
                      aria-label="ko'proq ko'rsatish"
                    >
                      <Button variant="contained">Read More</Button>
                    </ExpandMore>
                  </CardActions>
                  <Collapse
                    in={expandedIndex === index}
                    timeout="auto"
                    unmountOnExit
                  >
                    <CardContent>
                      <Typography sx={{ marginBottom: 2 }}>
                        Tayyorlash usuli:
                      </Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Yarim stakan bulyonni qaynating, za'faronni qo'shing va
                        10 daqiqaga chetga olib qo'ying.
                      </Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        O'rta-yuqori olovda paella tovasi yoki katta, chuqur
                        tovada yog'ni qizdiring. Tovuq, qisqichbaqa va chorizo
                        qo'shing, vaqti-vaqti bilan aralashtirib, 6-8 daqiqa
                        davomida ozgina jigarrang bo'lguncha pishiring.
                        Qisqichbaqalarni katta likopchaga o'tkazing va chetga
                        olib qo'ying, tovuq va chorizoni tovada qoldiring.
                        Pimentón, dafna yaprog'i, sarimsoq, pomidor, piyoz, tuz
                        va murch qo'shing va qalinlashib, xushbo'y hid
                        chiqarguncha, taxminan 10 daqiqa davomida tez-tez
                        aralashtirib pishiring. Za'faronli bulyon va qolgan 4
                        1/2 stakan tovuq bulyonini qo'shing; qaynatib oling.
                      </Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Guruch qo'shing va juda ehtiyotkorlik bilan
                        aralashtiring. Ustiga artishok va qalampir qo'ying va
                        aralashtirmasdan, suyuqlikning ko'p qismi
                        so'rilmaguncha, 15-18 daqiqa davomida pishiring. Olovni
                        o'rta-past darajaga tushiring, qolgan qisqichbaqa va
                        midiyalarni qo'shing, ularni guruchga yashiring va
                        midiyalar ochilguncha va guruch yumshoq bo'lguncha yana
                        5-7 daqiqa davomida aralashtirmasdan pishiring.
                        (Ochilmagan midiyalarni tashlab yuboring.)
                      </Typography>
                      <Typography>
                        Olovdan olib, 10 daqiqa dam oldiring va keyin torting.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              );
            })
          : null}
      </Container>
    </div>
  );
}
