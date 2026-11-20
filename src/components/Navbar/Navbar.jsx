import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  // Close mobile menu on route change and ensure scroll unlock
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  // Prevent background scrolling only while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Track scroll for sticky falling island navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Programmatic, instantaneous mobile menu navigation handler
  const handleMobileNav = useCallback(
    (e, targetPath) => {
      e.preventDefault();
      e.stopPropagation();
      document.body.style.overflow = '';
      setMobileMenuOpen(false);

      if (location.pathname === targetPath) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } else {
        navigate(targetPath);
        window.scrollTo(0, 0);
      }
    },
    [location.pathname, navigate]
  );

  // Exactly 7 core navigation items in requested order:
  // 1. Home, 2. About, 3. Campus, 4. Learning, 5. Classes, 6. Time Table, 7. Contact
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Campus', path: '/campus' },
    { name: 'Learning', path: '/learning' },
    { name: 'Classes', path: '/classes' },
    { name: 'Time Table', path: '/time-table' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`navbar-header ${isHomePage ? 'home-transparent' : ''} ${scrolled ? 'scrolled' : ''
        }`}
    >
      {/* Falling Curvy Island Container */}
      <div className="navbar-falling-island">
        {/* Left Wing Inverted Fillet ("Falling" Curve) */}
        <svg
          className="nav-flare-wing nav-flare-left"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M 0 0 H 24 V 24 C 24 10.745 13.255 0 0 0 Z"
            fill="#FAF7EE"
          />
        </svg>

        {/* Right Wing Inverted Fillet ("Falling" Curve) */}
        <svg
          className="nav-flare-wing nav-flare-right"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M 24 0 H 0 V 24 C 0 10.745 10.745 0 24 0 Z"
            fill="#FAF7EE"
          />
        </svg>

        <div className="navbar-container">
          {/* Brand Logo on the Left - Exact Original Circular Logo */}
          <Link to="/" className="navbar-brand" aria-label="Rubber Hills Kindergarten Home">
            <div className="brand-crest-wrapper">
              <img
                src="/original/school-logo.jpg"
                alt="Rubber Hills Kindergarten Logo"
                className="brand-crest-img"
              />
            </div>
            <div className="brand-text-col">
              <span className="brand-name">RUBBER HILLS</span>
              <span className="brand-sub">KINDERGARTEN</span>
            </div>
          </Link>

          {/* Centered Navigation Links - Exactly 7 Direct Pages */}
          <nav className="navbar-nav" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={() => {
                  if (item.path === '/') {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                  }
                }}
              >
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Action Button: "Visit Us ->" on the Far Right */}
          <div className="navbar-action">
            <Link to="/contact" className="btn-visit-us-yellow">
              <span>Visit Us</span>
              <ArrowRight size={16} className="btn-arrow" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => {
          document.body.style.overflow = '';
          setMobileMenuOpen(false);
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div
          className="mobile-drawer-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-drawer-header">
            <Link
              to="/"
              className="navbar-brand"
              onClick={(e) => handleMobileNav(e, '/')}
            >
              <div className="brand-crest-wrapper" style={{ width: '40px', height: '40px' }}>
                <img
                  src="/original/school-logo.jpg"
                  alt="Rubber Hills Kindergarten Logo"
                  className="brand-crest-img"
                />
              </div>
              <div className="brand-text-col">
                <span className="brand-name">RUBBER HILLS</span>
                <span className="brand-sub">KINDERGARTEN</span>
              </div>
            </Link>
            <button
              type="button"
              className="mobile-drawer-close"
              aria-label="Close menu"
              onClick={() => {
                document.body.style.overflow = '';
                setMobileMenuOpen(false);
              }}
            >
              <X size={26} />
            </button>
          </div>

          <nav className="mobile-drawer-nav">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'active' : ''}`
                }
                onClick={(e) => handleMobileNav(e, item.path)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <Link
              to="/contact"
              className="btn-visit-us-yellow"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={(e) => handleMobileNav(e, '/contact')}
            >
              <span>Visit Us</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
