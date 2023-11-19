import React from "react";
import Slider from "../components/slider/Slider";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import Services from "./Services";
import Contact from "../components/contact/Contact";
import Testmonial from "../components/testmonial/Testmonial";
import Youtube from "../components/youtube/Youtube";

const Home = () => {
  return (
    <div>
      <Slider />
      <About />
      <Portfolio />
      <Services />
      <Youtube />
      <Contact />
      <Testmonial />
    </div>
  );
};

export default Home;
