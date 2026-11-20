import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sprout, Heart } from 'lucide-react';
import PillBadge from '../../components/Shared/PillBadge';
import DoodleUnderline from '../../components/Shared/DoodleUnderline';
import DoodleRays from '../../components/Shared/DoodleRays';
import { HERO_IMAGE_CONFIG } from '../../config/images';
import './Home.css';

export default function Home() {
  const { slots } = HERO_IMAGE_CONFIG;

  return (
    <div className="page-home">
      {/* ============================================================== */}
      {/* 1. HERO SECTION (User's Exact Wave Path & Clip-Path)           */}
      {/* ============================================================== */}
      <section className="home-hero">
        {/* User's Exact Wave ClipPath */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <defs>
            {/* Desktop Side S-Curve */}
            <clipPath id="hero-wave" clipPathUnits="objectBoundingBox">
              <path d="
                M0.50,0
                C0.50,0.09 0.46,0.17 0.40,0.18
                C0.30,0.20 0.16,0.24 0.08,0.30
                C0.02,0.36 0.00,0.46 0.01,0.56
                C0.02,0.66 0.06,0.72 0.06,0.80
                C0.06,0.88 0.04,0.94 0.02,1
                L1,1 L1,0 Z" />
            </clipPath>

            {/* Mobile / Tablet Organic Top Wave */}
            <clipPath id="hero-wave-mobile-top" clipPathUnits="objectBoundingBox">
              <path d="M 0,0.08 C 0.25,0.16 0.50,0.01 0.75,0.09 C 0.88,0.13 0.95,0.07 1,0.04 L 1,1 L 0,1 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* User's .hero-image Container - Authentic Campus Photograph */}
        <div className="hero-image">
          <img
            src={slots.heroCampus.src}
            alt={slots.heroCampus.alt}
            className="hero-campus-photo"
            loading="eager"
          />
        </div>

        {/* Left Hero Content inside Container */}
        <div className="hero-content-container">
          <div className="hero-text-col">
            <PillBadge text="A KINDER PLACE TO GROW" className="hero-pill" />

            <h1 className="hero-heading">
              Little steps.<br />
              <span className="heading-highlight">
                Big discoveries.
                <DoodleUnderline className="hero-underline" />
              </span>
            </h1>

            <p className="hero-lead">
              A play-based kindergarten nestled among green hills and rubber trees.
            </p>

            <div className="hero-cta-group">
              <Link to="/campus#campus-gallery" className="btn-primary-green">
                <span>Explore Campus</span>
                <span className="btn-arrow-circle">
                  <ArrowRight size={17} />
                </span>
              </Link>

              <Link to="/contact" className="btn-secondary-link">
                Plan a visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CURVED GREEN BANNER                                         */}
      {/* ============================================================== */}
      <section className="wave-banner-section" aria-label="Values Banner: Play, Learn, Grow, Belong">
        <div className="wave-banner-curved">
          <div className="wave-banner-content">
            <span className="banner-word">PLAY</span>
            <span className="banner-dot">•</span>
            <span className="banner-word">LEARN</span>
            <span className="banner-dot">•</span>
            <span className="banner-word">GROW</span>
            <span className="banner-dot">•</span>
            <span className="banner-word">BELONG</span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. 3-IMAGE GALLERY COLLAGE                                     */}
      {/* ============================================================== */}
      <section className="home-gallery-section" aria-label="Campus Highlights">
        <div className="container">
          <div className="gallery-grid">
            <div className="gallery-card card-left">
              <img
                src={slots.galleryWalkway.src}
                alt={slots.galleryWalkway.alt}
                className="gallery-img"
                loading="lazy"
              />
            </div>
            <div className="gallery-card card-center">
              <img
                src={slots.galleryClassroom.src}
                alt={slots.galleryClassroom.alt}
                className="gallery-img"
                loading="lazy"
              />
            </div>
            <div className="gallery-card card-right">
              <img
                src={slots.galleryPlayground.src}
                alt={slots.galleryPlayground.alt}
                className="gallery-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. "A WORLD MADE FOR LITTLE MINDS" - 3 HORIZONTAL PILL CARDS   */}
      {/* ============================================================== */}
      <section className="home-features-section">
        <div className="features-container-box">
          {/* Section Header with Doodle Rays */}
          <div className="section-header-centered">
            <DoodleRays flip className="rays-left" />
            <h2 className="section-title-centered">A world made for little minds</h2>
            <DoodleRays className="rays-right" />
          </div>

          {/* 3 Horizontal Pill Cards matching Target Design */}
          <div className="features-pill-grid">
            {/* Card 1 */}
            <div className="feature-pill-card">
              <div className="feature-pill-icon-box">
                <BookOpen size={26} className="feature-icon" />
              </div>
              <div className="feature-pill-text">
                <h3 className="feature-pill-title">Learn through play</h3>
                <p className="feature-pill-desc">
                  Fun-filled activities that build skills for life.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="feature-pill-card">
              <div className="feature-pill-icon-box">
                <Sprout size={26} className="feature-icon" />
              </div>
              <div className="feature-pill-text">
                <h3 className="feature-pill-title">Room to explore</h3>
                <p className="feature-pill-desc">
                  A safe space to discover, imagine and grow.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="feature-pill-card">
              <div className="feature-pill-icon-box">
                <Heart size={26} className="feature-icon" />
              </div>
              <div className="feature-pill-text">
                <h3 className="feature-pill-title">Care that feels like home</h3>
                <p className="feature-pill-desc">
                  A nurturing environment where every child thrives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
