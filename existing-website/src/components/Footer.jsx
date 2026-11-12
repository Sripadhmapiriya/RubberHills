import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer>
      <img
        className="flogo"
        src="/assets/logo.jpg"
        alt="Rubber Hills Kindergarten logo"
      />
      <SocialLinks className="footer-social" />
      <p style={{ margin: '0.4rem 0 0', color: 'inherit' }}>
        Rubber Hills Kindergarten, part of the Rubber Hills Group · Open Monday to Friday, 9:05 am – 3:20 pm
      </p>
    </footer>
  );
}
