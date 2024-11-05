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
import { CgFramer } from "react-icons/cg";
import { BsArrowRight, BsBox2Fill } from "react-icons/bs";
import { PiArrowBendUpRightBold, PiShoppingBagOpenFill } from "react-icons/pi";
import { text } from "framer-motion/client";
import { FaArrowTrendUp, FaCheck } from "react-icons/fa6";
import { MdCodeOff } from "react-icons/md";
import { RiDiscountPercentLine, RiNavigationFill } from "react-icons/ri";
import { BiLogoShopify, BiSolidCustomize } from "react-icons/bi";
import { SiShopify } from "react-icons/si";
import { IoIosCard } from "react-icons/io";

const App = () => {
  return (
    <div className="relative h-full bg-black overflow-hidden">
      <div className="fixed h-[200px] w-screen bg-gradient-to-b to-rose-500/0 from-emerald-500/20 opacity-75" />
      <BlurBlock />
      <HeroMain />
      <ImgHero />
      <MeetSection />
      <div className="h-screen"></div>
    </div>
  );
};

const MeetSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [0, 30]);
  const yS = useTransform(scrollYProgress, [0.5, 1], [0, 30]);

  const ySmooth = useSpring(y, { stiffness: 300, damping: 50 });
  const ySmoothS = useSpring(yS, { stiffness: 300, damping: 50 });

  const CardFramer = ({ textHighlight, textAfterHighlight, text, icon }) => {
    return (
      <div className="flex flex-col text-white/50 text-base ">
        <p className=" flex gap-x-1 items-center capitalize">
          {icon}
          <span className="text-white ">{textHighlight}</span>
          {textAfterHighlight}
        </p>
        <p>{text}</p>
      </div>
    );
  };

  return (
    <SectionDiv className="bg-green-900/5 mt-20">
      <div className="py-14 text-white" ref={ref}>
        <h2 className="uppercase text-[#34fb49b2] tracking-[0.4em] font-bold">
          meet shopiframe
        </h2>

        <p className="text-4xl leading-tight mt-6 font-semibold">
          Framer Flexiility, Shopify Strength
        </p>

        <motion.div
          style={{ y: ySmooth }}
          className="flex flex-col gap-y-10 mt-20"
        >
          <div className="flex flex-col gap-y-3">
            <div className="flex gap-x-5 justify-start">
              <div className=" relative">
                <div className="p-3 border border-neutral-900 bg-neutral-950 rounded-full z-10 relative">
                  <CgFramer className="text-[#00b6fc] " size={50} />
                </div>
                <div className="absolute left-5 top-5 size-10 bg-[#00b6fc] blur-2xl" />
              </div>
              <div className="flex flex-col gap-y-3">
                <h3 className="text-lg leading-none">Design and publish in</h3>
                <h3 className="text-4xl font-bold leading-none">Framer</h3>
              </div>
            </div>

            <div className="grid grid-cols-3 grid-rows-3 gap-12 mt-16">
              <CardFramer
                icon={<PiArrowBendUpRightBold size={18} />}
                text="prototyping capabilities"
                textAfterHighlight="flawless"
                textHighlight="prototyping"
              />
              <CardFramer
                icon={<FaArrowTrendUp size={18} />}
                textHighlight="SEO Friendly"
                textAfterHighlight="better"
                text="online accessibility"
              />
              <CardFramer
                icon={<FaCheck size={18} />}
                textHighlight="Hight Speed Website"
                textAfterHighlight="lightning"
                text="-fast performance"
              />
              <CardFramer
                icon={<MdCodeOff size={18} />}
                textHighlight="no-code"
                textAfterHighlight="goodbye"
                text="to coding headaches"
              />
              <CardFramer
                icon={<RiNavigationFill size={18} />}
                textHighlight="easy to use"
                textAfterHighlight="simplified"
                text="design process"
              />
              <CardFramer
                icon={<BiSolidCustomize size={18} />}
                textHighlight="very customizable"
                textAfterHighlight="unleash"
                text="your creativity"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: ySmoothS }}
          className="flex flex-col gap-y-10 mt-20"
        >
          <div className="flex flex-col gap-y-3">
            <div className="flex gap-x-5 justify-start">
              <div className=" relative">
                <div className="p-3 border border-neutral-900 bg-neutral-950 rounded-full z-10 relative">
                  <BiLogoShopify className="text-[#8db849] " size={50} />
                </div>
                <div className="absolute left-5 top-5 size-10 bg-[#8db849] blur-2xl" />
              </div>
              <div className="flex flex-col gap-y-3">
                <h3 className="text-lg leading-none">Manage in</h3>
                <h3 className="text-4xl font-bold leading-none">Shopify</h3>
              </div>
            </div>

            <div className="grid grid-cols-3 grid-rows-3 gap-12 mt-16">
              <CardFramer
                icon={<PiShoppingBagOpenFill size={18} />}
                textHighlight="inventory management."
                textAfterHighlight="effortless"
                text="inventory control and tracking"
              />
              <CardFramer
                icon={<IoIosCard size={18} />}
                textHighlight="paymen gateways."
                textAfterHighlight="secure,"
                text="seamless transactions"
              />
              <CardFramer
                icon={<FaArrowTrendUp size={18} />}
                textHighlight="analytics & insights."
                textAfterHighlight="data"
                text="-driven business insights."
              />
              <CardFramer
                icon={<RiDiscountPercentLine size={18} />}
                textHighlight="customers & discounts."
                textAfterHighlight="endgage"
                text="customers with discounts."
              />
              <CardFramer
                icon={<BsBox2Fill size={18} />}
                textHighlight="orders & fulfilment."
                textAfterHighlight="streamlined."
                text="order management and fulfillment."
              />
              <CardFramer
                icon={<PiShoppingBagOpenFill size={18} />}
                textHighlight="inventory management."
                textAfterHighlight="effortless"
                text="inventory control and tracking"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionDiv>
  );
};

const SectionDiv = ({ children, className, ref }) => {
  return (
    <section className={`px-52 ${className}`} ref={ref}>
      {children}
    </section>
  );
};

const ImgHero = () => {
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
  );
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
