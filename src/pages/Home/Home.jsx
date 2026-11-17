import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sprout, Heart } from 'lucide-react';
import PillBadge from '../../components/Shared/PillBadge';
import DoodleUnderline from '../../components/Shared/DoodleUnderline';
import DoodleRays from '../../components/Shared/DoodleRays';
import ImageSlot from '../../components/Shared/ImageSlot';
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
          </defs>
        </svg>

        {/* User's .hero-image Container - Authentic Campus Photograph */}
        <div className="hero-image">
          <img
            src="/assets/campus_building_highres.jpg"
            alt="Rubber Hills Kindergarten Main Campus Building"
            className="hero-campus-photo"
          />

          {/* Exact Curve Border Line */}
          <svg
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
            className="hero-wave-border-svg"
            aria-hidden="true"
          >
            <path
              d="M0.50,0 C0.50,0.09 0.46,0.17 0.40,0.18 C0.30,0.20 0.16,0.24 0.08,0.30 C0.02,0.36 0.00,0.46 0.01,0.56 C0.02,0.66 0.06,0.72 0.06,0.80 C0.06,0.88 0.04,0.94 0.02,1"
              fill="none"
              stroke="#76B82A"
              vectorEffect="non-scaling-stroke"
              strokeWidth="3.5"
            />
          </svg>
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

                {/* 🌿 Botanical Leaf Pattern 1: Upper Sprig with Ambient Pastel Glow */}
                <div className="heading-leaf-accent" aria-hidden="true">
                  <svg viewBox="0 0 140 140" className="heading-leaf-svg">
                    <defs>
                      <radialGradient id="upper-glow-grad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#DEF3C8" stopOpacity="0.95" />
                        <stop offset="60%" stopColor="#E6F6D2" stopOpacity="0.75" />
                        <stop offset="85%" stopColor="#EFF9E2" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#FAF7EE" stopOpacity="0" />
                      </radialGradient>

                      <linearGradient id="up-leaf-1" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8CCB3A" />
                        <stop offset="50%" stopColor="#A8DC56" />
                        <stop offset="100%" stopColor="#C4E87C" />
                      </linearGradient>

                      <linearGradient id="up-leaf-2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#9BD544" />
                        <stop offset="55%" stopColor="#BCE26E" />
                        <stop offset="100%" stopColor="#D4EE8C" />
                      </linearGradient>

                      <linearGradient id="up-leaf-3" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#7EBF30" />
                        <stop offset="50%" stopColor="#9CD748" />
                        <stop offset="100%" stopColor="#BEE470" />
                      </linearGradient>
                    </defs>

                    {/* Ambient Glow */}
                    <circle cx="68" cy="62" r="50" fill="url(#upper-glow-grad)" />

                    {/* Natural Curved Stem */}
                    <path
                      d="M 50 105 C 51 86 56 68 64 52"
                      stroke="#80BF2E"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      fill="none"
                    />

                    {/* Top-Left Leaf */}
                    <path
                      d="M 64 52 C 55 34 36 22 14 18 C 21 35 38 48 64 52 Z"
                      fill="url(#up-leaf-1)"
                    />
                    <path
                      d="M 62 50 C 48 38 34 29 17 21"
                      stroke="#70AB24"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.45"
                    />

                    {/* Top-Right Leaf */}
                    <path
                      d="M 64 52 C 78 36 96 26 112 24 C 108 42 94 54 64 52 Z"
                      fill="url(#up-leaf-2)"
                    />
                    <path
                      d="M 66 51 C 80 40 94 33 109 26"
                      stroke="#86BE32"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.45"
                    />

                    {/* Lower-Left Leaf */}
                    <path
                      d="M 56 74 C 38 72 22 79 16 88 C 26 97 44 92 56 74 Z"
                      fill="url(#up-leaf-3)"
                    />
                    <path
                      d="M 54 75 C 41 78 30 83 20 87"
                      stroke="#6EA622"
                      strokeWidth="1"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.45"
                    />
                  </svg>
                </div>
              </span>
            </h1>

            <p className="hero-lead">
              A play-based kindergarten nestled among green hills and rubber trees.
            </p>

            <div className="hero-cta-group">
              <Link to="/about" className="btn-primary-green">
                <span>Explore our school</span>
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
        <svg
          className="band-bg"
          viewBox="0 0 1440 85"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Dark Green Curved Wave Ribbon Body */}
          <path
            className="band-fill"
            d="M0,20 C280,24 540,22 780,18 C980,16 1050,47 1170,47 C1270,47 1350,26 1440,16
               L1440,76
               C1260,74 1120,60 980,60 C840,60 700,76 540,76 C440,76 340,52 220,46 C140,42 90,48 0,62 Z"
          />

          {/* 3. Top Lime Outline Line */}
          <path
            className="band-line-top"
            d="M0,20 C280,24 540,22 780,18 C980,16 1050,47 1170,47 C1270,47 1350,26 1440,16"
            vectorEffect="non-scaling-stroke"
          />

          {/* 4. Bottom Lime Outline Line */}
          <path
            className="band-line"
            d="M0,62 C90,48 140,42 220,46 C340,52 440,76 540,76 C700,76 840,60 980,60 C1120,60 1260,74 1440,76"
            vectorEffect="non-scaling-stroke"
          />

          {/* 5. Botanical Leaf Sprig on Left */}
          <g className="band-leaf-sprig" transform="translate(48, 20) rotate(-12) scale(0.36)">
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
        {/* Hidden SVG Definition for Object-Bounding-Box Bottom Arch Curve */}
        <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }} aria-hidden="true">
          <defs>
            <clipPath id="gallery-bottom-arch" clipPathUnits="objectBoundingBox">
              <path d="M 0,0 L 1,0 L 1,1 C 0.90,0.92 0.70,0.88 0.50,0.87 C 0.30,0.85 0.10,0.86 0,1 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="panorama-curved-band">
          {/* Photo 1: Left - Walkway */}
          <div className="panorama-item item-left">
            <ImageSlot
              src={slots.galleryWalkway.src}
              alt={slots.galleryWalkway.alt}
              title={slots.galleryWalkway.title}
              recommendedSize={slots.galleryWalkway.recommendedSize}
              isPlaceholder={false}
              className="panorama-slot"
              imgClassName="panorama-img"
            />
          </div>

          {/* Photo 2: Center - Classroom Interior */}
          <div className="panorama-item item-center">
            <ImageSlot
              src={slots.galleryClassroom.src}
              alt={slots.galleryClassroom.alt}
              title={slots.galleryClassroom.title}
              recommendedSize={slots.galleryClassroom.recommendedSize}
              isPlaceholder={false}
              className="panorama-slot"
              imgClassName="panorama-img"
            />
          </div>

          {/* Photo 3: Right - Outdoor Playground */}
          <div className="panorama-item item-right">
            <ImageSlot
              src={slots.galleryPlayground.src}
              alt={slots.galleryPlayground.alt}
              title={slots.galleryPlayground.title}
              recommendedSize={slots.galleryPlayground.recommendedSize}
              isPlaceholder={false}
              className="panorama-slot"
              imgClassName="panorama-img"
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

        {/* 🌿 Botanical & Wave Decorations - Bottom Corners */}
        <div className="corner-decor-bottom-left" aria-hidden="true">
          <svg viewBox="0 0 260 160" className="corner-waves-svg">
            <path
              d="M 0 160 Q 60 110 140 120 Q 200 130 260 90 L 260 160 Z"
              fill="#FFD21C"
              opacity="0.95"
            />
            <path
              d="M 0 160 Q 50 80 130 90 Q 210 100 260 50 L 260 160 Z"
              fill="#064B25"
            />
          </svg>
          <svg viewBox="0 0 160 160" className="corner-leaves-svg">
            <path
              d="M 0 160 C 20 110 60 60 120 40 C 100 90 70 130 0 160 Z"
              fill="#76B82A"
              opacity="0.9"
            />
            <path
              d="M 0 160 C 50 130 90 80 140 70 C 110 120 60 150 0 160 Z"
              fill="#DFF0C9"
              opacity="0.85"
            />
          </svg>
        </div>

        <div className="corner-decor-bottom-right" aria-hidden="true">
          <svg viewBox="0 0 260 160" className="corner-waves-svg">
            <path
              d="M 260 160 Q 200 110 120 120 Q 60 130 0 90 L 0 160 Z"
              fill="#FFD21C"
              opacity="0.95"
            />
            <path
              d="M 260 160 Q 210 80 130 90 Q 50 100 0 50 L 0 160 Z"
              fill="#064B25"
            />
          </svg>
          <svg viewBox="0 0 160 160" className="corner-leaves-svg">
            <path
              d="M 160 160 C 140 110 100 60 40 40 C 60 90 90 130 160 160 Z"
              fill="#76B82A"
              opacity="0.9"
            />
            <path
              d="M 160 160 C 110 130 70 80 20 70 C 50 120 100 150 160 160 Z"
              fill="#DFF0C9"
              opacity="0.85"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
