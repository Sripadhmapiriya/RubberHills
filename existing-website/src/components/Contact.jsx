import React from 'react';
import SocialLinks from './SocialLinks';

export default function Contact() {
  return (
    <section id="contact" className="fade-in-section">
      <h2>Contact</h2>
      <div className="grid">
        <div className="card c1">
          <h3>Address</h3>
          <p>RH Group, Punnathanam, Manjalumoodu – Malaicode Road</p>
        </div>
        <div className="card c2">
          <h3>Email</h3>
          <p>
            <a href="mailto:rubberhillskindergarten@gmail.com">
              rubberhillskindergarten@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <SocialLinks />
      </div>
    </section>
  );
}
