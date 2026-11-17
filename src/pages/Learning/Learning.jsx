import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Palette,
  Users,
  Search,
  ArrowRight,
  Calculator,
  Activity,
} from 'lucide-react';
import DoodleUnderline from '../../components/Shared/DoodleUnderline';
import DoodleRays from '../../components/Shared/DoodleRays';
import FloatingLeaves from '../../components/Shared/FloatingLeaves';
import { LEARNING_PAGE_IMAGES } from '../../config/images';
import './Learning.css';

export default function Learning() {
  const activities = [
    {
      title: 'Language & Communication',
      desc: 'storytelling, speaking and vocabulary.',
      image: LEARNING_PAGE_IMAGES.language.src,
      alt: LEARNING_PAGE_IMAGES.language.alt,
      icon: <BookOpen size={24} />,
      link: '/contact',
    },
    {
      title: 'Early Numeracy',
      desc: 'numbers, counting and logical thinking.',
      image: LEARNING_PAGE_IMAGES.numeracy.src,
      alt: LEARNING_PAGE_IMAGES.numeracy.alt,
      icon: <Calculator size={24} />,
      link: '/contact',
    },
    {
      title: 'Creative Arts',
      desc: 'drawing, painting and crafts.',
      image: LEARNING_PAGE_IMAGES.creative.src,
      alt: LEARNING_PAGE_IMAGES.creative.alt,
      icon: <Palette size={24} />,
      link: '/contact',
    },
    {
      title: 'Social Development',
      desc: 'friendships, sharing and teamwork.',
      image: LEARNING_PAGE_IMAGES.social.src,
      alt: LEARNING_PAGE_IMAGES.social.alt,
      icon: <Users size={24} />,
      link: '/contact',
    },
    {
      title: 'Games & Physical Play',
      desc: 'active play and coordination.',
      image: LEARNING_PAGE_IMAGES.physical.src,
      alt: LEARNING_PAGE_IMAGES.physical.alt,
      icon: <Activity size={24} />,
      link: '/contact',
    },
    {
      title: 'Discovery & Exploration',
      desc: 'puzzles, library and hands-on activities.',
      image: LEARNING_PAGE_IMAGES.discovery.src,
      alt: LEARNING_PAGE_IMAGES.discovery.alt,
      icon: <Search size={24} />,
      link: '/contact',
    },
  ];

  return (
    <div className="page-learning">
      <FloatingLeaves />

      <section className="learning-hero">
        <div className="container">
          {/* Header */}
          <div className="learning-header">
            <div className="header-rays-wrap">
              <DoodleRays flip className="learning-rays" />
              <h1 className="learning-heading">
                Little hands. Curious minds.<br />
                <span className="heading-highlight">
                  Endless possibilities.
                  <DoodleUnderline className="learning-underline" />
                </span>
              </h1>
              <DoodleRays className="learning-rays" />
            </div>

            <p className="learning-subtitle">
              Every day is an opportunity to explore, create and discover something new.
            </p>
          </div>

          {/* 6 Activity Cards Grid */}
          <div className="learning-cards-grid">
            {activities.map((item, idx) => (
              <div key={idx} className="learning-card">
                <div className="card-image-box">
                  <img
                    src={item.image}
                    alt={item.alt || item.title}
                    className="learning-card-img"
                    loading="lazy"
                  />
                </div>

                <div className="card-content-box">
                  <div className="card-header-row">
                    <div className="card-icon-circle">{item.icon}</div>
                    <DoodleRays style={{ width: '24px', height: '20px' }} />
                  </div>

                  <h3 className="card-activity-title">{item.title}</h3>
                  <p className="card-activity-desc">{item.desc}</p>

                  <Link to={item.link} className="card-action-circle" aria-label={`Learn more about ${item.title}`}>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
