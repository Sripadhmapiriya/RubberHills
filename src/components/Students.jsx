import React from 'react';

export default function Students() {
  return (
    <section id="students" className="fade-in-section">
      <h2>Our students</h2>
      <p className="lead">
        Children from 2.5 to 6 years, learning, playing and growing together.
      </p>
      <div className="grid">
        <div className="card c1">
          <h3>Creche</h3>
          <p>2.5–3 years</p>
        </div>
        <div className="card c2">
          <h3>Nursery</h3>
          <p>3–4 years</p>
        </div>
        <div className="card c3">
          <h3>Lower KG</h3>
          <p>4–5 years</p>
        </div>
        <div className="card c4">
          <h3>Upper KG</h3>
          <p>5–6 years</p>
        </div>
      </div>
    </section>
  );
}

