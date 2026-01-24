import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../css/app.css";

function App() {
  return (
    <Container maxWidth="sm">
      <Stack flexDirection={"column"}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h4"}>
            Create React App on TypeScript with REDUX
          </Typography>
        </Box>
        <Button variant="contained">Contained</Button>
      </Stack>
    </Container>
  );
}

export default App;
