import React from 'react';
import { Heart } from 'lucide-react';
import PillBadge from '../../components/Shared/PillBadge';
import DoodleUnderline from '../../components/Shared/DoodleUnderline';
import DoodleRays from '../../components/Shared/DoodleRays';
import FloatingLeaves from '../../components/Shared/FloatingLeaves';
import './TimeTable.css';

export default function TimeTable() {
  const schedule = [
    {
      time: '09:05 AM',
      title: 'School Bell',
      desc: 'A cheerful start to the day!',
      icon: '/assets/timeline_bell.png',
    },
    {
      time: '09:10 AM',
      title: 'Morning Assembly',
      desc: 'Songs, rhymes and good values.',
      icon: '/assets/timeline_assembly.png',
    },
    {
      time: '09:35 AM',
      title: 'Attendance',
      desc: "We're here to learn!",
      icon: '/assets/timeline_attendance.png',
    },
    {
      time: '09:45 AM',
      title: 'Learning Begins',
      desc: 'Explore, discover and grow.',
      icon: '/assets/timeline_learning.png',
    },
    {
      time: '11:15 AM',
      title: 'Snack Break',
      desc: 'Healthy bites for happy kids.',
      icon: '/assets/timeline_snack.png',
    },
    {
      time: '01:00 PM',
      title: 'Lunch Break',
      desc: 'A nourishing meal time.',
      icon: '/assets/timeline_lunch.png',
    },
    {
      time: '03:15 PM',
      title: 'Wind-up Begins',
      desc: 'A day well spent!',
      icon: '/assets/timeline_windup.png',
    },
  ];

  return (
    <div className="page-timetable">
      <FloatingLeaves />

      <section className="timetable-hero">
        <div className="container">
          {/* Header */}
          <div className="timetable-header">
            <PillBadge text="A Day at Rubber Hills" className="timetable-pill" />

            <h1 className="timetable-heading">
              A little routine.<br />
              <span className="heading-highlight">
                A lot of wonderful moments.
                <DoodleUnderline className="timetable-underline" />
              </span>
            </h1>

            <p className="timetable-subtitle">
              Learning, playing and growing — all in a happy day!
            </p>
          </div>

          {/* Curved Timeline Track */}
          <div className="timeline-curved-wrapper">
            <div className="timeline-items-grid">
              {schedule.map((item, idx) => (
                <div key={idx} className="timeline-node">
                  {/* Time Badge */}
                  <div className="timeline-time-badge">{item.time}</div>

                  {/* Circular Illustration Bubble */}
                  <div className="timeline-bubble">
                    <img src={item.icon} alt={item.title} className="bubble-img" />
                  </div>

                  {/* Details */}
                  <div className="timeline-card-info">
                    <h3 className="node-title">{item.title}</h3>
                    <p className="node-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Scene: Kids + Quote + Books */}
          <div className="timetable-bottom-scene">
            <div className="scene-kids">
              <img
                src="/assets/timeline_kids.png"
                alt="Happy students waving"
                className="scene-kids-img animate-float"
              />
            </div>

            <div className="scene-quote-center">
              <DoodleRays flip className="quote-rays" />
              <h2 className="quote-text">
                Little moments. Big memories.
              </h2>
              <Heart size={28} className="quote-heart" />
            </div>

            <div className="scene-books">
              <img
                src="/assets/timeline_books.png"
                alt="Colorful storybooks"
                className="scene-books-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
