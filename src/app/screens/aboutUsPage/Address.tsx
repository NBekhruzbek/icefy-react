import { Box, Container, Stack } from "@mui/material";

export default function Address() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Container>
        <Stack className="address">
          <Box className={"txt-area"}>
            <Box className={"main-txt"}>
              <Box component={"span"}>Our </Box>
              <Box component={"span"} color={"#F83D8E"}>
                Address
              </Box>
            </Box>
            <Box className={"address-txt"}>
              206 World cup-ro, 원천동 Yeongtong-gu, Suwon-si, Gyeonggi-do
            </Box>
          </Box>
          <Box>
            <iframe
              className={"address-map"}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6316.976100959!2d127.04666960538265!3d37.284905717689135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b45558458cc69%3A0x4ee9cd5351b8c49d!2sAjou%20University!5e0!3m2!1sen!2skr!4v1763311153627!5m2!1sen!2skr"
              width="1300"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
