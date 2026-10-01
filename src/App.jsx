import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileBottomBar from './components/layout/MobileBottomBar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ACMaintenance from './pages/ACMaintenance';
import Electrical from './pages/Electrical';
import Plumbing from './pages/Plumbing';
import Painting from './pages/Painting';
import GeneralMaintenance from './pages/GeneralMaintenance';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import RequestService from './pages/RequestService';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          <Routes>
            {/* Main Pages */}
            <Route path="/"                element={<Home />} />
            <Route path="/about"           element={<About />} />
            <Route path="/services"        element={<Services />} />
            <Route path="/gallery"         element={<Gallery />} />
            <Route path="/contact"         element={<Contact />} />
            <Route path="/request-service" element={<RequestService />} />

            {/* Service Detail Pages */}
            <Route path="/services/ac-maintenance"     element={<ACMaintenance />} />
            <Route path="/services/electrical"         element={<Electrical />} />
            <Route path="/services/plumbing"           element={<Plumbing />} />
            <Route path="/services/painting"           element={<Painting />} />
            <Route path="/services/general-maintenance" element={<GeneralMaintenance />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <MobileBottomBar />
      </div>
    </BrowserRouter>
  );
}
