import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";

import Services from "./pages/Services";

import AboutPage from "./pages/aboutPage/AboutPage";
import AchievementPage from "./pages/achievementPage/AchievementPage";
import PhotoPage from "./pages/photoPage/PhotoPage";
import Youtube from "./components/youtube/Youtube";
import OurTeam from "./pages/ourTeam/OurTeam";
import Gallery from "./pages/gallery/Gallery";
import Sponsor from "./pages/Sponsor/Sponsor";
import ContactPage from "./pages/contactPage/ContactPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/Reva_web/" element={<Home />} />

        <Route path="/Reva_web/achievements" element={<Services />} />
        <Route path="/Reva_web/Gallery" element={<Gallery />} />
        <Route path="/Reva_web/contact" element={<ContactPage />} />

        <Route path="/Reva_web/aboutPage" element={<AboutPage />} />
        <Route path="/Reva_web/achievementPage" element={<AchievementPage />} />
        <Route path="/Reva_web/PhotoPage" element={<PhotoPage />} />
        <Route path="/Reva_web/youtube" element={<Youtube />} />
        <Route path="/Reva_web/ourTeam" element={<OurTeam />} />
        <Route path="/Reva_web/sponsor" element={<Sponsor />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
