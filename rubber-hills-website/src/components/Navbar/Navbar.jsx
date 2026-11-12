import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll for soft shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Campus', path: '/campus' },
    { name: 'Learning', path: '/learning' },
    { name: 'Classes', path: '/classes' },
    { name: 'Time Table', path: '/time-table' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand" aria-label="Rubber Hills Kindergarten Home">
          <img
            src="/assets/nav_logo.png"
            alt="Rubber Hills Kindergarten Logo"
            className="navbar-logo-img"
            onError={(e) => {
              // Fallback to logo.jpg if nav_logo isn't ready
              e.currentTarget.src = '/assets/logo.jpg';
            }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              <span>{item.name}</span>
              <span className="nav-link-indicator" aria-hidden="true"></span>
            </NavLink>
          ))}
        </nav>

        {/* Action Button */}
        <div className="navbar-action">
          <Link to="/contact" className="btn-visit-us">
            <span>Visit Us</span>
            <ArrowRight size={17} className="btn-arrow" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <Link to="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)}>
              <img src="/assets/nav_logo.png" alt="Rubber Hills Logo" className="mobile-logo" />
            </Link>
            <button
              type="button"
              className="mobile-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          <nav className="mobile-nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'active' : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <Link to="/contact" className="mobile-btn-visit">
              <span>Plan a Visit</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
