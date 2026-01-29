import { Container } from "@mui/material";
import "../../../css/aboutUs.css";
import Address from "./Address";
import Intro from "./Intro";
import Moments from "./Moments";
import Statistics from "./Statistics";
import TeamMembers from "./TeamMembers";

export function AboutUsPage() {
  return (
    <div className="about-us-page">
      <Intro />
      <Moments />
      <Statistics />
      <TeamMembers />
      <Address />
    </div>
  );
}
