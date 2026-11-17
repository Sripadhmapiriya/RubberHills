import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/Shared/ScrollToTop';

// 7 Core Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Campus from './pages/Campus/Campus';
import Learning from './pages/Learning/Learning';
import Classes from './pages/Classes/Classes';
import TimeTable from './pages/TimeTable/TimeTable';
import Contact from './pages/Contact/Contact';

function LegacyRedirect() {
  React.useEffect(() => {
    window.location.replace('/previous-website.html');
  }, []);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/time-table" element={<TimeTable />} />
            <Route path="/contact" element={<Contact />} />
            {/* Preserved Previous Website Direct Access */}
            <Route path="/previous-website" element={<LegacyRedirect />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

