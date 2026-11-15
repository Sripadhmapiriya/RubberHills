import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  GraduationCap,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import './Footer.css';

// Crisp inline SVGs for social media icons
const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Top Wave Arch with Tagline & Kids Illustration */}
      <div className="footer-top-banner">
        <div className="container footer-banner-container">
          <div className="footer-banner-text">
            <h2 className="banner-title-white">Little steps today.</h2>
            <h2 className="banner-title-yellow">Brighter tomorrows.</h2>
          </div>
          <div className="footer-banner-illustration">
            <img
              src="/assets/footer_kids.png"
              alt="Joyful children learning at Rubber Hills"
              className="footer-kids-img animate-float"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Col 1: About & Logo */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-logo-link">
              <img
                src="/assets/footer_logo.png"
                alt="Rubber Hills Kindergarten Logo"
                className="footer-logo-img"
                onError={(e) => {
                  e.currentTarget.src = '/assets/nav_logo.png';
                }}
              />
            </Link>
            <p className="footer-tagline">
              A nurturing kindergarten where every child learns, plays and grows among green hills
              and rubber trees.
            </p>
            <div className="footer-social-links" aria-label="Social media links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="YouTube"
              >
                <YoutubeIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/rubberhillsgroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">
              <Sparkles size={18} className="col-icon" />
              <span>Quick Links</span>
            </h3>
            <ul className="footer-links-list">
              <li>
                <Link to="/">
                  <ChevronRight size={14} /> Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <ChevronRight size={14} /> About Us
                </Link>
              </li>
              <li>
                <Link to="/learning">
                  <ChevronRight size={14} /> Learning
                </Link>
              </li>
              <li>
                <Link to="/classes">
                  <ChevronRight size={14} /> Classes
                </Link>
              </li>
              <li>
                <Link to="/campus">
                  <ChevronRight size={14} /> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <ChevronRight size={14} /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Campus & Admissions */}
          <div className="footer-col">
            <h3 className="footer-col-title">
              <GraduationCap size={18} className="col-icon" />
              <span>Campus & Admissions</span>
            </h3>
            <ul className="footer-links-list">
              <li>
                <Link to="/campus">
                  <ChevronRight size={14} /> Campus
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <ChevronRight size={14} /> Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <ChevronRight size={14} /> Enquiry
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <ChevronRight size={14} /> Plan a Visit
                </Link>
              </li>
              <li>
                <Link to="/time-table">
                  <ChevronRight size={14} /> Time Table
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="footer-col footer-col-contact">
            <h3 className="footer-col-title">
              <Phone size={18} className="col-icon" />
              <span>Contact Us</span>
            </h3>
            <div className="footer-contact-items">
              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <span>Rubber Hills Kindergarten, Manjaloomodu</span>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <a href="mailto:info@rubberhills.in">info@rubberhills.in</a>
              </div>
            </div>
            <Link to="/contact" className="btn-footer-enquire">
              <span>Enquire Now</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            © 2027 Rubber Hills Kindergarten. All Rights Reserved.
          </p>
          <div className="footer-tagline-dots">
            Play • Learn • Grow • Belong
          </div>
          <div className="footer-bottom-social">
            <span>Follow Us</span>
            <div className="mini-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon size={14} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeIcon size={14} />
              </a>
              <a href="https://www.instagram.com/rubberhillsgroup/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon size={14} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
