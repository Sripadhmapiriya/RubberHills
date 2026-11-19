import React from 'react';
import './HeroBackgroundHills.css';

/**
 * HeroBackgroundHills - Shared vector background featuring layered, organic
 * light-green rolling hills (#EEF6DE, #DBEBA2, #E8F4D2) matching the Rubber Hills
 * kindergarten nature aesthetic across all page hero sections.
 */
export default function HeroBackgroundHills({ className = '', variant = 'std' }) {
  const topGradId = `hero-hill-grad-top-${variant}`;
  const lowerGradId = `hero-hill-grad-lower-${variant}`;
  const rightGradId = `hero-hill-grad-right-${variant}`;

  return (
    <div className={`hero-bg-hills-wrap ${className}`} aria-hidden="true">
      <svg
        className="hero-bg-hills-svg"
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={topGradId} x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#EEF6DE" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#E5F2D2" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#DBEBA2" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id={lowerGradId} x1="0%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#DBEBA2" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#CDE38E" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id={rightGradId} x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#E8F4D2" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#D7EBA4" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* 1. Connecting Meadow Arc across Bottom */}
        <path
          d="M 0,440 C 200,420 450,430 700,470 C 850,490 1100,480 1440,500 L 1440,520 L 0,520 Z"
          fill="#EBF4D6"
          opacity="0.75"
        />

        {/* 2. Upper Pale Soft Sage/Mint Hill (Layer 1) - reaches behind heading & badge */}
        <path
          d="M 0,110 C 60,120 180,180 280,240 C 370,300 420,380 430,440 C 440,480 430,510 420,520 L 0,520 Z"
          fill={`url(#${topGradId})`}
        />

        {/* 3. Lower Soft Lime Hill (Layer 2) - accentuates bottom-left under lead & CTA */}
        <path
          d="M 0,290 C 50,310 120,370 160,430 C 200,480 230,510 270,520 L 0,520 Z"
          fill={`url(#${lowerGradId})`}
        />

        {/* 4. Right Smooth Hill Mound beside visual/photo */}
        <path
          d="M 410,520 C 440,420 510,330 610,320 C 710,310 780,410 820,520 Z"
          fill={`url(#${rightGradId})`}
        />
      </svg>
    </div>
  );
}
