import React from "react";

import Home from "./pages/Home";
import Layout from "./components/Div/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Features from "./pages/Features";

const App = () => {
  const location = useLocation();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
