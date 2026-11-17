import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart } from 'lucide-react';
import DoodleUnderline from '../../components/Shared/DoodleUnderline';
import DoodleRays from '../../components/Shared/DoodleRays';
import FloatingLeaves from '../../components/Shared/FloatingLeaves';
import { CLASSES_PAGE_IMAGES } from '../../config/images';
import './Classes.css';

export default function Classes() {
  const classesData = [
    {
      name: 'NURSERY',
      tagline: 'A gentle start to a lifetime of learning.',
      image: CLASSES_PAGE_IMAGES.nursery.src,
      alt: CLASSES_PAGE_IMAGES.nursery.alt,
      badgeType: 'corner',
      link: '/contact',
      btnText: 'Explore Nursery',
    },
    {
      name: 'LKG',
      tagline: 'Build skills through play and discovery.',
      image: CLASSES_PAGE_IMAGES.lkg.src,
      alt: CLASSES_PAGE_IMAGES.lkg.alt,
      badgeType: 'star',
      link: '/contact',
      btnText: 'Explore LKG',
    },
    {
      name: 'UKG',
      tagline: 'Get ready for a brighter tomorrow.',
      image: CLASSES_PAGE_IMAGES.ukg.src,
      alt: CLASSES_PAGE_IMAGES.ukg.alt,
      badgeType: 'star',
      link: '/contact',
      btnText: 'Explore UKG',
    },
  ];

  return (
    <div className="page-classes">
      <FloatingLeaves />

      <section className="classes-hero">
        <div className="container">
          {/* Header */}
          <div className="classes-header">
            <div className="header-rays-wrap">
              <DoodleRays flip className="classes-rays" />
              <h1 className="classes-heading">
                Every age has its own adventure.
              </h1>
              <DoodleRays className="classes-rays" />
            </div>

            <DoodleUnderline className="classes-underline" style={{ maxWidth: '340px', margin: '0 auto 16px' }} />

            <p className="classes-subtitle">
              Learning experiences thoughtfully designed for every stage of early childhood.
            </p>
          </div>

          {/* 3 Main Classes Cards */}
          <div className="classes-cards-grid">
            {classesData.map((cls, idx) => (
              <div key={idx} className="class-card">
                {/* Badge decoration */}
                {cls.badgeType === 'corner' && (
                  <div className="class-corner-fold" aria-hidden="true"></div>
                )}
                {cls.badgeType === 'star' && (
                  <div className="class-star-badge" aria-hidden="true">
                    <Star size={20} fill="#FFD21C" color="#FFD21C" />
                  </div>
                )}

                <div className="class-image-container">
                  <img
                    src={cls.image}
                    alt={cls.alt || `${cls.name} classroom learning`}
                    className="class-img"
                    loading="lazy"
                  />
                </div>

                <div className="class-card-body">
                  <h2 className="class-card-title">{cls.name}</h2>
                  <p className="class-card-tagline">{cls.tagline}</p>

                  <Link to={cls.link} className="btn-class-cta">
                    <span>{cls.btnText}</span>
                    <span className="btn-arrow-circle">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Wide Creche Banner Card */}
          <div className="creche-banner-card">
            <div className="creche-left-visual">
              <div className="creche-yellow-accent" aria-hidden="true"></div>
              <img
                src={CLASSES_PAGE_IMAGES.creche.src}
                alt={CLASSES_PAGE_IMAGES.creche.alt}
                className="creche-toddler-img"
                loading="lazy"
              />
            </div>

            <div className="creche-center-info">
              <div className="creche-title-row">
                <Heart size={26} className="creche-heart-icon" />
                <h2 className="creche-title">CRECHE</h2>
              </div>

              <div className="creche-age-pill">
                Age Group: 2.5 – 3 Years
              </div>

              <p className="creche-desc">
                A safe and caring space for your little one's first steps in learning.
              </p>
            </div>

            <div className="creche-right-action">
              <Link to="/contact" className="btn-primary-green btn-creche">
                <span>Explore Creche</span>
                <span className="btn-arrow-circle">
                  <ArrowRight size={17} />
                </span>
              </Link>
            </div>

            <div className="creche-train-illustration">
              <img
                src="/assets/creche_train.png"
                alt="Playful toy train"
                className="train-img animate-float"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
