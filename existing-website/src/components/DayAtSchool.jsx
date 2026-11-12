import React from 'react';

const scheduleSlots = [
  ['9:05 am', 'School bell'],
  ['9:10 am', 'School assembly'],
  ['9:35 am', 'Attendance'],
  ['9:45 – 11:15 am', 'Starting session'],
  ['11:15 – 11:30 am', 'Snack break'],
  ['11:30 – 1:00 pm', 'Middle session'],
  ['1:00 – 1:45 pm', 'Lunch break'],
  ['1:45 – 3:15 pm', 'Ending session'],
  ['3:20 pm', 'National Anthem'],
];

export default function DayAtSchool() {
  return (
    <section id="day" className="fade-in-section">
      <h2>A day at Rubber Hills</h2>
      <p className="lead">Our timetable, Monday to Friday.</p>
      <div className="day">
        <div id="slots">
          {scheduleSlots.map(([time, activity], index) => (
            <div key={index} className="slot">
              <b>{time}</b>
              <span>{activity}</span>
            </div>
          ))}
        </div>
        <div className="wed">
          <b>Wednesday is No Book Day</b>
          Instead of books, children enjoy CCA, ECA and fun activities.
        </div>
      </div>
    </section>
  );
}

