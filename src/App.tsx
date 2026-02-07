import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { useEffect } from "react";

// Components
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Divisions from "./pages/Divisions";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/not-found";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/divisions" element={<Divisions />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <ScrollToTop />
        <Navigation />
        <Router />
        <Footer />
        <Toaster />
      </TooltipProvider>
    </BrowserRouter>
  );
}

export default App;
