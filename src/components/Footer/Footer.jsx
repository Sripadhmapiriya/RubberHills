import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  GraduationCap,
  Leaf,
  ShieldCheck,
} from 'lucide-react';
import { SCHOOL_INFO } from '../../config/schoolInfo';
import './Footer.css';

// Crisp inline SVGs for social media icons
const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      {/* ============================================================== */}
      {/* 1. TOP HERO SPACER                                             */}
      {/* Displays the background image artwork                          */}
      {/* ============================================================== */}
      <div className="footer-hero-spacer" aria-label="Little steps today. Brighter tomorrows.">
        <h2 className="sr-only">Little steps today. Brighter tomorrows.</h2>
      </div>

      {/* ============================================================== */}
      {/* 2. MAIN 4-COLUMN CONTENT SECTION                               */}
      {/* ============================================================== */}
      <div className="footer-main-section">
        <div className="footer-main-container">
          {/* Column 1: Brand & Identity */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-brand-lockup" aria-label="Rubber Hills Kindergarten Home">
              <div className="brand-crest-wrapper footer-brand-crest">
                <img
                  src="/original/school-logo.jpg"
                  alt="Rubber Hills Kindergarten Logo"
                  className="brand-crest-img"
                />
              </div>
              <div className="footer-brand-text">
                <span className="brand-name-main">RUBBER HILLS</span>
                <span className="brand-name-sub">K I N D E R G A R T E N</span>
              </div>
            </Link>

            <p className="footer-brand-desc">
              A nurturing kindergarten where every child learns, plays and grows among green hills
              and rubber trees.
            </p>

            <div className="footer-social-group" aria-label="Social media links">
              <a
                href={SCHOOL_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={SCHOOL_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (7 Core Pages + Privacy) */}
          <div className="footer-col footer-col-links footer-col-quicklinks">
            <h3 className="footer-col-header">
              <Leaf size={18} className="col-header-icon" />
              <span>Quick Links</span>
            </h3>
            <ul className="footer-nav-list">
              <li>
                <Link to="/">
                  <span className="link-chevron">&gt;</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <span className="link-chevron">&gt;</span> About
                </Link>
              </li>
              <li>
                <Link to="/campus">
                  <span className="link-chevron">&gt;</span> Campus
                </Link>
              </li>
              <li>
                <Link to="/learning">
                  <span className="link-chevron">&gt;</span> Learning
                </Link>
              </li>
              <li>
                <Link to="/classes">
                  <span className="link-chevron">&gt;</span> Classes
                </Link>
              </li>
              <li>
                <Link to="/time-table">
                  <span className="link-chevron">&gt;</span> Time Table
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span className="link-chevron">&gt;</span> Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy">
                  <span className="link-chevron">&gt;</span> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions & Enquiries */}
          <div className="footer-col footer-col-links footer-col-campus">
            <h3 className="footer-col-header">
              <GraduationCap size={19} className="col-header-icon" />
              <span>Admissions & Visits</span>
            </h3>
            <ul className="footer-nav-list">
              <li>
                <Link to="/contact">
                  <span className="link-chevron">&gt;</span> Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span className="link-chevron">&gt;</span> Enquiry
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span className="link-chevron">&gt;</span> Plan a Visit
                </Link>
              </li>
              <li>
                <Link to="/classes">
                  <span className="link-chevron">&gt;</span> Our Programmes
                </Link>
              </li>
              <li>
                <Link to="/time-table">
                  <span className="link-chevron">&gt;</span> Daily Schedule
                </Link>
              </li>
              <li>
                <Link to="/privacy">
                  <span className="link-chevron">&gt;</span> Child Data Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="footer-col footer-col-contact">
            <h3 className="footer-col-header">
              <Phone size={17} className="col-header-icon" />
              <span>Contact Us</span>
            </h3>
            <div className="footer-contact-list">
              <div className="footer-contact-entry">
                <MapPin size={18} className="contact-entry-icon" />
                <span>{SCHOOL_INFO.address.display}</span>
              </div>
              {SCHOOL_INFO.phone && (
                <div className="footer-contact-entry">
                  <Phone size={17} className="contact-entry-icon" />
                  <a href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}>{SCHOOL_INFO.phone}</a>
                </div>
              )}
              <div className="footer-contact-entry">
                <Mail size={17} className="contact-entry-icon" />
                <a href={`mailto:${SCHOOL_INFO.email}`}>{SCHOOL_INFO.email}</a>
              </div>
            </div>

            <Link to="/contact" className="btn-enquire-pill">
              <span>Enquire Now</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. BOTTOM SUB-FOOTER BAR                                       */}
      {/* ============================================================== */}
      <div className="footer-sub-bar">
        <div className="footer-sub-container">
          <p className="copyright-notice">
            © {currentYear} Rubber Hills Kindergarten. All Rights Reserved. &nbsp;|&nbsp;{' '}
            <Link to="/privacy" style={{ color: 'inherit', textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
          </p>

          <div className="sub-bar-motto">
            <span className="motto-pipe">|</span>
            <span className="motto-text">Play &nbsp;•&nbsp; Learn &nbsp;•&nbsp; Grow &nbsp;•&nbsp; Belong</span>
            <span className="motto-pipe">|</span>
          </div>

          <div className="sub-bar-follow">
            <span className="follow-text">Follow Us</span>
            <div className="mini-social-icons">
              <a
                href={SCHOOL_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mini-social-btn"
                aria-label="Facebook"
              >
                <FacebookIcon size={13} />
              </a>
              <a
                href={SCHOOL_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mini-social-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
