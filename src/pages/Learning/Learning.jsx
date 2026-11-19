import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import PillBadge from '../../components/Shared/PillBadge';
import DoodleUnderline from '../../components/Shared/DoodleUnderline';
import DoodleRays from '../../components/Shared/DoodleRays';
import FloatingLeaves from '../../components/Shared/FloatingLeaves';
import LearningHeroGallery from './LearningHeroGallery';
import './Learning.css';

// ==============================================================
// 1. THREE VISUAL PRINCIPLES (Custom Inline SVG Icons)
// ==============================================================
const PRINCIPLES = [
  {
    id: 'explore',
    title: 'Explore',
    desc: 'Nurturing curiosity through active play, nature trails, and joyful hands-on investigation.',
    icon: (
      <svg viewBox="0 0 64 64" className="principle-svg" aria-hidden="true">
        {/* Magnifying Glass with Sprout & Stars */}
        <circle cx="28" cy="28" r="17" fill="#E4F1DF" stroke="#174B35" strokeWidth="3" />
        <path d="M40 40 L54 54" stroke="#174B35" strokeWidth="4.5" strokeLinecap="round" />
        {/* Little plant sprout inside glass */}
        <path d="M28 35 C28 27 34 22 34 22 C34 22 36 29 28 35 Z" fill="#72B95A" />
        <path d="M28 35 C28 29 23 25 23 25 C23 25 22 31 28 35 Z" fill="#4B8E35" />
        <path d="M28 37 V32" stroke="#174B35" strokeWidth="2" strokeLinecap="round" />
        {/* Discovery Stars */}
        <polygon points="48,14 50,19 55,19 51,22 52,27 48,24 44,27 45,22 41,19 46,19" fill="#F6D65B" />
        <circle cx="14" cy="16" r="2.5" fill="#72B95A" />
      </svg>
    ),
    badgeColor: '#E4F1DF',
    accentColor: '#3A8758',
  },
  {
    id: 'create',
    title: 'Create',
    desc: 'Expressing individuality through colors, tactile crafts, building blocks, and boundless imagination.',
    icon: (
      <svg viewBox="0 0 64 64" className="principle-svg" aria-hidden="true">
        {/* Paintbrush & Color Splashes */}
        <path d="M19 45 L38 26 L42 30 L23 49 Z" fill="#FDE68A" stroke="#174B35" strokeWidth="2" />
        <path d="M19 45 C15 49 11 56 11 56 C11 56 18 53 23 49 Z" fill="#72B95A" stroke="#174B35" strokeWidth="2" />
        {/* Paint droplets */}
        <circle cx="48" cy="18" r="6.5" fill="#F8DED0" stroke="#174B35" strokeWidth="2" />
        <circle cx="50" cy="36" r="4.5" fill="#E9E3F5" stroke="#174B35" strokeWidth="1.8" />
        <circle cx="33" cy="14" r="4" fill="#F6D65B" stroke="#174B35" strokeWidth="1.8" />
        {/* Sparkle */}
        <path d="M38 42 L42 42 M40 40 L40 44" stroke="#72B95A" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    badgeColor: '#F8DED0',
    accentColor: '#B85D36',
  },
  {
    id: 'discover',
    title: 'Discover',
    desc: 'Uncovering early numbers, phonics, stories, and social kindness in a caring, unhurried space.',
    icon: (
      <svg viewBox="0 0 64 64" className="principle-svg" aria-hidden="true">
        {/* Lightbulb sprouting ideas */}
        <path
          d="M23 27 C23 16 41 16 41 27 C41 33 36 36 36 41 L28 41 C28 36 23 33 23 27 Z"
          fill="#FEF3C7"
          stroke="#174B35"
          strokeWidth="3"
        />
        {/* Filament Sprout */}
        <path d="M32 37 V26" stroke="#174B35" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 28 C30 24 26 25 26 25 C26 25 26 29 32 28 Z" fill="#72B95A" />
        {/* Base */}
        <rect x="28" y="43" width="8" height="4" rx="1.5" fill="#F6D65B" stroke="#174B35" strokeWidth="2" />
        <rect x="29.5" y="48.5" width="5" height="2.5" rx="1" fill="#174B35" />
        {/* Radiating Rays */}
        <path d="M32 8 V12 M13 23 L17 25 M51 23 L47 25 M18 10 L21 14 M46 10 L43 14" stroke="#F6D65B" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    badgeColor: '#FEF3C7',
    accentColor: '#B88A1A',
  },
];

// ==============================================================
// 2. NINE LEARNING CATEGORIES (Exact Content from HTML Source)
// ==============================================================
const LEARNING_CATEGORIES = [
  {
    number: '01',
    title: 'Linguistic',
    description: 'Alphabet, phonics, vowels, consonants, listening, speaking and playing with words.',
    theme: 'mint',
    bgClass: 'bg-soft-mint',
    accentColor: '#2D754B',
    badgeBg: '#D1EAD0',
    icon: (
      <svg viewBox="0 0 64 64" className="category-svg" aria-hidden="true">
        {/* Open book with alphabet letters */}
        <path
          d="M8 46 C18 42 28 44 32 48 C36 44 46 42 56 46 V22 C46 18 36 20 32 24 C28 20 18 18 8 22 Z"
          fill="#FFFFFF"
          stroke="#174B35"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <path d="M32 24 V48" stroke="#174B35" strokeWidth="2.4" strokeLinecap="round" />
        {/* Page lines */}
        <path d="M14 28 C20 26 26 27 28 29 M14 34 C20 32 26 33 28 35" stroke="#9FD48B" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M36 29 C38 27 44 26 50 28 M36 35 C38 33 44 32 50 34" stroke="#9FD48B" strokeWidth="1.8" strokeLinecap="round" />
        {/* Floating Letters */}
        <text x="16" y="16" fill="#174B35" fontSize="13" fontWeight="800" fontFamily="Outfit, sans-serif">A</text>
        <text x="32" y="13" fill="#72B95A" fontSize="11" fontWeight="800" fontFamily="Outfit, sans-serif">B</text>
        <text x="46" y="16" fill="#D97706" fontSize="12" fontWeight="800" fontFamily="Outfit, sans-serif">c</text>
        {/* Speech / Phonics Spark */}
        <circle cx="28" cy="8" r="2" fill="#F6D65B" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Numeracy',
    description: 'Counting, number recognition, more, less, shapes and patterns.',
    theme: 'yellow',
    bgClass: 'bg-soft-yellow',
    accentColor: '#B45309',
    badgeBg: '#FDE68A',
    icon: (
      <svg viewBox="0 0 64 64" className="category-svg" aria-hidden="true">
        {/* Number Blocks and Geometric Shapes */}
        <rect x="8" y="32" width="22" height="22" rx="4" fill="#FFFFFF" stroke="#174B35" strokeWidth="2.5" />
        <text x="14" y="49" fill="#174B35" fontSize="17" fontWeight="800" fontFamily="Outfit, sans-serif">1</text>
        <rect x="34" y="32" width="22" height="22" rx="4" fill="#FFFFFF" stroke="#174B35" strokeWidth="2.5" />
        <text x="40" y="49" fill="#72B95A" fontSize="17" fontWeight="800" fontFamily="Outfit, sans-serif">2</text>
        <rect x="21" y="10" width="22" height="22" rx="4" fill="#FEF3C7" stroke="#174B35" strokeWidth="2.5" />
        <text x="27" y="27" fill="#B45309" fontSize="17" fontWeight="800" fontFamily="Outfit, sans-serif">3</text>
        {/* Floating Geometric Shapes */}
        <polygon points="53,12 59,22 47,22" fill="#72B95A" stroke="#174B35" strokeWidth="1.8" />
        <circle cx="12" cy="18" r="4.5" fill="#F6D65B" stroke="#174B35" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Social Development',
    description: 'Understanding home, school and community, sharing, cooperation and kindness.',
    theme: 'peach',
    bgClass: 'bg-soft-peach',
    accentColor: '#C2410C',
    badgeBg: '#F4C7B3',
    icon: (
      <svg viewBox="0 0 64 64" className="category-svg" aria-hidden="true">
        {/* Three friendly children SVG figures */}
        {/* Center Child */}
        <circle cx="32" cy="23" r="7" fill="#FFF9ED" stroke="#174B35" strokeWidth="2.4" />
        <path d="M24 49 C24 37 40 37 40 49 Z" fill="#72B95A" stroke="#174B35" strokeWidth="2.4" />
        {/* Left Child */}
        <circle cx="16" cy="27" r="6" fill="#FFF9ED" stroke="#174B35" strokeWidth="2.2" />
        <path d="M9 51 C9 41 23 41 23 51 Z" fill="#F6D65B" stroke="#174B35" strokeWidth="2.2" />
        {/* Right Child */}
        <circle cx="48" cy="27" r="6" fill="#FFF9ED" stroke="#174B35" strokeWidth="2.2" />
        <path d="M41 51 C41 41 55 41 55 51 Z" fill="#E9E3F5" stroke="#174B35" strokeWidth="2.2" />
        {/* Holding hands lines */}
        <path d="M19 45 L26 43 M38 43 L45 45" stroke="#174B35" strokeWidth="2.4" strokeLinecap="round" />
        {/* Kindness Heart above */}
        <path d="M32 12 C30 8 26 8 26 11 C26 14 32 18 32 18 C32 18 38 14 38 11 C38 8 34 8 32 12 Z" fill="#E11D48" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Art',
    description: 'Drawing, painting, colouring and expressing ideas through colour and shape.',
    theme: 'lavender',
    bgClass: 'bg-soft-lavender',
    accentColor: '#6D28D9',
    badgeBg: '#D9CFF0',
    icon: (
      <svg viewBox="0 0 64 64" className="category-svg" aria-hidden="true">
        {/* Paint palette and brush */}
        <path
          d="M12 36 C10 23 23 11 38 11 C49 11 55 17 55 27 C55 35 47 37 47 43 C47 49 37 53 27 51 C17 49 12 44 12 36 Z"
          fill="#FFFFFF"
          stroke="#174B35"
          strokeWidth="2.6"
        />
        {/* Thumb hole */}
        <circle cx="41" cy="41" r="3.5" fill="#E9E3F5" stroke="#174B35" strokeWidth="1.8" />
        {/* Paint spots */}
        <circle cx="21" cy="22" r="4" fill="#EF4444" />
        <circle cx="34" cy="18" r="4" fill="#F6D65B" />
        <circle cx="45" cy="24" r="4" fill="#72B95A" />
        <circle cx="23" cy="34" r="4" fill="#3B82F6" />
        {/* Artist Paintbrush */}
        <path d="M14 55 L35 34 L39 38 L18 59 Z" fill="#E8B87D" stroke="#174B35" strokeWidth="2" />
        <path d="M35 34 C37 32 43 28 45 28 C45 28 41 34 39 38 Z" fill="#72B95A" stroke="#174B35" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Craft',
    description: 'Cutting, folding, pasting and building, developing creativity and fine motor skills.',
    theme: 'green',
    bgClass: 'bg-soft-green',
    accentColor: '#15803D',
    badgeBg: '#D8ECCF',
    icon: (
      <svg viewBox="0 0 64 64" className="category-svg" aria-hidden="true">
        {/* Scissors and folded paper craft */}
        {/* Colored Craft Paper Sheets */}
        <rect x="26" y="8" width="26" height="32" rx="3" fill="#FEF3C7" stroke="#174B35" strokeWidth="2.2" transform="rotate(12 39 24)" />
        <rect x="22" y="12" width="26" height="32" rx="3" fill="#FFFFFF" stroke="#174B35" strokeWidth="2.2" transform="rotate(-6 35 28)" />
        {/* Folded Paper Triangle Corner */}
        <polygon points="22,12 32,12 22,22" fill="#72B95A" stroke="#174B35" strokeWidth="1.8" />
        {/* Safety Scissors */}
        <circle cx="16" cy="48" r="6" stroke="#174B35" strokeWidth="2.5" fill="#F6D65B" />
        <circle cx="30" cy="52" r="6" stroke="#174B35" strokeWidth="2.5" fill="#F6D65B" />
        <path d="M20 44 L44 18" stroke="#174B35" strokeWidth="3" strokeLinecap="round" />
        <path d="M26 46 L40 28" stroke="#174B35" strokeWidth="3" strokeLinecap="round" />
        <circle cx="28" cy="38" r="2" fill="#174B35" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Games',
    description: 'Playground and park games, strength, balance, teamwork and fair play.',
    theme: 'cream',
    bgClass: 'bg-soft-cream',
    accentColor: '#064B25',
    badgeBg: '#FCECC4',
    icon: (
      <svg viewBox="0 0 64 64" className="category-svg" aria-hidden="true">
        {/* Ball and dynamic movement lines */}
        <circle cx="28" cy="34" r="18" fill="#F6D65B" stroke="#174B35" strokeWidth="2.8" />
        {/* Playful Ball Seams */}
        <path d="M14 26 C22 29 34 29 42 26" stroke="#174B35" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M14 42 C22 39 34 39 42 42" stroke="#174B35" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M28 16 V52" stroke="#174B35" strokeWidth="2" strokeLinecap="round" />
        {/* Motion curves */}
        <path d="M47 18 C57 26 57 44 47 52" stroke="#72B95A" strokeWidth="2.8" strokeDasharray="3.5 3.5" fill="none" strokeLinecap="round" />
        <path d="M52 24 C60 30 60 40 52 46" stroke="#174B35" strokeWidth="2" strokeDasharray="3 3" fill="none" strokeLinecap="round" />
        {/* Energy Spark */}
        <polygon points="12,12 14,17 19,17 15,20 17,25 12,22 7,25 9,20 5,17 10,17" fill="#72B95A" />
      </svg>
    ),
  },
  {
    number: '07',
    title: 'Library',
    description: 'Picture books, stories, thinking skills and developing a love of reading.',
    theme: 'peach',
    bgClass: 'bg-soft-peach',
    accentColor: '#C2410C',
    badgeBg: '#F4C7B3',
    icon: (
      <svg viewBox="0 0 64 64" className="category-svg" aria-hidden="true">
        {/* Stacked books with bookmark */}
        {/* Book 1 - Bottom */}
        <rect x="8" y="44" width="46" height="11" rx="2.5" fill="#FFFFFF" stroke="#174B35" strokeWidth="2.4" />
        <line x1="12" y1="49.5" x2="48" y2="49.5" stroke="#F4C7B3" strokeWidth="2" strokeLinecap="round" />
        {/* Book 2 - Middle */}
        <rect x="13" y="31" width="42" height="11" rx="2.5" fill="#72B95A" stroke="#174B35" strokeWidth="2.4" />
        <line x1="17" y1="36.5" x2="49" y2="36.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        {/* Book 3 - Top */}
        <rect x="10" y="18" width="44" height="11" rx="2.5" fill="#FEF3C7" stroke="#174B35" strokeWidth="2.4" />
        <line x1="14" y1="23.5" x2="48" y2="23.5" stroke="#F6D65B" strokeWidth="2" strokeLinecap="round" />
        {/* Trailing Bookmark */}
        <path d="M22 18 V38 L26 34 L30 38 V18" fill="#EF4444" stroke="#174B35" strokeWidth="1.5" />
        {/* Story sparkle */}
        <polygon points="48,8 50,13 55,13 51,16 53,21 48,18 43,21 45,16 41,13 46,13" fill="#F6D65B" />
      </svg>
    ),
  },
  {
    number: '08',
    title: 'Puzzles',
    description: 'Focus, problem-solving and completing tasks.',
    theme: 'mint',
    bgClass: 'bg-soft-mint',
    accentColor: '#2D754B',
    badgeBg: '#D1EAD0',
    icon: (
      <svg viewBox="0 0 64 64" className="category-svg" aria-hidden="true">
        {/* Interlocking Puzzle Pieces */}
        {/* Piece 1 - Top Left */}
        <path
          d="M10 10 H24 C24 13 27 15 30 15 C33 15 36 13 36 10 H32 V24 C29 24 27 27 27 30 C27 33 29 36 32 36 V32 H10 Z"
          fill="#FFFFFF"
          stroke="#174B35"
          strokeWidth="2.4"
        />
        {/* Piece 2 - Top Right */}
        <path
          d="M32 10 H54 V32 H40 C40 29 37 27 34 27 C31 27 28 29 28 32 H32 V10"
          fill="#FDE68A"
          stroke="#174B35"
          strokeWidth="2.4"
        />
        {/* Piece 3 - Bottom Left */}
        <path
          d="M10 32 H32 V54 H10 V32"
          fill="#F4C7B3"
          stroke="#174B35"
          strokeWidth="2.4"
        />
        {/* Piece 4 - Bottom Right */}
        <path
          d="M32 32 H54 V54 H32 V32"
          fill="#D1EAD0"
          stroke="#174B35"
          strokeWidth="2.4"
        />
        {/* Focus Spark */}
        <circle cx="32" cy="32" r="3" fill="#174B35" />
      </svg>
    ),
  },
  {
    number: '09',
    title: 'Events and Celebrations',
    description: 'Special days and celebrations throughout the year.',
    theme: 'yellow',
    bgClass: 'bg-soft-yellow',
    accentColor: '#B45309',
    badgeBg: '#FDE68A',
    icon: (
      <svg viewBox="0 0 64 64" className="category-svg" aria-hidden="true">
        {/* Party flags, stars and celebration confetti */}
        {/* Bunting Garland */}
        <path d="M6 18 Q32 30 58 18" stroke="#174B35" strokeWidth="2.4" fill="none" />
        {/* Party Pennant Flags */}
        <polygon points="12,21 21,24 16,36" fill="#F6D65B" stroke="#174B35" strokeWidth="1.8" />
        <polygon points="23,25 32,26 27,39" fill="#72B95A" stroke="#174B35" strokeWidth="1.8" />
        <polygon points="34,26 43,25 39,39" fill="#EF4444" stroke="#174B35" strokeWidth="1.8" />
        <polygon points="45,24 54,21 50,36" fill="#818CF8" stroke="#174B35" strokeWidth="1.8" />
        {/* Celebration Stars & Confetti */}
        <polygon points="32,4 34,9 39,9 35,12 37,17 32,14 27,17 29,12 25,9 30,9" fill="#F6D65B" />
        <circle cx="16" cy="10" r="2.5" fill="#72B95A" />
        <circle cx="48" cy="11" r="2.5" fill="#EF4444" />
        <circle cx="20" cy="46" r="3" fill="#818CF8" />
        <circle cx="44" cy="47" r="3" fill="#F6D65B" />
        {/* Streamer Swirl */}
        <path d="M28 47 Q32 52 36 47 T44 51" stroke="#72B95A" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Learning() {
  return (
    <div className="page-learning">
      <FloatingLeaves />

      {/* ============================================================== */}
      {/* 1. LEARNING HERO SECTION (Large Expressive Typography)         */}
      {/* ============================================================== */}
      <section className="learning-hero" aria-label="Learning Overview">
        <div className="container learning-hero-container">
          {/* Left Text Column */}
          <div className="learning-hero-text">
            <PillBadge text="DISCOVER • EXPLORE • GROW" className="learning-eyebrow" />

            <div className="learning-heading-wrap">
              <DoodleRays className="learning-hero-rays" />
              <h1 className="learning-hero-title">
                Little minds.<br />
                <span className="heading-highlight">
                  Big discoveries.
                  <DoodleUnderline className="learning-hero-underline" />
                </span>
              </h1>
            </div>

            <p className="learning-hero-desc">
              Every day is a new opportunity to explore, create, learn and grow. At Rubber Hills, children discover the joy of learning through meaningful everyday experiences.
            </p>

            <div className="learning-hero-actions">
              <a href="#learning-categories" className="btn-primary-green">
                <span>Explore 9 Learning Areas</span>
                <span className="btn-arrow-circle">
                  <ArrowRight size={17} />
                </span>
              </a>
              <a href="#learning-approach" className="btn-outline-green">
                <span>Our Approach</span>
              </a>
            </div>
          </div>

          {/* Right Hero Showcase – 3-Photo Joyful Discovery Gallery */}
          <div className="learning-hero-visual">
            <LearningHeroGallery />
          </div>
        </div>

        {/* Hero Scroll Indicator */}
        <div className="hero-scroll-wrapper">
          <a href="#learning-approach" className="hero-scroll-link" aria-label="Scroll to Learning Philosophy">
            <span className="mouse-capsule">
              <span className="mouse-dot" />
            </span>
            <span className="scroll-label">Scroll to explore</span>
            <ChevronDown size={16} className="scroll-arrow" />
          </a>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. LEARNING APPROACH INTRODUCTION (Philosophy & 3 Principles)  */}
      {/* ============================================================== */}
      <section id="learning-approach" className="learning-approach-section">
        <div className="container">
          <div className="approach-header">
            <PillBadge text="OUR PHILOSOPHY" className="approach-pill" />
            <h2 className="approach-title">Learning is an adventure.</h2>
          </div>

          {/* Highlighted Rounded Panel with Exact Philosophy from Old Website */}
          <div className="philosophy-highlight-panel">
            <div className="quote-mark-icon" aria-hidden="true">“</div>
            <p className="philosophy-text">
              Every day mixes play, stories, movement and quiet time, so children build skills without feeling hurried.
            </p>
            <div className="philosophy-signature">
              <span className="signature-dot" />
              <span>Rubber Hills Kindergarten Learning Philosophy</span>
            </div>
          </div>

          {/* Three Visual Principles */}
          <div className="principles-grid">
            {PRINCIPLES.map((item) => (
              <div key={item.id} className="principle-card">
                <div
                  className="principle-icon-wrapper"
                  style={{ backgroundColor: item.badgeColor }}
                >
                  {item.icon}
                </div>
                <h3 className="principle-title" style={{ color: item.accentColor }}>
                  {item.title}
                </h3>
                <p className="principle-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. NINE LEARNING CATEGORIES (Responsive 3-Column Grid)        */}
      {/* ============================================================== */}
      <section id="learning-categories" className="categories-section">
        <div className="container">
          <div className="categories-header">
            <PillBadge text="COMPREHENSIVE CURRICULUM" className="categories-pill" />
            <h2 className="categories-title">Nine Pillars of Early Discovery</h2>
            <p className="categories-subtitle">
              Every learning category is given dedicated focus, creative materials, and caring guidance.
            </p>
          </div>

          {/* Responsive 3-Column Grid with Alternating Pastel Themes */}
          <div className="categories-grid">
            {LEARNING_CATEGORIES.map((cat) => (
              <article
                key={cat.number}
                className={`category-card ${cat.bgClass}`}
                style={{ '--cat-accent': cat.accentColor }}
              >
                {/* Top Row: Number Badge and Decorative Floating Dot */}
                <div className="card-top-row">
                  <span
                    className="category-number-badge"
                    style={{ backgroundColor: cat.badgeBg, color: cat.accentColor }}
                  >
                    {cat.number}
                  </span>
                  <div className="card-decor-dots" aria-hidden="true">
                    <span className="dot dot-sm" />
                    <span className="dot dot-lg" />
                  </div>
                </div>

                {/* Central Icon Stage */}
                <div className="category-icon-stage">
                  <div className="icon-shadow-ring" />
                  {cat.icon}
                </div>

                {/* Card Text Content */}
                <div className="category-content">
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-desc">{cat.description}</p>
                </div>

                {/* Bottom Organic Corner Accent Shape */}
                <div className="card-corner-shape" aria-hidden="true">
                  <svg viewBox="0 0 100 100" className="corner-shape-svg">
                    <path
                      d="M0,100 C40,100 100,40 100,0 L100,100 Z"
                      fill="currentColor"
                      opacity="0.08"
                    />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. CLOSING SECTION (Forest Green Panel with Classes CTA)       */}
      {/* ============================================================== */}
      <section className="learning-closing-section">
        <div className="container">
          <div className="closing-panel">
            {/* Background Botanical Doodle Rays */}
            <div className="closing-bg-accents" aria-hidden="true">
              <div className="closing-star star-left">★</div>
              <div className="closing-star star-right">✦</div>
              <div className="closing-leaf leaf-left">🌿</div>
              <div className="closing-leaf leaf-right">🍃</div>
            </div>

            <div className="closing-content">
              <PillBadge text="A LIFELONG FOUNDATION" className="closing-pill" />

              <h2 className="closing-title">
                Every little discovery matters.
              </h2>

              <p className="closing-subtitle">
                At Rubber Hills, every experience helps children build confidence, curiosity and a lifelong love of learning.
              </p>

              <div className="closing-cta-wrap">
                <Link to="/classes" className="btn-classes-cta">
                  <span>Explore Our Classes</span>
                  <span className="btn-arrow-circle">
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
