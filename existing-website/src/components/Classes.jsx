import React from 'react';

export default function Classes() {
  return (
    <section id="classes" className="fade-in-section">
      <h2>Our classes</h2>
      <p className="lead">Classes for children from 3 to 6 years.</p>
      <div className="grid">
        <div className="card c1">
          <h3>Nursery</h3>
          <p>3–4 years</p>
        </div>
        <div className="card c2">
          <h3>Lower KG</h3>
          <p>4–5 years</p>
        </div>
        <div className="card c3">
          <h3>Upper KG</h3>
          <p>5–6 years</p>
        </div>
      </div>
    </section>
  );
}

