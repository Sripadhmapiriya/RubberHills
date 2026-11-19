import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trees, SunMedium, Play, CheckCircle } from 'lucide-react';
import PillBadge from '../../components/Shared/PillBadge';
import DoodleUnderline from '../../components/Shared/DoodleUnderline';
import DoodleRays from '../../components/Shared/DoodleRays';
import FloatingLeaves from '../../components/Shared/FloatingLeaves';
import CampusCarousel from '../../components/Campus/CampusCarousel';
import { CAMPUS_IMAGES } from '../../config/images';
import './Campus.css';

export default function Campus() {
  return (
    <div className="page-campus">
      <FloatingLeaves />

      {/* Main Campus Hero Section */}
      <section className="campus-hero">
        <div className="container campus-container">
          {/* Left Text */}
          <div className="campus-text-col">
            <PillBadge text="Campus" className="campus-pill" />

            <div className="campus-title-wrapper">
              <DoodleRays className="campus-rays" />
              <h1 className="campus-heading">
                More than<br />
                a school.<br />
                A world to<br />
                <span className="heading-highlight">
                  explore.
                  <DoodleUnderline className="campus-underline" />
                </span>
              </h1>
            </div>

            <p className="campus-description">
              Thoughtfully designed spaces where little learners can play, discover and grow.
            </p>

            <a href="#campus-gallery" className="btn-primary-green">
              <span>Explore Campus Gallery</span>
              <span className="btn-arrow-circle">
                <ArrowRight size={17} />
              </span>
            </a>
          </div>

          {/* Right Collage matching reference */}
          <div className="campus-collage-col">
            <div className="campus-collage-wrapper">
              {/* Top Main Campus Card */}
              <div className="campus-top-card">
                <img
                  src={CAMPUS_IMAGES.topMain.src}
                  alt={CAMPUS_IMAGES.topMain.alt}
                  className="campus-top-img"
                  loading="eager"
                />
              </div>

              {/* Bottom 3 Cards */}
              <div className="campus-bottom-cards">
                <div className="sub-card">
                  <img
                    src={CAMPUS_IMAGES.walkway.src}
                    alt={CAMPUS_IMAGES.walkway.alt}
                    className="sub-card-img"
                    loading="lazy"
                  />
                  <div className="sub-card-caption">Garden Walkway</div>
                </div>
                <div className="sub-card">
                  <img
                    src={CAMPUS_IMAGES.classroom.src}
                    alt={CAMPUS_IMAGES.classroom.alt}
                    className="sub-card-img"
                    loading="lazy"
                  />
                  <div className="sub-card-caption">Bright Classrooms</div>
                </div>
                <div className="sub-card">
                  <img
                    src={CAMPUS_IMAGES.court.src}
                    alt={CAMPUS_IMAGES.court.alt}
                    className="sub-card-img sub-card-court-img"
                    loading="lazy"
                  />
                  <div className="sub-card-caption">Playground</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Campus Photo Showcase (3D Rotating Coverflow) */}
      <section id="campus-gallery" className="campus-showcase-section">
        <div className="container">
          <div className="showcase-header">
            <PillBadge text="Photo Showcase" className="showcase-pill" />
            <h2 className="showcase-title">A World of Wonder & Play</h2>
            <p className="showcase-subtitle">
              Authentic glimpses of our sun-filled classrooms, green outdoor arena, and child-safe campus.
            </p>
          </div>

          <CampusCarousel intervalMs={2000} />
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="campus-facilities">
        <div className="container">
          <div className="facilities-header">
            <h2 className="facilities-title">Campus Features & Safety</h2>
            <p className="facilities-subtitle">
              Every corner is crafted for children's safety, comfort, and boundless imagination.
            </p>
          </div>

          <div className="facilities-grid">
            <div className="facility-item">
              <div className="facility-icon">
                <SunMedium size={28} />
              </div>
              <div className="facility-info">
                <h3>Airy, Light-Filled Classrooms</h3>
                <p>Spacious rooms with natural ventilation, child-scaled wooden furniture, and cheerful learning murals.</p>
              </div>
            </div>

            <div className="facility-item">
              <div className="facility-icon">
                <Trees size={28} />
              </div>
              <div className="facility-info">
                <h3>Tranquil Natural Surroundings</h3>
                <p>Surrounded by tall rubber trees and fresh hilltop breezes, away from city traffic and noise.</p>
              </div>
            </div>

            <div className="facility-item">
              <div className="facility-icon">
                <Play size={28} />
              </div>
              <div className="facility-info">
                <h3>Secure Outdoor Play Zone</h3>
                <p>Colorful slides, swings, and open grass courts designed with child-safe equipment and protective barriers.</p>
              </div>
            </div>

            <div className="facility-item">
              <div className="facility-icon">
                <CheckCircle size={28} />
              </div>
              <div className="facility-info">
                <h3>Gentle Accessible Ramps</h3>
                <p>Barrier-free gentle ramps ensuring effortless access for strollers, toddlers, and parents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
