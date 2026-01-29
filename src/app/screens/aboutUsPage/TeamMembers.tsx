import { Box, Container, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function TeamMembers() {
  return (
    <div
      style={{
        background:
          "linear-gradient(300deg, #EFD7EF 8%, #F5F9FC 43%, #F8EAE1 64%, #EAF8F9 87%)",
      }}
    >
      <Container>
        <Stack className="team-members">
          <Stack className="txt-area">
            <Box className={"main-txt"}>
              <Box component={"span"}>Our </Box>
              <Box component={"span"} color={"#F83D8E"}>
                Team{" "}
              </Box>
              <Box component={"span"}>Members</Box>
            </Box>
            <Box className={"extra-txt"}>
              Get to know the friendly faces behind your favorite flavors.
            </Box>
          </Stack>
          <Stack className="member-cards">
            <Stack className="member-card">
              <Box>
                <img
                  src="/img/member1.jpg"
                  alt="Your browser doesn't support the member img!"
                  className="member-img"
                />
              </Box>
              <Box className={"member-name"}>Marvin Joner</Box>
              <Box className={"member-job"}>Bakery Worker</Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  mt: "30px",
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ml: "20px",
                  }}
                >
                  <a href="https://www.facebook.com/NBekhruzbek">
                    <FacebookIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a href="https://www.linkedin.com/in/nbekhruzbek/">
                    <LinkedInIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: "20px",
                  }}
                >
                  <a href="https://www.instagram.com/mr_bekhruzbek1">
                    <InstagramIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
              </Stack>
            </Stack>
            <Stack className="member-card">
              <Box>
                <img
                  src="/img/member2.jpg"
                  alt="Your browser doesn't support the member img!"
                  className="member-img"
                />
              </Box>
              <Box className={"member-name"}>Patrica Woodrum</Box>
              <Box className={"member-job"}>Staff Worker</Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  mt: "30px",
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ml: "20px",
                  }}
                >
                  <a href="https://www.facebook.com/NBekhruzbek">
                    <FacebookIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a href="https://www.linkedin.com/in/nbekhruzbek/">
                    <LinkedInIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: "20px",
                  }}
                >
                  <a href="https://www.instagram.com/mr_bekhruzbek1">
                    <InstagramIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
              </Stack>
            </Stack>
            <Stack className="member-card">
              <Box>
                <img
                  src="/img/member3.jpg"
                  alt="Your browser doesn't support the member img!"
                  className="member-img"
                />
              </Box>
              <Box className={"member-name"}>Hannaz Stone</Box>
              <Box className={"member-job"}>Shop Worker</Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  mt: "30px",
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ml: "20px",
                  }}
                >
                  <a href="https://www.facebook.com/NBekhruzbek">
                    <FacebookIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a href="https://www.linkedin.com/in/nbekhruzbek/">
                    <LinkedInIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: "20px",
                  }}
                >
                  <a href="https://www.instagram.com/mr_bekhruzbek1">
                    <InstagramIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
              </Stack>
            </Stack>
            <Stack className="member-card">
              <Box>
                <img
                  src="/img/member4.jpg"
                  alt="Your browser doesn't support the member img!"
                  className="member-img"
                />
              </Box>
              <Box className={"member-name"}>Elina James</Box>
              <Box className={"member-job"}>Bakery Worker</Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  mt: "30px",
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ml: "20px",
                  }}
                >
                  <a href="https://www.facebook.com/NBekhruzbek">
                    <FacebookIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a href="https://www.linkedin.com/in/nbekhruzbek/">
                    <LinkedInIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: "20px",
                  }}
                >
                  <a href="https://www.instagram.com/mr_bekhruzbek1">
                    <InstagramIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
              </Stack>
            </Stack>
            <Stack className="member-card">
              <Box>
                <img
                  src="/img/member5.jpg"
                  alt="Your browser doesn't support the member img!"
                  className="member-img"
                />
              </Box>
              <Box className={"member-name"}>Kevin Andrew</Box>
              <Box className={"member-job"}>Staff Worker</Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  mt: "30px",
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ml: "20px",
                  }}
                >
                  <a href="https://www.facebook.com/NBekhruzbek">
                    <FacebookIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a href="https://www.linkedin.com/in/nbekhruzbek/">
                    <LinkedInIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: "20px",
                  }}
                >
                  <a href="https://www.instagram.com/mr_bekhruzbek1">
                    <InstagramIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
              </Stack>
            </Stack>
            <Stack className="member-card">
              <Box>
                <img
                  src="/img/member6.jpg"
                  alt="Your browser doesn't support the member img!"
                  className="member-img"
                />
              </Box>
              <Box className={"member-name"}>Lauren Trout</Box>
              <Box className={"member-job"}>Shop Worker</Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  mt: "30px",
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ml: "20px",
                  }}
                >
                  <a href="https://www.facebook.com/NBekhruzbek">
                    <FacebookIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a href="https://www.linkedin.com/in/nbekhruzbek/">
                    <LinkedInIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#F83D8E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: "20px",
                  }}
                >
                  <a href="https://www.instagram.com/mr_bekhruzbek1">
                    <InstagramIcon sx={{ color: "white", mt: "5px" }} />
                  </a>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
