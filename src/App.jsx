import React from "react";

import Navbar from "./components/Navbar";
import { BlurBlock } from "./components/Home/BlurBlock";
import { HeroMain } from "./components/Home/Hero";
import { ImgHero } from "./components/Home/ImgHero";
import { MeetSection } from "./components/Home/Meet";

const App = () => {
  return (
    <div className="relative h-full bg-black overflow-clip">
      <div className="fixed h-[200px] w-screen bg-gradient-to-b to-rose-500/0 from-emerald-500/20 opacity-75" />
      <Navbar />
      <BlurBlock />
      <HeroMain />
      <ImgHero />
      <MeetSection />
    </div>
  );
};

export default App;
