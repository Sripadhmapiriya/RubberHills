import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Track scroll for sticky falling island navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Campus',
      path: '/campus',
      hasDropdown: true,
      subItems: [
        { name: 'Campus Tour', path: '/campus' },
        { name: 'Facilities & Safety', path: '/campus#facilities' },
        { name: 'Outdoor Play Court', path: '/campus#playground' },
      ],
    },
    {
      name: 'About',
      path: '/about',
      hasDropdown: true,
      subItems: [
        { name: 'Our Story', path: '/about' },
        { name: 'Founders & Leadership', path: '/about#founders' },
        { name: 'Why Families Choose Us', path: '/about#values' },
      ],
    },
    {
      name: 'Learning',
      path: '/learning',
      hasDropdown: true,
      subItems: [
        { name: '6 Learning Pillars', path: '/learning' },
        { name: 'Play-Based Curriculum', path: '/learning#curriculum' },
        { name: 'Creative Development', path: '/learning#creative' },
      ],
    },
    {
      name: 'Classes',
      path: '/classes',
      hasDropdown: true,
      subItems: [
        { name: 'Creche (2.5–3 yrs)', path: '/classes#creche' },
        { name: 'Nursery (3–4 yrs)', path: '/classes#nursery' },
        { name: 'Lower KG (4–5 yrs)', path: '/classes#lkg' },
        { name: 'Upper KG (5–6 yrs)', path: '/classes#ukg' },
      ],
    },
    {
      name: 'Contact',
      path: '/contact',
      hasDropdown: false,
    },
  ];

  return (
    <header
      className={`navbar-header ${isHomePage ? 'home-transparent' : ''} ${
        scrolled ? 'scrolled' : ''
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
          {/* Brand Logo on the Left */}
          <Link to="/" className="navbar-brand" aria-label="Rubber Hills Kindergarten Home">
            <div className="brand-crest-wrapper">
              <svg viewBox="0 0 100 100" className="brand-crest-svg">
                <circle cx="50" cy="50" r="46" fill="#064B25" />
                <circle cx="50" cy="50" r="42" fill="#FFFDF5" />
                {/* Sun */}
                <circle cx="50" cy="38" r="14" fill="#FFD21C" />
                {/* Green Rolling Hills */}
                <path d="M 10 70 Q 32 52 52 68 Q 72 82 90 70 L 90 90 L 10 90 Z" fill="#76B82A" />
                <path d="M 20 76 Q 48 64 74 76 Q 84 80 90 84 L 90 90 L 20 90 Z" fill="#064B25" />
                {/* Tree */}
                <path d="M 47 48 L 53 48 L 52 64 L 48 64 Z" fill="#064B25" />
                <circle cx="50" cy="44" r="11" fill="#064B25" />
                <circle cx="44" cy="47" r="7" fill="#76B82A" />
                <circle cx="56" cy="47" r="7" fill="#76B82A" />
              </svg>
            </div>
            <div className="brand-text-col">
              <span className="brand-name">RUBBER HILLS</span>
              <span className="brand-sub">KINDERGARTEN</span>
            </div>
          </Link>

          {/* Centered Navigation Links (Campus, About, Learning, Classes, Contact) */}
          <nav className="navbar-nav" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <div
                key={item.name}
                className="nav-item-dropdown"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`dropdown-chevron ${activeDropdown === item.name ? 'open' : ''}`}
                    />
                  )}
                </NavLink>

                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="dropdown-menu">
                    {item.subItems.map((sub) => (
                      <Link key={sub.name} to={sub.path} className="dropdown-link">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <Link to="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)}>
              <span className="brand-name">RUBBER HILLS</span>
            </Link>
            <button
              type="button"
              className="mobile-drawer-close"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={26} />
            </button>
          </div>

          <nav className="mobile-drawer-nav">
            <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/campus" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Campus
            </Link>
            <Link to="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/learning" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Learning
            </Link>
            <Link to="/classes" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Classes
            </Link>
            <Link to="/time-table" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Time Table
            </Link>
            <Link to="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Contact & Admissions
            </Link>
          </nav>

          <div className="mobile-drawer-footer">
            <Link to="/contact" className="btn-visit-us-yellow" style={{ width: '100%', justifyContent: 'center' }}>
              <span>Visit Us</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
