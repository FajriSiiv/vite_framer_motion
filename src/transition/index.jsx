import React from "react";
import { motion } from "framer-motion";
const transition = (OgComponent) => {
  const TransitionBlock = ({ percentLeft, sidePositionTop = true }) => {
    const delayTransition = percentLeft * 0.017;

    return (
      <motion.div
        className={`fixed ${
          sidePositionTop ? "top-0" : "bottom-0"
        } w-1/5 h-[50vh] bg-white ${
          sidePositionTop ? "origin-top" : "origin-bottom"
        } z-50`}
        style={{
          left: `${percentLeft}%`,
        }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          delay: delayTransition,
          ease: "anticipate",

          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      />
    );
  };

  return (props) => (
    <>
      <OgComponent {...props} />
      {/* Top */}
      <TransitionBlock percentLeft={0} />
      <TransitionBlock percentLeft={20} />
      <TransitionBlock percentLeft={40} />
      <TransitionBlock percentLeft={60} />
      <TransitionBlock percentLeft={80} />

      {/* Bottom */}
      <TransitionBlock percentLeft={0} sidePositionTop={false} />
      <TransitionBlock percentLeft={20} sidePositionTop={false} />
      <TransitionBlock percentLeft={40} sidePositionTop={false} />
      <TransitionBlock percentLeft={60} sidePositionTop={false} />
      <TransitionBlock percentLeft={80} sidePositionTop={false} />
    </>
  );
};

export default transition;
