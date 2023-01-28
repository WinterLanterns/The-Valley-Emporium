import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import About from "../components/About";
import Announcement from "../components/Announcement";

const Home = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <Header />
      <About />
    </>
  );
};

export default Home;
