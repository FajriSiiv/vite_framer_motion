import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative h-full bg-black overflow-clip">
      <div className="fixed h-[200px] w-screen bg-gradient-to-b to-rose-500/0 from-emerald-500/20 opacity-75" />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
