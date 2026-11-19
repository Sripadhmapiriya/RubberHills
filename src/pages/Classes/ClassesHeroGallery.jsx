import React from 'react';
import { Heart } from 'lucide-react';
import DoodleRays from '../../components/Shared/DoodleRays';
import { CLASSES_HERO_IMAGES } from '../../config/images';
import './ClassesHeroGallery.css';

/**
 * Polaroid-style photo collage for the top-right of the Classes page:
 * three tilted, overlapping instant-photo cards with handwritten captions.
 * Photos come from CLASSES_HERO_IMAGES in src/config/images.js.
 */
function Photo({ img }) {
  return (
    <img
      src={img.src}
      alt={img.alt}
      className="chg-img"
      loading="eager"
      draggable={false}
    />
  );
}

export default function ClassesHeroGallery() {
  const { main, second, third } = CLASSES_HERO_IMAGES;

  return (
    <div className="chg chg-polaroid">
      <DoodleRays className="chg-rays" />
      <figure className="pol-card pol-back">
        <div className="pol-photo"><Photo img={second} /></div>
        <figcaption>Little explorers</figcaption>
      </figure>
      <figure className="pol-card pol-front">
        <span className="pol-tape" aria-hidden="true" />
        <div className="pol-photo"><Photo img={main} /></div>
        <figcaption>Our happy classroom</figcaption>
      </figure>
      <figure className="pol-card pol-side">
        <div className="pol-photo"><Photo img={third} /></div>
        <figcaption>Learning with joy</figcaption>
      </figure>
      <div className="chg-badge pol-badge">
        <span className="chg-badge-icon"><Heart size={16} /></span>
        <span>Ages 2.5–6</span>
      </div>
    </div>
  );
}
