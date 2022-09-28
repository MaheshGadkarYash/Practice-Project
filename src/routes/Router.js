import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components";
import {
  AboutUs,
  Login,
  FindUs,
  Registration,
  Laurels,
  SpecialMenu,
} from "../container";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<SpecialMenu />} />
        <Route path="/awards" element={<Laurels />} />
        <Route path="/contact" element={<FindUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
};

export default Router;
