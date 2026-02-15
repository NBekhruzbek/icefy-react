import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Fab, Stack, TextField } from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import { Messages } from "../../../lib/config";
import MemberService from "../../services/MemberService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { T } from "../../../lib/types/common";
import { LoginInput, MemberInput } from "../../../lib/types/member";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    background:
      "linear-gradient(135deg, #fff5f9 0%, #fff0f6 50%, #fffbfe 100%)",
    border: "3px solid #ffc0e0",
    borderRadius: "40px",
    boxShadow:
      "0 25px 70px rgba(255, 182, 193, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
    padding: theme.spacing(5, 5, 5),
    position: "relative",
    overflow: "hidden",
  },
}));

// Cute Ice Cream Cone Decoration
const IceCreamsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;

  .ice-cream {
    position: absolute;
    font-size: 5rem;
    animation: float 4s ease-in-out infinite;
    opacity: 0.12;
    filter: drop-shadow(0 0 8px rgba(255, 182, 193, 0.3));

    &:nth-child(1) {
      top: -30px;
      right: 50px;
      animation-delay: 0s;
    }
    &:nth-child(2) {
      bottom: 10px;
      left: 30px;
      animation-delay: 1.3s;
    }
    &:nth-child(3) {
      top: 45%;
      right: -10px;
      animation-delay: 2.6s;
    }
  }

  .sparkle {
    position: absolute;
    font-size: 1.5rem;
    animation: twinkle 2s ease-in-out infinite;
    opacity: 0.3;

    &:nth-child(4) {
      top: 20px;
      left: 20%;
      animation-delay: 0s;
    }
    &:nth-child(5) {
      top: 60%;
      right: 15%;
      animation-delay: 0.6s;
    }
    &:nth-child(6) {
      bottom: 30px;
      right: 25%;
      animation-delay: 1.2s;
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-25px) rotate(8deg);
    }
  }

  @keyframes twinkle {
    0%,
    100% {
      opacity: 0.1;
      transform: scale(0.8);
    }
    50% {
      opacity: 0.4;
      transform: scale(1.2);
    }
  }
`;

const ModalVideo = styled.video`
  width: 55%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
  margin: -32px 0 -32px -32px;
  object-fit: cover;
  box-shadow: 0 15px 40px rgba(255, 105, 180, 0.25);
  position: relative;
  z-index: 1;
`;

const FormStack = styled(Stack)`
  position: relative;
  z-index: 2;
  margin-left: 55px;
  align-items: center;
  gap: 18px;

  h2 {
    color: #ff1493;
    font-family: "'Fredoka One', 'Comic Sans MS', cursive;
    font-size: 32px;
    font-weight: 900;
    margin: 0;
    text-shadow: 0 4px 8px rgba(255, 105, 180, 0.15), 2px 2px 0 rgba(255, 182, 193, 0.3);
    letter-spacing: 0.5px;
    line-height: 1.2;
    animation: slideInDown 0.6s ease-out;
  }

  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledTextField = styled(TextField)`
  && {
    width: 260px;

    .MuiOutlinedInput-root {
      border-radius: 20px;
      background: linear-gradient(135deg, #fffbfe 0%, #fff5f9 100%);
      transition: all 0.3s ease;
      border: 2.5px solid #ffc0e0;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -2.5px;
        left: 0;
        right: 0;
        height: 2.5px;
        background: linear-gradient(90deg, #ff8fd1, #ff69b4);
        border-radius: 0 0 20px 20px;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover {
        border-color: #ff9dd5;
        box-shadow: 0 8px 20px rgba(255, 182, 193, 0.25);
      }

      &.Mui-focused {
        border-color: #ff69b4;
        box-shadow: 0 0 0 4px rgba(255, 182, 193, 0.3);

        &::after {
          opacity: 1;
        }
      }

      input {
        color: #d946a6;
        font-family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        font-weight: 500;

        &::placeholder {
          color: #ff8fab !important;
          opacity: 1 !important;
          font-weight: 500;
        }
      }
    }

    .MuiOutlinedInput-notchedOutline {
      border: none;
    }

    .MuiInputBase-input {
      padding: 14px 18px;
      font-size: 14px;

      &::placeholder {
        color: #ff8fab;
        opacity: 1;
      }
    }

    label {
      color: #ff69b4;
      font-weight: 700;
      font-size: 15px;
      letter-spacing: 0.5px;
      transform: translate(14px, -9px) scale(0.75);
      background: linear-gradient(135deg, #fffbfe 0%, #fff5f9 100%);
      padding: 0 6px;

      &.Mui-focused {
        color: #ff1493;
      }

      &.MuiInputLabel-shrink {
        transform: translate(14px, -9px) scale(0.75);
      }
    }
  }
`;

const CuteButton = styled(Fab)`
  && {
    background: linear-gradient(135deg, #ff8fd1 0%, #ff69b4 50%, #ff5ec7 100%);
    color: white;
    font-weight: 800;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow:
      0 12px 30px rgba(255, 105, 180, 0.35),
      0 0 20px rgba(255, 182, 193, 0.3);
    margin-top: 15px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50px;
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.3) 0%,
        transparent 100%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      transform: scale(1.12) translateY(-5px);
      box-shadow:
        0 18px 45px rgba(255, 105, 180, 0.45),
        0 0 30px rgba(255, 182, 193, 0.4);
      background: linear-gradient(
        135deg,
        #ff5ec7 0%,
        #ff69b4 50%,
        #ff8fd1 100%
      );

      &::before {
        opacity: 1;
      }

      svg {
        animation: bounce 0.6s ease-in-out;
      }
    }

    &:active {
      transform: scale(0.95);
    }

    svg {
      transition: transform 0.3s ease;
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(-3px);
      }
      75% {
        transform: translateX(3px);
      }
    }
  }
`;

interface AuthenticationModalProps {
  signupOpen: boolean;
  loginOpen: boolean;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;
  const classes = useStyles();
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPhone, setMemberPhone] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");

  /** HANDLERS **/

  const handleUserName = (e: T) => {
    setMemberNick(e.target.value);
  };
  const handlePhone = (e: T) => {
    setMemberPhone(e.target.value);
  };
  const handlePassword = (e: T) => {
    setMemberPassword(e.target.value);
  };

  const handlePasswordKeyDown = (e: T) => {
    if (e.key === "Enter" && signupOpen) {
      handleSignupRequest().then();
    } else if (e.key === "Enter" && loginOpen) {
      handleLoginRequest().then();
    }
  };

  const handleSignupRequest = async () => {
    try {
      console.log("inputs: ", memberNick, memberPhone, memberPassword);
      const isFulfill =
        memberNick !== "" && memberPhone !== "" && memberPassword !== "";
      if (!isFulfill) throw new Error(Messages.error3);

      const signupInput: MemberInput = {
        memberNick: memberNick,
        memberPhone: memberPhone,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.signup(signupInput);

      //saving Authenticated user
      handleSignupClose();
    } catch (err) {
      console.log(err);
      handleSignupClose();
      sweetErrorHandling(err).then();
    }
  };

  const handleLoginRequest = async () => {
    try {
      const isFulfill = memberNick !== "" && memberPassword !== "";
      if (!isFulfill) throw new Error(Messages.error3);

      const loginInput: LoginInput = {
        memberNick: memberNick,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.login(loginInput);

      // Saving Authenticated user
      handleLoginClose();
    } catch (err) {
      console.log(err);
      handleLoginClose();
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div>
      {/* SIGNUP MODAL */}
      <Modal
        aria-labelledby="signup-modal-title"
        aria-describedby="signup-modal-description"
        className={classes.modal}
        open={signupOpen}
        onClose={handleSignupClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={signupOpen}>
          <Stack
            className={classes.paper}
            direction={"row"}
            sx={{ width: "850px", position: "relative" }}
          >
            <IceCreamsContainer>
              <div className="ice-cream">🍦</div>
              <div className="ice-cream">🍨</div>
              <div className="ice-cream">🍧</div>
              <div className="sparkle">✨</div>
              <div className="sparkle">💫</div>
              <div className="sparkle">⭐</div>
            </IceCreamsContainer>

            <ModalVideo
              autoPlay
              muted
              loop
              playsInline
              src={"/video/signup-video.mp4"}
              style={{ height: "400px", borderRadius: "40px" }}
            />

            <FormStack>
              <h2>🎉 Join Us!</h2>
              <StyledTextField
                id="signup-username"
                label="Username"
                variant="outlined"
                onChange={handleUserName}
                placeholder="Your sweet name"
              />
              <StyledTextField
                id="signup-phone"
                label="Phone Number"
                variant="outlined"
                onChange={handlePhone}
                placeholder="010 ..."
              />
              <StyledTextField
                id="signup-password"
                label="Password"
                variant="outlined"
                type="password"
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
                placeholder="Keep it sweet & strong"
              />
              <CuteButton
                variant="extended"
                color="primary"
                onClick={handleSignupRequest}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Sign Up
              </CuteButton>
            </FormStack>
          </Stack>
        </Fade>
      </Modal>

      {/* LOGIN MODAL */}
      <Modal
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
        className={classes.modal}
        open={loginOpen}
        onClose={handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={loginOpen}>
          <Stack
            className={classes.paper}
            direction={"row"}
            sx={{ width: "800px", position: "relative" }}
          >
            <IceCreamsContainer>
              <div className="ice-cream">🍦</div>
              <div className="ice-cream">🍨</div>
              <div className="ice-cream">🍧</div>
              <div className="sparkle">✨</div>
              <div className="sparkle">💫</div>
              <div className="sparkle">⭐</div>
            </IceCreamsContainer>

            <ModalVideo
              autoPlay
              muted
              loop
              playsInline
              src={"/video/login-video.mp4"}
              style={{ height: "300px", margin: "1px" }}
            />

            <FormStack sx={{ mt: "20px" }}>
              <h2>👋 Welcome Back!</h2>
              <StyledTextField
                id="login-username"
                label="Username"
                variant="outlined"
                onChange={handleUserName}
                placeholder="Your sweet name"
              />
              <StyledTextField
                id="login-password"
                label="Password"
                variant="outlined"
                type="password"
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
                placeholder="Your secret password"
              />
              <CuteButton
                variant="extended"
                color="primary"
                onClick={handleLoginRequest}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Login
              </CuteButton>
            </FormStack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}
