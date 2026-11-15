import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, HeartHandshake, Sparkles, Smile } from 'lucide-react';
import PillBadge from '../../components/Shared/PillBadge';
import ScallopedBadge from '../../components/Shared/ScallopedBadge';
import DoodleUnderline from '../../components/Shared/DoodleUnderline';
import DoodleRays from '../../components/Shared/DoodleRays';
import FloatingLeaves from '../../components/Shared/FloatingLeaves';
import './About.css';

export default function About() {
  return (
    <div className="page-about">
      <FloatingLeaves />

      {/* Main Hero Section */}
      <section className="about-hero">
        <div className="container about-container">
          {/* Left Text */}
          <div className="about-text-col">
            <PillBadge text="About Rubber Hills" className="about-pill" />

            <div className="about-title-wrapper">
              <DoodleRays className="about-rays" />
              <h1 className="about-heading">
                Growing little<br />
                minds, one happy<br />
                <span className="heading-highlight">
                  day at a time.
                  <DoodleUnderline className="about-underline" />
                </span>
              </h1>
            </div>

            <p className="about-description">
              Rubber Hills Kindergarten is a nurturing early-learning environment where children
              learn through exploration, creativity, play and meaningful experiences.
            </p>

            <Link to="/contact" className="btn-primary-green">
              <span>Discover Our Story</span>
              <span className="btn-arrow-circle">
                <ArrowRight size={17} />
              </span>
            </Link>
          </div>

          {/* Right Collage matching reference */}
          <div className="about-collage-col">
            <div className="about-collage-wrapper">
              {/* Top Main Campus Photo */}
              <div className="collage-top-img-box">
                <img
                  src="/assets/about_main.jpg"
                  alt="Rubber Hills Campus Building"
                  className="collage-main-img"
                />
              </div>

              {/* Bottom 2 Overlapping Cards */}
              <div className="collage-bottom-row">
                <div className="collage-sub-card card-girl">
                  <img
                    src="/assets/about_girl_blocks.jpg"
                    alt="Child playing with blocks"
                    className="collage-sub-img"
                  />
                </div>
                <div className="collage-sub-card card-play">
                  <img
                    src="/assets/about_playground.jpg"
                    alt="Children playing outdoor"
                    className="collage-sub-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Philosophy Section */}
      <section className="about-values-section">
        <div className="container">
          <div className="values-header">
            <h2 className="values-title">Why Families Choose Rubber Hills</h2>
            <p className="values-subtitle">
              Every detail is designed to give your child the happiest, most enriching start in life.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-box">
                <HeartHandshake size={32} />
              </div>
              <h3>Caring Teachers</h3>
              <p>Dedicated educators who nurture every child with warmth, patience, and individual attention.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <ShieldCheck size={32} />
              </div>
              <h3>Safe Campus</h3>
              <p>Secure, clean, and child-safe grounds nestled amidst tranquil rubber trees and green hills.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <Sparkles size={32} />
              </div>
              <h3>Creative Learning</h3>
              <p>Play-based curriculum inspiring early literacy, numeracy, arts, and joyful discovery.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <Smile size={32} />
              </div>
              <h3>Happy Children</h3>
              <p>A vibrant community where friendships bloom and every morning begins with smiles and laughter.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
