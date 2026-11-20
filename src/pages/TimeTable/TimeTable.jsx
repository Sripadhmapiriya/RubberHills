import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Smile,
  Sprout,
  Heart,
  Music,
  Palette,
  Trophy,
} from 'lucide-react';
import PillBadge from '../../components/Shared/PillBadge';
import DoodleUnderline from '../../components/Shared/DoodleUnderline';
import DoodleRays from '../../components/Shared/DoodleRays';
import FloatingLeaves from '../../components/Shared/FloatingLeaves';
import TimelineCar from './TimelineCar';
import { ORIGINAL_IMAGES } from '../../config/images';
import './TimeTable.css';

// ==============================================================
// 1. VERIFIED PUBLIC TIMETABLE HIGHLIGHTS (In Chronological Order)
// ==============================================================
const TIMELINE_MOMENTS = [
  {
    momentNum: '01',
    time: '9:05 AM',
    title: 'Morning Bell',
    description: 'The school day begins, welcoming our little learners into a new day of discovery.',
    bgClass: 'card-bg-mint',
    accentColor: '#2D754B',
    badgeColor: '#F6D65B',
    badgeTextColor: '#174B35',
    icon: (
      <svg viewBox="0 0 64 64" className="moment-svg" aria-hidden="true">
        {/* Golden Morning School Bell with Resonating Chimes */}
        <path d="M28 14 C28 9 36 9 36 14" stroke="#174B35" strokeWidth="2.5" fill="none" />
        <path
          d="M17 40 C17 25 22 15 32 15 C42 15 47 25 47 40 Z"
          fill="#F6D65B"
          stroke="#174B35"
          strokeWidth="2.5"
        />
        <path
          d="M13 40 C13 38 51 38 51 40 C51 44 13 44 13 40 Z"
          fill="#FDE68A"
          stroke="#174B35"
          strokeWidth="2.5"
        />
        <circle cx="32" cy="45" r="3.5" fill="#B45309" stroke="#174B35" strokeWidth="2" />
        {/* Chime Rings */}
        <path d="M8 26 C6 31 6 36 8 41 M56 26 C58 31 58 36 56 41" stroke="#72B95A" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M4 29 C2 33 2 37 4 41 M60 29 C62 33 62 37 60 41" stroke="#174B35" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
        {/* Cheerful Morning Star */}
        <polygon points="46,8 48,13 53,13 49,16 51,21 46,18 41,21 43,16 39,13 44,13" fill="#F6D65B" />
      </svg>
    ),
  },
  {
    momentNum: '02',
    time: '9:10 AM',
    title: 'Morning Assembly',
    description: 'A cheerful start to the day with everyone coming together.',
    bgClass: 'card-bg-yellow',
    accentColor: '#B45309',
    badgeColor: '#72B95A',
    badgeTextColor: '#FFFFFF',
    icon: (
      <svg viewBox="0 0 64 64" className="moment-svg" aria-hidden="true">
        {/* Smiling Morning Sun & Gathering Together */}
        <circle cx="32" cy="30" r="14" fill="#F6D65B" stroke="#174B35" strokeWidth="2.5" />
        {/* Smiley Face */}
        <circle cx="27" cy="28" r="1.8" fill="#174B35" />
        <circle cx="37" cy="28" r="1.8" fill="#174B35" />
        <path d="M28 33 Q32 37 36 33" stroke="#174B35" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Sunbeams */}
        <line x1="32" y1="10" x2="32" y2="4" stroke="#F6D65B" strokeWidth="3" strokeLinecap="round" />
        <line x1="46" y1="16" x2="51" y2="12" stroke="#72B95A" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="52" y1="30" x2="58" y2="30" stroke="#F6D65B" strokeWidth="3" strokeLinecap="round" />
        <line x1="18" y1="16" x2="13" y2="12" stroke="#72B95A" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="12" y1="30" x2="6" y2="30" stroke="#F6D65B" strokeWidth="3" strokeLinecap="round" />
        {/* Gathering ground & friendly seedlings */}
        <path d="M12 52 Q32 46 52 52" stroke="#72B95A" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M22 50 C22 44 26 42 26 42 C26 42 27 47 22 50 Z" fill="#72B95A" />
        <path d="M42 50 C42 44 38 42 38 42 C38 42 37 47 42 50 Z" fill="#72B95A" />
      </svg>
    ),
  },
  {
    momentNum: '03',
    time: '9:35 AM',
    title: 'Attendance & Getting Ready',
    description: 'Children settle in and get ready for their learning experiences.',
    bgClass: 'card-bg-peach',
    accentColor: '#C2410C',
    badgeColor: '#F6D65B',
    badgeTextColor: '#174B35',
    icon: (
      <svg viewBox="0 0 64 64" className="moment-svg" aria-hidden="true">
        {/* School Bag & Learning Checklist */}
        <rect x="17" y="21" width="28" height="30" rx="8" fill="#F8DED0" stroke="#174B35" strokeWidth="2.4" />
        <rect x="22" y="32" width="18" height="15" rx="4" fill="#FFFFFF" stroke="#174B35" strokeWidth="2" />
        <path d="M22 21 C22 13 40 13 40 21" stroke="#174B35" strokeWidth="2.4" fill="none" />
        {/* Cheerful pencil */}
        <polygon points="43,11 47,15 37,25 33,21" fill="#F6D65B" stroke="#174B35" strokeWidth="1.8" />
        {/* Ready Checkmark Badge */}
        <circle cx="47" cy="45" r="8" fill="#72B95A" stroke="#174B35" strokeWidth="1.8" />
        <path d="M44 45 L46 47 L51 42" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    momentNum: '04',
    time: '11:15 AM',
    title: 'Morning Break',
    description: 'A little pause to enjoy a snack and recharge.',
    bgClass: 'card-bg-green',
    accentColor: '#15803D',
    badgeColor: '#72B95A',
    badgeTextColor: '#FFFFFF',
    icon: (
      <svg viewBox="0 0 64 64" className="moment-svg" aria-hidden="true">
        {/* Healthy Fresh Fruit & Morning Snack */}
        {/* Crisp Apple */}
        <path
          d="M29 25 C21 23 15 29 15 37 C15 47 27 53 29 53 C31 53 43 47 43 37 C43 29 37 23 29 25 Z"
          fill="#EF4444"
          stroke="#174B35"
          strokeWidth="2.4"
        />
        {/* Apple stem & green leaf */}
        <path d="M29 25 C29 17 33 15 33 15" stroke="#174B35" strokeWidth="2" strokeLinecap="round" />
        <path d="M31 19 C35 16 39 18 39 18 C39 18 38 22 34 21 Z" fill="#72B95A" stroke="#174B35" strokeWidth="1.5" />
        {/* Orange slice */}
        <path d="M40 37 C48 37 52 45 48 51 C42 53 38 45 40 37 Z" fill="#F6D65B" stroke="#174B35" strokeWidth="1.8" />
        {/* Energy sparkles */}
        <polygon points="50,16 52,20 56,20 53,23 54,27 50,24 46,27 47,23 44,20 48,20" fill="#F6D65B" />
      </svg>
    ),
  },
  {
    momentNum: '05',
    time: '1:00 PM',
    title: 'Lunch Time',
    description: 'Time to enjoy lunch and share happy moments with friends.',
    bgClass: 'card-bg-lavender',
    accentColor: '#6D28D9',
    badgeColor: '#F6D65B',
    badgeTextColor: '#174B35',
    icon: (
      <svg viewBox="0 0 64 64" className="moment-svg" aria-hidden="true">
        {/* Wholesome Meal Plate, Fork, Spoon & Warm Aroma */}
        <circle cx="32" cy="35" r="17" fill="#FFFFFF" stroke="#174B35" strokeWidth="2.4" />
        <circle cx="32" cy="35" r="11" fill="#E9E3F5" stroke="#174B35" strokeWidth="1.5" strokeDasharray="2 2" />
        {/* Heart shaped food center */}
        <path d="M32 32 C31 30 29 30 29 31.5 C29 33 32 35 32 35 C32 35 35 33 35 31.5 C35 30 33 30 32 32 Z" fill="#F87171" />
        {/* Fork on Left */}
        <path d="M10 24 V44 M8 24 V29 H12 V24" stroke="#174B35" strokeWidth="2" strokeLinecap="round" />
        {/* Spoon on Right */}
        <path d="M54 24 C51 24 50 27 50 31 C50 35 53 36 54 44" stroke="#174B35" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Warm aroma steam */}
        <path d="M28 14 Q30 10 28 7 M36 14 Q38 10 36 7" stroke="#72B95A" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    momentNum: '06',
    time: '3:15 PM',
    title: 'Wind-up Begins',
    description: "Wrapping up the day's experiences before heading home.",
    bgClass: 'card-bg-yellow',
    accentColor: '#B45309',
    badgeColor: '#72B95A',
    badgeTextColor: '#FFFFFF',
    icon: (
      <svg viewBox="0 0 64 64" className="moment-svg" aria-hidden="true">
        {/* Clock Face with Friendly Waving Hand & Goodbye Star */}
        <circle cx="27" cy="35" r="16" fill="#FEF3C7" stroke="#174B35" strokeWidth="2.4" />
        {/* Clock Hands pointing to 3:15 */}
        <line x1="27" y1="35" x2="36" y2="35" stroke="#174B35" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="27" y1="35" x2="27" y2="25" stroke="#174B35" strokeWidth="2" strokeLinecap="round" />
        <circle cx="27" cy="35" r="2.5" fill="#174B35" />
        {/* Friendly Waving Hand */}
        <path
          d="M42 22 C42 16 52 14 54 22 C55 26 51 34 45 36 L39 30"
          fill="#F8DED0"
          stroke="#174B35"
          strokeWidth="2"
        />
        {/* Golden Good-Day Star */}
        <polygon points="46,7 48,12 53,12 49,15 51,20 46,17 41,20 43,15 39,12 44,12" fill="#F6D65B" />
      </svg>
    ),
  },
];

export default function TimeTable() {
  const timelineRef = useRef(null);

  return (
    <div className="page-timetable">
      <FloatingLeaves />

      {/* ============================================================== */}
      {/* 1. HERO SECTION (Our Daily Rhythm)                             */}
      {/* ============================================================== */}
      <section className="timetable-hero" aria-label="Daily Schedule Overview">
        <div className="container timetable-hero-container">
          {/* Left Text */}
          <div className="timetable-hero-text">
            <PillBadge text="OUR DAILY RHYTHM" className="timetable-eyebrow" />

            <div className="timetable-heading-wrap">
              <DoodleRays className="timetable-hero-rays" />
              <h1 className="timetable-hero-title">
                A Day Full of<br />
                <span className="heading-highlight">
                  Little Moments
                  <DoodleUnderline className="timetable-hero-underline" />
                </span>
              </h1>
            </div>

            <p className="timetable-hero-desc">
              Every day brings something wonderful. From cheerful morning greetings to playful discoveries and happy learning moments, each part of the day helps our little learners grow.
            </p>

            {/* Three Highlights Badges: Learn • Play • Grow */}
            <div className="hero-highlights-row">
              <div className="highlight-pill highlight-learn">
                <BookOpen size={16} className="pill-icon" />
                <span>Learn</span>
              </div>
              <div className="highlight-pill highlight-play">
                <Smile size={16} className="pill-icon" />
                <span>Play</span>
              </div>
              <div className="highlight-pill highlight-grow">
                <Sprout size={16} className="pill-icon" />
                <span>Grow</span>
              </div>
            </div>

            {/* Action Anchor */}
            <div className="hero-cta-row">
              <a href="#timeline-moments" className="btn-primary-green">
                <span>Follow Our School Day</span>
                <span className="btn-arrow-circle">
                  <ArrowRight size={17} />
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Unique Editorial Photo Composition "A Day at Rubber Hills" */}
          <div className="timetable-hero-visual" aria-label="A Day at Rubber Hills classroom photo feature">
            <div className="timetable-editorial-feature">
              {/* Subtle Asymmetrical Yellow Backdrop Shape */}
              <div className="editorial-backdrop-shape" aria-hidden="true" />

              {/* Decorative Fresh-Green Botanical Leaf Accent */}
              <div className="editorial-leaf-accent" aria-hidden="true">
                <svg viewBox="0 0 36 36" fill="none" className="accent-leaf-svg">
                  <path
                    d="M6 30 C6 18 18 6 30 6 C30 18 18 30 6 30 Z"
                    fill="#72B95A"
                    stroke="#174B35"
                    strokeWidth="1.8"
                  />
                  <path d="M6 30 Q18 18 30 6" stroke="#174B35" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Large Central Photo with Distinctive Organic/Arched Frame */}
              <div className="editorial-arch-frame">
                <img
                  src={ORIGINAL_IMAGES.classroomSmartLearning.src}
                  alt={ORIGINAL_IMAGES.classroomSmartLearning.alt}
                  className="editorial-main-photo"
                  loading="eager"
                />
              </div>

              {/* Dark Forest-Green Caption Ribbon */}
              <div className="timetable-caption-ribbon">
                <span className="ribbon-leaf">🌿</span>
                <span className="ribbon-text">LITTLE MOMENTS, BIG DISCOVERIES</span>
                <span className="ribbon-star">✨</span>
              </div>

              {/* 3 Small Floating Activity Labels */}
              <div className="timetable-float-chip chip-assembly">
                <span className="chip-dot dot-sun" />
                <span className="chip-label">Morning Assembly • 9:10 AM</span>
              </div>

              <div className="timetable-float-chip chip-creative">
                <span className="chip-dot dot-leaf" />
                <span className="chip-label">Creative Play</span>
              </div>

              <div className="timetable-float-chip chip-learning">
                <span className="chip-dot dot-mint" />
                <span className="chip-label">Happy Learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. MAIN SECTION – FOLLOW OUR SCHOOL DAY (Organic Timeline)     */}
      {/* ============================================================== */}
      <section id="timeline-moments" className="timeline-section" aria-label="School Day Timeline">
        <div className="container">
          {/* Header */}
          <div className="timeline-section-header">
            <PillBadge text="DAILY SCHEDULE HIGHLIGHTS" className="timeline-pill" />
            <h2 className="timeline-section-title">Little Moments, Big Memories</h2>
            <p className="timeline-section-subtitle">
              Every moment has a purpose, and every experience makes the day special.
            </p>
          </div>

          {/* ============================================================ */}
          {/* DESKTOP TIMELINE (Alternating Serpentine Journey)            */}
          {/* ============================================================ */}
          <div className="timeline-desktop-wrapper" ref={timelineRef}>
            {/* Toy car road: drives from moment 1 to 6 through the cards and dots */}
            <TimelineCar wrapperRef={timelineRef} />

            {/* 6 Alternating Timeline Columns */}
            <div className="desktop-timeline-grid">
              {TIMELINE_MOMENTS.map((item, idx) => {
                const isTop = idx % 2 === 0;

                return (
                  <div key={item.momentNum} className={`timeline-col col-${isTop ? 'top' : 'bottom'}`}>
                    {/* Top Row: If isTop, render Card; if not, render empty spacer */}
                    <div className="col-slot slot-top">
                      {isTop && (
                        <div className={`moment-card ${item.bgClass}`}>
                          {/* Time & Moment Badge */}
                          <div className="moment-card-header">
                            <span
                              className="moment-time-badge"
                              style={{ backgroundColor: item.badgeColor, color: item.badgeTextColor }}
                            >
                              {item.time}
                            </span>
                            <span className="moment-number">#{item.momentNum}</span>
                          </div>

                          {/* Icon */}
                          <div className="moment-icon-bubble">
                            {item.icon}
                          </div>

                          {/* Content */}
                          <h3 className="moment-card-title">{item.title}</h3>
                          <p className="moment-card-desc">{item.description}</p>
                        </div>
                      )}
                    </div>

                    {/* Milestone Center Marker on the Track */}
                    <div className="milestone-center-wrap">
                      <div className="milestone-stem" />
                      <div className="milestone-node" style={{ borderColor: item.badgeColor }}>
                        <span className="milestone-inner-dot" style={{ backgroundColor: item.accentColor }} />
                      </div>
                    </div>

                    {/* Bottom Row: If !isTop, render Card; if isTop, render empty spacer */}
                    <div className="col-slot slot-bottom">
                      {!isTop && (
                        <div className={`moment-card ${item.bgClass}`}>
                          {/* Time & Moment Badge */}
                          <div className="moment-card-header">
                            <span
                              className="moment-time-badge"
                              style={{ backgroundColor: item.badgeColor, color: item.badgeTextColor }}
                            >
                              {item.time}
                            </span>
                            <span className="moment-number">#{item.momentNum}</span>
                          </div>

                          {/* Icon */}
                          <div className="moment-icon-bubble">
                            {item.icon}
                          </div>

                          {/* Content */}
                          <h3 className="moment-card-title">{item.title}</h3>
                          <p className="moment-card-desc">{item.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ============================================================ */}
          {/* MOBILE TIMELINE (Clean Vertical Journey with Nodes)          */}
          {/* ============================================================ */}
          <div className="timeline-mobile-wrapper" aria-label="Mobile Schedule Timeline">
            <div className="mobile-timeline-track-line" />

            <div className="mobile-timeline-list">
              {TIMELINE_MOMENTS.map((item) => (
                <div key={item.momentNum} className="mobile-timeline-item">
                  {/* Left Milestone Node on the Line */}
                  <div className="mobile-milestone-node" style={{ borderColor: item.badgeColor }}>
                    <span className="node-dot" style={{ backgroundColor: item.accentColor }} />
                  </div>

                  {/* Card Content on the Right */}
                  <div className={`mobile-moment-card ${item.bgClass}`}>
                    <div className="mobile-card-header">
                      <span
                        className="moment-time-badge"
                        style={{ backgroundColor: item.badgeColor, color: item.badgeTextColor }}
                      >
                        {item.time}
                      </span>
                      <span className="mobile-moment-tag">Moment {item.momentNum}</span>
                    </div>

                    <div className="mobile-card-body">
                      <div className="mobile-icon-box">{item.icon}</div>
                      <div className="mobile-text-box">
                        <h3 className="mobile-moment-title">{item.title}</h3>
                        <p className="mobile-moment-desc">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SPECIAL FEATURE – WEDNESDAY NO BOOK DAY                     */}
      {/* ============================================================== */}
      <section className="wednesday-feature-section" aria-label="Wednesday Special Program">
        <div className="container">
          <div className="wednesday-card">
            {/* Decorative Background Accents */}
            <div className="wednesday-decor-accents" aria-hidden="true">
              <span className="wed-star star-1">★</span>
              <span className="wed-star star-2">✦</span>
              <span className="wed-note note-1">🎵</span>
              <span className="wed-note note-2">🎨</span>
              <div className="wed-sunshine-ring" />
            </div>

            <div className="wednesday-content">
              <PillBadge text="SPECIAL WEEKLY HIGHLIGHT" className="wednesday-pill" />

              <h2 className="wednesday-title">
                Wednesday is No Book Day!
              </h2>

              <p className="wednesday-description">
                Instead of books, children enjoy CCA, ECA and fun activities.
              </p>

              {/* Three Visual Activity Feature Pills */}
              <div className="wednesday-pillars-grid">
                <div className="wed-pillar-pill">
                  <span className="pillar-icon-box">
                    <Palette size={20} className="icon-palette" />
                  </span>
                  <div>
                    <h3 className="pillar-title">Creative Arts & Crafts</h3>
                    <p className="pillar-desc">Painting, sculpting & hands-on expression</p>
                  </div>
                </div>

                <div className="wed-pillar-pill">
                  <span className="pillar-icon-box">
                    <Music size={20} className="icon-music" />
                  </span>
                  <div>
                    <h3 className="pillar-title">Music & Movement</h3>
                    <p className="pillar-desc">Action songs, rhythm games & dancing</p>
                  </div>
                </div>

                <div className="wed-pillar-pill">
                  <span className="pillar-icon-box">
                    <Trophy size={20} className="icon-sports" />
                  </span>
                  <div>
                    <h3 className="pillar-title">Fun Sports & Games</h3>
                    <p className="pillar-desc">Outdoor team play & coordination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. CLOSING SECTION (Every Day is a New Adventure)              */}
      {/* ============================================================== */}
      <section className="timetable-closing-section">
        <div className="container">
          <div className="closing-panel">
            {/* Background Botanical Doodle Accents */}
            <div className="closing-bg-accents" aria-hidden="true">
              <div className="closing-star star-left">★</div>
              <div className="closing-star star-right">✦</div>
              <div className="closing-leaf leaf-left">🌿</div>
              <div className="closing-leaf leaf-right">🍃</div>
            </div>

            <div className="closing-content">
              <PillBadge text="JOYFUL ROUTINES" className="closing-pill" />

              <h2 className="closing-title">
                Every Day is a New Adventure
              </h2>

              <p className="closing-subtitle">
                Little routines create happy memories, build confidence and make every school day meaningful.
              </p>

              <div className="closing-cta-group">
                <Link to="/learning" className="btn-primary-yellow">
                  <span>Explore Our Learning</span>
                  <span className="btn-arrow-circle">
                    <ArrowRight size={18} />
                  </span>
                </Link>

                <Link to="/classes" className="btn-secondary-cream">
                  <span>Explore Our Classes</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
