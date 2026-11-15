import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sprout, Heart } from 'lucide-react';
import PillBadge from '../../components/Shared/PillBadge';
import ScallopedBadge from '../../components/Shared/ScallopedBadge';
import DoodleUnderline from '../../components/Shared/DoodleUnderline';
import DoodleRays from '../../components/Shared/DoodleRays';
import FloatingLeaves from '../../components/Shared/FloatingLeaves';
import './Home.css';

export default function Home() {
  return (
    <div className="page-home">
      {/* Floating Leaves Animation */}
      <FloatingLeaves />

      {/* Hero Section */}
      <section className="home-hero">
        <div className="container hero-container">
          {/* Left Text Column */}
          <div className="hero-text-col">
            <PillBadge text="A Kinder Place to Grow" className="hero-pill" />

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

          {/* Right Image Column */}
          <div className="hero-image-col">
            <div className="hero-image-wrapper">
              <img
                src="/assets/campus_hero.jpg"
                alt="Rubber Hills Kindergarten Campus"
                className="hero-main-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curved Green Banner */}
      <section className="wave-banner-section">
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

      {/* 3-Image Gallery Collage */}
      <section className="home-gallery-section">
        <div className="container">
          <div className="gallery-grid">
            <div className="gallery-card card-left">
              <img
                src="/assets/campus_walkway.jpg"
                alt="Green garden walkway"
                className="gallery-img"
              />
            </div>
            <div className="gallery-card card-center">
              <img
                src="/assets/classroom_interior.jpg"
                alt="Sunny classrooms"
                className="gallery-img"
              />
            </div>
            <div className="gallery-card card-right">
              <img
                src="/assets/outdoor_playground.jpg"
                alt="Safe outdoor play court"
                className="gallery-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* "A world made for little minds" Section */}
      <section className="home-features-section">
        <div className="container">
          <div className="section-header-centered">
            <DoodleRays flip className="rays-left" />
            <h2 className="section-title-centered">A world made for little minds</h2>
            <DoodleRays className="rays-right" />
          </div>

          <div className="features-cards-grid">
            {/* Card 1 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper bg-green-circle">
                <BookOpen size={28} className="feature-icon" />
              </div>
              <h3 className="feature-title">Learn through play</h3>
              <p className="feature-desc">
                Fun-filled activities that build skills for life.
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper bg-green-circle">
                <Sprout size={28} className="feature-icon" />
              </div>
              <h3 className="feature-title">Room to explore</h3>
              <p className="feature-desc">
                A safe space to discover, imagine and grow.
              </p>
            </div>

            {/* Card 3 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper bg-green-circle">
                <Heart size={28} className="feature-icon" />
              </div>
              <h3 className="feature-title">Care that feels like home</h3>
              <p className="feature-desc">
                A nurturing environment where every child thrives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
