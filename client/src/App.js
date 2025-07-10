import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";

// import Services from "./pages/Services";

import AboutPage from "./pages/aboutPage/AboutPage";
import AchievementPage from "./pages/achievementPage/AchievementPage";
import PhotoPage from "./pages/photoPage/PhotoPage";
import Youtube from "./components/youtube/Youtube";
import OurTeam from "./pages/ourTeam/OurTeam";
import Gallery from "./pages/gallery/Gallery";
import Sponsor from "./pages/Sponsor/Sponsor";
import ContactPage from "./pages/contactPage/ContactPage";
import Notice from "./pages/notice/Notice";
import Registration from "./pages/registration/Registration";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermAndCondition from "./pages/termAndCondition/TermAndCondition";
import RefundAndCancellation from "./pages/refundAndCancellation/RefundAndCancellation";
import ShippingPolicy from "./pages/shippingPolicy/ShippingPolicy";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/achievements" element={<AchievementPage />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/achievementPage" element={<AchievementPage />} />
        <Route path="/PhotoPage" element={<PhotoPage />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermAndCondition" element={<TermAndCondition />} />
         <Route path="/refundAndCancellation" element={<RefundAndCancellation />} />
          <Route path="/shippingPolicy" element={<ShippingPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
