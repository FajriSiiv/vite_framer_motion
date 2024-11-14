import React from "react";
import { BlurBlock } from "../components/Home/BlurBlock";
import { HeroMain } from "../components/Home/Hero";
import { ImgHero } from "../components/Home/ImgHero";
import { MeetSection } from "../components/Home/Meet";
import transition from "../transition";

const Home = () => {
  return (
    <>
      <BlurBlock />
      <HeroMain />
      <ImgHero />
      <MeetSection />
    </>
  );
};

export default transition(Home);
