import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ORIGINAL_IMAGES } from '../../config/images';
import './CampusCarousel.css';

// Authentic School Photographs from central image registry
export const CAMPUS_SLIDES = [
  {
    id: 'campus-building',
    src: ORIGINAL_IMAGES.campusBuilding.src,
    title: 'Main Campus Building',
    subtitle: 'Modern Yellow Facade & Architecture',
    alt: ORIGINAL_IMAGES.campusBuilding.alt,
    objectPosition: 'center 20%',
  },
  {
    id: 'campus-entrance',
    src: ORIGINAL_IMAGES.campusEntrance.src,
    title: 'Main Campus Entrance',
    subtitle: 'RH Group & Kindergarten Facade',
    alt: ORIGINAL_IMAGES.campusEntrance.alt,
    objectPosition: 'center 28%',
  },
  {
    id: 'campus-walkway',
    src: ORIGINAL_IMAGES.campusWalkway.src,
    title: 'Garden Walkway',
    subtitle: 'Paved Pathway & Glass Reflections',
    alt: ORIGINAL_IMAGES.campusWalkway.alt,
    objectPosition: 'center 35%',
  },
  {
    id: 'classroom-smart-learning',
    src: ORIGINAL_IMAGES.classroomSmartLearning.src,
    title: 'Smart Learning Display',
    subtitle: 'Interactive Touchscreen Classroom',
    alt: ORIGINAL_IMAGES.classroomSmartLearning.alt,
    objectPosition: 'center center',
  },
  {
    id: 'classroom-reading',
    src: ORIGINAL_IMAGES.classroomReading.src,
    title: 'Reading & Literacy Corner',
    subtitle: 'Early Book Discovery & Tables',
    alt: ORIGINAL_IMAGES.classroomReading.alt,
    objectPosition: 'center 35%',
  },
  {
    id: 'classroom-activity',
    src: ORIGINAL_IMAGES.classroomActivity.src,
    title: 'Active Learning Classroom',
    subtitle: 'Spacious Child-Centric Environment',
    alt: ORIGINAL_IMAGES.classroomActivity.alt,
    objectPosition: 'center center',
  },
  {
    id: 'playroom-indoor',
    src: ORIGINAL_IMAGES.playroomIndoor.src,
    title: 'Indoor Play Arena',
    subtitle: 'Toddler Slide & Basketball Play',
    alt: ORIGINAL_IMAGES.playroomIndoor.alt,
    objectPosition: 'center 35%',
  },
  {
    id: 'creche-swing',
    src: ORIGINAL_IMAGES.crecheSwing.src,
    title: 'Creche Play Area',
    subtitle: 'Gentle Baby Swing & Alphabet Wall',
    alt: ORIGINAL_IMAGES.crecheSwing.alt,
    objectPosition: 'center 25%',
  },
  {
    id: 'campus-court',
    src: ORIGINAL_IMAGES.campusCourt.src,
    title: 'Outdoor Play Court',
    subtitle: 'Terraced Natural Arena & Trees',
    alt: ORIGINAL_IMAGES.campusCourt.alt,
    objectPosition: 'center center',
  },
];

export default function CampusCarousel({ intervalMs = 3000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(null);
  const totalSlides = CAMPUS_SLIDES.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (idx) => {
    setActiveIndex(idx);
  };

  // 1. Automatic Rotation (always on; only pauses while the browser tab is hidden).
  // Re-runs whenever activeIndex changes so a manual click/swipe restarts the countdown.
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      nextSlide();
    }, intervalMs);

    return () => clearTimeout(timer);
  }, [isPaused, nextSlide, intervalMs, activeIndex]);

  // 2. Pause when browser tab is inactive
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // 3. Touch Swipe Handling for Mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (diff > 45) {
      prevSlide();
    } else if (diff < -45) {
      nextSlide();
    }
    touchStartXRef.current = null;
  };

  // 4. Keyboard Arrow Navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  };

  // Compute circular offset for 3D positioning
  const getOffset = (idx) => {
    let diff = idx - activeIndex;
    while (diff > totalSlides / 2) diff -= totalSlides;
    while (diff < -totalSlides / 2) diff += totalSlides;
    return diff;
  };

  return (
    <div
      className="campus-carousel-wrapper"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Campus Photographs Carousel"
    >
      {/* Botanical Background Accents matching Design Reference */}
      <div className="showcase-bg-decor" aria-hidden="true">
        {/* Palm Frond Leaves on Top Left */}
        <svg className="decor-palm-frond" viewBox="0 0 240 180" fill="none">
          <path
            d="M 10 180 C 40 130 90 70 210 20"
            stroke="#4A8432"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path d="M 50 148 Q 20 120 10 100" stroke="#5EA43E" strokeWidth="2" strokeLinecap="round" />
          <path d="M 70 132 Q 40 98 25 76" stroke="#68B244" strokeWidth="2" strokeLinecap="round" />
          <path d="M 95 112 Q 60 74 42 50" stroke="#76B82A" strokeWidth="2" strokeLinecap="round" />
          <path d="M 120 92 Q 88 54 68 28" stroke="#84C634" strokeWidth="2" strokeLinecap="round" />
          <path d="M 148 70 Q 120 34 100 12" stroke="#68B244" strokeWidth="2" strokeLinecap="round" />
          <path d="M 175 48 Q 155 20 140 2" stroke="#5EA43E" strokeWidth="2" strokeLinecap="round" />
          <path d="M 80 140 Q 115 155 145 162" stroke="#5EA43E" strokeWidth="2" strokeLinecap="round" />
          <path d="M 105 120 Q 140 134 175 140" stroke="#68B244" strokeWidth="2" strokeLinecap="round" />
          <path d="M 130 100 Q 170 112 205 116" stroke="#76B82A" strokeWidth="2" strokeLinecap="round" />
          <path d="M 160 76 Q 195 86 230 88" stroke="#84C634" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Squiggle Wavy Accents */}
        <svg className="decor-squiggles" viewBox="0 0 90 28" fill="none">
          <path
            d="M 4 14 Q 18 4 32 14 T 60 14 T 86 14"
            stroke="#84B85E"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.75"
          />
        </svg>

        {/* Editorial Handwritten Doodle on Right */}
        <div className="decor-handwritten-note">
          <span className="handwritten-text">More than just a campus</span>
          <svg className="handwritten-arrow" viewBox="0 0 46 32" fill="none">
            <path
              d="M 6 8 C 18 20 32 22 40 14 M 40 14 L 34 12 M 40 14 L 38 20"
              stroke="#064B25"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* 3D Coverflow Stage */}
      <div className="showcase-stage">
        {CAMPUS_SLIDES.map((slide, index) => {
          const offset = getOffset(index);
          const isActive = offset === 0;
          const isLeft = offset < 0;
          const isRight = offset > 0;
          const isVisible = Math.abs(offset) <= 2;

          let cardClass = 'showcase-card';
          if (isActive) cardClass += ' is-active';
          else if (offset === -1) cardClass += ' is-prev';
          else if (offset === 1) cardClass += ' is-next';
          else if (offset === -2) cardClass += ' is-far-prev';
          else if (offset === 2) cardClass += ' is-far-next';
          else cardClass += ' is-hidden';

          return (
            <div
              key={slide.id}
              className={cardClass}
              onClick={() => {
                if (!isActive) goToSlide(index);
              }}
              style={{
                '--offset': offset,
                '--abs-offset': Math.abs(offset),
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${totalSlides}: ${slide.title}`}
              aria-hidden={!isVisible}
            >
              <div className="card-photo-wrapper">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="card-photo-img"
                  loading={isActive ? 'eager' : 'lazy'}
                  draggable={false}
                  style={{ objectPosition: slide.objectPosition || 'center center' }}
                />
              </div>

              <div className="card-caption">
                <h3 className="card-title">{slide.title}</h3>
                <p className="card-subtitle">{slide.subtitle}</p>
              </div>
            </div>
          );
        })}

        {/* Left Navigation Button */}
        <button
          type="button"
          onClick={prevSlide}
          className="carousel-nav-btn btn-prev"
          aria-label="Previous photograph"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Navigation Button */}
        <button
          type="button"
          onClick={nextSlide}
          className="carousel-nav-btn btn-next"
          aria-label="Next photograph"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="carousel-pagination" role="tablist" aria-label="Slide Selector">
        {CAMPUS_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            className={`pagination-dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
            role="tab"
            aria-selected={idx === activeIndex}
            aria-label={`Jump to ${slide.title}`}
          />
        ))}
      </div>
    </div>
  );
}
