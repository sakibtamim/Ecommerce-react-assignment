import React from "react";
import ContactHeader from "../components/contactheader/ContactHeader";
import AboutBanner from "../components/aboutbanner/AboutBanner";
import Commitment from "../components/commitment/Commitment";
import AboutTeam from "../components/aboutteam/AboutTeam";

const AboutPage = () => {
  return (
    <>
      <ContactHeader />
      <AboutBanner />
      <AboutTeam />
      <Commitment />
    </>
  );
};

export default AboutPage;
