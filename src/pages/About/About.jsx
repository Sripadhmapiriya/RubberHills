import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Smile,
  Anchor,
  GraduationCap,
  Trees,
  Trophy,
} from 'lucide-react';
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

      {/* 1. About Hero Section */}
      <section className="about-hero" aria-label="About Rubber Hills Hero">
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

            <a href="#story" className="btn-primary-green">
              <span>Discover Our Story</span>
              <span className="btn-arrow-circle">
                <ArrowRight size={17} />
              </span>
            </a>
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
                <ScallopedBadge
                  topText="A KINDER"
                  mainText="PLACE TO GROW"
                  className="about-scalloped-badge"
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

      {/* Wave Transition Divider */}
      <div className="section-wave-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path
            d="M0 25C280 50 560 5 840 30C1120 55 1320 20 1440 30V60H0V25Z"
            fill="#FFFDF5"
          />
        </svg>
      </div>

      {/* 2. Our Story Section (Exact Approved Content) */}
      <section id="story" className="about-story-section" aria-label="Our Story">
        <div className="container">
          <div className="story-grid">
            {/* Left Column: Heading & Exact Three Paragraphs */}
            <div className="story-content-col">
              <PillBadge text="Our Story" className="story-pill" />
              
              <div className="story-title-wrapper">
                <h2 className="story-heading">About Us</h2>
              </div>

              <div className="story-paragraphs-wrapper">
                <p className="story-paragraph lead-paragraph">
                  Rubber Hills Kindergarten is part of the Rubber Hills Group, named for the lush rubber trees and honey-rich land where we belong.
                </p>
                <p className="story-paragraph">
                  It was founded by Ajin George, a retired Navy veteran, and Luie Femila, a seasoned educator. After retirement, they chose to stay in service and devote their time to shaping young minds.
                </p>
                <p className="story-paragraph">
                  Our aim is a nurturing place where every child can grow and thrive, in the classroom and on the sports field.
                </p>
              </div>

              {/* Highlights derived directly from the story */}
              <div className="story-callouts">
                <div className="story-callout-pill">
                  <span className="callout-bullet">🌿</span>
                  <span>Lush Rubber Trees & Honey-Rich Land</span>
                </div>
                <div className="story-callout-pill">
                  <span className="callout-bullet">🏃</span>
                  <span>Classroom & Sports Field Balance</span>
                </div>
              </div>
            </div>

            {/* Right Column: Balanced Visual Showcase */}
            <div className="story-visual-col">
              <div className="story-visual-card">
                <div className="story-image-wrap">
                  <img
                    src="/assets/campus-entrance.jpg"
                    alt="Rubber Hills Campus Entrance and Garden Grounds"
                    className="story-campus-img"
                  />
                  <div className="story-image-badge">
                    <span className="badge-tag">SINCE RETIREMENT</span>
                    <span className="badge-title">Devoted to Shaping Young Minds</span>
                  </div>
                </div>

                <div className="story-highlights-box">
                  <div className="story-highlight-item">
                    <div className="highlight-icon green">
                      <Trees size={22} />
                    </div>
                    <div>
                      <h4 className="highlight-title">Lush Natural Surroundings</h4>
                      <p className="highlight-desc">Nestled among serene rubber trees and green hills in fresh, clean air.</p>
                    </div>
                  </div>

                  <div className="story-highlight-item">
                    <div className="highlight-icon yellow">
                      <Trophy size={22} />
                    </div>
                    <div>
                      <h4 className="highlight-title">Active Sports & Classroom Care</h4>
                      <p className="highlight-desc">A nurturing balance where every child thrives mentally, creatively, and physically.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Meet Our Founders Section */}
      <section id="founders" className="about-founders-section" aria-label="Meet Our Founders">
        <div className="container">
          <div className="founders-header">
            <PillBadge text="Leadership & Vision" className="founders-pill" />
            <h2 className="founders-heading">Meet Our Founders</h2>
            <p className="founders-subtitle">
              Devoting their retirement to service and shaping young minds at Rubber Hills Kindergarten.
            </p>
          </div>

          <div className="founders-grid">
            {/* Founder 1: Ajin George */}
            <div className="founder-card card-ajin">
              <div className="founder-card-inner">
                <div className="founder-top-row">
                  <div className="founder-avatar-wrap">
                    <div className="founder-avatar avatar-navy">
                      <span className="founder-initials">AG</span>
                    </div>
                    <div className="founder-sub-badge" title="Retired Navy Veteran">
                      <Anchor size={14} />
                    </div>
                  </div>
                  <div className="founder-role-tag tag-navy">
                    <span>Founder</span>
                  </div>
                </div>

                <div className="founder-info">
                  <h3 className="founder-name">Ajin George</h3>
                  <div className="founder-divider-navy" />
                  <p className="founder-description">
                    Founder. Retired Navy veteran.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder 2: Luie Femila */}
            <div className="founder-card card-luie">
              <div className="founder-card-inner">
                <div className="founder-top-row">
                  <div className="founder-avatar-wrap">
                    <div className="founder-avatar avatar-educator">
                      <span className="founder-initials">LF</span>
                    </div>
                    <div className="founder-sub-badge" title="Seasoned Educator">
                      <GraduationCap size={14} />
                    </div>
                  </div>
                  <div className="founder-role-tag tag-educator">
                    <span>Founder & Educator</span>
                  </div>
                </div>

                <div className="founder-info">
                  <h3 className="founder-name">Luie Femila</h3>
                  <div className="founder-divider-educator" />
                  <p className="founder-description">
                    Founder and educator. Experience in Navy kindergarten schools and Kendriya Vidyalayas, and as a business analyst with Barclays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Values & Philosophy Section (Why Families Choose Us) */}
      <section id="values" className="about-values-section" aria-label="Why Families Choose Us">
        <div className="container">
          <div className="values-header">
            <PillBadge text="Our Core Values" className="values-pill" />
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
