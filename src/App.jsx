import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";


import { AnimatePresence } from "framer-motion";

import {
  About,
  Contact,
  CursorTrail,
  Experience,
  Feedbacks,
  Footer,
  Hero,
  Navbar,
  Tech,
  Works,
  ProjectDetail,
} from "./components";

const HomePage = () => {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, []);

  return (
    <div className="relative" style={{ zIndex: 1 }}>
      <div className="relative">
        <Hero />
      </div>
      <About />
      <Works />
      <Experience />
      <Tech />
      <Feedbacks />
      <Contact />
      <Footer />
    </div>
  );
};

const ProjectDetailPage = () => (
  <div className="relative" style={{ zIndex: 1 }}>
    <ProjectDetail />
    <Footer />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <CursorTrail />
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
