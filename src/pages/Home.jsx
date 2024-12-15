import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Toolkit from "../components/Toolkit";
import QuickActions from "../components/QuickActions";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Toolkit />
      <QuickActions />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
