import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sprout, Heart, Eye, ImagePlus } from 'lucide-react';
import PillBadge from '../../components/Shared/PillBadge';
import ScallopedBadge from '../../components/Shared/ScallopedBadge';
import DoodleUnderline from '../../components/Shared/DoodleUnderline';
import DoodleRays from '../../components/Shared/DoodleRays';
import ImageSlot from '../../components/Shared/ImageSlot';
import { HERO_IMAGE_CONFIG } from '../../config/images';
import './Home.css';

export default function Home() {
  const [showPlaceholders, setShowPlaceholders] = useState(
    HERO_IMAGE_CONFIG.showPlaceholders
  );

  const { slots } = HERO_IMAGE_CONFIG;

  return (
    <div className="page-home">
      {/* 🌿 Botanical Leaves - Top Left Hanging Cluster */}
      <div className="corner-leaves-top-left" aria-hidden="true">
        <svg viewBox="0 0 240 220" className="leaves-svg">
          <path
            d="M 0 0 C 40 40 70 90 90 150 C 60 140 20 110 0 60 Z"
            fill="#064B25"
            opacity="0.9"
          />
          <path
            d="M 0 0 C 40 60 70 110 90 150"
            stroke="#76B82A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 10 0 C 70 30 130 65 170 120 C 130 125 70 100 20 40 Z"
            fill="#76B82A"
            opacity="0.85"
          />
          <path
            d="M 10 0 C 80 40 130 80 170 120"
            stroke="#064B25"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 0 40 C 50 70 100 120 120 190 C 80 170 40 140 0 100 Z"
            fill="#4A8A2A"
            opacity="0.8"
          />
          <path
            d="M 50 10 C 90 35 120 60 150 90 C 120 95 90 80 60 50 Z"
            fill="#DFF0C9"
            opacity="0.95"
          />
        </svg>
      </div>

      {/* 🌿 Top Center Soft Leaf Pair */}
      <div className="floating-top-accent" aria-hidden="true">
        <svg viewBox="0 0 100 80" className="leaf-pair-svg">
          <path
            d="M 10 60 C 20 30 50 15 80 10 C 75 40 55 60 25 70 Z"
            fill="#DDF0C7"
          />
          <path
            d="M 10 60 C 35 40 55 30 80 10"
            stroke="#76B82A"
            strokeWidth="2"
          />
          <path
            d="M 35 65 C 50 45 75 35 95 30 C 90 55 75 70 50 75 Z"
            fill="#A3D668"
            opacity="0.8"
          />
        </svg>
      </div>

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

        {/* User's .hero-image Container */}
        <div className="hero-image">
          {showPlaceholders ? (
            <div className="hero-placeholder-canvas">
              <div className="hero-placeholder-dots" />
              <div className="hero-placeholder-overlay">
                <div className="placeholder-icon-circle">
                  <ImagePlus size={32} />
                </div>
                <span className="placeholder-pill-badge">Image Placeholder</span>
                <h3 className="placeholder-slot-title">{slots.heroCampus.title}</h3>
                <span className="placeholder-size-hint">
                  Recommended: {slots.heroCampus.recommendedSize}
                </span>
                <span className="placeholder-instruction">
                  Upload or insert your image file here
                </span>
              </div>
            </div>
          ) : (
            <img
              src={slots.heroCampus.src}
              alt="Rubber Hills Kindergarten Main Campus"
            />
          )}

          {/* Exact Curve Dashed Border Line */}
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
              strokeDasharray={showPlaceholders ? '8 8' : 'none'}
            />
          </svg>
        </div>

        {/* Yellow Sunflower "AGES 2.5–6 🌱" Scalloped Badge on bottom right */}
        <div className="hero-floating-badge-container">
          <ScallopedBadge topText="AGES" mainText="2.5–6" />
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
              <path d="M 0,0 L 1,0 L 1,0.89 C 0.94,0.90 0.88,0.92 0.82,0.92 C 0.70,0.92 0.58,0.89 0.48,0.89 C 0.38,0.89 0.30,0.84 0.22,0.84 C 0.14,0.84 0.06,0.88 0,0.965 Z" />
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
              isPlaceholder={showPlaceholders}
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
              isPlaceholder={showPlaceholders}
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
              isPlaceholder={showPlaceholders}
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

      {/* ============================================================== */}
      {/* 5. PLACEHOLDER TOGGLE (Bottom Right Helper Pill)               */}
      {/* ============================================================== */}
      <aside className="placeholder-toggle-bar">
        <button
          type="button"
          onClick={() => setShowPlaceholders(!showPlaceholders)}
          className="btn-toggle-placeholders"
          title="Switch between Image Placeholders and Photos"
        >
          <Eye size={15} />
          <span>{showPlaceholders ? 'Show Photos' : 'Show Image Placeholders'}</span>
        </button>
      </aside>
    </div>
  );
}
