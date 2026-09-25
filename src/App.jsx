import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home, Services, WorkPage, TeamPage, ContactPage } from "./pages";
import { GroupIndexPage, DetailPage } from "./components/Detail";
import ProjectDetail from "./components/Project";
import { AidPopup } from "./components/DecisionAid";
import { EASE } from "./components/ui";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<DetailPage groupPath="services" />} />
          <Route path="/platforms" element={<GroupIndexPage groupPath="platforms" />} />
          <Route path="/platforms/:slug" element={<DetailPage groupPath="platforms" />} />
          <Route path="/industries" element={<GroupIndexPage groupPath="industries" />} />
          <Route path="/industries/:slug" element={<DetailPage groupPath="industries" />} />
          <Route path="/solutions" element={<GroupIndexPage groupPath="solutions" />} />
          <Route path="/solutions/:slug" element={<DetailPage groupPath="solutions" />} />
          <Route path="/resources" element={<GroupIndexPage groupPath="resources" />} />
          <Route path="/resources/:slug" element={<DetailPage groupPath="resources" />} />
          <Route path="/blog/:slug" element={<DetailPage groupPath="blog" />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("dw-theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("dw-theme", theme);
    } catch {
      /* private mode */
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AidPopup />
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
