import React from 'react';
import { LEARNING_HERO_IMAGES } from '../../config/images';
import './LearningHeroGallery.css';

/**
 * LearningHeroGallery – "Joyful Discovery Showcase"
 * An organic multi-photo collage for the Learning page hero section featuring
 * 3 authentic school photographs framed in storybook arches, floating washi tape,
 * orbit lines, and learning area pills.
 */
export default function LearningHeroGallery() {
  const { main, creative, activity } = LEARNING_HERO_IMAGES;

  return (
    <div className="lhg-showcase">
      {/* Ambient Glow Aura */}
      <div className="lhg-glow" aria-hidden="true" />

      {/* Playful Dashed Orbit Path */}
      <svg className="lhg-orbit-svg" viewBox="0 0 580 480" fill="none" aria-hidden="true">
        <path
          d="M 40,80 C 120,10 420,-10 520,120 C 580,200 560,340 460,420 C 340,490 120,440 60,380"
          stroke="#72B95A"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity="0.45"
        />
        <circle cx="280" cy="25" r="4" fill="#F6D65B" />
        <circle cx="530" cy="240" r="5" fill="#72B95A" opacity="0.7" />
        <circle cx="100" cy="420" r="4" fill="#F87171" opacity="0.6" />
      </svg>

      {/* Card 1: Storybook Arch – Early Literacy & Reading (Left) */}
      <figure className="lhg-frame frame-main">
        <div className="lhg-photo-box">
          <img
            src={main.src}
            alt={main.alt || 'Kindergarten student engaged in reading'}
            className="lhg-photo"
            loading="eager"
            draggable={false}
          />
        </div>
        <div className="lhg-badge badge-bottom-center">
          <span className="badge-dot dot-mint" aria-hidden="true" />
          <span className="badge-text">Alphabet & Phonics</span>
        </div>
      </figure>

      {/* Card 2: Creative Portrait – Hands-on Art & Expression (Top-Right) */}
      <figure className="lhg-frame frame-creative">
        <span className="lhg-washi-tape" aria-hidden="true" />
        <div className="lhg-photo-box">
          <img
            src={creative.src}
            alt={creative.alt || 'Child building and creating with joy'}
            className="lhg-photo"
            loading="eager"
            draggable={false}
          />
        </div>
        <div className="lhg-badge badge-top-right">
          <span className="badge-dot dot-peach" aria-hidden="true" />
          <span className="badge-text">Art & Expression</span>
        </div>
      </figure>

      {/* Card 3: Active Discovery – Numbers & Spatial Play (Bottom-Right) */}
      <figure className="lhg-frame frame-activity">
        <div className="lhg-photo-box">
          <img
            src={activity.src}
            alt={activity.alt || 'Active kindergarten classroom discovery'}
            className="lhg-photo"
            loading="eager"
            draggable={false}
          />
        </div>
        <div className="lhg-badge badge-bottom-right">
          <span className="badge-dot dot-yellow" aria-hidden="true" />
          <span className="badge-text">Shapes & Numbers</span>
        </div>
      </figure>

      {/* Center Harmonizing Discovery Pill */}
      <div className="lhg-center-pill">
        <span className="center-pill-star" aria-hidden="true">✦</span>
        <span>Joyful Discovery</span>
      </div>

      {/* Whimsical Accents */}
      <div className="lhg-doodle-rays" aria-hidden="true">
        <svg viewBox="0 0 50 50" width="42" height="42" fill="none">
          <path
            d="M 6,36 L 2,40 M 12,28 L 6,32 M 20,22 L 14,26 M 28,18 L 24,24 M 36,16 L 34,22"
            stroke="#F6D65B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="lhg-doodle-sparkle" aria-hidden="true">✨</div>
    </div>
  );
}
