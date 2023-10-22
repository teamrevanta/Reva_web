import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Services from "./pages/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Services />} />
        <Route path="/gallery" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
