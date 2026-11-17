import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  GraduationCap,
  Leaf,
} from 'lucide-react';
import './Footer.css';

// Crisp inline SVGs for social media icons
const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YoutubeIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      {/* ============================================================== */}
      {/* 1. TOP ILLUSTRATED HILL BANNER WITH VECTOR MOUND & TYPOGRAPHY  */}
      {/* ============================================================== */}
      <div className="footer-hill-hero">
        {/* Responsive Background SVG Hill Mound & Yellow Wave Ribbon */}
        <svg
          className="footer-hill-svg"
          viewBox="0 0 1440 280"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            {/* Multi-stop gradients for botanical corner leaf clusters */}
            <linearGradient id="footer-leaf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9BD43A" />
              <stop offset="60%" stopColor="#6DAF28" />
              <stop offset="100%" stopColor="#438018" />
            </linearGradient>
            <linearGradient id="footer-leaf-dark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#76B82A" />
              <stop offset="100%" stopColor="#256214" />
            </linearGradient>
          </defs>

          {/* Top-Left Botanical Leaf Cluster */}
          <g className="footer-leaf-top-left" transform="translate(18, 14) scale(0.95)">
            <path d="M 0 55 C 30 20 75 10 110 22 C 90 60 50 80 0 55 Z" fill="url(#footer-leaf-grad)" />
            <path d="M 0 55 C 40 38 75 28 110 22" stroke="#256214" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M 25 65 C 50 35 90 28 120 40 C 100 70 65 85 25 65 Z" fill="url(#footer-leaf-dark)" opacity="0.9" />
            <path d="M 60 90 C 85 70 125 65 145 80 C 130 105 95 115 60 90 Z" fill="url(#footer-leaf-grad)" opacity="0.85" />
          </g>

          {/* Top-Right Botanical Leaf Cluster */}
          <g className="footer-leaf-top-right" transform="translate(1420, 14) scale(-0.95, 0.95)">
            <path d="M 0 55 C 30 20 75 10 110 22 C 90 60 50 80 0 55 Z" fill="url(#footer-leaf-grad)" />
            <path d="M 0 55 C 40 38 75 28 110 22" stroke="#256214" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M 25 65 C 50 35 90 28 120 40 C 100 70 65 85 25 65 Z" fill="url(#footer-leaf-dark)" opacity="0.9" />
            <path d="M 60 90 C 85 70 125 65 145 80 C 130 105 95 115 60 90 Z" fill="url(#footer-leaf-grad)" opacity="0.85" />
          </g>

          {/* Main Dark Green Hill Mound */}
          <path
            className="footer-hill-fill"
            d="M 0,140 C 140,148 240,118 420,74 C 550,42 720,44 880,95 C 1020,142 1130,205 1270,195 C 1345,185 1395,165 1440,152 L 1440,280 L 0,280 Z"
            fill="#064B25"
          />

          {/* Lime Green Hill Crest Contour Line */}
          <path
            className="footer-hill-stroke"
            d="M 0,140 C 140,148 240,118 420,74 C 550,42 720,44 880,95 C 1020,142 1130,205 1270,195 C 1345,185 1395,165 1440,152"
            stroke="#67A829"
            strokeWidth="3.5"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />

          {/* Golden Yellow Swooping Wave Ribbon Under Kids */}
          <path
            className="footer-yellow-wave"
            d="M 860,208 C 990,190 1130,212 1280,188 C 1345,176 1395,158 1440,148"
            stroke="#FFD21C"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Foreground Content Container (Headline + Doodle + Children Character) */}
        <div className="footer-hill-container">
          {/* Headline Typography with Doodle Sparks & Curve Underline */}
          <div className="footer-headline-wrapper">
            {/* Left Sunbeam Doodle Rays */}
            <svg className="doodle-ray doodle-ray-left" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M 4 20 L 12 12 M 2 12 L 12 12 M 4 4 L 12 12" stroke="#FFD21C" strokeWidth="2.8" strokeLinecap="round" />
            </svg>

            <div className="footer-headline-text">
              <h2 className="title-white">Little steps today.</h2>
              <h2 className="title-yellow">
                <span>Brighter tomorrows.</span>
                {/* Golden Underline Arch */}
                <svg className="headline-underline" viewBox="0 0 320 22" fill="none" aria-hidden="true">
                  <path d="M 6 8 Q 160 24 314 6" stroke="#FFD21C" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </h2>
            </div>

            {/* Right Sunbeam Doodle Rays */}
            <svg className="doodle-ray doodle-ray-right" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M 20 20 L 12 12 M 22 12 L 12 12 M 20 4 L 12 12" stroke="#FFD21C" strokeWidth="2.8" strokeLinecap="round" />
            </svg>
          </div>

          {/* Transparent Kindergarten Children Character Actor */}
          <div className="footer-kids-actor-wrapper">
            <img
              src="/assets/footer_kids.png"
              alt="Joyful children learning and playing at Rubber Hills Kindergarten"
              className="footer-kids-actor"
            />
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. MAIN 4-COLUMN CONTENT SECTION                               */}
      {/* ============================================================== */}
      <div className="footer-main-section">
        {/* Subtle Botanical Leaf Sprig on Right Side */}
        <img
          src="/assets/footer_right_leaves.png"
          alt=""
          className="footer-right-leaves-decor"
          aria-hidden="true"
        />

        <div className="footer-main-container">
          {/* Column 1: Brand & Identity */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-brand-lockup">
              <img
                src="/original/school-logo.jpg"
                alt="Rubber Hills Kindergarten Logo"
                className="footer-logo-badge"
              />
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
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="YouTube"
              >
                <YoutubeIcon size={16} />
              </a>
              <a
                href="https://www.instagram.com/rubberhillsgroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col footer-col-links">
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
                  <span className="link-chevron">&gt;</span> About Us
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
                <Link to="/campus">
                  <span className="link-chevron">&gt;</span> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span className="link-chevron">&gt;</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Campus & Admissions */}
          <div className="footer-col footer-col-links">
            <h3 className="footer-col-header">
              <GraduationCap size={19} className="col-header-icon" />
              <span>Campus & Admissions</span>
            </h3>
            <ul className="footer-nav-list">
              <li>
                <Link to="/campus">
                  <span className="link-chevron">&gt;</span> Campus
                </Link>
              </li>
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
                <span>Rubber Hills Kindergarten, Manjaloomodu</span>
              </div>
              <div className="footer-contact-entry">
                <Phone size={17} className="contact-entry-icon" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
              <div className="footer-contact-entry">
                <Mail size={17} className="contact-entry-icon" />
                <a href="mailto:info@rubberhills.in">info@rubberhills.in</a>
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
            © 2027 Rubber Hills Kindergarten. All Rights Reserved.
          </p>

          <div className="sub-bar-motto">
            <span className="motto-pipe">|</span>
            <span className="motto-text">Play &nbsp;•&nbsp; Learn &nbsp;•&nbsp; Grow &nbsp;•&nbsp; Belong</span>
            <span className="motto-pipe">|</span>
          </div>

          <div className="sub-bar-follow">
            <span className="follow-text">Follow Us</span>
            <div className="mini-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mini-social-btn" aria-label="Facebook">
                <FacebookIcon size={13} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mini-social-btn" aria-label="YouTube">
                <YoutubeIcon size={13} />
              </a>
              <a href="https://www.instagram.com/rubberhillsgroup/" target="_blank" rel="noopener noreferrer" className="mini-social-btn" aria-label="Instagram">
                <InstagramIcon size={13} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mini-social-btn" aria-label="LinkedIn">
                <LinkedinIcon size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 4. ROLLING MEADOW & DAISY FLOWERS FLOOR (PURE SVG)             */}
      {/* ============================================================== */}
      <div className="footer-meadow-floor" aria-hidden="true">
        <svg
          className="meadow-svg"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Daisy Flower Definition */}
            <g id="svg-daisy">
              {/* 6 White Petals */}
              <ellipse cx="0" cy="-7" rx="3.5" ry="5.5" fill="#FFFFFF" />
              <ellipse cx="6" cy="-3.5" rx="3.5" ry="5.5" transform="rotate(60 6 -3.5)" fill="#FFFFFF" />
              <ellipse cx="6" cy="3.5" rx="3.5" ry="5.5" transform="rotate(120 6 3.5)" fill="#FFFFFF" />
              <ellipse cx="0" cy="7" rx="3.5" ry="5.5" fill="#FFFFFF" />
              <ellipse cx="-6" cy="3.5" rx="3.5" ry="5.5" transform="rotate(240 -6 3.5)" fill="#FFFFFF" />
              <ellipse cx="-6" cy="-3.5" rx="3.5" ry="5.5" transform="rotate(300 -6 -3.5)" fill="#FFFFFF" />
              {/* Golden Yellow Center */}
              <circle cx="0" cy="0" r="3.8" fill="#FFD21C" />
            </g>

            {/* Leaf Sprout Definition */}
            <g id="svg-sprout">
              <path d="M 0,0 C -6,-10 -2,-18 4,-16 C 6,-10 3,-3 0,0 Z" fill="#4B8C1D" />
              <path d="M 0,0 C 6,-8 14,-10 12,-4 C 8,2 2,1 0,0 Z" fill="#6DAF28" />
            </g>
          </defs>

          {/* Layer 1: Back Meadow Hill */}
          <path
            d="M 0,38 C 280,18 520,44 780,28 C 1040,12 1260,42 1440,24 L 1440,90 L 0,90 Z"
            fill="#5D9927"
          />

          {/* Layer 2: Front Meadow Hill */}
          <path
            d="M 0,52 C 220,32 440,54 680,40 C 920,26 1180,56 1440,42 L 1440,90 L 0,90 Z"
            fill="#80C034"
          />

          {/* Daisies placed naturally across the meadow hills */}
          <use href="#svg-daisy" x="90" y="60" transform="scale(0.9)" />
          <use href="#svg-daisy" x="240" y="46" transform="scale(0.85)" />
          <use href="#svg-daisy" x="480" y="58" transform="scale(1.0)" />
          <use href="#svg-daisy" x="720" y="48" transform="scale(0.95)" />
          <use href="#svg-daisy" x="960" y="54" transform="scale(0.88)" />
          <use href="#svg-daisy" x="1180" y="58" transform="scale(1.05)" />
          <use href="#svg-daisy" x="1360" y="48" transform="scale(0.9)" />

          {/* Little Leaf Sprouts */}
          <use href="#svg-sprout" x="160" y="58" transform="scale(0.9)" />
          <use href="#svg-sprout" x="380" y="46" transform="scale(0.85)" />
          <use href="#svg-sprout" x="620" y="50" transform="scale(1.0)" />
          <use href="#svg-sprout" x="840" y="44" transform="scale(0.8)" />
          <use href="#svg-sprout" x="1080" y="52" transform="scale(0.95)" />
          <use href="#svg-sprout" x="1270" y="46" transform="scale(0.85)" />
        </svg>
      </div>
    </footer>
  );
}
