import React from "react";
import { CgFramer } from "react-icons/cg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="fixed border px-6 py-3 rounded-2xl left-1/2 top-10 -translate-x-1/2 bg-nav-gradient backdrop-blur-2xl z-50">
      <div className="flex gap-x-4 text-white/40 font-medium">
        <p className="flex items-center justify-center">
          <CgFramer size={30} className="text-emerald-600" />
          <span className="text-white text-semibold">ShopiFrame</span>
        </p>
        <div className="flex items-center justify-center gap-x-3 text-sm">
          <span>Features</span>
          <span>How it works</span>
          <span>Pricing</span>
          <span>FAQ</span>

          <div className="h-[20px] w-[2px] bg-white/40" />
          <span>Documentation</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
