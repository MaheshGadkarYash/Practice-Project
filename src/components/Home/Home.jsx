import React from "react";
import { Chef,  Footer,  Gallery, Header, Intro } from "../../container";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
    <Navbar/>
      <Header />
      <Chef />
      <Intro />
      <Gallery />
      <Footer/>
    </div>
  );
};

export default Home;
