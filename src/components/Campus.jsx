import React, { useState, useEffect, useRef } from 'react';

const campusItems = [
  {
    image: '/assets/campus-walkway.jpg',
    title: 'Garden Walkway',
    subtitle: 'Lush path beside classrooms',
    alt: 'Stone walkway with grass lines beside the yellow school building',
  },
  {
    image: '/assets/campus-court.jpg',
    title: 'Play Court',
    subtitle: 'Under the rubber trees',
    alt: 'White-walled play court with tall rubber trees behind it',
  },
  {
    image: '/assets/campus-entrance.jpg',
    title: 'Main Building & Entrance',
    subtitle: 'School gate & driveway',
    alt: 'Yellow school building seen from the gate with a paved driveway',
  },
  {
    image: '/assets/campus-ramp.jpg',
    title: 'Classroom Ramp',
    subtitle: 'Gentle, accessible entry',
    alt: 'Paved ramp leading down to the school entrance',
  },
  {
    image: '/assets/campus-new-1.jpg',
    title: 'Activity Hall',
    subtitle: 'Spacious indoor learning space',
    alt: 'Indoor activity and learning hall for children',
  },
  {
    image: '/assets/campus-new-2.jpg',
    title: 'Bright Classrooms',
    subtitle: 'Airy & child-friendly environment',
    alt: 'Classroom learning environment',
  },
  {
    image: '/assets/campus-new-3.jpg',
    title: 'Creative Play Zone',
    subtitle: 'Engaging games & social play',
    alt: 'Creative play and activity area',
  },
  {
    image: '/assets/campus-new-4.jpg',
    title: 'Outdoor Play Court',
    subtitle: 'Fresh air under green trees',
    alt: 'Outdoor play court surrounded by trees',
  },
  {
    image: '/assets/campus-new-5.jpg',
    title: 'Green Hill Campus',
    subtitle: 'Nestled in peaceful nature',
    alt: 'Rubber Hills Kindergarten campus grounds',
  },
];

export default function Campus() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const total = campusItems.length;

  // Auto-advance every 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleCardClick = (diff, index) => {
    if (diff !== 0) {
      setCurrentIndex(index);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    touchStartX.current = null;
  };

  // Calculates circular distance between index and active slide
  const getDiff = (index) => {
    let diff = (index - currentIndex + total) % total;
    if (diff > total / 2) diff -= total;
    return diff;
  };

  return (
    <section id="campus" className="fade-in-section campus-section">
      <h2>Our campus</h2>
      <p className="lead">
        Bright classrooms, a garden walkway and a play court, all surrounded by rubber trees.
      </p>

      {/* 3D Coverflow Container */}
      <div
        className="coverflow-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-roledescription="carousel"
        aria-label="Our Campus Gallery Carousel"
      >
        <div className="coverflow-stage">
          {campusItems.map((item, index) => {
            const diff = getDiff(index);
            const isVisible = Math.abs(diff) <= 3;

            if (!isVisible) return null;

            const isActive = diff === 0;

            return (
              <div
                key={index}
                className={`coverflow-card ${isActive ? 'active' : ''} ${
                  diff < 0 ? 'prev-card' : diff > 0 ? 'next-card' : ''
                }`}
                style={{
                  '--diff': diff,
                  '--abs-diff': Math.abs(diff),
                }}
                onClick={() => handleCardClick(diff, index)}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${total}: ${item.title}`}
              >
                <div className="coverflow-img-wrapper">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading={Math.abs(diff) <= 1 ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="coverflow-caption">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Controls */}
        <div className="coverflow-controls">
          <button
            type="button"
            className="coverflow-btn prev"
            onClick={handlePrev}
            aria-label="Previous campus photo"
            title="Previous photo"
          >
            ‹
          </button>

          <div className="coverflow-dots" role="tablist" aria-label="Campus slides">
            {campusItems.map((item, index) => (
              <button
                key={index}
                type="button"
                className={`coverflow-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}: ${item.title}`}
                aria-selected={index === currentIndex}
                role="tab"
              />
            ))}
          </div>

          <button
            type="button"
            className="coverflow-btn next"
            onClick={handleNext}
            aria-label="Next campus photo"
            title="Next photo"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
