import React from 'react';

export default function HillsDivider() {
  return (
    <svg
      className="hills"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 80 C150 20 300 20 450 70 S750 120 900 60 S1100 20 1200 50 V120 H0Z"
        style={{ fill: 'var(--bg)' }}
      />
      <path
        d="M0 100 C200 60 350 60 500 95 S850 125 1000 85 S1150 70 1200 90 V120 H0Z"
        style={{ fill: 'var(--leaf)', opacity: 0.35 }}
      />
    </svg>
  );
}

