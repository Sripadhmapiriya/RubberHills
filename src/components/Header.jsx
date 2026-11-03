import React from 'react';

export default function Header() {
  return (
    <header>
      <a className="logo" href="#top">
        <img src="/assets/logo.jpg" alt="Rubber Hills Kindergarten logo" />
        Rubber Hills
      </a>
      <nav aria-label="Main">
        <a href="#campus">Campus</a>
        <a href="#about">About</a>
        <a href="#staff">Staff</a>
        <a href="#students">Students</a>
        <a href="#learn">Learning</a>
        <a href="#creche">Creche</a>
        <a href="#classes">Classes</a>
        <a href="#day">A day here</a>
        <a href="#enrol">Enrol</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
