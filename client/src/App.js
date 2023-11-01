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
import AboutPage from "./pages/aboutPage/AboutPage";
import AchievementPage from "./pages/achievementPage/AchievementPage";
import PhotoPage from "./pages/photoPage/PhotoPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/Reva_web/" element={<Home />} />
        <Route path="/Reva_web/about" element={<About />} />
        <Route path="/Reva_web/achievements" element={<Services />} />
        <Route path="/Reva_web/gallery" element={<Portfolio />} />
        <Route path="/Reva_web/contact" element={<Contact />} />
        <Route path="/Reva_web/login" element={<Login />} />
        <Route path="/Reva_web/aboutPage" element={<AboutPage />} />
        <Route path="/Reva_web/achievementPage" element={<AchievementPage />} />
        <Route path="/Reva_web/PhotoPage" element={<PhotoPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
