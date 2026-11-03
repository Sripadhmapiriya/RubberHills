import React, { useState, useEffect, useRef, useCallback } from 'react';

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
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 760 : false
  );
  const touchStartX = useRef(null);
  const timerRef = useRef(null);
  const total = campusItems.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Unstoppable auto-advance every 3 seconds
  const startAutoPlay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);
  }, [total]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoPlay]);

  // Bring any clicked card directly to the front
  const handleCardClick = (index) => {
    setCurrentIndex(index);
    startAutoPlay(); // Reset timer so the user gets a full 3 seconds on the chosen image before auto-moving continues
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    startAutoPlay();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
    startAutoPlay();
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    startAutoPlay();
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

  // 3D positioning styles for smooth transition
  const getCardStyle = (diff) => {
    const stepX = isMobile ? 54 : 60; // percentage offset

    if (diff === 0) {
      return {
        transform: 'translate(-50%, -50%) scale(1) translateZ(0)',
        zIndex: 20,
        opacity: 1,
        filter: 'none',
        visibility: 'visible',
      };
    }

    if (Math.abs(diff) === 1) {
      const dir = diff > 0 ? 1 : -1;
      return {
        transform: `translate(calc(-50% + ${dir * stepX}%), -50%) scale(0.85) translateZ(-80px) rotateY(${-dir * 12}deg)`,
        zIndex: 15,
        opacity: 0.85,
        filter: 'brightness(0.88)',
        visibility: 'visible',
      };
    }

    if (Math.abs(diff) === 2) {
      const dir = diff > 0 ? 1 : -1;
      return {
        transform: `translate(calc(-50% + ${dir * (stepX * 1.8)}%), -50%) scale(0.72) translateZ(-160px) rotateY(${-dir * 18}deg)`,
        zIndex: 10,
        opacity: 0.55,
        filter: 'brightness(0.75)',
        visibility: 'visible',
      };
    }

    if (Math.abs(diff) === 3) {
      const dir = diff > 0 ? 1 : -1;
      return {
        transform: `translate(calc(-50% + ${dir * (stepX * 2.4)}%), -50%) scale(0.6) translateZ(-220px) rotateY(${-dir * 22}deg)`,
        zIndex: 5,
        opacity: 0.25,
        filter: 'brightness(0.65)',
        visibility: 'visible',
      };
    }

    // Fully hidden
    const dir = diff > 0 ? 1 : -1;
    return {
      transform: `translate(calc(-50% + ${dir * (stepX * 2.8)}%), -50%) scale(0.4)`,
      zIndex: 1,
      opacity: 0,
      pointerEvents: 'none',
      visibility: 'hidden',
    };
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
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-roledescription="carousel"
        aria-label="Our Campus Gallery Carousel"
      >
        <div className="coverflow-stage">
          {campusItems.map((item, index) => {
            const diff = getDiff(index);
            const isActive = diff === 0;
            const style = getCardStyle(diff);

            return (
              <div
                key={index}
                className={`coverflow-card ${isActive ? 'active' : ''} ${
                  diff < 0 ? 'prev-card' : diff > 0 ? 'next-card' : ''
                }`}
                style={style}
                onClick={() => handleCardClick(index)}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${total}: ${item.title}`}
                title={isActive ? item.title : `Click to bring "${item.title}" to the front`}
              >
                {/* Transparent overlay on non-active cards ensures 100% reliable click-to-front */}
                {!isActive && (
                  <button
                    type="button"
                    className="coverflow-click-overlay"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(index);
                    }}
                    aria-label={`View ${item.title}`}
                    title={`Click to bring ${item.title} to the front`}
                  />
                )}

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
