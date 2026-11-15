import React from 'react';

export default function DoodleRays({ className = '', style = {}, flip = false }) {
  return (
    <svg
      className={`doodle-rays ${className}`}
      style={{
        width: '36px',
        height: '32px',
        display: 'inline-block',
        transform: flip ? 'scaleX(-1)' : 'none',
        verticalAlign: 'middle',
        ...style,
      }}
      viewBox="0 0 40 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 30C12 24 18 16 22 4"
        stroke="#FFD21C"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M18 34C24 26 30 18 36 12"
        stroke="#FFD21C"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M2 18C10 16 22 13 32 6"
        stroke="#FFD21C"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
