import {
  useScroll,
  useSpring,
  useTransform,
  motion,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import HeroDark from "./assets/hero-dark.jpg";

const App = () => {
  const refHeroImg = useRef();
  const { scrollYProgress } = useScroll({
    target: refHeroImg,
    offset: ["start start", "start end"],
  });

  const xAnim = useTransform(scrollYProgress, [0, 1], ["0", "-12"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const x = useMotionTemplate`rotate(${xAnim}deg) skewX(${xAnim}deg) scale(${scale})`;

  return (
    <div className="relative h-full bg-black overflow-hidden">
      <div className="fixed h-[200px] w-screen bg-gradient-to-b to-rose-500/0 from-emerald-500/20 opacity-75" />
      <BlurBlock />
      <HeroMain />

      <SectionDiv>
        <div className="max-h-[800px] relative" ref={refHeroImg}>
          <motion.div
            className="absolute 
            "
            style={{
              height: 400,
              width: 400,
            }}
          />
          <motion.img
            src={HeroDark}
            className="object-contain w-full h-full"
            style={{
              transform: x,
              opacity,
            }}
          />
        </div>
      </SectionDiv>
    </div>
  );
};

const SectionDiv = ({ children }) => {
  return <section className="px-28">{children}</section>;
};

const HeroMain = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center z-10 relative text-white/90">
      <SectionDiv>
        <div className="flex flex-col gap-y-10">
          <h1 className="text-7xl font-semibold max-w-4xl text-center leading-none mx-auto">
            Build beautiful Websites stores with Framer!
          </h1>
          <p className="text-center text-xl font-medium max-w-3xl mx-auto text-white/50">
            Design and publish your
            <span className="text-white/90"> Websites</span>, manage it with
            <span className="text-white/90"> Framer</span>.
          </p>
        </div>
      </SectionDiv>
    </div>
  );
};

const BlurBlock = () => {
  return (
    <div className="absolute h-screen top-0 right-0 left-0 bottom-0 inset-0 blur-[100px] z-10">
      <motion.div
        initial={{ left: "20%" }}
        animate={{ left: "35%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 10 }}
        className=" size-40  rounded-full bg-emerald-500 z-0 absolute  top-10"
      />
      <motion.div
        initial={{ left: "80%", top: "30%" }}
        animate={{ left: "60%", top: "60%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 10 }}
        className=" size-72  rounded-full bg-sky-300/50 z-0 absolute"
      />
      <motion.div
        initial={{ bottom: "10%", left: "10%" }}
        animate={{ bottom: "20%", left: "50%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 10 }}
        className=" size-72  rounded-full bg-emerald-300/50 z-0 absolute  left-1/4"
      />
    </div>
  );
};

export default App;
