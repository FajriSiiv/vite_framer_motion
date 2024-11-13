import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";

const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNav = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed top-10 left-10 z-20">
      {/* Toggle Button */}
      <button
        className="z-30 w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500 focus:outline-none"
        onClick={handleNav}
      >
        <FaBars size={24} className="text-white" />
      </button>

      {/* Animated Cover */}
      <div className="max-w-[300px] relative overflow-hidden"></div>
    </div>
  );
};

const NavSidebar = () => {
  const [active, setActive] = useState(false);

  // const handleNav = () => {
  //   setActive(!active);
  // };

  // Sidebar container variants
  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.2, // This staggers the child animations
      },
    },
  };

  // Item variants for h1 and each link
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      animate={active ? "visible" : "hidden"}
      variants={sidebarVariants}
      className="w-[500px] h-screen fixed top-0 left-0 bg-white z-10"
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="flex flex-col gap-3 justify-center items-center h-full">
        <motion.h1 variants={itemVariants}>Navbar</motion.h1>

        {/* Render each link with itemVariants for stagger effect */}
        {["Link 1", "Link 2", "Link 3", "Link 4", "Link 5"].map(
          (link, index) => (
            <motion.span key={index} variants={itemVariants}>
              {link}
            </motion.span>
          )
        )}
      </div>
    </motion.div>
  );
};
export default Nav;
