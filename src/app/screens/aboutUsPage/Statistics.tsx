import { Box, Container, Stack } from "@mui/material";

export default function Statistics() {
  return (
    <div
      style={{
        backgroundColor: "linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF;",
      }}
    >
      <Container>
        <Stack className="statistics">
          <Stack className="txt-area">
            <Box className={"main-txt"}>
              <Box component={"span"}>Our </Box>
              <Box component={"span"} color={"#F83D8E"}>
                Statistics
              </Box>
            </Box>
            <Box className={"extra-txt"}>
              What makes us special through our impressive statistics.
            </Box>
          </Stack>
          <Stack className="static-cards">
            <Stack className="static-card">
              <Box className={"static-number"}>
                23
                <Box className="static-symbol" component={"span"}>
                  +
                </Box>
              </Box>
              <Box className={"static-txt"}>Awards Win</Box>
            </Stack>
            <Stack className="static-card">
              <Box className={"static-number"}>
                95
                <Box className="static-symbol" component={"span"}>
                  %
                </Box>
              </Box>
              <Box className={"static-txt"}>Satisified Clients</Box>
            </Stack>
            <Stack className="static-card">
              <Box className={"static-number"}>
                57
                <Box className="static-symbol" component={"span"}>
                  +
                </Box>
              </Box>
              <Box className={"static-txt"}>Years of Experience</Box>
            </Stack>
            <Stack className="static-card">
              <Box className={"static-number"}>
                143
                <Box className="static-symbol" component={"span"}>
                  +
                </Box>
              </Box>
              <Box className={"static-txt"}>Employees Working</Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
