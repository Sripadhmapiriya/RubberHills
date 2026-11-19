import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sprout, Heart } from 'lucide-react';
import PillBadge from '../../components/Shared/PillBadge';
import DoodleUnderline from '../../components/Shared/DoodleUnderline';
import DoodleRays from '../../components/Shared/DoodleRays';
import HeroBackgroundHills from '../../components/Shared/HeroBackgroundHills';
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
        {/* Organic Light-Green Rolling Hills Background (Exact Mockup Vector Artwork) */}
        <HeroBackgroundHills variant="home" />

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
      {/* 2. TAGLINE BAND (Curved Wave Ribbon Banner)                   */}
      {/* ============================================================== */}
      <section className="tagline-band" aria-label="Values Banner: Play, Learn, Grow, Belong">
        {/* Desktop Wave Ribbon Banner */}
        <svg
          className="band-bg band-bg-desktop"
          viewBox="0 0 1440 68"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Dark Green Curved Wave Ribbon Body */}
          <path
            className="band-fill"
            d="M0,4 C280,8 540,6 780,2 C980,0 1120,4 1260,6 C1350,8 1400,4 1440,2
               L1440,62
               C1260,60 1120,46 980,46 C840,46 700,62 540,62 C440,62 340,38 220,32 C140,28 90,34 0,48 Z"
          />

          {/* 3. Top Lime Outline Line */}
          <path
            className="band-line-top"
            d="M0,4 C280,8 540,6 780,2 C980,0 1120,4 1260,6 C1350,8 1400,4 1440,2"
            vectorEffect="non-scaling-stroke"
          />

          {/* 4. Bottom Lime Outline Line */}
          <path
            className="band-line"
            d="M0,48 C90,34 140,28 220,32 C340,38 440,62 540,62 C700,62 840,46 980,46 C1120,46 1260,60 1440,62"
            vectorEffect="non-scaling-stroke"
          />

          {/* 5. Botanical Leaf Sprig on Left */}
          <g className="band-leaf-sprig" transform="translate(48, 6) rotate(-12) scale(0.36)">
            <path d="M 0 45 C 15 15 50 5 80 15 C 70 45 40 60 5 55 Z" fill="#76B82A" />
            <path d="M 0 45 C 25 30 50 20 80 15" stroke="#064B25" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 12 50 C 25 32 45 22 65 28 C 55 48 35 60 12 55 Z" fill="#DDF0C7" opacity="0.85" />
          </g>
        </svg>

        {/* Mobile / Tablet Dedicated Proportional Wave Ribbon Banner */}
        <svg
          className="band-bg band-bg-mobile"
          viewBox="0 0 420 66"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Gentle, Uniform-Thickness Curved Ribbon Body */}
          <path
            className="band-fill"
            d="M 0,14 C 70,22 140,8 210,10 C 280,12 350,22 420,14 L 420,56 C 350,64 280,54 210,52 C 140,50 70,64 0,56 Z"
          />
          <path
            className="band-line-top"
            d="M 0,14 C 70,22 140,8 210,10 C 280,12 350,22 420,14"
            vectorEffect="non-scaling-stroke"
          />
          <path
            className="band-line"
            d="M 0,56 C 70,64 140,50 210,52 C 280,54 350,64 420,56"
            vectorEffect="non-scaling-stroke"
          />
          {/* Botanical Leaf Sprig (Scaled and placed safely in left margin without text overlap) */}
          <g className="band-leaf-sprig" transform="translate(12, 17) rotate(-10) scale(0.22)">
            <path d="M 0 45 C 15 15 50 5 80 15 C 70 45 40 60 5 55 Z" fill="#76B82A" />
            <path d="M 0 45 C 25 30 50 20 80 15" stroke="#064B25" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 12 50 C 25 32 45 22 65 28 C 55 48 35 60 12 55 Z" fill="#DDF0C7" opacity="0.85" />
          </g>
        </svg>

        <p className="band-text">
          <span>Play</span><i>•</i><span>Learn</span><i>•</i><span>Grow</span><i>•</i><span>Belong</span>
        </p>
      </section>

      {/* ============================================================== */}
      {/* 3. 3-PHOTO PANORAMA / CURVED GALLERY (Campus Highlights)       */}
      {/* ============================================================== */}
      <section className="home-gallery-section" aria-label="Campus Highlights">
        <div className="panorama-curved-band">
          {/* Photo 1: Left - Authentic Garden Walkway */}
          <div className="panorama-item item-left">
            <img
              src={slots.galleryWalkway.src}
              alt={slots.galleryWalkway.alt}
              className="panorama-img panorama-walkway-img"
              loading="lazy"
            />
          </div>

          {/* Photo 2: Center - Authentic Active Classroom */}
          <div className="panorama-item item-center">
            <img
              src={slots.galleryClassroom.src}
              alt={slots.galleryClassroom.alt}
              className="panorama-img panorama-classroom-img"
              loading="lazy"
            />
          </div>

          {/* Photo 3: Right - Authentic Outdoor Playground */}
          <div className="panorama-item item-right">
            <img
              src={slots.galleryPlayground.src}
              alt={slots.galleryPlayground.alt}
              className="panorama-img panorama-playground-img"
              loading="lazy"
            />
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
