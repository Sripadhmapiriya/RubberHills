import React from 'react';

export default function DoodleUnderline({ className = '', style = {} }) {
  return (
    <svg
      className={`doodle-underline ${className}`}
      style={{
        display: 'block',
        width: '100%',
        maxHeight: '20px',
        overflow: 'visible',
        ...style,
      }}
      viewBox="0 0 280 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 13C50 6 120 4 277 15"
        stroke="#FFD21C"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 17C78 11 165 9 255 17"
        stroke="#FFD21C"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
    </svg>
  );
}
